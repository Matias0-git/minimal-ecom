
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, User, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  const { isAuthenticated, user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="app-container py-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-medium tracking-tight transition-colors hover:text-primary"
        >
          minimal.
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname === "/" && "text-primary"
            )}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              location.pathname.includes("/products") && "text-primary"
            )}
          >
            Shop
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to={isAuthenticated ? "/profile" : "/auth"}>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-slideDown">
          <div className="app-container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={cn(
                "text-sm font-medium p-2 transition-colors hover:text-primary",
                location.pathname === "/" && "text-primary"
              )}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={cn(
                "text-sm font-medium p-2 transition-colors hover:text-primary",
                location.pathname.includes("/products") && "text-primary"
              )}
            >
              Shop
            </Link>
            <Link 
              to={isAuthenticated ? "/profile" : "/auth"} 
              className={cn(
                "text-sm font-medium p-2 transition-colors hover:text-primary",
                (location.pathname === "/auth" || location.pathname === "/profile") && "text-primary"
              )}
            >
              {isAuthenticated ? `Profile (${user?.name})` : "Sign In"}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
