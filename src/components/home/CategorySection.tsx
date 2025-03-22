
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/products";

// Category images mapping
const categoryImages = {
  electronics: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  accessories: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  home: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="app-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of premium products across various categories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.filter(c => c.id !== "all").map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative bg-white h-60 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              <img
                src={categoryImages[category.id as keyof typeof categoryImages] || `https://source.unsplash.com/random/800x600?${category.id}`}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <h3 className="text-2xl font-bold mb-3">{category.name}</h3>
                <span className="inline-flex items-center text-sm font-medium border-b border-white/50 pb-1 transition-all duration-300 group-hover:border-white">
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
