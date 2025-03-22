
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

const FeaturedProductsSection = () => {
  const featuredProducts = getFeaturedProducts();
  
  return (
    <section className="py-16">
      <div className="app-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most popular items, hand-selected for their exceptional design and quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index === 0}
              className={`animate-fadeIn animation-delay-${index * 200}`}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
