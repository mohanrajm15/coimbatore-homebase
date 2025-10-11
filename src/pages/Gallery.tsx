import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import studioImage from "@/assets/room-studio.jpg";
import bhkImage from "@/assets/room-1bhk.jpg";
import commonImage from "@/assets/common-area.jpg";
import heroImage from "@/assets/hero-coliving.jpg";

const galleryImages = [
  { src: heroImage, title: "Modern Co-living Space", category: "Common Areas" },
  { src: studioImage, title: "Studio Room", category: "Rooms" },
  { src: bhkImage, title: "1BHK Apartment", category: "Rooms" },
  { src: commonImage, title: "Shared Workspace", category: "Common Areas" },
  { src: studioImage, title: "Study Area", category: "Amenities" },
  { src: bhkImage, title: "Living Space", category: "Rooms" },
];

const Gallery = () => {
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
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
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
