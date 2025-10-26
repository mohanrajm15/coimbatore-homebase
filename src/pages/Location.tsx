import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Bus, Building2, GraduationCap, ShoppingBag, Coffee } from "lucide-react";

const nearbyPlaces = [
  {
    icon: Building2,
    title: "IT Parks & Tech Companies",
    places: [
      "Adithya Techno Park - 0.5 km (Blue Yonder, Integra Global, Sanumas, ApplogiQ, Deloitte, Accenture)",
      "KGISL Tech Park, Saravanampatti - 3.5 km (KGISL, Hexaware, Payoda, Cognizant)",
      "CHIL SEZ IT Park, Keeranatham - 2 km (Bosch, Amazon, EbixCash, Verticurl, Cotiviti, Birlasoft)",
      "India Land Tech Park, Keeranatham - 2 km (Amazon, RedHat, Bank of America, Bosch)",
      "KCT Tech Park, Thudiyalur Road - 2.5 km (Cognizant, HCL, ThoughtWorks, Ultramain Systems)",
      "TIDEL Park, Peelamedu - 9 km (Infosys, Wipro, State Street, HCL)"
    ]
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    places: [
      "Adithya Institute of Technology - 0.6 km",
      "Adithya Public Matric School - 0.9 km",
      "The Indian Public School - 1.5 km",
      "K V Institute of Management & Information Studies - 1.8 km",
      "SNS College of Engineering - 1.8 km",
      "Manchester International School - 2.5 km",
      "Kumaraguru College of Technology (KCT) - 3 km"
    ]
  },
  {
    icon: Bus,
    title: "Transport & Connectivity",
    places: [
      "Local Bus Connectivity - 0-0.5 km (Frequent routes to Peelamedu, Gandhipuram & Airport)",
      "Gandhipuram Bus Stand - 11 km (Major intercity hub; 20-30 mins drive)",
      "Coimbatore International Airport - 12 km (20-25 minutes via Sathy Road)",
      "Coimbatore Junction Railway Station - 13 km (Main city railway terminal)",
      "Rapido, Ola, Uber readily available"
    ]
  },
  {
    icon: ShoppingBag,
    title: "Shopping & Retail",
    places: [
      "Prozone Mall, Saravanampatti - 2 km",
      "Fun Republic Mall, Peelamedu - 9 km",
      "Brookefields Mall, RS Puram - 11 km",
      "Local markets and grocery stores within 1 km",
      "Banks and ATMs within 500m"
    ]
  },
  {
    icon: Coffee,
    title: "Dining & Entertainment",
    places: [
      "Multiple restaurants within 1 km",
      "Cafes and fast food outlets nearby",
      "Street food and local eateries",
      "Food delivery (Swiggy, Zomato) available"
    ]
  },
  {
    icon: MapPin,
    title: "Essential Services",
    places: [
      "Hospitals and clinics within 2 km",
      "Pharmacies within 500m",
      "Post office - 1.5 km",
      "Police station nearby for safety"
    ]
  }
];

const Location = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Prime Location in Saravanampatti
              </h1>
              <p className="text-xl text-muted-foreground">
                Strategically located near Adithya Techno Park and KGISL Campus in Coimbatore's thriving tech and education hub
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-card rounded-2xl overflow-hidden shadow-large">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0895786234567!2d76.9966005!3d11.0817891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f70e72bc607d%3A0xde57eb519158db31!2sThe%20Royal%20Nest%20Studio%20House%2C%20Saravanampatti!5e0!3m2!1sen-GB!2sin!4v1234567890123!5m2!1sen-GB!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="The Royal Nest Studio House Location Map"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-muted-foreground">
                      The Royal Nest Studio House, 3, Mahalakshmi Garden Phase III, near Adithya Techno Park, Saravanampatti, Coimbatore - 641035
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Places */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What's Nearby
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nearbyPlaces.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-soft">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.places.map((place, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground text-sm">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0 mt-1.5" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Location Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Safe Neighbourhood with Excellent Connectivity
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>The Royal Nest Studio House</strong> is in Saravanampatti's safest areas, chosen for our women-only property. 
                  The neighbourhood around Adithya Techno Park and KGISL Campus is known for its professional environment and safety.
                </p>
                <p>
                  <strong>Walking Distance:</strong> Within walking distance from KG College Bus Stop for convenient daily commutes. 
                  Rapido, Ola, and Uber are available 24/7.
                </p>
                <p>
                  <strong>Shopping & Entertainment:</strong> Prozone Mall (2 km) offers shopping and dining. 
                  Local markets and essentials within 1 km.
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

export default Location;
