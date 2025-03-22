
import React from "react";
import { useNavigate } from "react-router-dom";
import { Github, Mail, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

interface SocialLoginProps {
  onError: (error: string) => void;
  redirectTo: string;
}

const SocialLogin = ({ onError, redirectTo }: SocialLoginProps) => {
  const { loginWithGoogle, loginWithGithub, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      // Redirect will happen automatically after successful auth
    } catch (err: any) {
      onError(err.message || "Failed to sign in with Google");
      console.error("Google login error:", err);
    }
  };

  const handleGithubLogin = async () => {
    try {
      await loginWithGithub();
      // Redirect will happen automatically after successful auth
    } catch (err: any) {
      onError(err.message || "Failed to sign in with GitHub");
      console.error("GitHub login error:", err);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-3 mt-4">
      <Button
        variant="outline"
        type="button"
        onClick={handleGoogleLogin}
        disabled={isLoading}
        className="w-full"
      >
        <Chrome className="mr-2 h-4 w-4" />
        Google
      </Button>
      
      <Button
        variant="outline"
        type="button"
        onClick={handleGithubLogin}
        disabled={isLoading}
        className="w-full"
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
    </div>
  );
};

export default SocialLogin;
