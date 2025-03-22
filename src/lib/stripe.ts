
// This is a mock implementation for the demo
// In a real app, you would use the actual Stripe SDK
// and communicate with your backend for payment processing

import { supabase } from "@/integrations/supabase/client";

interface PaymentIntent {
  id: string;
  client_secret: string;
  amount: number;
  status: 'requires_payment_method' | 'requires_confirmation' | 'succeeded';
}

interface InventoryCheck {
  available: boolean;
  insufficientItems: Array<{id: string, name: string, requested: number, available: number}>;
}

export const createPaymentIntent = async (amount: number): Promise<PaymentIntent> => {
  // Simulate API call to create payment intent
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    id: `pi_${Math.random().toString(36).substring(2, 15)}`,
    client_secret: `pi_secret_${Math.random().toString(36).substring(2, 15)}`,
    amount,
    status: 'requires_payment_method'
  };
};

export const confirmPayment = async (paymentIntentId: string, paymentMethodId: string): Promise<{ success: boolean }> => {
  // Simulate API call to confirm payment
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real implementation, this would communicate with Stripe API
  // For demo, we'll simulate success
  return { success: true };
};

export const checkInventory = async (
  items: Array<{ id: string; quantity: number }>
): Promise<InventoryCheck> => {
  try {
    const insufficientItems: Array<{id: string, name: string, requested: number, available: number}> = [];
    
    // Check each item against inventory
    for (const item of items) {
      const { data, error } = await supabase
        .from('product_inventory')
        .select('name, quantity')
        .eq('product_id', item.id)
        .single();
      
      if (error) {
        console.error('Error checking inventory:', error);
        throw new Error(`Could not verify inventory for item ${item.id}`);
      }
      
      if (data && data.quantity < item.quantity) {
        insufficientItems.push({
          id: item.id,
          name: data.name,
          requested: item.quantity,
          available: data.quantity
        });
      }
    }
    
    return {
      available: insufficientItems.length === 0,
      insufficientItems
    };
  } catch (error) {
    console.error('Inventory check failed:', error);
    throw new Error('Could not verify inventory availability');
  }
};

export const processOrder = async (
  items: Array<{ id: string; quantity: number }>,
  shippingDetails: any,
  paymentMethodId: string
): Promise<{ success: boolean; orderId: string }> => {
  try {
    // 1. Check inventory first
    const inventoryCheck = await checkInventory(items);
    
    if (!inventoryCheck.available) {
      throw new Error('Some items in your cart are no longer available in the requested quantity.');
    }
    
    // 2. Get the current user id
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      throw new Error('You must be logged in to complete this purchase');
    }
    
    // 3. Calculate total amount
    const totalAmount = items.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product ? product.price * item.quantity : 0);
    }, 0);
    
    // 4. Create an order in the database
    const { data: orderData, error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: user.id,
        total_amount: totalAmount,
        shipping_address: shippingDetails,
        payment_intent_id: `pi_${Math.random().toString(36).substring(2, 15)}`, // In real app, use actual Stripe payment intent ID
      })
      .select('id')
      .single();
    
    if (orderError) {
      console.error('Error creating order:', orderError);
      throw new Error('Failed to create your order');
    }
    
    const orderId = orderData.id;
    
    // 5. Create order items
    const orderItems = items.map(item => {
      const product = getProductById(item.id);
      return {
        order_id: orderId,
        product_id: item.id,
        quantity: item.quantity,
        price: product ? product.price : 0
      };
    });
    
    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);
    
    if (itemsError) {
      console.error('Error creating order items:', itemsError);
      throw new Error('Failed to process your order items');
    }
    
    // 6. Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // 7. Update order status to complete
    const { error: updateError } = await supabase
      .from('orders')
      .update({ status: 'completed' })
      .eq('id', orderId);
    
    if (updateError) {
      console.error('Error updating order status:', updateError);
      throw new Error('Payment was successful but order status could not be updated');
    }
    
    return {
      success: true,
      orderId
    };
  } catch (error: any) {
    console.error('Order processing failed:', error);
    throw error;
  }
};

// Helper function to get product details
const getProductById = (id: string) => {
  // This function could fetch from the database in a real implementation
  // For now, we'll use the imported function from data/products
  const { getProductById } = require('../data/products');
  return getProductById(id);
};
