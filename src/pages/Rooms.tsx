import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import bedroomTriple from "@/assets/bedroom-triple.jpg";
import suiteLivingRoom from "@/assets/suite-living-room.jpg";
import { useEffect } from "react";

const roomTypes = [
  {
    title: "Deluxe Room",
    image: bedroomTriple,
    description: "Twin or triple sharing with bedroom and kitchen area",
    count: "8 rooms available",
    size: "17 ft × 10 ft",
    configurations: "2 Twin sharing rooms + 6 Triple sharing rooms",
    features: [
      "Single beds (6.5 ft × 3.2 ft)",
      "Attached bathroom with geyser",
      "Kitchen area for self-cooking",
      "Open-air balcony with views",
      "Air conditioner and fan",
      "Individual cupboard with lock",
      "Working desk and chair",
      "Window with mosquito net",
      "Socket near bed, Mirror",
      "Bed, pillow, covers included"
    ]
  },
  {
    title: "Suite Room",
    image: suiteLivingRoom,
    description: "Premium space with bedroom, living area, and kitchen",
    count: "7 rooms available",
    size: "17 ft × 16 ft",
    configurations: "Spacious layout with separate living area",
    features: [
      "Single beds (6.5 ft × 3.2 ft)",
      "Separate living area with sofa",
      "TV and air conditioner",
      "Kitchen area for self-cooking",
      "Open-air balcony with views",
      "Attached bathroom with geyser",
      "Individual cupboard with lock",
      "Working desk and chair",
      "Window with mosquito net",
      "Bed, pillow, covers included"
    ]
  }
];

const Rooms = () => {
  useEffect(() => {
    document.title = "AC Rooms & Pricing - Ladies Hostel Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Explore AC ladies hostel rooms in Saravanampatti. Deluxe & Suite options for womens PG near Coimbatore tech parks. Fully furnished with WiFi & kitchen.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/rooms');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩 Women-Only Property • 15 Rooms Total
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your Perfect Room
              </h1>
              <p className="text-xl text-muted-foreground">
                Premium Deluxe and Suite rooms across ground, 1st, and 2nd floors. All rooms feature self-cooking facilities and spacious open-air balconies with great views.
              </p>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {roomTypes.map((room, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-smooth"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={`${room.title} - AC furnished room at ladies hostel in Saravanampatti Coimbatore`}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                      loading="lazy"
                      width="600"
                      height="450"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold mb-1">{room.title}</h3>
                      <p className="text-sm text-primary font-semibold">{room.count}</p>
                      <p className="text-muted-foreground mt-2">{room.description}</p>
                    </div>
                    
                    <div className="bg-secondary/20 p-4 rounded-lg mb-4">
                      <p className="text-sm"><strong>Built-up Area:</strong> {room.size}</p>
                      <p className="text-sm"><strong>Configuration:</strong> {room.configurations}</p>
                    </div>
                    
                    <h4 className="font-semibold mb-3">Room Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button className="w-full">Enquire Now</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Amenities Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Amenities for All Rooms</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Free 200 Mbps WiFi (private WiFi option available)",
                  "Hot, normal & cold water dispenser on each floor",
                  "Refrigerator on each floor hallway",
                  "Common seating areas with sofas on 1st & 2nd floor",
                  "Open terrace for relaxation",
                  "Tile flooring throughout, granite stairs",
                  "Municipality water supply ('Nalla thanni')",
                  "Key card electricity control",
                  "Multiple Washing machines on terrace with drying shed",
                  "24/7 security personnel & property manager",
                  "Biometric building entry system",
                  "20 CCTV cameras in all common areas for safety",
                  "Twice a week housekeeping (+ additional housekeeping on request)",
                  "Room door locks with keys provided"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Policies Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Property Policies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Women-Only</h3>
                  <p className="text-sm text-muted-foreground">Exclusively for women students and working professionals of all ages</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">No Pets</h3>
                  <p className="text-sm text-muted-foreground">Pets are not allowed on the property</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">No Smoking</h3>
                  <p className="text-sm text-muted-foreground">Smoking is strictly prohibited</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Self-Cooking</h3>
                  <p className="text-sm text-muted-foreground">Cook in your room; arrange your own utensils & appliances</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Food Delivery</h3>
                  <p className="text-sm text-muted-foreground">Swiggy, Zomato available; home-cooked meals can be arranged</p>
                </div>
                <div className="bg-card p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Electricity</h3>
                  <p className="text-sm text-muted-foreground">Consumption charges borne by tenant</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;
