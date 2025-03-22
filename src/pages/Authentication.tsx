
import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthContainer from "@/components/auth/AuthContainer";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialLogin from "@/components/auth/SocialLogin";
import { Separator } from "@/components/ui/separator";

const Authentication = () => {
  const [searchParams] = useSearchParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const [isLoginView, setIsLoginView] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const redirectTo = searchParams.get("redirect") || "/";
  
  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate(redirectTo);
    }
  }, [isAuthenticated, navigate, redirectTo]);
  
  const toggleView = () => {
    setIsLoginView(!isLoginView);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="app-container max-w-md mx-auto">
          <AuthContainer 
            title={isLoginView ? "Sign In" : "Create Account"}
            description={isLoginView 
              ? "Enter your email and password to sign in to your account" 
              : "Fill out the form below to create your account"
            }
            error={error}
            footer={
              <p className="text-sm text-muted-foreground">
                {isLoginView ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleView}
                  className="ml-1 text-primary hover:text-primary/80 font-medium"
                >
                  {isLoginView ? "Sign Up" : "Sign In"}
                </button>
              </p>
            }
          >
            {isLoginView ? (
              <LoginForm 
                redirectTo={redirectTo} 
                onError={handleError} 
              />
            ) : (
              <SignupForm 
                onError={handleError} 
              />
            )}
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              
              <SocialLogin onError={handleError} redirectTo={redirectTo} />
            </div>
          </AuthContainer>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Authentication;
