
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface AuthContainerProps {
  title: string;
  description: string;
  error: string | null;
  children: React.ReactNode;
  footer: React.ReactNode;
}

const AuthContainer = ({ title, description, error, children, footer }: AuthContainerProps) => {
  return (
    <Card className="shadow-md border border-border animate-slideUp">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertCircle className="h-4 w-4 mr-2" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        
        {children}
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center w-full">
          {footer}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AuthContainer;
