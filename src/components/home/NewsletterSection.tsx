
import React from "react";
import { Button } from "@/components/ui/button";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="app-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive updates on new arrivals, special offers, and design inspiration.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
            <Button className="whitespace-nowrap">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
