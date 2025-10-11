import { Wifi, ShieldCheck, Utensils, Car, Sparkles, Clock } from "lucide-react";

const features = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Reliable fiber internet perfect for remote work and streaming"
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "CCTV surveillance and secure access for your peace of mind"
  },
  {
    icon: Utensils,
    title: "Kitchen Access",
    description: "Fully equipped shared kitchen for home-cooked meals"
  },
  {
    icon: Car,
    title: "Free Parking",
    description: "Safe parking space for bikes and cars"
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Regular cleaning services included in your rent"
  },
  {
    icon: Clock,
    title: "Power Backup",
    description: "Uninterrupted power supply for all your needs"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Comfortable Living
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've thought of everything to make your long stay feel like home
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-smooth"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
