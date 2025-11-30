import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    document.title = "Blog - Ladies Hostel Tips & Guides | The Royal Nest Saravanampatti";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Expert guides on finding ladies hostels in Saravanampatti, Coimbatore. Tips for working women, students, and PG seekers near tech parks.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/blog');
  }, []);

  const blogPosts = [
    {
      id: "best-womens-pg-kct-tech-park",
      title: "Best Women's PGs Near KCT Tech Park – Complete Guide",
      excerpt: "Discover top-rated ladies hostels near KCT Tech Park in Saravanampatti with AC rooms, WiFi, and affordable monthly rent.",
      date: "2025-01-15",
      slug: "/blog/best-womens-pg-kct-tech-park"
    },
    {
      id: "working-womens-hostel-saravanampatti",
      title: "Working Women's Hostel in Saravanampatti: What to Look For",
      excerpt: "Essential checklist for working professionals seeking safe, comfortable ladies hostels near KGISL and Adithya Techno Park.",
      date: "2025-01-12",
      slug: "/blog/working-womens-hostel-saravanampatti"
    },
    {
      id: "ladies-hostel-monthly-rent-coimbatore",
      title: "Ladies Hostel Monthly Rent in Coimbatore: Price Guide 2025",
      excerpt: "Comprehensive breakdown of ladies hostel rental costs in Saravanampatti area, including AC PG options and amenities.",
      date: "2025-01-10",
      slug: "/blog/ladies-hostel-monthly-rent-coimbatore"
    },
    {
      id: "safe-womens-accommodation-coimbatore",
      title: "Safe Women's Accommodation in Coimbatore: Top 5 Tips",
      excerpt: "How to choose a secure ladies hostel in Saravanampatti with 24/7 security, CCTV, and women-only environment.",
      date: "2025-01-08",
      slug: "/blog/safe-womens-accommodation-coimbatore"
    },
    {
      id: "pg-near-colleges-saravanampatti",
      title: "Best PG Near SNS and Kumaraguru College - Student Guide",
      excerpt: "Find affordable ladies hostels near top colleges in Saravanampatti with study-friendly amenities and good connectivity.",
      date: "2025-01-05",
      slug: "/blog/pg-near-colleges-saravanampatti"
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
                Ladies Hostel Guides & Tips
              </h1>
              <p className="text-lg opacity-90">
                Expert advice for finding the perfect womens hostel in Saravanampatti Coimbatore
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-large transition-shadow">
                  <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={post.slug}>
                      <Button variant="link" className="p-0">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Find Your Perfect Accommodation?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Visit our ladies hostel in Saravanampatti and experience comfortable living near tech parks
            </p>
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Schedule a Visit Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
