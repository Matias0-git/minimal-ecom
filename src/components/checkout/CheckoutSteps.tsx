
import React from "react";

interface CheckoutStepsProps {
  currentStep: number;
}

const CheckoutSteps: React.FC<CheckoutStepsProps> = ({ currentStep }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            currentStep >= 1 ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
          }`}>
            1
          </div>
          <div className={`h-1 w-16 ${
            currentStep >= 2 ? "bg-primary" : "bg-secondary" 
          }`}></div>
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            currentStep >= 2 ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
          }`}>
            2
          </div>
          <div className={`h-1 w-16 ${
            currentStep >= 3 ? "bg-primary" : "bg-secondary" 
          }`}></div>
          <div className={`rounded-full h-10 w-10 flex items-center justify-center ${
            currentStep >= 3 ? "bg-primary text-white" : "bg-secondary text-secondary-foreground"
          }`}>
            3
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex text-sm">
          <span className={`w-16 text-center ${currentStep === 1 ? "font-medium" : "text-muted-foreground"}`}>
            Shipping
          </span>
          <span className="w-16"></span>
          <span className={`w-16 text-center ${currentStep === 2 ? "font-medium" : "text-muted-foreground"}`}>
            Payment
          </span>
          <span className="w-16"></span>
          <span className={`w-16 text-center ${currentStep === 3 ? "font-medium" : "text-muted-foreground"}`}>
            Review
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSteps;
