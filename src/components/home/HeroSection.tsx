
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideUp">
            <div className="inline-block py-1 px-3 text-xs font-medium bg-secondary text-primary rounded-full animation-delay-200">
              Premium Quality
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Minimal design, <br />
              maximum impact.
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              Elevate your everyday with thoughtfully designed products that blend 
              form, function, and simplicity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button asChild size="lg" className="gap-2">
                <Link to="/products">
                  Shop Now
                  <ShoppingBag className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/products?category=featured">
                  Explore Featured
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden animate-fadeIn">
            <img
              src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Minimalist living room with modern accessories"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
