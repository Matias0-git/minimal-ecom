
import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "@/context/CartContext";
import QuantitySelector from "./QuantitySelector";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ 
  item, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const { product, quantity } = item;
  
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);
  
  const formattedSubtotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price * quantity);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center py-4 border-b border-border animate-fadeIn">
      <div className="flex-shrink-0 w-20 h-20 bg-secondary/20 rounded-md overflow-hidden mr-4 mb-4 sm:mb-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{formattedPrice} each</p>
        
        <div className="flex flex-col sm:flex-row sm:items-center">
          <QuantitySelector 
            quantity={quantity} 
            onUpdate={(newQuantity) => onUpdateQuantity(product.id, newQuantity)}
            size="sm"
          />
          
          <div className="mt-2 sm:mt-0 sm:ml-auto font-medium">
            {formattedSubtotal}
          </div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-2 text-muted-foreground hover:text-destructive transition-colors"
        onClick={() => onRemove(product.id)}
        aria-label="Remove item"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
