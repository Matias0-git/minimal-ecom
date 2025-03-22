
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import AvatarUpload from "@/components/profile/AvatarUpload";
import ProfileForm from "@/components/profile/ProfileForm";
import { updateUserProfile, fetchUserProfile } from "@/utils/profileUtils";
import { Shield, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth();
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState<string>("");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/auth?redirect=/profile");
    }
  }, [isAuthenticated, isLoading, navigate]);
  
  // Load user profile data
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      
      // Fetch user profile from profiles table
      if (user.id) {
        fetchUserProfile(user.id)
          .then(profile => {
            if (profile.avatarUrl) {
              setAvatarUrl(profile.avatarUrl);
            }
            if (profile.bio) {
              setBio(profile.bio);
            }
          });
      }
    }
  }, [user]);
  
  const handleProfileUpdate = async () => {
    try {
      setError(null);
      setSaving(true);
      
      if (!user?.id) {
        throw new Error("User not found");
      }
      
      await updateUserProfile(user.id, name, avatarUrl, bio);
      toast.success("Profile updated successfully");
    } catch (error: any) {
      setError("Error updating profile: " + error.message);
    } finally {
      setSaving(false);
    }
  };
  
  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error: any) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out. Please try again.");
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-20 w-20 bg-muted rounded-full mb-4"></div>
          <div className="h-6 w-40 bg-muted rounded mb-3"></div>
          <div className="h-4 w-24 bg-muted rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container max-w-lg mx-auto">
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground">
              <Shield className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Your Personal Profile</span>
            </div>
          </div>
          
          <Card className="shadow-lg border border-border rounded-xl overflow-hidden animate-slideUp">
            <div className="h-16 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="space-y-1 pt-8">
              <div className="flex justify-between items-center">
                <CardTitle className="text-2xl font-bold">
                  Your Profile
                </CardTitle>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleSignOut}
                  className="ml-auto text-sm border border-border hover:bg-destructive hover:text-destructive-foreground transition-colors"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </div>
              <CardDescription>
                Update your account information and avatar
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {user && (
                <>
                  <AvatarUpload 
                    userId={user.id}
                    avatarUrl={avatarUrl}
                    name={name}
                    onAvatarChange={setAvatarUrl}
                  />
                  
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
                  
                  <ProfileForm
                    name={name}
                    email={email}
                    bio={bio}
                    onNameChange={setName}
                    onBioChange={setBio}
                    onSave={handleProfileUpdate}
                    isSaving={saving}
                    error={error}
                  />
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
