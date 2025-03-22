
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, ShoppingBag, Truck } from "lucide-react";
import QuantitySelector from "@/components/ui/QuantitySelector";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = id ? getProductById(id) : undefined;
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-32 pb-16">
          <div className="app-container text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to products
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="bg-secondary/10 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            
            {/* Product Details */}
            <div className="animate-slideUp">
              <div className="mb-2">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
                  {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="text-2xl font-medium mb-6">{formattedPrice}</div>
              
              <p className="text-muted-foreground mb-8">
                {product.description}
              </p>
              
              <div className="flex flex-col space-y-6">
                {/* Quantity Selector */}
                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <QuantitySelector
                    quantity={quantity}
                    onUpdate={setQuantity}
                    min={1}
                    max={10}
                  />
                </div>
                
                {/* Add to Cart Button */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="h-5 w-5" />
                    Add to Cart
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2"
                    onClick={() => toast.success("Added to wishlist")}
                  >
                    <Heart className="h-5 w-5" />
                    Wishlist
                  </Button>
                </div>
                
                {/* Shipping Info */}
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <h3 className="font-medium">Free Shipping</h3>
                      <p className="text-sm text-muted-foreground">
                        Free standard shipping on orders over $50. <br />
                        Estimated delivery: 3-5 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
