import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Building2, Users, Target, Heart } from "lucide-react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Ladies Hostel Saravanampatti | The Royal Nest Studio House";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about The Royal Nest - premium womens hostel in Saravanampatti. Exclusively for women near tech parks and colleges in Coimbatore.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/about');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩 Women's Hostel
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About The Royal Nest Studio House
              </h1>
              <p className="text-xl text-muted-foreground">
                Creating a safe, premium living space for women students and professionals in Coimbatore's tech hub
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
                  <strong>The Royal Nest Studio House</strong> opened its doors in <strong>September 2025</strong> with a clear mission: 
                  to provide safe, comfortable, and premium accommodation exclusively for women in Coimbatore's thriving tech hub.
                </p>
                <p>
                  Built over an impressive <strong>11,000 sq ft area</strong> with <strong>2,500 sq ft dedicated parking space</strong>, 
                  our newly constructed women's hostel features 15 thoughtfully designed rooms across ground, 1st, and 2nd floors. 
                  We offer covered parking for two-wheelers and free public parking for four-wheelers.
                </p>
                <p>
                  Located in the heart of Saravanampatti, near Adithya Techno Park and KGISL Campus, we've created more than just 
                  a place to stay. We've built a safe, welcoming community where women students and professionals can live, learn, 
                  and grow together with complete peace of mind.
                </p>
                <p>
                  Every aspect of The Royal Nest is designed with modern women in mind – balancing privacy with community, 
                  safety with freedom, and comfort with quality. Our women's hostel policy ensures a respectful, secure environment 
                  where residents can focus on their education and careers.
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
