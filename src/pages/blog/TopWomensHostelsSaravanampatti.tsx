import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin, Shield, Wifi, Users, Star, CheckCircle, Building, Coffee } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const TopWomensHostelsSaravanampatti = () => {
  useEffect(() => {
    document.title = "Top 6 Women's Hostels in Saravanampatti 2026 | Comparison Guide";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2026.");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2026.");
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2026."); else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2026.";
      document.head.appendChild(meta);
    }

    // Set canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = 'https://www.theroyalnest.in/blog/top-womens-hostels-saravanampatti-comparison';

    // Add Article schema
    const existingSchema = document.querySelector('script[data-schema="article"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.setAttribute('data-schema', 'article');
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Top 6 Women's Hostels in Saravanampatti – A Complete Comparison Guide (2026)",
      "description": "Compare the top 6 women's hostels in Saravanampatti, Coimbatore near CHIL SEZ IT Park and tech parks. Find the best ladies hostel with amenities, security, and location details for 2026.",
      "author": {
        "@type": "Organization",
        "name": "The Royal Nest"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Royal Nest",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.theroyalnest.in/logo.png"
        }
      },
      "datePublished": "2026-01-09",
      "dateModified": "2026-01-09"
    });
    document.head.appendChild(schema);

    return () => {
      const schemaToRemove = document.querySelector('script[data-schema="article"]');
      if (schemaToRemove) {
        schemaToRemove.remove();
      }
    };
  }, []);

  const hostels = [
    {
      name: "The Royal Nest",
      location: "Near Adithya Techno Park, CHIL SEZ IT Park",
      roomTypes: "Single, Twin, Triple Sharing (AC)",
      food: "Kitchen Available",
      security: "Biometric Entry, CCTV, 24/7 Warden",
      rating: "4.9/5 on Google",
    },
    {
      name: "Radha Ladies Hostel",
      location: "Saravanampatti Main Road",
      roomTypes: "Single, Double, Triple Sharing",
      food: "Veg Meals Provided",
      security: "CCTV, Warden",
      rating: "4.2/5 on Google",
    },
    {
      name: "Periyanayaki Ladies Hostel",
      location: "Near KCT College",
      roomTypes: "Double, Triple Sharing",
      food: "Meals Included",
      security: "Warden, CCTV",
      rating: "4.0/5 on Google",
    },
    {
      name: "Zolo Women's Hostel",
      location: "Multiple locations in Saravanampatti",
      roomTypes: "Single, Double, Triple",
      food: "Meals Available (Optional)",
      security: "App-based Entry, CCTV",
      rating: "4.3/5 on Google",
    },
    {
      name: "Padhmavathiamma Women's Hostel",
      location: "Near KGISL Tech Park",
      roomTypes: "Double, Triple Sharing",
      food: "Homestyle Meals",
      security: "Warden, CCTV",
      rating: "4.1/5 on Google",
    },
    {
      name: "Krishh Brindaavan Women's Hostel",
      location: "Saravanampatti",
      roomTypes: "Single, Double Sharing",
      food: "Meals Provided",
      security: "Security Guard, CCTV",
      rating: "4.0/5 on Google",
    },
  ];

  const faqs = [
    {
      question: "Which women's hostel is closest to IT parks in Saravanampatti?",
      answer: "The Royal Nest is located nearest to Adithya Techno Park and CHIL SEZ IT Park, making it ideal for working women in the IT sector. Padhmavathiamma Women's Hostel is also close to KGISL Tech Park."
    },
    {
      question: "Are there hostels with AC rooms?",
      answer: "Yes, The Royal Nest offers AC rooms in single, twin, and triple sharing configurations. Zolo Women's Hostel also offers AC options at select locations."
    },
    {
      question: "Which hostels provide food?",
      answer: "Radha Ladies Hostel, Periyanayaki Ladies Hostel, Padhmavathiamma, and Krishh Brindaavan provide meals. Zolo offers optional meal plans. The Royal Nest provides a fully-equipped kitchen for self-cooking."
    },
    {
      question: "What security features should I look for?",
      answer: "Look for biometric entry, 24/7 CCTV surveillance, on-site warden, and visitor management. The Royal Nest offers all these features including power backup and secure parking."
    },
    {
      question: "Are these hostels suitable for students?",
      answer: "Yes, all listed hostels accommodate both students and working women. Periyanayaki Ladies Hostel is particularly popular among students from nearby colleges like KCT and SNS."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">Comparison Guide 2026</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
                Top 6 Women's Hostels in Saravanampatti
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                A comprehensive comparison of the best ladies hostels near CHIL SEZ IT Park, Adithya Techno Park, KCT, and other major landmarks in Saravanampatti, Coimbatore.
              </p>
              <p className="text-sm text-muted-foreground">
                Published: January 9, 2026 • 8 min read
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Saravanampatti has emerged as a prime location for working women and students in Coimbatore, 
                thanks to its proximity to major IT parks like CHIL SEZ IT Park, Adithya Techno Park, KGISL Tech Park, and renowned 
                educational institutions like KCT, SNS, and Kumaraguru College. Finding the right women's hostel 
                can be challenging with so many options available. This guide compares the top 6 women's hostels 
                in Saravanampatti to help you make an informed decision.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Quick Comparison Table
              </h2>
              <div className="bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-primary/10">
                        <TableHead className="font-bold text-foreground">Hostel Name</TableHead>
                        <TableHead className="font-bold text-foreground">Location</TableHead>
                        <TableHead className="font-bold text-foreground">Room Types</TableHead>
                        <TableHead className="font-bold text-foreground">Food</TableHead>
                        <TableHead className="font-bold text-foreground">Security</TableHead>
                        <TableHead className="font-bold text-foreground">Rating</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {hostels.map((hostel, index) => (
                        <TableRow key={index} className={index === 0 ? "bg-primary/5 border-l-4 border-l-primary" : ""}>
                          <TableCell className="font-semibold">{hostel.name}</TableCell>
                          <TableCell>{hostel.location}</TableCell>
                          <TableCell>{hostel.roomTypes}</TableCell>
                          <TableCell>{hostel.food}</TableCell>
                          <TableCell>{hostel.security}</TableCell>
                          <TableCell>
                            <span className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              {hostel.rating}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Reviews */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Detailed Hostel Reviews
              </h2>

              {/* The Royal Nest */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8 border-2 border-primary">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">FEATURED</span>
                    <h3 className="text-xl font-bold text-foreground mt-2">1. The Royal Nest</h3>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.9/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Near Adithya Techno Park & CHIL SEZ IT Park, Saravanampatti</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Single, Twin, Triple Sharing (AC)</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  The Royal Nest stands out as a premium women's hostel in Saravanampatti, offering modern amenities 
                  specifically designed for working women and students. Located just minutes from CHIL SEZ IT Park and Adithya Techno Park, 
                  it features biometric entry, 24/7 CCTV surveillance, power backup, high-speed WiFi, and a fully-equipped 
                  kitchen. The hostel is ideal for those seeking a secure, comfortable, and professional living environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Shield className="h-3 w-3" /> Biometric Entry
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Wifi className="h-3 w-3" /> High-Speed WiFi
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Coffee className="h-3 w-3" /> Kitchen Available
                  </span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Building className="h-3 w-3" /> Near CHIL SEZ IT Park
                  </span>
                </div>
                <div className="mt-4">
                  <Link to="/womens-hostel-saravanampatti">
                    <Button className="bg-primary hover:bg-primary/90">
                      Learn More About The Royal Nest
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Radha Ladies Hostel */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">2. Radha Ladies Hostel</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.2/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Saravanampatti Main Road</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Single, Double, Triple Sharing</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Radha Ladies Hostel is a well-established women's hostel on Saravanampatti Main Road. 
                  It offers vegetarian meals and has a reputation for maintaining a homely atmosphere. The hostel 
                  provides CCTV surveillance and a resident warden for security. Popular among students and 
                  working professionals looking for traditional hostel accommodation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Veg Meals</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">CCTV</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Warden</span>
                </div>
              </div>

              {/* Periyanayaki Ladies Hostel */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">3. Periyanayaki Ladies Hostel</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.0/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Near KCT College</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Double, Triple Sharing</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Located near KCT College, Periyanayaki Ladies Hostel is particularly popular among college students. 
                  The hostel offers meals included in the rent and provides a warden-supervised environment. 
                  It's a good choice for students looking for budget-friendly accommodation near educational institutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Meals Included</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Near KCT</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Warden</span>
                </div>
              </div>

              {/* Zolo Women's Hostel */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">4. Zolo Women's Hostel</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.3/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Multiple locations in Saravanampatti</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Single, Double, Triple</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Zolo is a well-known co-living brand with multiple properties in Saravanampatti. They offer 
                  modern amenities including app-based entry systems, optional meal plans, and professional 
                  housekeeping services. Their tech-enabled approach appeals to young professionals who prefer 
                  a contemporary living experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">App-based Entry</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Housekeeping</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Multiple Locations</span>
                </div>
              </div>

              {/* Padhmavathiamma Women's Hostel */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">5. Padhmavathiamma Women's Hostel</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.1/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Near KGISL Tech Park</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Double, Triple Sharing</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Padhmavathiamma Women's Hostel is located near KGISL Tech Park, making it convenient for IT 
                  professionals working in that area. The hostel is known for its homestyle meals and 
                  family-like atmosphere. It provides basic security features including CCTV and a resident warden.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Homestyle Meals</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Near KGISL</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Family Atmosphere</span>
                </div>
              </div>

              {/* Krishh Brindaavan Women's Hostel */}
              <div className="bg-card rounded-xl shadow-lg p-6 mb-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-foreground">6. Krishh Brindaavan Women's Hostel</h3>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">4.0/5</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Saravanampatti</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Single, Double Sharing</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Krishh Brindaavan is a women's hostel in Saravanampatti that offers meals and basic amenities 
                  for working women and students. The hostel provides security features and maintains a 
                  disciplined environment suitable for those who prefer a structured living arrangement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Meals Provided</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Security Guard</span>
                  <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full">Disciplined Environment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                How to Choose the Right Women's Hostel
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" /> Location
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Choose a hostel close to your workplace or college. If you work at CHIL SEZ IT Park or Adithya Techno Park, 
                    The Royal Nest is ideal. For KGISL employees, consider Padhmavathiamma.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" /> Security
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Look for biometric entry, CCTV surveillance, and 24/7 warden presence. 
                    The Royal Nest offers all three, making it one of the most secure options.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-primary" /> Food Options
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Decide if you prefer meals included or cooking flexibility. The Royal Nest 
                    offers kitchen facilities, while others provide meal plans.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Wifi className="h-5 w-5 text-primary" /> Amenities
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Consider WiFi quality, power backup, laundry facilities, and AC availability 
                    based on your needs and comfort requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`} className="bg-card rounded-xl px-6 border">
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Looking for a Safe, Modern Women's Hostel in Saravanampatti?
              </h2>
              <p className="text-lg opacity-90 mb-8">
                The Royal Nest offers premium accommodation with top-notch security, modern amenities, 
                and a prime location near CHIL SEZ IT Park and Adithya Techno Park. Schedule a visit today!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Book a Visit
                  </Button>
                </Link>
                <Link to="/womens-hostel-saravanampatti">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    View The Royal Nest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TopWomensHostelsSaravanampatti;
