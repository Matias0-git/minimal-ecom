
import React from "react";
import { ArrowLeft, CheckCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/context/CartContext";

interface OrderReviewProps {
  items: CartItem[];
  shippingDetails: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
  };
  paymentDetails: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
  onPreviousStep: () => void;
  onPlaceOrder: () => void;
  isProcessing: boolean;
  setCurrentStep: (step: number) => void;
}

const OrderReview: React.FC<OrderReviewProps> = ({
  items,
  shippingDetails,
  paymentDetails,
  onPreviousStep,
  onPlaceOrder,
  isProcessing,
  setCurrentStep
}) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 animate-fadeIn">
      <h2 className="text-xl font-medium mb-6">Review Your Order</h2>
      
      <div className="space-y-6">
        {/* Shipping Information */}
        <div className="border-b border-border pb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Shipping Address</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setCurrentStep(1)}
              className="text-primary text-xs h-auto p-1"
            >
              Edit
            </Button>
          </div>
          <p className="text-sm">
            {shippingDetails.firstName} {shippingDetails.lastName}<br />
            {shippingDetails.address}<br />
            {shippingDetails.city}, {shippingDetails.state} {shippingDetails.zipCode}<br />
            {shippingDetails.country}<br />
            {shippingDetails.phone}
          </p>
        </div>
        
        {/* Payment Information */}
        <div className="border-b border-border pb-4">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-medium">Payment Method</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setCurrentStep(2)}
              className="text-primary text-xs h-auto p-1"
            >
              Edit
            </Button>
          </div>
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 mr-2 text-muted-foreground" />
            <span className="text-sm">
              •••• {paymentDetails.cardNumber.slice(-4)}
            </span>
          </div>
        </div>
        
        {/* Order Items */}
        <div>
          <h3 className="font-medium mb-4">Items in Your Order</h3>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.product.id} className="flex items-start">
                <div className="h-16 w-16 bg-secondary/20 rounded-md overflow-hidden mr-3">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="font-medium text-sm">{item.product.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    Qty: {item.quantity} × ${item.product.price.toFixed(2)}
                  </p>
                </div>
                <div className="text-sm font-medium">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="pt-6 flex justify-between">
        <Button
          variant="outline"
          onClick={onPreviousStep}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button 
          onClick={onPlaceOrder} 
          disabled={isProcessing}
          className="gap-2"
        >
          {isProcessing ? "Processing..." : "Place Order"}
          {!isProcessing && <CheckCircle className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  );
};

export default OrderReview;
