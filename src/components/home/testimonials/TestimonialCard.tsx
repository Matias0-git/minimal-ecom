
import React from "react";
import { TestimonialType } from "./types";

type TestimonialCardProps = {
  testimonial: TestimonialType;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, starIndex) => (
          <svg 
            key={starIndex} 
            className="w-5 h-5 text-yellow-500" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground mb-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-center mt-auto">
        <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-medium">{testimonial.name}</h4>
          <p className="text-xs text-muted-foreground">Verified Customer</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
