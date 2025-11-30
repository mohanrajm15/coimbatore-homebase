import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import roomTwin1 from "@/assets/room-twin-1.jpg";
import roomTwin2 from "@/assets/room-twin-2.jpg";
import roomTriple1 from "@/assets/room-triple-1.jpg";
import roomTriple2 from "@/assets/room-triple-2.jpg";
import roomTriple3 from "@/assets/room-triple-3.jpg";
import roomSuite3 from "@/assets/room-suite-3.jpg";
import roomSuite4 from "@/assets/room-suite-4.jpg";
import livingDining from "@/assets/living-dining.jpg";
import suiteStudyKitchen from "@/assets/suite-study-kitchen.jpg";
import kitchen from "@/assets/kitchen.jpg";
import refrigerator from "@/assets/refrigerator.jpg";
import generator from "@/assets/generator.jpg";
import interiorStaircase from "@/assets/interior-staircase.jpg";
import entranceDecor from "@/assets/entrance-decor.jpg";
import exteriorSide from "@/assets/exterior-side.jpg";
import exteriorFront from "@/assets/exterior-front.jpg";

const galleryImages = [
  { src: roomTwin1, title: "Deluxe Twin Sharing Room", category: "Rooms" },
  { src: roomTwin2, title: "Twin Sharing with Balcony", category: "Rooms" },
  { src: roomTriple1, title: "Deluxe Triple Sharing Room", category: "Rooms" },
  { src: roomTriple2, title: "Triple Sharing with Storage", category: "Rooms" },
  { src: roomTriple3, title: "Triple Sharing with Balcony View", category: "Rooms" },
  { src: roomSuite3, title: "Suite Room - Bedroom Area", category: "Rooms" },
  { src: roomSuite4, title: "Suite Room - Living & Bedroom", category: "Rooms" },
  { src: livingDining, title: "Living & Dining Area", category: "Common Areas" },
  { src: suiteStudyKitchen, title: "Study Area & Kitchen", category: "Common Areas" },
  { src: kitchen, title: "Modern Kitchen", category: "Amenities" },
  { src: refrigerator, title: "Refrigerator", category: "Amenities" },
  { src: generator, title: "Power Backup Generator", category: "Amenities" },
  { src: interiorStaircase, title: "Interior Staircase", category: "Common Areas" },
  { src: entranceDecor, title: "Entrance Decoration", category: "Exterior" },
  { src: exteriorSide, title: "Building Side View", category: "Exterior" },
  { src: exteriorFront, title: "Building Front View", category: "Exterior" },
];

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - Ladies Hostel Photos Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "View photos of our womens hostel in Saravanampatti. AC rooms, kitchen, balcony, and amenities at The Royal Nest ladies PG Coimbatore.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/gallery');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Photo Gallery
              </h1>
              <p className="text-xl text-muted-foreground">
                Take a virtual tour of our spaces and amenities
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-medium hover:shadow-large transition-smooth"
                >
                  <img 
                    src={image.src} 
                    alt={`${image.title} - Ladies hostel in Saravanampatti Coimbatore`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm opacity-90">{image.category}</p>
                      <h3 className="text-xl font-semibold">{image.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want to See More?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Schedule a visit to experience our spaces in person
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-smooth">
                Book a Visit
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
