import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About LiveSmart
              </h1>
              <p className="text-xl text-muted-foreground">
                Creating a community-driven home for students and professionals in Coimbatore's tech hub
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  LiveSmart was born from a simple observation: many students and young professionals 
                  relocating to Coimbatore's tech hub struggled to find quality, affordable accommodation 
                  that felt like home.
                </p>
                <p>
                  Located in the heart of Saravanampatti, near Adithya Techno Park and major educational 
                  institutions, we've created more than just a place to stay. We've built a community where 
                  like-minded individuals can live, learn, and grow together.
                </p>
                <p>
                  Our properties are designed with the modern professional and student in mind – balancing 
                  privacy with community, comfort with affordability, and convenience with quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Stand For</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Living</h3>
                <p className="text-muted-foreground">
                  Well-maintained spaces with modern amenities
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-muted-foreground">
                  Fostering connections and lasting friendships
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Convenience</h3>
                <p className="text-muted-foreground">
                  Strategic location near work and study hubs
                </p>
              </div>

              <div className="text-center">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Care</h3>
                <p className="text-muted-foreground">
                  Responsive management team that truly cares
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Advantage */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Saravanampatti?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Saravanampatti has emerged as Coimbatore's most connected tech and education hub. 
                  The area is home to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adithya Techno Park - minutes away</li>
                  <li>CHIL-SEZ and multiple IT companies</li>
                  <li>KGISL Campus and tech training centers</li>
                  <li>SNS College, Kumaraguru College of Technology</li>
                  <li>Shopping malls, restaurants, and entertainment venues</li>
                  <li>Excellent public transport connectivity</li>
                </ul>
                <p>
                  Living here means you're at the center of opportunity, with everything you need 
                  within easy reach.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
