
import React from "react";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onUpdate: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onUpdate,
  min = 1,
  max = 99,
  size = "md",
  className
}) => {
  const handleDecrement = () => {
    if (quantity > min) {
      onUpdate(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onUpdate(quantity + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      onUpdate(Math.max(min, Math.min(max, value)));
    }
  };
  
  const sizeClasses = {
    sm: {
      button: "h-7 w-7",
      icon: "h-3 w-3",
      input: "h-7 w-10 text-sm"
    },
    md: {
      button: "h-9 w-9",
      icon: "h-4 w-4",
      input: "h-9 w-12 text-base"
    },
    lg: {
      button: "h-11 w-11",
      icon: "h-5 w-5", 
      input: "h-11 w-14 text-lg"
    }
  };

  return (
    <div 
      className={cn(
        "flex items-center border border-input rounded-md overflow-hidden",
        className
      )}
    >
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-none border-r border-input",
          sizeClasses[size].button
        )}
        onClick={handleDecrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
      >
        <Minus className={sizeClasses[size].icon} />
      </Button>
      
      <input
        type="text"
        value={quantity}
        onChange={handleChange}
        className={cn(
          "focus:outline-none text-center bg-transparent",
          sizeClasses[size].input
        )}
        aria-label="Quantity"
      />
      
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className={cn(
          "rounded-none border-l border-input",
          sizeClasses[size].button
        )}
        onClick={handleIncrement}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <Plus className={sizeClasses[size].icon} />
      </Button>
    </div>
  );
};

export default QuantitySelector;
