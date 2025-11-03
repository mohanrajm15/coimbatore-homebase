import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote } from "lucide-react";
import { useEffect } from "react";

const testimonials = [
  {
    name: "Priyanka M",
    role: "Software Engineer at KGISL",
    image: "PS",
    rating: 5,
    text: "Moving to Coimbatore for work was stressful, but The Royal Nest Studio House made it so easy. The location is perfect - just 10 minutes from my office. The community here is amazing, and I've made some great friends!"
  },
  {
    name: "Uma krishnan",
    role: "Student at SNS College",
    image: "RK",
    rating: 5,
    text: "As a student, I needed something affordable yet comfortable. The shared living option is perfect for my budget, and the study lounge is great for group projects. Highly recommend!"
  },
  {
    name: "Ananya Reddy",
    role: "Business Analyst",
    image: "AR",
    rating: 5,
    text: "The Studio room is spacious and well-maintained. Love having my own kitchen! The management is very responsive, and the area has everything I need nearby. Worth every rupee."
  },
  {
    name: "Anu Venkat",
    role: "Corporate Intern",
    image: "KV",
    rating: 5,
    text: "My 6-month internship stay was wonderful here. Clean rooms, reliable WiFi, and the location near Adithya Techno Park saved me so much commute time. Will definitely come back!"
  },
  {
    name: "Sneha Iyer",
    role: "Freelance Designer",
    image: "SI",
    rating: 5,
    text: "Working from home needs good internet and a quiet space - got both here! The community is respectful, and the common areas are perfect for taking breaks. Feels like home."
  },
  {
    name: "Arthi Manohar",
    role: "Graduate Student",
    image: "AM",
    rating: 5,
    text: "Been here for almost a year now. The flexibility in payment and transparent pricing really helped me plan my finances. Plus, the proximity to college is unbeatable!"
  }
];

const Testimonials = () => {
  useEffect(() => {
    document.title = "Testimonials - Ladies Hostel Reviews Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Read reviews from residents of our womens hostel in Saravanampatti. Working women and students share their experience at The Royal Nest ladies PG.");
    }
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/testimonials');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                What Our Residents Say
              </h1>
              <p className="text-xl text-muted-foreground">
                Real experiences from students and professionals who call The Royal Nest Studio House home
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-2xl shadow-medium hover:shadow-large transition-smooth"
                >
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  
                  <div className="flex items-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Happy Residents</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4.8</div>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Renewal Rate</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join Our Growing Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Experience the Royal Nest Studio House difference for yourself
            </p>
            <a href="/contact">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-smooth">
                Schedule a Visit
              </button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;
