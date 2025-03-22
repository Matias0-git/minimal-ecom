
import React from "react";
import { ArrowLeft, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InventoryErrorAlert from "./InventoryErrorAlert";

interface PaymentFormProps {
  paymentDetails: {
    cardName: string;
    cardNumber: string;
    expiry: string;
    cvc: string;
  };
  onPaymentInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPreviousStep: () => void;
  onSubmit: (e: React.FormEvent) => void;
  inventoryError: string | null;
  unavailableItems: Array<{id: string, name: string, requested: number, available: number}>;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  paymentDetails,
  onPaymentInputChange,
  onPreviousStep,
  onSubmit,
  inventoryError,
  unavailableItems
}) => {
  return (
    <div className="bg-white border border-border rounded-lg p-6 animate-fadeIn">
      <h2 className="text-xl font-medium mb-6">Payment Information</h2>
      
      {inventoryError && (
        <InventoryErrorAlert 
          errorMessage={inventoryError} 
          unavailableItems={unavailableItems} 
        />
      )}

      <div className="flex items-center mb-6 p-3 bg-secondary rounded-lg">
        <ShieldCheck className="h-5 w-5 text-primary mr-2" />
        <span className="text-sm">Your payment information is encrypted and secure.</span>
      </div>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="cardName">Name on Card</Label>
          <Input
            id="cardName"
            name="cardName"
            value={paymentDetails.cardName}
            onChange={onPaymentInputChange}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="cardNumber">Card Number</Label>
          <div className="relative">
            <Input
              id="cardNumber"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={onPaymentInputChange}
              placeholder="0000 0000 0000 0000"
              required
              maxLength={19}
            />
            <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="expiry">Expiry Date</Label>
            <Input
              id="expiry"
              name="expiry"
              value={paymentDetails.expiry}
              onChange={onPaymentInputChange}
              placeholder="MM/YY"
              required
              maxLength={5}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="cvc">CVC</Label>
            <Input
              id="cvc"
              name="cvc"
              type="text"
              value={paymentDetails.cvc}
              onChange={onPaymentInputChange}
              placeholder="123"
              required
              maxLength={3}
            />
          </div>
        </div>
        
        <div className="pt-4 flex justify-between">
          <Button
            variant="outline"
            type="button"
            onClick={onPreviousStep}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button 
            type="submit" 
            className="gap-2"
            disabled={!!inventoryError}
          >
            Review Order
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
