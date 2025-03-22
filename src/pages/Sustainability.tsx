
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Leaf, 
  Recycle, 
  Globe, 
  Factory, 
  Truck, 
  PackageOpen,
  MoveRight
} from "lucide-react";

const Sustainability = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Our Sustainability Journey</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe that beautiful, functional products shouldn't come at the expense of our planet. 
              Here's how we're working to create a more sustainable future.
            </p>
          </div>
          
          {/* Banner Image */}
          <div className="mb-16 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1533038590840-1cde6e668a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Sustainable materials" 
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          {/* Our Commitment */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground mb-4">
                  At minimal., sustainability isn't just a buzzword—it's a core value that guides everything we do.
                  We're committed to minimizing our environmental impact while maximizing the positive influence
                  our products have on your daily life.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our sustainability journey is ongoing. We continuously work to improve our practices,
                  embrace innovation, and set ambitious goals for reducing our carbon footprint.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Leaf className="h-5 w-5" />
                  <span className="font-medium">Read our 2023 Sustainability Report</span>
                  <MoveRight className="h-4 w-4" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Recycle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">87%</h3>
                  <p className="text-sm text-muted-foreground">Recycled materials in our products</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Factory className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">100%</h3>
                  <p className="text-sm text-muted-foreground">Renewable energy in our facilities</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <PackageOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">95%</h3>
                  <p className="text-sm text-muted-foreground">Plastic-free packaging</p>
                </div>
                <div className="bg-secondary/10 p-6 rounded-lg">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">5,000+</h3>
                  <p className="text-sm text-muted-foreground">Trees planted in 2023</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Initiatives */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Sustainability Initiatives</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-border rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1605600659873-d808a13e4d2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainable Materials" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Sustainable Materials</h3>
                  <p className="text-muted-foreground mb-4">
                    We prioritize recycled, renewable, and responsibly sourced materials in all our products.
                    From recycled metals to FSC-certified wood, we carefully select materials that minimize
                    environmental impact.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Recycled aluminum and stainless steel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Organic cotton and natural fibers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Biodegradable alternatives to plastic</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Eco-Friendly Packaging" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Eco-Friendly Packaging</h3>
                  <p className="text-muted-foreground mb-4">
                    We've redesigned our packaging to eliminate single-use plastics and minimize waste.
                    Our boxes, mailers, and protective materials are recyclable, compostable, or made
                    from post-consumer recycled content.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <PackageOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>100% recyclable shipping boxes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PackageOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Compostable protective materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <PackageOpen className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Soy-based inks for printing</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white border border-border rounded-lg overflow-hidden">
                <div className="aspect-video">
                  <img 
                    src="https://images.unsplash.com/photo-1550358864-518f202345b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Carbon Neutral Shipping" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">Carbon Neutral Shipping</h3>
                  <p className="text-muted-foreground mb-4">
                    We offset the carbon emissions from every shipment through investments in verified
                    carbon offset projects. We're also optimizing our logistics to reduce the distance
                    products travel to reach you.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Truck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Carbon offset for all deliveries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Regional distribution centers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Truck className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Consolidated shipping options</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Partners */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Sustainability Partners</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-6 bg-white border border-border rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/200x80/png?text=1%+For+The+Planet" 
                  alt="1% For The Planet" 
                  className="max-h-10"
                />
              </div>
              <div className="p-6 bg-white border border-border rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/200x80/png?text=Climate+Neutral" 
                  alt="Climate Neutral" 
                  className="max-h-10"
                />
              </div>
              <div className="p-6 bg-white border border-border rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/200x80/png?text=FSC+Certified" 
                  alt="FSC Certified" 
                  className="max-h-10"
                />
              </div>
              <div className="p-6 bg-white border border-border rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/200x80/png?text=B+Corporation" 
                  alt="B Corporation" 
                  className="max-h-10"
                />
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center p-8 bg-secondary/10 rounded-lg">
            <div className="max-w-xl mx-auto">
              <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Join Our Sustainability Journey</h3>
              <p className="text-muted-foreground mb-6">
                Learn how you can extend the life of your products, recycle old items, and participate
                in our sustainability initiatives.
              </p>
              <Button>Our Sustainability Guide</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sustainability;
