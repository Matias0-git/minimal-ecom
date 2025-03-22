
import React from "react";
import { CartItem } from "@/context/CartContext";

interface OrderSummaryProps {
  items: CartItem[];
  totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, totalPrice }) => {
  const estimatedTax = totalPrice * 0.1; // 10% tax for demo
  const shippingCost = totalPrice > 50 ? 0 : 5.99;
  const orderTotal = totalPrice + estimatedTax + shippingCost;

  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(totalPrice);
  
  const formattedTax = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(estimatedTax);
  
  const formattedShipping = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(shippingCost);
  
  const formattedOrderTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(orderTotal);

  return (
    <div className="bg-white border border-border rounded-lg p-6 sticky top-24">
      <h2 className="font-medium text-lg mb-4">Order Summary</h2>
      
      <div className="mb-4">
        <div className="text-sm text-muted-foreground mb-2">
          {items.length} {items.length === 1 ? 'item' : 'items'} in cart
        </div>
        {items.map(item => (
          <div 
            key={item.product.id} 
            className="flex justify-between items-center text-sm py-1"
          >
            <span>{item.quantity} × {item.product.name}</span>
            <span>${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="space-y-3 border-t border-border pt-4 mb-4">
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
      
      <div className="border-t border-border pt-4">
        <div className="flex justify-between font-medium text-lg">
          <span>Total</span>
          <span>{formattedOrderTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
