
import React, { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Camera, Trash2 } from "lucide-react";
import { uploadAvatar } from "@/utils/profileUtils";

interface AvatarUploadProps {
  userId: string;
  avatarUrl: string | null;
  name: string;
  onAvatarChange: (url: string | null) => void;
}

const AvatarUpload = ({ userId, avatarUrl, name, onAvatarChange }: AvatarUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setError(null);
      
      if (!event.target.files || event.target.files.length === 0) {
        return;
      }
      
      const file = event.target.files[0];
      setUploading(true);
      
      // Use the utility function to upload the avatar
      const publicUrl = await uploadAvatar(userId, file);
      
      // Update avatar URL in state
      onAvatarChange(publicUrl);
      
      toast.success("Avatar uploaded successfully!");
    } catch (error: any) {
      console.error("Upload error:", error);
      setError("Error uploading avatar: " + error.message);
      toast.error("Failed to upload avatar");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4 mr-2" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="flex flex-col items-center space-y-5">
        <div className="relative group">
          <Avatar className="h-28 w-28 border-4 border-white shadow-lg transition-all duration-300 group-hover:shadow-xl">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
            ) : (
              <AvatarFallback className="text-2xl bg-gradient-to-br from-primary to-accent text-white">
                {name ? name.charAt(0).toUpperCase() : "U"}
              </AvatarFallback>
            )}
          </Avatar>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 rounded-full opacity-0 transition-all duration-300 group-hover:bg-opacity-30 group-hover:opacity-100">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => document.getElementById('avatar-upload')?.click()}
              disabled={uploading}
              className="h-10 w-10 rounded-full bg-white bg-opacity-90 text-gray-800"
            >
              <Camera className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => document.getElementById('avatar-upload')?.click()}
            disabled={uploading}
            className="transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            {uploading ? "Uploading..." : "Change Avatar"}
          </Button>
          
          {avatarUrl && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => onAvatarChange(null)}
              className="transition-all duration-200 hover:bg-red-50 hover:text-red-500 hover:border-red-200"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              Remove
            </Button>
          )}
          
          <input
            id="avatar-upload"
            type="file"
            accept="image/*"
            onChange={handleAvatarUpload}
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default AvatarUpload;
