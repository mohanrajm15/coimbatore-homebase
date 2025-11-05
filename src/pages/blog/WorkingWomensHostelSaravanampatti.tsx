import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect } from "react";

const WorkingWomensHostelSaravanampatti = () => {
  useEffect(() => {
    document.title = "Working Women's Hostel in Saravanampatti | Safety Checklist - The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Essential checklist for choosing a safe ladies hostel in Saravanampatti near KGISL and Adithya Techno Park. What working women should look for in a PG.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/blog/working-womens-hostel-saravanampatti');

    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Working Women's Hostel in Saravanampatti: What to Look For",
      "author": {
        "@type": "Organization",
        "name": "The Royal Nest Studio House"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Royal Nest Studio House",
        "logo": {
          "@type": "ImageObject",
          "url": "https://theroyalneststudiohouse.com/logo.png"
        }
      },
      "datePublished": "2025-01-12",
      "dateModified": "2025-01-12",
      "description": "Essential checklist for choosing a safe ladies hostel in Saravanampatti near KGISL and Adithya Techno Park.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://theroyalneststudiohouse.com/blog/working-womens-hostel-saravanampatti"
      }
    };

    let articleSchemaScript = document.querySelector('script[data-schema="article"]');
    if (!articleSchemaScript) {
      articleSchemaScript = document.createElement('script');
      articleSchemaScript.setAttribute('type', 'application/ld+json');
      articleSchemaScript.setAttribute('data-schema', 'article');
      document.head.appendChild(articleSchemaScript);
    }
    articleSchemaScript.textContent = JSON.stringify(articleSchema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-4xl font-bold mb-4">
                Working Women's Hostel in Saravanampatti: What to Look For
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Saravanampatti, Coimbatore</span>
                <span className="mx-2">•</span>
                <span>January 12, 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Choosing the right ladies hostel in Saravanampatti requires careful consideration, especially for working women. First, prioritize safety features like 24/7 security, CCTV surveillance, and women-only accommodation. The Royal Nest Studio House offers all these essentials near KGISL and Adithya Techno Park. Second, check proximity to your workplace – our PG is within 2-3 km of major IT parks in Saravanampatti. Third, verify amenities like AC rooms, WiFi, and power backup generator. Monthly rent should be transparent with no hidden charges. Our ladies hostel charges ₹8,500 for Deluxe rooms and ₹11,500 for Suite rooms (both triple occupancy). Fourth, inspect room quality and housekeeping standards. We provide fully furnished rooms with attached bathrooms and regular cleaning. Fifth, evaluate community spaces and kitchen facilities. Our womens hostel in Coimbatore features common areas and a well-equipped kitchen. Finally, read reviews and visit personally. Working women deserve comfortable, secure accommodation near their workplace, making location crucial for daily commutes.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold mb-4">Essential Checklist for Working Women</h2>
                  <ul className="space-y-2">
                    <li>✓ 24/7 security and CCTV coverage</li>
                    <li>✓ Proximity to tech parks (under 3 km)</li>
                    <li>✓ Reliable WiFi and power backup</li>
                    <li>✓ Transparent pricing with no hidden fees</li>
                    <li>✓ Quality furnishings and housekeeping</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg">
                    Visit Our Working Women's Hostel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default WorkingWomensHostelSaravanampatti;
