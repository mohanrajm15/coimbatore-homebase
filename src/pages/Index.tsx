import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import propertyVideo from "@/assets/royal-nest-video.mp4";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Ladies Hostel in Saravanampatti — ₹8,500/mo";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best ladies hostel in Saravanampatti near KCT Tech Park & KGISL. Safe womens hostel in Coimbatore with AC rooms, WiFi. Affordable PG for working women & students.");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Best ladies hostel in Saravanampatti near KCT Tech Park & KGISL. Safe womens hostel in Coimbatore with AC rooms, WiFi. Affordable PG for working women & students.");
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "Best ladies hostel in Saravanampatti near KCT Tech Park & KGISL. Safe womens hostel in Coimbatore with AC rooms, WiFi. Affordable PG for working women & students.");
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Hostel Video */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Our Beautiful Women's Hostel
              </h2>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of The Royal Nest Studio House
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                <video 
                  src={propertyVideo}
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                  aria-label="Virtual tour video of The Royal Nest Studio House property"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        
        {/* Location Highlight */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-large">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Perfectly Located in Saravanampatti
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Close to Adithya Techno Park, KGISL Campus, CHIL-SEZ, and major colleges like SNS and Kumaraguru. 
                  Easy access to public transport, shopping, and entertainment.
                </p>
                <Link to="/location">
                  <Button size="lg">
                    Explore Location
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make This Your Home?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of women students and professionals at The Royal Nest Studio House. Schedule a visit today and experience safe, comfortable living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Schedule Your Long Stay
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
