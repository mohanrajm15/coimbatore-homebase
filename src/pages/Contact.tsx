import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  duration: z.string().trim().min(1, "Duration is required"),
  message: z.string().trim().max(500, "Message too long")
});

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us - Ladies Hostel Saravanampatti | The Royal Nest";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact The Royal Nest womens hostel in Saravanampatti. Book a visit to our ladies PG near tech parks in Coimbatore. Call or WhatsApp us today.");
    }
  }, []);

  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    duration: "",
    message: ""
  });

  const handleWhatsApp = () => {
    const phoneNumber = "919629313135";
    const message = encodeURIComponent("Hello. I am interested");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      contactSchema.parse(formData);
      
      setIsSubmitting(true);
      
      // Format message for WhatsApp
      const phoneNumber = "919629313135";
      let whatsappMessage = `*New Enquiry from Website*\n\n`;
      whatsappMessage += `*Name:* ${formData.name}\n`;
      whatsappMessage += `*Phone:* ${formData.phone}\n`;
      whatsappMessage += `*Duration of Stay:* ${formData.duration}\n`;
      if (formData.message) {
        whatsappMessage += `*Message:* ${formData.message}`;
      }
      
      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

      toast({
        title: "Opening WhatsApp",
        description: "Your enquiry will be sent via WhatsApp.",
      });
      
      setFormData({ name: "", phone: "", duration: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Have questions? We're here to help you find your perfect long-stay home
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card p-8 rounded-2xl shadow-medium">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      maxLength={100}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      maxLength={15}
                    />
                  </div>

                  <div>
                    <Label htmlFor="duration">Duration of Stay *</Label>
                    <Input
                      id="duration"
                      placeholder="e.g., 6 months, 1 year"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      maxLength={500}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </Button>
                </form>

                <div className="mt-6">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Or Chat on WhatsApp
                  </Button>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          3, Mahalakshmi Garden Phase III<br />
                          near Adithya Techno Park<br />
                          Saravanampatti, Coimbatore - 641035
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <a href="tel:+919629313135" className="text-primary hover:underline">
                          +91 96293 13135
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <a href="mailto:theroyalnest6666@gmail.com" className="text-primary hover:underline">
                          theroyalnest6666@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM<br />
                    Sunday: 10:00 AM - 5:00 PM
                  </p>
                </div>

                <div className="bg-primary/10 p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-muted-foreground">
                    We typically respond to enquiries within 2-4 hours during office hours. 
                    For urgent matters, please call or WhatsApp us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
