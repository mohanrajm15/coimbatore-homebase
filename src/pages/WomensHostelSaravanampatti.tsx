import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Shield, 
  Wifi, 
  Snowflake, 
  Users, 
  Car, 
  Sparkles,
  Building2,
  CheckCircle,
  Star
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-coliving.jpg";
import exteriorFront from "@/assets/exterior-front.jpg";
import suiteLivingTv from "@/assets/suite-living-tv.jpg";
import deluxeBed1 from "@/assets/deluxe-bed-1.jpg";
import commonTerrace1 from "@/assets/common-terrace-1.jpg";
import amenitiesStudyArea1 from "@/assets/amenities-study-area-1.jpg";

const WomensHostelSaravanampatti = () => {
  useEffect(() => {
    document.title = "Women's Hostel in Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Best women's hostel in Saravanampatti, Coimbatore. Safe ladies hostel near KCT Tech Park, KGISL & Adithya Techno Park. AC rooms, WiFi, 24/7 security. Monthly rent from ₹8,500.");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Best women's hostel in Saravanampatti, Coimbatore. Safe ladies hostel near KCT Tech Park, KGISL & Adithya Techno Park. AC rooms, WiFi, 24/7 security. Monthly rent from ₹8,500.");
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "Best women's hostel in Saravanampatti, Coimbatore. Safe ladies hostel near KCT Tech Park, KGISL & Adithya Techno Park. AC rooms, WiFi, 24/7 security. Monthly rent from ₹8,500.");
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://www.theroyalneststudiohouse.com/womens-hostel-saravanampatti');

    // Add LodgingBusiness Schema
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "The Royal Nest Studio House - Women's Hostel Saravanampatti",
      "description": "Best women's hostel in Saravanampatti, Coimbatore. Safe ladies hostel near tech parks with AC rooms, WiFi, and 24/7 security.",
      "url": "https://www.theroyalneststudiohouse.com/womens-hostel-saravanampatti",
      "telephone": "+919629313135",
      "email": "theroyalnest6666@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3, Mahalakshmi Garden Phase III, near Adithya Techno Park",
        "addressLocality": "Saravanampatti",
        "addressRegion": "Coimbatore",
        "postalCode": "641035",
        "addressCountry": "IN"
      },
      "priceRange": "₹8,500 - ₹11,500/month",
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Air Conditioning", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "24/7 Security", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "CCTV Surveillance", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Power Backup", "value": true }
      ]
    };

    let schemaScript = document.querySelector('script[data-schema="lodging-landing"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.setAttribute('type', 'application/ld+json');
      schemaScript.setAttribute('data-schema', 'lodging-landing');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schemaData);

    // Add FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    let faqSchemaScript = document.querySelector('script[data-schema="faq-landing"]');
    if (!faqSchemaScript) {
      faqSchemaScript = document.createElement('script');
      faqSchemaScript.setAttribute('type', 'application/ld+json');
      faqSchemaScript.setAttribute('data-schema', 'faq-landing');
      document.head.appendChild(faqSchemaScript);
    }
    faqSchemaScript.textContent = JSON.stringify(faqSchema);
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "919629313135";
    const message = encodeURIComponent("Hello. I am interested in the women's hostel in Saravanampatti.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const amenities = [
    { icon: Shield, title: "24/7 Security", description: "Biometric entry, 20 CCTV cameras, security personnel" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Free 200 Mbps WiFi throughout the hostel" },
    { icon: Snowflake, title: "AC Rooms", description: "All rooms fully air-conditioned for comfort" },
    { icon: Users, title: "Women Only", description: "Exclusive accommodation for women students & professionals" },
    { icon: Car, title: "Parking Space", description: "Covered 2-wheeler & free 4-wheeler parking" },
    { icon: Sparkles, title: "Housekeeping", description: "Twice weekly cleaning service included" },
  ];

  const reviews = [
    { name: "Priya S.", role: "IT Professional", text: "Best women's hostel near KGISL! Safe, clean, and the management is very responsive.", rating: 5 },
    { name: "Anitha R.", role: "Student", text: "Perfect location for students. Close to colleges and very affordable rent.", rating: 5 },
    { name: "Kavitha M.", role: "Working Woman", text: "I feel completely safe here. The security and facilities are excellent.", rating: 5 },
  ];

  const faqs = [
    {
      question: "What is the monthly rent for women's hostel in Saravanampatti?",
      answer: "Monthly rent starts from ₹8,500 for Deluxe rooms (triple sharing) and ₹11,500 for Suite rooms (triple sharing). All rates include WiFi, housekeeping, and basic amenities."
    },
    {
      question: "Is the women's hostel near IT parks in Saravanampatti?",
      answer: "Yes, The Royal Nest is located near Adithya Techno Park (0.5 km), KGISL Tech Park (3.5 km), KCT Tech Park (2.5 km), and CHIL-SEZ (2 km)."
    },
    {
      question: "What security features does the ladies hostel have?",
      answer: "Our women's hostel has 24/7 security personnel, biometric entry, 20 CCTV cameras in all common areas, and secure room locks with keys."
    },
    {
      question: "Are AC rooms available in the womens hostel?",
      answer: "Yes, all rooms in our women's hostel are air-conditioned. Both Deluxe and Suite rooms come with AC."
    },
    {
      question: "Is cooking allowed in the ladies hostel?",
      answer: "Yes, all rooms have a kitchen area where you can cook with your own appliances and utensils."
    },
    {
      question: "What is the minimum stay duration?",
      answer: "We require a minimum stay of 3 months, ideal for working women and students."
    }
  ];

  const galleryImages = [
    { src: exteriorFront, alt: "Women's hostel building exterior in Saravanampatti" },
    { src: suiteLivingTv, alt: "Suite room with TV at ladies hostel Saravanampatti" },
    { src: deluxeBed1, alt: "Deluxe room at women's hostel near tech parks" },
    { src: commonTerrace1, alt: "Common terrace area at womens hostel Coimbatore" },
    { src: amenitiesStudyArea1, alt: "Study area at ladies hostel Saravanampatti" },
    { src: heroImage, alt: "The Royal Nest women's hostel entrance" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Women's hostel in Saravanampatti - The Royal Nest Studio House entrance" 
              className="w-full h-full object-cover"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩 Women's Hostel in Saravanampatti
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Women's Hostel in Saravanampatti
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Safe, comfortable & modern ladies hostel near KCT Tech Park, KGISL & Adithya Techno Park. 
                AC rooms with WiFi, 24/7 security, and housekeeping. Monthly rent from ₹8,500.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Phone className="mr-2 h-5 w-5" />
                    Book a Visit
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Women's Hostel Amenities in Saravanampatti
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Premium facilities designed for the comfort and safety of women students and working professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {amenities.map((amenity, index) => {
                const Icon = amenity.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth"
                  >
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                    <p className="text-muted-foreground">{amenity.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-8">
              <Link to="/rooms">
                <Button variant="outline" size="lg">
                  View All Rooms & Amenities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Location: Near Tech Parks & Colleges
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategically located in Saravanampatti, Coimbatore's IT hub
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="bg-card rounded-2xl overflow-hidden shadow-large">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.0895786234567!2d76.9966005!3d11.0817891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f70e72bc607d%3A0xde57eb519158db31!2sThe%20Royal%20Nest%20Studio%20House%2C%20Saravanampatti!5e0!3m2!1sen-GB!2sin!4v1234567890123!5m2!1sen-GB!2sin"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Women's Hostel Location Map Saravanampatti"
                  className="w-full"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Address</h3>
                    <p className="text-muted-foreground">
                      3, Mahalakshmi Garden Phase III, near Adithya Techno Park, Saravanampatti, Coimbatore - 641035
                    </p>
                  </div>
                </div>

                <h3 className="font-semibold text-lg mt-6">Nearby IT Parks & Companies:</h3>
                <ul className="space-y-2">
                  {[
                    "Adithya Techno Park - 0.5 km",
                    "KCT Tech Park - 2.5 km",
                    "CHIL-SEZ IT Park - 2 km",
                    "KGISL Tech Park - 3.5 km",
                    "India Land Tech Park - 2 km"
                  ].map((place, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {place}
                    </li>
                  ))}
                </ul>

                <Link to="/location" className="inline-block mt-4">
                  <Button variant="outline">View Full Location Details</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Gallery Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Women's Hostel Photo Gallery
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a look inside our ladies hostel in Saravanampatti
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-smooth"
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/gallery">
                <Button variant="outline" size="lg">
                  View Full Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Residents Say About Our Women's Hostel
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by women students and professionals in Saravanampatti
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-soft">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/testimonials">
                <Button variant="outline" size="lg">
                  Read More Reviews
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Women's Hostel Saravanampatti - FAQs
                </h2>
                <p className="text-lg text-muted-foreground">
                  Common questions about our ladies hostel
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-lg shadow-md border px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="text-center mt-8">
                <Link to="/faq">
                  <Button variant="outline" size="lg">
                    View All FAQs
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
              Book Your Stay at Our Women's Hostel in Saravanampatti
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join our community of women students and professionals. Safe, comfortable, and affordable accommodation near Coimbatore's top tech parks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule a Visit
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

export default WomensHostelSaravanampatti;