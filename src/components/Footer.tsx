import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-secondary mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">DORA</h3>
            <p className="text-muted-foreground">
              Crafting moments of joy through artisanal baking since 2010.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block footer-link">
                Home
              </Link>
              <Link to="/about" className="block footer-link">
                About Us
              </Link>
              <Link to="/contact" className="block footer-link">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center footer-link">
                <Phone className="h-4 w-4 mr-2" />
                (123) 456-7890
              </a>
              <a
                href="mailto:hello@dora.com"
                className="flex items-center footer-link"
              >
                <Mail className="h-4 w-4 mr-2" />
                hello@dora.com
              </a>
              <p className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                123 Baker Street, City
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DORA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};