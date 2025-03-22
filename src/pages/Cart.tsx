
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import CartItem from "@/components/ui/CartItem";
import { ArrowLeft, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPrice);

  const estimatedTax = totalPrice * 0.1; // 10% tax for demo
  const formattedTax = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(estimatedTax);

  const shippingCost = totalPrice > 50 ? 0 : 5.99;
  const formattedShipping = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(shippingCost);

  const orderTotal = totalPrice + estimatedTax + shippingCost;
  const formattedOrderTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(orderTotal);

  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/checkout");
    } else {
      navigate("/auth?redirect=checkout");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-border rounded-lg">
                  <div className="p-6 border-b border-border">
                    <div className="flex justify-between items-center">
                      <h2 className="font-medium">
                        {totalItems} {totalItems === 1 ? 'Item' : 'Items'}
                      </h2>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={clearCart}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        Clear Cart
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {items.map((item) => (
                      <CartItem
                        key={item.product.id}
                        item={item}
                        onUpdateQuantity={updateQuantity}
                        onRemove={removeFromCart}
                      />
                    ))}
                  </div>
                  
                  <div className="p-6 border-t border-border">
                    <Link 
                      to="/products"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
                  <h2 className="font-medium text-lg mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>{formattedTotalPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>{shippingCost === 0 ? "Free" : formattedShipping}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Estimated Tax</span>
                      <span>{formattedTax}</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between font-medium text-lg">
                      <span>Total</span>
                      <span>{formattedOrderTotal}</span>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full gap-2 mb-4"
                    size="lg"
                    onClick={handleCheckout}
                  >
                    Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Shipping, taxes, and discounts calculated at checkout.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-block p-6 rounded-full bg-secondary mb-6">
                <ShoppingBag className="h-10 w-10 text-primary" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild size="lg">
                <Link to="/products">Start Shopping</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
