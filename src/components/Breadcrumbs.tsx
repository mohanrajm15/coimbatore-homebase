import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useEffect } from "react";

const routeNames: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "rooms": "Rooms",
  "gallery": "Gallery",
  "location": "Location",
  "pricing": "Pricing",
  "testimonials": "Testimonials",
  "contact": "Contact",
  "faq": "FAQ",
  "blog": "Blog",
  "best-womens-pg-kct-tech-park": "Best Women's PG Near KCT Tech Park",
  "working-womens-hostel-saravanampatti": "Working Women's Hostel Saravanampatti",
  "ladies-hostel-monthly-rent-coimbatore": "Ladies Hostel Monthly Rent",
  "safe-womens-accommodation-coimbatore": "Safe Women's Accommodation",
  "pg-near-colleges-saravanampatti": "PG Near Colleges Saravanampatti",
  "best-womens-hostel-saravanampatti-2025": "Best Women's Hostel 2025 Guide",
  "womens-hostel-vs-pg-saravanampatti": "Hostel vs PG Comparison"
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  useEffect(() => {
    // Only run on client-side (not during SSR)
    if (typeof window === 'undefined') return;
    
    // Generate breadcrumb JSON-LD schema
    if (pathnames.length > 0) {
      const baseUrl = "https://theroyalneststudiohouse.com";
      const itemListElement = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        }
      ];

      let currentPath = "";
      pathnames.forEach((path, index) => {
        currentPath += `/${path}`;
        itemListElement.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": routeNames[path] || path,
          "item": `${baseUrl}${currentPath}`
        });
      });

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": itemListElement
      };

      // Remove existing breadcrumb schema if present
      const existingSchema = document.querySelector('script[data-breadcrumb-schema]');
      if (existingSchema) {
        existingSchema.remove();
      }

      // Add new breadcrumb schema
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb-schema', 'true');
      script.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }
  }, [location.pathname]);

  // Don't show breadcrumbs on homepage
  if (pathnames.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="bg-secondary/20 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Link 
              to="/" 
              className="flex items-center text-muted-foreground hover:text-primary transition-smooth"
            >
              <Home className="h-4 w-4" />
            </Link>
          </li>
          {pathnames.map((path, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const name = routeNames[path] || path;

            return (
              <li key={path} className="flex items-center space-x-2">
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                {isLast ? (
                  <span className="text-foreground font-medium">{name}</span>
                ) : (
                  <Link 
                    to={routeTo}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
