import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const roomBasics = [
  "Private Bedroom",
  "Attached bathroom",
  "Kitchen facilities",
  "Fully furnished",
  "Balcony access",
  "Dedicated parking"
];

const complimentaryAmenities = [
  "High-speed WiFi",
  "AC in room",
  "Bathroom geyser",
  "Housekeeping",
  "Power backup (generator)",
  "24/7 security"
];

const pricingPlans = [
  {
    title: "Deluxe Room (Triple sharing)",
    price: "₹8,500",
    deposit: "₹10,000",
    description: "Ideal for students",
    features: roomBasics
  },
  {
    title: "Deluxe Room (Twin sharing)",
    price: "₹9,500",
    deposit: "₹10,000",
    description: "Ideal for students",
    features: roomBasics
  },
  {
    title: "Studio Room (Triple sharing)",
    price: "₹11,500",
    deposit: "₹10,000",
    description: "Best for working professional",
    features: [...roomBasics.slice(0, 3), "Separate living area", ...roomBasics.slice(3)]
  }
];

const Pricing = () => {
  useEffect(() => {
    document.title = "Ladies Hostel Saravanampatti Rent: ₹8,500–₹11,500/Month (2026)";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Full rent card, no hidden charges: Deluxe triple ₹8,500, twin ₹9,500, Studio ₹11,500. ₹10,000 deposit, 3-month minimum, electricity billed at actuals. Compare us to any ladies hostel in Saravanampatti.");
    }
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", "Full rent card, no hidden charges: Deluxe triple ₹8,500, twin ₹9,500, Studio ₹11,500. ₹10,000 deposit, 3-month minimum, electricity billed at actuals. Compare us to any ladies hostel in Saravanampatti.");
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute("content", "Full rent card, no hidden charges: Deluxe triple ₹8,500, twin ₹9,500, Studio ₹11,500. ₹10,000 deposit, 3-month minimum, electricity billed at actuals. Compare us to any ladies hostel in Saravanampatti.");
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://theroyalneststudiohouse.com/pricing');
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩 Women's Hostel
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground">
                Room rent from ₹8,500/month. Amenities complimentary. No hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className="relative bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-smooth border-2 border-primary"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                      <p className="text-xs text-muted-foreground mt-1">Room rent only</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Security Deposit: {plan.deposit}
                    </p>
                  </div>

                  <p className="text-sm font-semibold mb-3">Your rent covers</p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm font-semibold mb-3">Complimentary</p>
                  <ul className="space-y-2 mb-8">
                    {complimentaryAmenities.map((item, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <Gift className="h-4 w-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Complimentary Amenities for All Residents
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "High-speed WiFi",
                  "AC in room",
                  "Bathroom geyser",
                  "Washing machine",
                  "Refrigerator",
                  "Hot & cold water dispenser",
                  "Housekeeping",
                  "Generator power backup",
                  "24/7 security & CCTV",
                  "Common area maintenance",
                  "Parking space",
                  "Community support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-8 max-w-2xl mx-auto">
                Your monthly rent is for the room only. These amenities are provided free of charge
                on a best-effort basis. Repairs and servicing are scheduled, not instant, and do not
                change the rent.
              </p>
            </div>
          </div>
        </section>

        {/* Terms Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Terms & Conditions</h2>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Minimum Stay Period</h3>
                  <p>All rentals require a minimum stay of 3 months.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Security Deposit</h3>
                  <p>
                    Refundable security deposit equivalent to 2 months' rent. 
                    Refunded within 1 week of checkout after deducting for damages (if any).
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Payment Terms</h3>
                  <p>
                    Rent to be paid monthly in advance by the 5th of each month. 
                    First month's rent + security deposit due at move-in.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Utilities</h3>
                  <p>
                    Water usage included. 
                    Electricity charges not included. Electricity charges to be paid every 2 months based on the actual usage.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Complimentary Amenities</h3>
                  <p>
                    Rent is charged for the room only. WiFi, AC, bathroom geyser, washing machine,
                    refrigerator, water dispenser, housekeeping, generator and security are complimentary
                    and not part of the rent. They may be serviced or paused for maintenance, and no rent
                    reduction applies during such downtime.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">Notice Period</h3>
                  <p>
                    30 days' advance notice required for move-out. 
                    Early termination subject to forfeiture of deposit.
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

export default Pricing;
