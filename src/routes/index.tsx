// import { createFileRoute } from "@tanstack/react-router";
// import { Navbar } from "@/components/Navbar";
// import { Hero } from "@/components/Hero";
// import { About } from "@/components/About";
// import { Products } from "@/components/Products";
// import { BulkOrder } from "@/components/BulkOrder";
// import { ExportSection } from "@/components/Export";
// import { Blog } from "@/components/Blog";
// import { Contact } from "@/components/Contact";
// import { Footer } from "@/components/Footer";
// import { OffersPopup } from "@/components/OffersPopup";
// import { ProcessPopup } from "@/components/ProcessPopup";
// import { DistributorSection } from "@/components/DistributorSection";
// import { CatalogueSection } from "@/components/CatalogueSection";
// import { DealerBenefitsSection } from "@/components/DealerBenefitsSection";
// import { TestimonialsSection } from "@/components/TestimonialsSection";
// import JourneySection from "@/components/JourneySection";
// import { WhyRKTeaSection } from "@/components/WhyRKTeaSection";
// import { SourcingCertificationsSection } from "@/components/SourcingCertificationsSection";
// import VideoShowcaseSection from "@/components/VideoShowcaseSection";
// import { SubscriptionSection } from "@/components/SubscriptionSection";
// import { MapSection } from "@/components/MapSection";
// import MOQPricingSection from "@/components/MOQPricingSection";
// import FAQSection from "@/components/FAQSection";


// export const Route = createFileRoute("/")({
//   head: () => ({
//     meta: [
//       { title: "R K Tea Sales — Premium Assam Tea Exports & Wholesale" },
//       { name: "description", content: "Luxury Assam Tea sourced directly from the gardens of Northeast India. Premium CTC, Orthodox, Green & custom export blends for wholesale buyers worldwide." },
//       { property: "og:title", content: "R K Tea Sales — Premium Assam Tea" },
//       { property: "og:description", content: "Premium Assam Tea exports & wholesale. From the gardens of Northeast India to discerning buyers worldwide." },
//       { property: "og:type", content: "website" },
//     ],
//     links: [
//       { rel: "preconnect", href: "https://fonts.googleapis.com" },
//       { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
//       { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
//     ],
//   }),
//   component: Index,
// });

// function Index() {
//   return (
//     <main className="bg-cream text-foreground overflow-x-hidden font-display">
//       <Navbar />
//       <Hero />
   
//       <About />
      
//       <Products />
//       <JourneySection />
//       {/* <VideoShowcaseSection /> */}
//       <WhyRKTeaSection />
//       <BulkOrder />
//       <ExportSection />
//       {/* <DistributorSection /> */}
//       {/* <CatalogueSection /> */}
//       <DealerBenefitsSection />
//       <SourcingCertificationsSection />
//       <SubscriptionSection />
//       <TestimonialsSection />
//       <Blog />
      
//       <FAQSection />
//       <Contact />
    
//       <MOQPricingSection />
//       <MapSection />
//       <Footer />
//       <OffersPopup />
//       <ProcessPopup />
//     </main>
//   );
// }







// route.tsx (Updated)
import { createFileRoute } from "@tanstack/react-router";
import { HelmetProvider } from 'react-helmet-async';
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
import JourneySection from "@/components/JourneySection";
import { WhyRKTeaSection } from "@/components/WhyRKTeaSection";
import { SourcingCertificationsSection } from "@/components/SourcingCertificationsSection";
import VideoShowcaseSection from "@/components/VideoShowcaseSection";
import { SubscriptionSection } from "@/components/SubscriptionSection";
import { MapSection } from "@/components/MapSection";
import MOQPricingSection from "@/components/MOQPricingSection";
import FAQSection from "@/components/FAQSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adyaa Tea — Premium Assam Tea Exports & Wholesale" },
      { name: "description", content: "Adyaa Tea by R K Tea Sales. Premium Assam Tea sourced directly from the gardens of Northeast India. Wholesale & export since 1990." },
      { property: "og:title", content: "Adyaa Tea — Premium Assam Tea" },
      { property: "og:description", content: "Premium Assam Tea exports & wholesale. From the gardens of Northeast India to discerning buyers worldwide." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Adyaa Tea | R K Tea Sales" },
      { name: "keywords", content: "Adyaa Tea, Assam Tea, Premium Tea, Tea Export, Tea Wholesale, R K Tea Sales" },
      { name: "author", content: "R K Tea Sales" },
      { name: "robots", content: "index, follow" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap" },
      { rel: "canonical", href: "https://adyaatea.com" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <HelmetProvider>
      <main className="bg-cream text-foreground overflow-x-hidden font-display">
        <Navbar />
        <Hero />
        <About />
        <Products />
        <JourneySection />
        <WhyRKTeaSection />
        <BulkOrder />
        <ExportSection />
        <DealerBenefitsSection />
        <SourcingCertificationsSection />
        <SubscriptionSection />
        <TestimonialsSection />
        <Blog />
        <FAQSection />
        <Contact />
        <MOQPricingSection />
        <MapSection />
        <Footer />
        <OffersPopup />
        <ProcessPopup />
      </main>
    </HelmetProvider>
  );
}