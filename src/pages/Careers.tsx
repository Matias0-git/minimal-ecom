
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, HandMetal, Heart, Coffee } from "lucide-react";

const JobListing = ({ title, department, location, type }: { 
  title: string; 
  department: string; 
  location: string;
  type: string;
}) => {
  return (
    <div className="border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-medium mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{department} • {location}</p>
        </div>
        <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
          {type}
        </span>
      </div>
      <Button variant="outline" className="w-full">View Position</Button>
    </div>
  );
};

const Careers = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building a team of passionate individuals who share our vision of creating products 
              that make everyday life better through minimalist design.
            </p>
          </div>
          
          {/* Team Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Our team working together" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Why Join Us */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Join minimal.</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="bg-secondary/10 p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                  <HandMetal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Meaningful Work</h3>
                <p className="text-muted-foreground text-sm">
                  Create products that positively impact people's lives and the environment.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Wellness Benefits</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive healthcare, wellness stipends, and generous PTO.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Flexible Work</h3>
                <p className="text-muted-foreground text-sm">
                  Hybrid work arrangements and flexible schedules to support work-life balance.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-6 rounded-lg text-center">
                <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4 mx-auto">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-medium mb-2">Growth Opportunities</h3>
                <p className="text-muted-foreground text-sm">
                  Professional development funds and clear paths for advancement.
                </p>
              </div>
            </div>
          </div>
          
          {/* Current Openings */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Current Openings</h2>
            <div className="grid grid-cols-1 gap-4">
              <JobListing 
                title="Senior Product Designer" 
                department="Design" 
                location="Remote"
                type="Full-time"
              />
              <JobListing 
                title="Marketing Specialist" 
                department="Marketing" 
                location="New York, NY"
                type="Full-time"
              />
              <JobListing 
                title="Customer Success Manager" 
                department="Customer Service" 
                location="Remote"
                type="Full-time"
              />
              <JobListing 
                title="Supply Chain Coordinator" 
                department="Operations" 
                location="San Francisco, CA"
                type="Full-time"
              />
              <JobListing 
                title="Social Media Content Creator" 
                department="Marketing" 
                location="Remote"
                type="Part-time"
              />
            </div>
          </div>
          
          {/* No Openings */}
          <div className="text-center p-8 bg-secondary/10 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Don't see the right fit?</h3>
            <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume, and 
              we'll keep you in mind for future opportunities.
            </p>
            <Button>Submit Your Resume</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
