import { Wifi, ShieldCheck, Coffee, Car, Sparkles, Users, Droplet, Home } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Women's Hostel",
    description: "Safe and secure accommodation exclusively for women students and professionals"
  },
  {
    icon: ShieldCheck,
    title: "24/7 Security",
    description: "Biometric access, 20 CCTV cameras, security personnel, and hostel manager on-site"
  },
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Free 200 Mbps WiFi with option for private WiFi and cable TV"
  },
  {
    icon: Coffee,
    title: "Kitchen in all rooms",
    description: "Every room has a kitchen area for self-cooking with personal appliances"
  },
  {
    icon: Home,
    title: "Spacious Balconies",
    description: "All rooms feature open-air balconies with city or garden views"
  },
  {
    icon: Droplet,
    title: "Water & Amenities",
    description: "Municipality water supply, hot/cold water dispenser, and refrigerators on each floor"
  },
  {
    icon: Car,
    title: "Parking Space",
    description: "2,500 sq ft parking with covered 2-wheeler parking and free 4-wheeler parking"
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description: "Twice a week cleaning service included, additional cleaning on request"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need for Safe & Comfortable Living
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Newly opened in September 2025 with premium amenities across a built up area of 11,000 sq.ft
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
