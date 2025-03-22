
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingBag } from "lucide-react";

interface LocationState {
  orderId?: string;
}

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  
  useEffect(() => {
    // If no order ID is present in the state, redirect to home
    if (!state?.orderId) {
      navigate("/");
    }
  }, [state, navigate]);

  if (!state?.orderId) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container max-w-2xl mx-auto">
          <div className="bg-white border border-border rounded-lg p-8 shadow-sm text-center animate-fadeIn">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 rounded-full p-4">
                <CheckCircle className="h-16 w-16 text-primary" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
            
            <p className="text-muted-foreground mb-6">
              Your order has been successfully placed and is being processed.
              We have sent a confirmation email with all the details.
            </p>
            
            <div className="bg-secondary/30 rounded-lg p-4 mb-8">
              <p className="text-sm font-medium">Order ID</p>
              <p className="text-lg">{state.orderId}</p>
            </div>
            
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                If you have any questions about your order, please contact our
                customer service team at <a href="mailto:support@minimal.com" className="text-primary">support@minimal.com</a>.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/">
                    Return to Home
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link to="/products">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Success;
