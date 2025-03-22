
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ImageOff } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
  featured?: boolean;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  className,
  featured = false,
  style
}) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.price);

  return (
    <div 
      className={cn(
        "group relative bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md",
        featured ? "col-span-2 md:col-span-1" : "",
        className
      )}
      style={style}
    >
      <Link to={`/products/${product.id}`} className="block h-full">
        <div className="aspect-square w-full overflow-hidden bg-secondary/20">
          {!imageError ? (
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-secondary/30">
              <ImageOff className="h-12 w-12 text-muted-foreground" />
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </span>
          </div>
          <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="font-medium">{formattedPrice}</span>
            <Button
              size="sm"
              variant="outline"
              className="opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
