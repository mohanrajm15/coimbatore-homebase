import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import studioImage from "@/assets/room-studio.jpg";
import bhkImage from "@/assets/room-1bhk.jpg";
import commonImage from "@/assets/common-area.jpg";

const roomTypes = [
  {
    title: "Studio Room",
    image: studioImage,
    description: "Perfect for solo professionals or students",
    price: "₹8,000",
    features: [
      "Single occupancy",
      "Attached bathroom",
      "Study desk & chair",
      "Wardrobe & storage",
      "AC/Fan options",
      "High-speed WiFi"
    ]
  },
  {
    title: "1BHK Apartment",
    image: bhkImage,
    description: "Ideal for couples or those wanting more space",
    price: "₹12,000",
    features: [
      "Private living space",
      "Bedroom + living area",
      "Kitchen facilities",
      "Attached bathroom",
      "Furnished throughout",
      "Balcony access"
    ]
  },
  {
    title: "Shared Living Unit",
    image: commonImage,
    description: "Budget-friendly option with community vibes",
    price: "₹5,500",
    features: [
      "Twin/triple sharing",
      "Individual beds",
      "Shared bathroom",
      "Common study area",
      "Locker facilities",
      "Shared kitchen access"
    ]
  }
];

const Rooms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Choose Your Perfect Space
              </h1>
              <p className="text-xl text-muted-foreground">
                From private studios to shared living units, we have options for every need and budget
              </p>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {roomTypes.map((room, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-large transition-smooth"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={room.image} 
                      alt={room.title}
                      className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{room.title}</h3>
                      <span className="text-2xl font-bold text-primary">{room.price}<span className="text-sm text-muted-foreground">/mo</span></span>
                    </div>
                    <p className="text-muted-foreground mb-4">{room.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {room.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <Check className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
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

        {/* Amenities Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Common Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "High-Speed WiFi",
                  "Power Backup",
                  "CCTV Security",
                  "Housekeeping",
                  "Laundry Service",
                  "Parking Space",
                  "Common Kitchen",
                  "Study Lounge",
                  "Water Purifier"
                ].map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
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
