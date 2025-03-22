
import React from "react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface InventoryErrorAlertProps {
  errorMessage: string;
  unavailableItems: Array<{id: string, name: string, requested: number, available: number}>;
}

const InventoryErrorAlert: React.FC<InventoryErrorAlertProps> = ({ errorMessage, unavailableItems }) => {
  const navigate = useNavigate();
  
  return (
    <Alert variant="destructive" className="mb-6">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>
        <div className="ml-2">
          <p className="font-medium">{errorMessage}</p>
          {unavailableItems.length > 0 && (
            <ul className="mt-2 text-sm list-disc pl-5">
              {unavailableItems.map(item => (
                <li key={item.id}>
                  {item.name}: Requested {item.requested}, only {item.available} available
                </li>
              ))}
            </ul>
          )}
          <Button 
            variant="outline"
            size="sm"
            onClick={() => navigate("/cart")}
            className="mt-2"
          >
            Return to Cart
          </Button>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default InventoryErrorAlert;
