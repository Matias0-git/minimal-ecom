
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { toast } from "sonner";
import { processOrder, checkInventory } from "@/lib/stripe";
import CheckoutSteps from "@/components/checkout/CheckoutSteps";
import ShippingForm from "@/components/checkout/ShippingForm";
import PaymentForm from "@/components/checkout/PaymentForm";
import OrderReview from "@/components/checkout/OrderReview";
import OrderSummary from "@/components/checkout/OrderSummary";

const CheckoutPage = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [currentStep, setCurrentStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inventoryError, setInventoryError] = useState<string | null>(null);
  const [unavailableItems, setUnavailableItems] = useState<Array<{id: string, name: string, requested: number, available: number}>>([]);
  
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    phone: ""
  });
  
  const [paymentDetails, setPaymentDetails] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  // Check inventory when entering payment step
  useEffect(() => {
    if (currentStep === 2) {
      checkProductInventory();
    }
  }, [currentStep]);

  const checkProductInventory = async () => {
    try {
      setInventoryError(null);
      setUnavailableItems([]);
      
      const orderItems = items.map(item => ({
        id: item.product.id,
        quantity: item.quantity
      }));
      
      const inventoryCheck = await checkInventory(orderItems);
      
      if (!inventoryCheck.available) {
        setInventoryError("Some items in your cart are out of stock or have insufficient quantity.");
        setUnavailableItems(inventoryCheck.insufficientItems);
      }
    } catch (error: any) {
      setInventoryError(`Failed to check inventory: ${error.message}`);
    }
  };

  const handleShippingInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Add formatting for card number and expiry
    if (name === "cardNumber") {
      const formattedValue = value
        .replace(/\s/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
        .slice(0, 19);
      setPaymentDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === "expiry") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(.{2})/, "$1/")
        .slice(0, 5);
      setPaymentDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else if (name === "cvc") {
      const formattedValue = value.replace(/\D/g, "").slice(0, 3);
      setPaymentDetails(prev => ({ ...prev, [name]: formattedValue }));
    } else {
      setPaymentDetails(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate shipping details
    if (Object.values(shippingDetails).some(value => value === "")) {
      toast.error("Please fill in all shipping fields");
      return;
    }
    handleNextStep();
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (Object.values(paymentDetails).some(value => value === "")) {
      toast.error("Please fill in all payment fields");
      return;
    }
    
    handleNextStep();
  };

  const handlePlaceOrder = async () => {
    if (!isAuthenticated) {
      navigate("/auth?redirect=checkout");
      return;
    }
    
    try {
      setIsProcessing(true);
      
      // Check inventory one more time before finalizing
      const orderItems = items.map(item => ({
        id: item.product.id,
        quantity: item.quantity
      }));
      
      // Process the order
      const result = await processOrder(
        orderItems,
        shippingDetails,
        "pm_card_visa" // Mock payment method ID
      );
      
      if (result.success) {
        clearCart();
        navigate("/success", { state: { orderId: result.orderId } });
      }
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error(error.message || "There was an error processing your payment. Please try again.");
      
      // If it's an inventory error, go back to cart
      if (error.message.includes("no longer available")) {
        navigate("/cart");
      }
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Checkout Steps */}
          <CheckoutSteps currentStep={currentStep} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Checkout Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <ShippingForm 
                  shippingDetails={shippingDetails}
                  onShippingInputChange={handleShippingInputChange}
                  onSubmit={handleShippingSubmit}
                />
              )}
              
              {/* Step 2: Payment Information */}
              {currentStep === 2 && (
                <PaymentForm 
                  paymentDetails={paymentDetails}
                  onPaymentInputChange={handlePaymentInputChange}
                  onPreviousStep={handlePreviousStep}
                  onSubmit={handlePaymentSubmit}
                  inventoryError={inventoryError}
                  unavailableItems={unavailableItems}
                />
              )}
              
              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <OrderReview 
                  items={items}
                  shippingDetails={shippingDetails}
                  paymentDetails={paymentDetails}
                  onPreviousStep={handlePreviousStep}
                  onPlaceOrder={handlePlaceOrder}
                  isProcessing={isProcessing}
                  setCurrentStep={setCurrentStep}
                />
              )}
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary items={items} totalPrice={totalPrice} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
