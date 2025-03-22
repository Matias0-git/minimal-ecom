
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { User, Users, Award, Target, Heart } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're on a mission to bring thoughtfully designed minimalist products to your everyday life.
            </p>
          </div>
          
          {/* Our Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2018, minimal. began with a simple idea: to create products that combine functionality, 
                sustainability, and beautiful design. What started as a small passion project has grown into a 
                beloved brand offering thoughtfully crafted items for modern living.
              </p>
              <p className="text-muted-foreground">
                Our team of designers and craftspeople work together to create items that enhance your everyday 
                experiences, focusing on quality materials and conscious manufacturing processes.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Our team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-secondary/10 p-8 rounded-lg">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Quality First</h3>
                <p className="text-muted-foreground">
                  We believe in creating products that last. Every item is crafted with premium materials 
                  and thoughtful design to ensure longevity and durability.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-8 rounded-lg">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Sustainable Practices</h3>
                <p className="text-muted-foreground">
                  We're committed to minimizing our environmental impact by using sustainable materials,
                  eco-friendly packaging, and ethical manufacturing processes.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-8 rounded-lg">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Customer Happiness</h3>
                <p className="text-muted-foreground">
                  We prioritize your satisfaction and strive to create a seamless shopping experience
                  with exceptional customer service and products you'll love.
                </p>
              </div>
            </div>
          </div>
          
          {/* Team */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square mb-4 rounded-full overflow-hidden mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="James Wilson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">James Wilson</h3>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square mb-4 rounded-full overflow-hidden mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Sarah Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground">Lead Designer</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square mb-4 rounded-full overflow-hidden mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Michael Rodriguez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Michael Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Product Development</p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square mb-4 rounded-full overflow-hidden mx-auto w-48">
                  <img 
                    src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Emma Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">Emma Johnson</h3>
                <p className="text-sm text-muted-foreground">Marketing Director</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
