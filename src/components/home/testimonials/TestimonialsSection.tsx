
import React from "react";
import TestimonialCarousel from "./TestimonialCarousel";
import { testimonials } from "./testimonialData";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="app-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about their experiences with our products.
          </p>
        </div>
        
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
