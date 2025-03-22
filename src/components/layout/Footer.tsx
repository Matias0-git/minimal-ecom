
import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Twitter, 
  Instagram, 
  Facebook, 
  Youtube,
  ChevronRight
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="app-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium tracking-tight">minimal.</h3>
            <p className="text-sm text-muted-foreground">
              Elevating everyday essentials through minimalist design and thoughtful functionality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=electronics" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Electronics
                </Link>
              </li>
              <li>
                <Link to="/products?category=accessories" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/products?category=home" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/press" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Press
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-3 w-3 mr-1 transition-transform group-hover:translate-x-0.5" />
                  Sustainability
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider">Contact</h4>
            <p className="text-sm text-muted-foreground">
              Have questions? We're here to help.
            </p>
            <a 
              href="mailto:support@minimal.com"
              className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <Mail className="h-4 w-4 mr-2" />
              support@minimal.com
            </a>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} minimal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
