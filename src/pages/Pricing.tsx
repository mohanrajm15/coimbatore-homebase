import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pricingPlans = [
  {
    title: "Deluxe Room",
    price: "₹8,000",
    deposit: "₹16,000",
    description: "Ideal for students",
    features: [
      "Private Bedroom",
      "Kitchen facilities",
      "Attached bathroom",
      "Fully furnished",
      "High-speed WiFi",
      "AC available",
      "Balcony access",
      "Power backup",
      "Housekeeping",
      "Dedicated parking"
    ],
    recommended: true
  },
  {
    title: "Studio Room",
    price: "₹12,000",
    deposit: "₹24,000",
    description: "Best for working professional",
    features: [
      "Private Bedroom",
      "Kitchen facilities",
      "Separate living area",
      "Attached bathroom",
      "Fully furnished",
      "High-speed WiFi",
      "AC available",
      "Balcony access",
      "Power backup",
      "Housekeeping",
      "Dedicated parking"
    ],
    recommended: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                👩 Women-Only Property
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transparent Pricing
              </h1>
              <p className="text-xl text-muted-foreground">
                Contact us for pricing. All-inclusive rates with no hidden charges.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index}
                  className={`relative bg-card rounded-2xl p-8 shadow-medium hover:shadow-large transition-smooth ${
                    plan.recommended ? 'border-2 border-primary' : ''
                  }`}
                >
                  {plan.recommended && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Recommended
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Security Deposit: {plan.deposit}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button 
                      className="w-full"
                      variant={plan.recommended ? "default" : "outline"}
                    >
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
                What's Included in All Rooms
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "High-speed WiFi included",
                  "24/7 CCTV security",
                  "Power backup",
                  "Municipality Water",
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
                    Refunded within 30 days of checkout after deducting any damages.
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
                    Electricity charges not included.
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
