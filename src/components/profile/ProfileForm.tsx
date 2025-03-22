
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, Save } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";

interface ProfileFormProps {
  name: string;
  email: string;
  onNameChange: (name: string) => void;
  onSave: () => Promise<void>;
  isSaving: boolean;
  error: string | null;
  bio?: string;
  onBioChange?: (bio: string) => void;
}

const ProfileForm = ({ 
  name, 
  email, 
  onNameChange, 
  onSave, 
  isSaving, 
  error,
  bio,
  onBioChange
}: ProfileFormProps) => {
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSave();
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert variant="destructive" className="animate-fadeIn">
          <AlertCircle className="h-4 w-4 mr-2" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {/* Name Field */}
      <div className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
        <Label htmlFor="name" className="text-sm font-medium">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
          className="border-input focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      
      {/* Email Field (read only) */}
      <div className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={email}
          readOnly
          disabled
          className="bg-muted opacity-80"
        />
        <p className="text-xs text-muted-foreground italic">
          Email cannot be changed after registration
        </p>
      </div>
      
      {/* Bio Field (optional) */}
      {onBioChange && (
        <div className="space-y-2 transition-all duration-200 hover:translate-y-[-2px]">
          <Label htmlFor="bio" className="text-sm font-medium">Bio</Label>
          <Textarea
            id="bio"
            value={bio || ""}
            onChange={(e) => onBioChange(e.target.value)}
            placeholder="Tell us a bit about yourself"
            className="border-input focus:border-primary focus:ring-1 focus:ring-primary min-h-[100px]"
          />
        </div>
      )}
      
      <Button
        type="submit"
        className="w-full mt-8 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:shadow-md hover:translate-y-[-2px]"
        disabled={isSaving}
      >
        <Save className="mr-2 h-4 w-4" />
        {isSaving ? "Saving..." : "Save Changes"}
      </Button>
    </form>
  );
};

export default ProfileForm;
