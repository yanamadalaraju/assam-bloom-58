import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { BulkOrder } from "@/components/BulkOrder";
import { ExportSection } from "@/components/Export";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { OffersPopup } from "@/components/OffersPopup";
import { ProcessPopup } from "@/components/ProcessPopup";
import { DistributorSection } from "@/components/DistributorSection";
import { CatalogueSection } from "@/components/CatalogueSection";
import { DealerBenefitsSection } from "@/components/DealerBenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "R K Tea Sales — Premium Assam Tea Exports & Wholesale" },
      { name: "description", content: "Luxury Assam tea sourced directly from the gardens of Northeast India. Premium CTC, Orthodox, Green & custom export blends for wholesale buyers worldwide." },
      { property: "og:title", content: "R K Tea Sales — Premium Assam Tea" },
      { property: "og:description", content: "Premium Assam tea exports & wholesale. From the gardens of Northeast India to discerning buyers worldwide." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream text-foreground overflow-x-hidden font-display">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <BulkOrder />
      <ExportSection />
      {/* <DistributorSection /> */}
      {/* <CatalogueSection /> */}
      <DealerBenefitsSection />
      <TestimonialsSection />
      <Blog />
      <Contact />
      <Footer />
      <OffersPopup />
      <ProcessPopup />
    </main>
  );
}
