import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect } from "react";

const PgNearCollegesSaravanampatti = () => {
  useEffect(() => {
    document.title = "Best PG Near SNS and Kumaraguru College | Student Guide - The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Find affordable ladies hostels near SNS and Kumaraguru colleges in Saravanampatti. Student-friendly PG with study areas, WiFi, and good connectivity.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/blog/pg-near-colleges-saravanampatti');

    // Add Article Schema
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "Best PG Near SNS and Kumaraguru College - Student Guide",
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
      "datePublished": "2025-01-05",
      "dateModified": "2025-11-06",
      "description": "Find affordable ladies hostels near SNS and Kumaraguru colleges in Saravanampatti. Student-friendly PG with study areas.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://theroyalneststudiohouse.com/blog/pg-near-colleges-saravanampatti"
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
                Best PG Near SNS and Kumaraguru College - Student Guide
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Saravanampatti, Coimbatore</span>
                <span className="mx-2">•</span>
                <span>January 5, 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Finding a student-friendly <Link to="/" className="text-primary hover:underline">ladies hostel</Link> near SNS and Kumaraguru colleges is essential for academic success. The Royal Nest Studio House in Saravanampatti offers ideal accommodation for female students with study-conducive environments.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Why Location Matters for Students</h2>
                <p className="text-muted-foreground mb-4">
                  Our <Link to="/location" className="text-primary hover:underline">strategic location</Link> in Saravanampatti puts you close to both SNS College and Kumaraguru College of Technology. With excellent bus connectivity and ride-sharing services readily available, you'll save precious time on commutes and have more hours for studying or campus activities.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Study-Focused Amenities</h2>
                <p className="text-muted-foreground mb-4">
                  Our womens hostel provides quiet study areas perfect for exam preparation and assignment work. High-speed WiFi throughout the property ensures you can attend online classes, submit assignments, and conduct research without interruptions. Power backup guarantees uninterrupted study sessions even during outages.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Affordable Student Pricing</h2>
                <p className="text-muted-foreground mb-4">
                  We understand student budgets. <Link to="/pricing" className="text-primary hover:underline">Monthly rent</Link> starting at ₹8,500 for Deluxe rooms (triple occupancy) makes quality accommodation accessible. Our fully equipped common kitchen lets you prepare nutritious meals affordably, helping you manage your living expenses better.
                </p>

                <h2 className="text-2xl font-bold mb-4 mt-8">Safety & Community</h2>
                <p className="text-muted-foreground mb-4">
                  As a <Link to="/about" className="text-primary hover:underline">women-only property</Link>, safety is our priority. 24/7 security, CCTV surveillance, and secure entry systems give you and your family peace of mind. Our supportive community atmosphere helps you build lasting friendships with fellow students and young professionals.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold mb-4">Student-Friendly Features</h2>
                  <ul className="space-y-2">
                    <li>✓ Quiet study areas and common spaces</li>
                    <li>✓ High-speed WiFi for online classes</li>
                    <li>✓ Near SNS and Kumaraguru colleges</li>
                    <li>✓ Affordable rent starting at ₹8,500/month</li>
                    <li>✓ Minimum stay: 3 months</li>
                    <li>✓ Common kitchen for budget meals</li>
                  </ul>
                </div>

                <h2 className="text-2xl font-bold mb-4 mt-8">Ready to Focus on Your Studies?</h2>
                <p className="text-muted-foreground mb-4">
                  Don't let accommodation worries distract from your education. Visit our <Link to="/rooms" className="text-primary hover:underline">rooms page</Link> to see available options or check out our <Link to="/gallery" className="text-primary hover:underline">photo gallery</Link> to get a better feel for our property. <Link to="/contact" className="text-primary hover:underline">Schedule a visit</Link> today and see why students choose The Royal Nest Studio House for their college years.
                </p>
              </div>

              <div className="mt-12 text-center">
                <Link to="/contact">
                  <Button size="lg">
                    Book Your Student Accommodation
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

export default PgNearCollegesSaravanampatti;
