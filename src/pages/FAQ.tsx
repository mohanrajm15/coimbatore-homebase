import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FAQ = () => {
  useEffect(() => {
    document.title = "FAQ - Ladies Hostel Saravanampatti Coimbatore | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Common questions about our ladies hostel near Saravanampatti Coimbatore. Monthly rent, facilities, safety, and proximity to tech parks answered.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/faq');
    
    // Add complete FAQ schema
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
    
    let faqSchemaScript = document.querySelector('script[data-schema="faq"]');
    if (!faqSchemaScript) {
      faqSchemaScript = document.createElement('script');
      faqSchemaScript.setAttribute('type', 'application/ld+json');
      faqSchemaScript.setAttribute('data-schema', 'faq');
      document.head.appendChild(faqSchemaScript);
    }
    faqSchemaScript.textContent = JSON.stringify(faqSchema);
  }, []);

  const faqs = [
    {
      question: "What is the monthly rent for ladies hostel in Saravanampatti?",
      answer: "Our monthly rent ranges from ₹8,500 to ₹11,500 depending on room type. Deluxe rooms start at ₹8,500 per month for triple occupancy, while Suite rooms are ₹11,500 per month for triple occupancy. All rates include WiFi, housekeeping, and basic amenities."
    },
    {
      question: "Is the ladies hostel near KCT Tech Park and KGISL?",
      answer: "Yes, The Royal Nest Studio House is perfectly located near Saravanampatti, within 2-3 km from KCT Tech Park, KGISL Campus, and Adithya Techno Park. It's also close to CHIL-SEZ IT Park, making it ideal for working women."
    },
    {
      question: "Do you provide food in the ladies hostel?",
      answer: "We have a fully equipped common kitchen where residents can cook their own meals. This gives you the flexibility to prepare food according to your preferences. We also provide a refrigerator for food storage."
    },
    {
      question: "Is this a safe hostel for working women in Coimbatore?",
      answer: "Absolutely. The Royal Nest is an exclusive women's hostel with 24/7 security, CCTV surveillance, and secure entry systems. We prioritize the safety and comfort of all our residents."
    },
    {
      question: "What amenities are included in the womens hostel?",
      answer: "Our AC ladies hostel includes high-speed WiFi, power backup generator, housekeeping, washing machine, fully furnished rooms, study areas, and common recreational spaces. All rooms have attached bathrooms and storage facilities."
    },
    {
      question: "Is the PG near colleges like SNS and Kumaraguru?",
      answer: "Yes, we are conveniently located near SNS College and Kumaraguru College of Technology. The hostel is well-connected to major educational institutions in Saravanampatti and surrounding areas."
    },
    {
      question: "Do you have AC rooms in the womens hostel?",
      answer: "Yes, all our rooms are air-conditioned. Whether you choose a Deluxe Room or Suite Room, you'll enjoy comfortable AC accommodation with modern amenities."
    },
    {
      question: "What is the distance from bus stop and public transport?",
      answer: "The hostel is within walking distance from local bus stops and has excellent connectivity to Coimbatore city. Auto-rickshaws and app-based cabs are readily available in Saravanampatti."
    },
    {
      question: "Can I visit the ladies hostel before booking?",
      answer: "Yes, we encourage prospective residents to visit and see the facilities. Contact us to schedule a visit and tour our beautiful women's hostel in Saravanampatti."
    },
    {
      question: "What is the minimum stay duration for the PG?",
      answer: "We require a minimum stay of 3 months, making it perfect for students and working professionals looking for stable, comfortable housing."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg opacity-90">
                Find answers about our ladies hostel in Saravanampatti Coimbatore
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <MessageCircle className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">
                Still Have Questions?
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is here to help you find the perfect accommodation at our womens hostel in Saravanampatti
              </p>
              <Link to="/contact">
                <Button size="lg">
                  Contact Us Today
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

export default FAQ;
