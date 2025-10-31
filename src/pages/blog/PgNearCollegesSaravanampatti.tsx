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
                  Finding a student-friendly ladies hostel near SNS and Kumaraguru colleges is essential for academic success. The Royal Nest Studio House in Saravanampatti offers ideal accommodation for female students with study-conducive environments. Our womens hostel provides quiet study areas, high-speed WiFi for online classes and research, and comfortable AC rooms for focused learning. Monthly rent starting at ₹6,000 makes our PG affordable for students on budget. Location matters significantly – we're conveniently located near both SNS College and Kumaraguru College of Technology with excellent bus connectivity. Students appreciate our common areas for group study and social interaction. The ladies hostel features a fully equipped kitchen where students can prepare nutritious meals affordably. Safety is prioritized with 24/7 security and women-only accommodation. Power backup ensures uninterrupted study during exams. Our furnished rooms with attached bathrooms provide privacy and comfort. Proximity to colleges reduces commute time, allowing more study hours. Student residents enjoy a supportive community atmosphere ideal for college life in Saravanampatti Coimbatore.
                </p>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold mb-4">Student-Friendly Features</h2>
                  <ul className="space-y-2">
                    <li>✓ Quiet study areas and common spaces</li>
                    <li>✓ High-speed WiFi for online classes</li>
                    <li>✓ Near SNS and Kumaraguru colleges</li>
                    <li>✓ Affordable rent starting at ₹6,000/month</li>
                    <li>✓ Common kitchen for budget meals</li>
                  </ul>
                </div>
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
