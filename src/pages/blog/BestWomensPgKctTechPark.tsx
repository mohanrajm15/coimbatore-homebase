import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect } from "react";

const BestWomensPgKctTechPark = () => {
  useEffect(() => {
    document.title = "Best Women's PGs Near KCT Tech Park Coimbatore | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Complete guide to finding the best ladies hostel near KCT Tech Park Saravanampatti. AC rooms, WiFi, security, and affordable monthly rent for working women.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/blog/best-womens-pg-kct-tech-park');

    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Best Women's PGs Near KCT Tech Park – Complete Guide",
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
      "datePublished": "2026-01-02",
      "dateModified": "2026-01-02",
      "description": "Complete guide to finding the best ladies hostel near KCT Tech Park Saravanampatti. AC rooms, WiFi, security.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://theroyalneststudiohouse.com/blog/best-womens-pg-kct-tech-park"
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
      <Breadcrumbs />
      
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-4xl font-bold mb-4">
                Best Women's PGs Near KCT Tech Park – Complete Guide
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Saravanampatti, Coimbatore</span>
                <span className="mx-2">•</span>
                <span>January 2, 2026</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Finding a safe and comfortable ladies hostel near KCT Tech Park in Saravanampatti is crucial for working women. The Royal Nest Studio House offers AC rooms with modern amenities just 2 km from the tech park. Our women-only PG features high-speed WiFi, 24/7 security, and housekeeping services. Monthly rent starts at ₹8,500 for Deluxe rooms (triple occupancy) and ₹11,500 for Suite rooms (triple occupancy). Located in the heart of Saravanampatti, we're also close to KGISL Campus and Adithya Techno Park. With furnished rooms, power backup, and a fully equipped common kitchen, working professionals enjoy hassle-free living. Our ladies hostel prioritizes safety with CCTV surveillance and secure entry systems. Whether you're looking for a PG near tech parks or colleges, our location offers excellent connectivity. Visit our womens hostel in Saravanampatti Coimbatore today and experience comfortable, affordable living designed for independent women.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold mb-4">Why Choose Our Ladies Hostel?</h2>
                  <ul className="space-y-2">
                    <li>✓ Only 2-3 km from KCT Tech Park and KGISL</li>
                    <li>✓ Women's hostel with 24/7 security</li>
                    <li>✓ AC rooms with attached bathrooms</li>
                    <li>✓ Affordable monthly rent with no hidden costs</li>
                    <li>✓ High-speed WiFi and power backup</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg">
                    Schedule a Visit to Our Ladies Hostel
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

export default BestWomensPgKctTechPark;
