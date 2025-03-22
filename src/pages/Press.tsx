
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight, Newspaper, Mail } from "lucide-react";
import PressReleaseModal, { PressReleaseType } from "@/components/press/PressReleaseModal";
import { pressReleases } from "@/data/pressReleases";

const PressRelease = ({ 
  date, 
  title, 
  excerpt, 
  image,
  onClick
}: { 
  date: string; 
  title: string; 
  excerpt: string; 
  image: string;
  onClick: () => void;
}) => {
  return (
    <div className="border border-border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-video">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground mb-2">{date}</p>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{excerpt}</p>
        <Button variant="outline" className="gap-2" onClick={onClick}>
          Read More
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Press = () => {
  const [selectedPress, setSelectedPress] = useState<PressReleaseType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPressRelease = (press: PressReleaseType) => {
    setSelectedPress(press);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Press</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Keep up with the latest news, press releases, and media coverage about minimal.
            </p>
          </div>
          
          {/* Featured Press */}
          <div className="bg-secondary/10 rounded-lg p-8 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  Featured
                </span>
                <h2 className="text-2xl font-bold mb-4">minimal. Announces New Sustainable Product Line</h2>
                <p className="text-muted-foreground mb-4">
                  We're excited to announce our new line of sustainable products made from recycled materials.
                  This initiative marks a significant step in our commitment to environmental responsibility.
                </p>
                <p className="text-sm text-muted-foreground mb-6">May 15, 2023</p>
                <Button 
                  className="gap-2"
                  onClick={() => openPressRelease(pressReleases[0])}
                >
                  Read Full Release
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={pressReleases[0].image}
                  alt="Sustainable product announcement" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Press Releases */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Press Releases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pressReleases.slice(1).map((press, index) => (
                <PressRelease 
                  key={index}
                  date={press.date}
                  title={press.title}
                  excerpt={press.content.split('\n\n')[0]}
                  image={press.image}
                  onClick={() => openPressRelease(press)}
                />
              ))}
            </div>
          </div>
          
          {/* Media Assets */}
          <div className="mb-16 bg-secondary/10 rounded-lg p-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Media Assets</h2>
                <p className="text-muted-foreground">Download our logo, product images, and media kit.</p>
              </div>
              <Button variant="outline" className="gap-2 whitespace-nowrap">
                <Download className="h-4 w-4" />
                Download Media Kit
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="aspect-square bg-secondary/20 rounded flex items-center justify-center mb-2">
                  <img 
                    src="https://placehold.co/400x400/png?text=Logo+Dark" 
                    alt="Logo Dark" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Logo (Dark)</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-border">
                <div className="aspect-square bg-gray-800 rounded flex items-center justify-center mb-2">
                  <img 
                    src="https://placehold.co/400x400/png?text=Logo+Light" 
                    alt="Logo Light" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <p className="text-sm font-medium text-white">Logo (Light)</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="aspect-square bg-secondary/20 rounded flex items-center justify-center mb-2">
                  <img 
                    src="https://placehold.co/400x400/png?text=Product+Photos" 
                    alt="Product Photos" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Product Photos</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-border">
                <div className="aspect-square bg-secondary/20 rounded flex items-center justify-center mb-2">
                  <img 
                    src="https://placehold.co/400x400/png?text=Brand+Guidelines" 
                    alt="Brand Guidelines" 
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>
                <p className="text-sm font-medium">Brand Guidelines</p>
              </div>
            </div>
          </div>
          
          {/* Media Contact */}
          <div className="text-center p-8 bg-secondary/10 rounded-lg">
            <div className="max-w-xl mx-auto">
              <Newspaper className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-medium mb-2">Media Contact</h3>
              <p className="text-muted-foreground mb-4">
                For press inquiries, interview requests, or additional information, please contact our PR team.
              </p>
              <a 
                href="mailto:press@minimal.com"
                className="inline-flex items-center text-lg font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                press@minimal.com
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <PressReleaseModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pressRelease={selectedPress}
      />
      
      <Footer />
    </div>
  );
};

export default Press;
