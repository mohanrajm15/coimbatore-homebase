import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import exteriorFront from "@/assets/exterior-front.jpg";
import roomTwin from "@/assets/room-interior-twin.jpg";
import roomTriple from "@/assets/room-interior-triple.jpg";
import roomStorage from "@/assets/room-interior-storage.jpg";
import entranceDecor from "@/assets/entrance-decor.jpg";
import exteriorSide from "@/assets/exterior-side.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        
        {/* Property Showcase Carousel */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                See Our Beautiful Property
              </h2>
              <p className="text-lg text-muted-foreground">
                Take a virtual tour of The Royal Nest Studio House
              </p>
            </div>
            <div className="max-w-5xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={exteriorFront} 
                        alt="The Royal Nest Studio House - Front exterior view of the modern women-only property"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={entranceDecor} 
                        alt="Decorated entrance of The Royal Nest Studio House with traditional welcome arch"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={exteriorSide} 
                        alt="Side view of The Royal Nest Studio House building with spacious balconies"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={roomTwin} 
                        alt="Deluxe twin sharing room interior with comfortable beds and city view"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={roomTriple} 
                        alt="Deluxe triple sharing room with individual storage cupboards and work desks"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-large">
                      <img 
                        src={roomStorage} 
                        alt="Suite room interior with personal storage, study area, and modern amenities"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
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
