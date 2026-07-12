import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
import studyArea1 from "@/assets/amenities-study-area-1.jpg";
import studyArea2 from "@/assets/amenities-study-area-2.jpg";
import studyArea3 from "@/assets/amenities-study-area-3.jpg";
import studyArea4 from "@/assets/amenities-study-area-4.jpg";
import studyArea5 from "@/assets/amenities-study-area-5.jpg";
import amenitiesKitchen from "@/assets/amenities-kitchen.jpg";
import cupboard from "@/assets/amenities-cupboard.jpg";
import balcony from "@/assets/amenities-balcony.jpg";
import bathroom1 from "@/assets/amenities-bathroom-1.jpg";
import bathroom2 from "@/assets/amenities-bathroom-2.jpg";
import studyArea6 from "@/assets/amenities-study-area-6.jpg";
import studyArea7 from "@/assets/amenities-study-area-7.jpg";
import washingMachine from "@/assets/amenities-washing-machine.jpg";
import hallway1 from "@/assets/common-hallway-1.jpg";
import hallway2 from "@/assets/common-hallway-2.jpg";
import commonRefrigerator from "@/assets/common-refrigerator.jpg";
import terrace1 from "@/assets/common-terrace-1.jpg";
import terrace2 from "@/assets/common-terrace-2.jpg";
import entranceDecor from "@/assets/entrance-decor.jpg";
import exteriorSide from "@/assets/exterior-side.jpg";
import exteriorFront from "@/assets/exterior-front.jpg";
import securityCamera1 from "@/assets/facilities-security-camera-1.jpg";
import securityCamera2 from "@/assets/facilities-security-camera-2.jpg";
import waterDispenser from "@/assets/facilities-water-dispenser.jpg";
import wifi from "@/assets/facilities-wifi.jpg";
import biometricEntrance from "@/assets/facilities-biometric-entrance.jpg";
import parking from "@/assets/facilities-parking.jpg";
import powerBackup from "@/assets/facilities-power-backup.jpg";
import exteriorBuildingFront from "@/assets/exterior-building-front.jpg";
import exteriorBuildingNight from "@/assets/exterior-building-night.jpg";
import exteriorEntrance from "@/assets/exterior-entrance.jpg";

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
  { src: studyArea1, title: "Study Area with Kitchen", category: "Amenities" },
  { src: studyArea2, title: "Collaborative Study Space", category: "Amenities" },
  { src: studyArea3, title: "Individual Study Desk", category: "Amenities" },
  { src: studyArea4, title: "Private Study Room", category: "Amenities" },
  { src: studyArea5, title: "Study Area with Whiteboard", category: "Amenities" },
  { src: amenitiesKitchen, title: "In-Room Kitchen", category: "Amenities" },
  { src: cupboard, title: "Spacious Cupboard Storage", category: "Amenities" },
  { src: balcony, title: "Room with Balcony & AC", category: "Amenities" },
  { src: bathroom1, title: "Attached Bathroom", category: "Amenities" },
  { src: bathroom2, title: "Modern Bathroom Facilities", category: "Amenities" },
  { src: studyArea6, title: "Study Area with TV & Kitchen", category: "Amenities" },
  { src: studyArea7, title: "Study Desk with Storage", category: "Amenities" },
  { src: washingMachine, title: "Washing Machines", category: "Amenities" },
  { src: interiorStaircase, title: "Interior Staircase", category: "Common Areas" },
  { src: hallway1, title: "Hallway with Storage", category: "Common Areas" },
  { src: hallway2, title: "Spacious Hallway", category: "Common Areas" },
  { src: commonRefrigerator, title: "Common Area Refrigerator", category: "Common Areas" },
  { src: terrace1, title: "Rooftop Terrace View", category: "Common Areas" },
  { src: terrace2, title: "Terrace Area", category: "Common Areas" },
  { src: securityCamera1, title: "24/7 Security Camera System", category: "Facilities" },
  { src: securityCamera2, title: "Security Monitoring", category: "Facilities" },
  { src: waterDispenser, title: "Water Dispenser", category: "Facilities" },
  { src: wifi, title: "High-Speed WiFi", category: "Facilities" },
  { src: biometricEntrance, title: "Biometric Access Control", category: "Facilities" },
  { src: parking, title: "Two-Wheeler Parking", category: "Facilities" },
  { src: powerBackup, title: "24/7 Power Backup", category: "Facilities" },
  { src: entranceDecor, title: "Entrance Decoration", category: "Exterior" },
  { src: exteriorSide, title: "Building Side View", category: "Exterior" },
  { src: exteriorFront, title: "Building Front View", category: "Exterior" },
  { src: exteriorBuildingFront, title: "Building Front Entrance", category: "Exterior" },
  { src: exteriorBuildingNight, title: "Building Night View", category: "Exterior" },
  { src: exteriorEntrance, title: "Main Entrance", category: "Exterior" },
];

const Gallery = () => {
  useEffect(() => {
    document.title = "Gallery - Ladies Hostel Photos Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "View photos of our womens hostel in Saravanampatti. AC rooms, kitchen, balcony, and amenities at The Royal Nest ladies PG Coimbatore.");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "View photos of our womens hostel in Saravanampatti. AC rooms, kitchen, balcony, and amenities at The Royal Nest ladies PG Coimbatore.");
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "View photos of our womens hostel in Saravanampatti. AC rooms, kitchen, balcony, and amenities at The Royal Nest ladies PG Coimbatore.");
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/gallery');
    
    // Add ImageGallery schema
    const gallerySchema = {
      "@context": "https://schema.org",
      "@type": "ImageGallery",
      "name": "The Royal Nest Studio House Photo Gallery",
      "description": "Photo gallery of our ladies hostel in Saravanampatti featuring rooms, amenities, and facilities",
      "image": galleryImages.slice(0, 10).map((img, index) => ({
        "@type": "ImageObject",
        "contentUrl": `https://theroyalneststudiohouse.com${img.src}`,
        "description": img.title,
        "name": img.title,
        "position": index + 1
      }))
    };
    
    let gallerySchemaScript = document.querySelector('script[data-schema="gallery"]');
    if (!gallerySchemaScript) {
      gallerySchemaScript = document.createElement('script');
      gallerySchemaScript.setAttribute('type', 'application/ld+json');
      gallerySchemaScript.setAttribute('data-schema', 'gallery');
      document.head.appendChild(gallerySchemaScript);
    }
    gallerySchemaScript.textContent = JSON.stringify(gallerySchema);
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
            <Link to="/contact">
              <Button size="lg">
                Book a Visit
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
