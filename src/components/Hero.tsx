import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-coliving.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    const phoneNumber = "919629313135";
    const message = encodeURIComponent("Hello. I am interested");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern co-living space" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            👩 Women-Only Property • Newly Opened Sept 2025
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Royal Nest Studio House
            <span className="block text-primary mt-2">Mahalakshmi Garden, Saravanampatti</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A premium women-only property at 3, Mahalakshmi Garden, Phase III, near Adithya Techno Park, Saravanampatti, Coimbatore - 641035. Safe, comfortable, and modern long-stay living for students & working professionals. Built over 11,000 sq ft with spacious common areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto shadow-medium">
                Book a Visit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
