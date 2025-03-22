
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

interface ShippingFormProps {
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
  onShippingInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ShippingForm: React.FC<ShippingFormProps> = ({ 
  shippingDetails, 
  onShippingInputChange, 
  onSubmit 
}) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-white border border-border rounded-lg p-6 animate-fadeIn">
      <h2 className="text-xl font-medium mb-6">Shipping Information</h2>
      
      <form onSubmit={onSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={shippingDetails.firstName}
              onChange={onShippingInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={shippingDetails.lastName}
              onChange={onShippingInputChange}
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Street Address</Label>
          <Input
            id="address"
            name="address"
            value={shippingDetails.address}
            onChange={onShippingInputChange}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input
              id="city"
              name="city"
              value={shippingDetails.city}
              onChange={onShippingInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              name="state"
              value={shippingDetails.state}
              onChange={onShippingInputChange}
              required
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="zipCode">Zip Code</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={shippingDetails.zipCode}
              onChange={onShippingInputChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={shippingDetails.phone}
              onChange={onShippingInputChange}
              required
            />
          </div>
        </div>
        
        <div className="pt-4 flex justify-between">
          <Button
            variant="outline"
            type="button"
            onClick={() => navigate("/cart")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Button>
          <Button type="submit" className="gap-2">
            Continue to Payment
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ShippingForm;
