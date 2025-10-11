import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Bus, Building2, GraduationCap } from "lucide-react";

const nearbyPlaces = [
  {
    icon: Building2,
    title: "IT Parks & Tech Companies",
    places: [
      "Adithya Techno Park - 5 min",
      "KGISL Campus - 10 min",
      "CHIL-SEZ - 12 min",
      "Various IT companies in Saravanampatti"
    ]
  },
  {
    icon: GraduationCap,
    title: "Educational Institutions",
    places: [
      "SNS College - 15 min",
      "Kumaraguru College of Technology - 20 min",
      "Various training centers nearby"
    ]
  },
  {
    icon: Bus,
    title: "Transport & Connectivity",
    places: [
      "Major bus routes available",
      "Easy access to Coimbatore Airport",
      "Well-connected to city center",
      "Taxi and auto services readily available"
    ]
  },
  {
    icon: MapPin,
    title: "Amenities Nearby",
    places: [
      "Shopping malls within 10 min",
      "Restaurants and cafes",
      "Banks and ATMs",
      "Hospitals and clinics"
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
                Prime Location
              </h1>
              <p className="text-xl text-muted-foreground">
                Strategically located in Saravanampatti, Coimbatore's thriving tech and education hub
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.1234567890123!2d77.0123456789!3d11.0789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA0JzQ0LjAiTiA3N8KwMDAnNDQuOSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LiveSmart Location Map"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Our Address</h3>
                    <p className="text-muted-foreground">
                      Near Adithya Techno Park, Saravanampatti, Coimbatore, Tamil Nadu 641035
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                        <li key={idx} className="flex items-center text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3 flex-shrink-0" />
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
                Why Our Location is Perfect
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Saravanampatti has become Coimbatore's premier destination for tech professionals 
                  and students. Our property puts you right in the center of this dynamic area.
                </p>
                <p>
                  With Adithya Techno Park just minutes away, your daily commute becomes a breeze. 
                  Multiple colleges and training centers are within easy reach, making it ideal for 
                  students pursuing higher education or professional courses.
                </p>
                <p>
                  The area boasts excellent connectivity with regular bus services, easy access to 
                  the airport, and proximity to Coimbatore's city center. Shopping, dining, and 
                  entertainment options are all nearby, ensuring you have everything you need for 
                  a comfortable lifestyle.
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
