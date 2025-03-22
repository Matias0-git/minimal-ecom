
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({ category: categoryParam });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Reset category filter when URL param changes
  useEffect(() => {
    setFilters(prev => ({ ...prev, category: categoryParam }));
  }, [categoryParam]);

  // Get products based on current filters
  const filteredProducts = getProductsByCategory(filters.category)
    .filter(product => 
      searchQuery.trim() === "" || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const handleCategoryChange = (categoryId: string) => {
    setSearchParams({ category: categoryId });
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Shop Our Products</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our curated collection of premium minimalist products.
            </p>
          </div>
          
          {/* Search & Filter Controls */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-input"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={filters.category === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryChange(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              className="md:hidden flex items-center gap-2"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          {/* Mobile Filters */}
          {isMobileFilterOpen && (
            <div className="mb-6 flex flex-wrap gap-2 animate-slideDown md:hidden">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={filters.category === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => {
                    handleCategoryChange(category.id);
                    setIsMobileFilterOpen(false);
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          )}
          
          {/* Results Count */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
            </p>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">No products found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button onClick={() => {
                setSearchQuery("");
                handleCategoryChange("all");
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
