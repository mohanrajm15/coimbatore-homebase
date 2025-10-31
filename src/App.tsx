import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Rooms from "./pages/Rooms";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import BestWomensPgKctTechPark from "./pages/blog/BestWomensPgKctTechPark";
import WorkingWomensHostelSaravanampatti from "./pages/blog/WorkingWomensHostelSaravanampatti";
import LadiesHostelMonthlyRentCoimbatore from "./pages/blog/LadiesHostelMonthlyRentCoimbatore";
import SafeWomensAccommodationCoimbatore from "./pages/blog/SafeWomensAccommodationCoimbatore";
import PgNearCollegesSaravanampatti from "./pages/blog/PgNearCollegesSaravanampatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/best-womens-pg-kct-tech-park" element={<BestWomensPgKctTechPark />} />
        <Route path="/blog/working-womens-hostel-saravanampatti" element={<WorkingWomensHostelSaravanampatti />} />
        <Route path="/blog/ladies-hostel-monthly-rent-coimbatore" element={<LadiesHostelMonthlyRentCoimbatore />} />
        <Route path="/blog/safe-womens-accommodation-coimbatore" element={<SafeWomensAccommodationCoimbatore />} />
        <Route path="/blog/pg-near-colleges-saravanampatti" element={<PgNearCollegesSaravanampatti />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
