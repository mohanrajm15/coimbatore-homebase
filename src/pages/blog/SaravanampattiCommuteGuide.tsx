import Navbar from "@/components/Navbar";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { useEffect } from "react";

const URL = "https://theroyalneststudiohouse.com/blog/saravanampatti-commute-guide";
const TITLE = "Getting Around Saravanampatti: A Commute Guide for Women Students and IT Freshers (2026)";
const DESC = "How to reach Saravanampatti from Coimbatore Airport and Gandhipuram, addresses for KGiSL, CHIL SEZ IT Park and Kumaraguru, and official transport links.";

const ext = "text-primary underline";
const a = (href: string, label: string) => (
  <a className={ext} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
);

const SaravanampattiCommuteGuide = () => {
  useEffect(() => {
    document.title = "Saravanampatti Commute Guide 2026 | The Royal Nest";
    ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]'].forEach((s) =>
      document.querySelector(s)?.setAttribute("content", DESC)
    );
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", URL);

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: TITLE,
      author: { "@type": "Organization", name: "The Royal Nest Studio House" },
      publisher: {
        "@type": "Organization",
        name: "The Royal Nest Studio House",
        logo: { "@type": "ImageObject", url: "https://theroyalneststudiohouse.com/logo.png" },
      },
      datePublished: "2026-03-12",
      dateModified: "2026-03-12",
      description: DESC,
      mainEntityOfPage: { "@type": "WebPage", "@id": URL },
    };
    let script = document.querySelector('script[data-schema="article"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-schema", "article");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/blog" className="inline-flex items-center text-primary mb-6 hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>

              <h1 className="text-4xl font-bold mb-4">{TITLE}</h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Saravanampatti, Coimbatore</span>
                <span className="mx-2">•</span>
                <span>March 12, 2026</span>
              </div>

              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Moving to Saravanampatti for college or your first IT job? Here's what you need to know about the main destinations, getting in from the airport and city centre, and where to find official transport information.
                </p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Know your destination</h2>
                <p>Saravanampatti has three main campuses. They're separate places, so use the full address from your offer letter or admission letter.</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-base border border-border">
                    <thead className="bg-accent text-foreground">
                      <tr>
                        <th className="p-3 text-left">Destination</th>
                        <th className="p-3 text-left">Address</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="p-3 font-semibold text-foreground">KGiSL Campus (incl. KGiSL Institute of Technology)</td>
                        <td className="p-3">365, Thudiyalur Road, Saravanampatti – 641035</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 font-semibold text-foreground">CHIL SEZ IT Park</td>
                        <td className="p-3">IndiaLand Tech Park, CHIL SEZ Road, Keeranatham – 641035</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="p-3 font-semibold text-foreground">Kumaraguru Campus</td>
                        <td className="p-3">Saravanampatti, Chinnavedampatti (Post) – 641049</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm">
                  Sources: {a("https://www.kgisl.com/contact-us/", "KGiSL")}, {a("https://indialand.net/contact/", "IndiaLand")}, {a("https://kumaraguru.in/contact.html", "Kumaraguru")}.
                </p>
                <p>A tech park has several buildings, so ask HR which building and gate is yours before your first day.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Arriving in Coimbatore</h2>
                <p>
                  <strong className="text-foreground">By air:</strong> Coimbatore Airport has <strong className="text-foreground">prepaid taxi counters</strong> and a <strong className="text-foreground">TNSTC bus to Gandhipuram</strong>. There's no direct bus from the airport to Saravanampatti. With luggage, a prepaid taxi straight to your hostel is the easiest option. ({a("https://www.aai.aero/en/airports/transport/coimbatore", "AAI")})
                </p>
                <p>
                  <strong className="text-foreground">By bus:</strong> Gandhipuram has the city's town and government bus stands, and buses run from there to Saravanampatti. ({a("https://ccmc.gov.in/index.php/createpage/bus-services", "Coimbatore Corporation")})
                </p>
                <p><strong className="text-foreground">Tip:</strong> Save your hostel's exact location pin and share it with your taxi or auto driver.</p>

                <h2 className="text-2xl font-bold text-foreground pt-4">Getting around daily</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-foreground">Town buses</strong> run between Gandhipuram and Saravanampatti. Coimbatore Corporation publishes a route directory.</li>
                  <li><strong className="text-foreground">Autos and app-booked rides</strong> are useful for short trips within Saravanampatti.</li>
                  <li><strong className="text-foreground">Living close to your campus</strong> is the easiest way to keep your daily commute short.</li>
                </ul>

                <h2 className="text-2xl font-bold text-foreground pt-4">Official transport links</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{a("https://ccmc.gov.in/index.php/createpage/bus-services", "Coimbatore Corporation bus services and route directory")}</li>
                  <li>{a("https://www.tnstc.in/inner_pages_2024/contactus.html", "TNSTC contact page")}</li>
                  <li>{a("https://www.tnstc.in/OTRSOnline/", "TNSTC online reservations")} (for long-distance trips home)</li>
                  <li>{a("https://www.aai.aero/en/airports/transport/coimbatore", "Coimbatore Airport transport")}</li>
                </ul>

                <div className="bg-secondary/10 p-6 rounded-lg my-8">
                  <h2 className="text-2xl font-bold text-foreground mb-4">Stay close to where you work and study</h2>
                  <p>
                    The Royal Nest Studio House is a women-only hostel at <strong className="text-foreground">3, Mahalakshmi Garden Phase III, Saravanampatti, Coimbatore – 641035</strong>, in the same area as KGiSL, CHIL SEZ IT Park and Kumaraguru. See our <Link className={ext} to="/location">Location page</Link> for nearby places, or browse the <Link className={ext} to="/rooms">rooms</Link>.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold mb-4">Looking for a safe, modern women's hostel in Saravanampatti?</h2>
                <Link to="/contact">
                  <Button size="lg">Book a Visit</Button>
                </Link>
                <p className="mt-4 text-muted-foreground">Or WhatsApp +91 96293 13135</p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default SaravanampattiCommuteGuide;
