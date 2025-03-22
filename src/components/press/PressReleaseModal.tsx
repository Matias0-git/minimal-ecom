
import React from "react";
import { 
  Sheet,
  SheetContent, 
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export type PressReleaseType = {
  date: string;
  title: string;
  content: string;
  image: string;
};

interface PressReleaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  pressRelease: PressReleaseType | null;
}

const PressReleaseModal = ({ isOpen, onClose, pressRelease }: PressReleaseModalProps) => {
  if (!pressRelease) return null;
  
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-xl md:max-w-2xl overflow-y-auto">
        <SheetHeader className="mb-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="absolute left-4 top-4"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <SheetTitle className="text-2xl font-bold mt-10">{pressRelease.title}</SheetTitle>
          <SheetDescription className="text-sm">{pressRelease.date}</SheetDescription>
        </SheetHeader>
        
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <img 
              src={pressRelease.image} 
              alt={pressRelease.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div className="space-y-4">
            {pressRelease.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground">{paragraph}</p>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default PressReleaseModal;
