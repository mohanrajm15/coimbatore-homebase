import { Home, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">The Royal Nest</span>
                <span className="text-xs text-primary leading-tight">Studio House</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              A women-only property in Saravanampatti, Coimbatore. Premium living spaces designed for safety, comfort and community. Opened September 2025.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">Home</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth">About Us</Link></li>
              <li><Link to="/rooms" className="text-muted-foreground hover:text-primary transition-smooth">Rooms</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-smooth">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-smooth">Gallery</Link></li>
              <li><Link to="/location" className="text-muted-foreground hover:text-primary transition-smooth">Location</Link></li>
              <li><Link to="/testimonials" className="text-muted-foreground hover:text-primary transition-smooth">Testimonials</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">3, Mahalakshmi Garden Phase III, near Adithya Techno Park, Saravanampatti, Coimbatore - 641035</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+919629313135" className="text-muted-foreground hover:text-primary transition-smooth">+91 96293 13135</a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="mailto:theroyalnest6666@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth">theroyalnest6666@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} The Royal Nest Studio House. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
