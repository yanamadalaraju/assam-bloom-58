import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send, ArrowUp, Heart, Award, Clock, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "About", href: "#about" },
        { name: "Products", href: "#products" },
        { name: "Bulk Orders", href: "#bulk" },
        { name: "Export", href: "#export" },
        { name: "Journal", href: "/blog" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Tea Guide", href: "#" },
        { name: "Certifications", href: "#" },
        { name: "Shipping Policy", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "FAQs", href: "#" },
      ]
    }
  ];

  const socialLinks = [
    { Icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
    { Icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-600" },
    { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" },
    { Icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:bg-sky-500" },
  ];

  return (
    <>
      <footer className="relative bg-gradient-to-b from-forest-deep to-forest-deep/95 pt-16 pb-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>
        
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.1) 1px, transparent 0)",
          backgroundSize: "50px 50px"
        }} />

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-8 pb-12">
            {/* Brand Section */}
            <div className="md:col-span-4">
              <a href="#" className="inline-flex items-center gap-2 text-cream mb-4 group">
                <div className="relative">
                  <Leaf className="h-8 w-8 text-gold transition-transform group-hover:rotate-12 duration-300" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-gold/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="font-display text-2xl tracking-wide">
                  R K <span className="text-gradient-gold">Tea Sales</span>
                </span>
              </a>
              
              <p className="text-cream/70 text-sm leading-relaxed mb-6 max-w-md">
                Premium Assam tea, sourced directly from the gardens and delivered with care
                to discerning buyers around the world since 1985.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-cream/60 hover:text-cream transition-colors group">
                  <Mail className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <a href="mailto:hello@rkteasales.com" className="text-sm">hello@rkteasales.com</a>
                </div>
                <div className="flex items-center gap-3 text-cream/60 hover:text-cream transition-colors group">
                  <Phone className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <a href="tel:+919999999999" className="text-sm">+91 99999 99999</a>
                </div>
                <div className="flex items-center gap-3 text-cream/60">
                  <MapPin className="w-4 h-4 text-gold" />
                  <span className="text-sm">Dibrugarh, Assam, India</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerLinks.map((section, idx) => (
              <div key={idx} className="md:col-span-2">
                <div className="flex items-center gap-2 mb-5">
                  <div className="h-px w-6 bg-gold/60" />
                  <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                    {section.title}
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-cream/60 hover:text-gold text-sm transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div className="md:col-span-4">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-6 bg-gold/60" />
                <div className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
                  Newsletter
                </div>
              </div>
              
              <p className="text-cream/70 text-sm mb-5 leading-relaxed">
                Subscribe to receive tea stories, harvest updates, and exclusive offers.
              </p>
              
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-cream/5 border border-gold/30 rounded-xl py-3 px-4 pr-24 outline-none text-cream text-sm placeholder:text-cream/40 focus:border-gold transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className={`absolute right-1 top-1 bottom-1 px-4 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                      subscribed
                        ? "bg-green-500 text-white"
                        : "bg-gradient-gold text-forest-deep hover:scale-105"
                    }`}
                  >
                    {subscribed ? (
                      <>
                        <span>Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Subscribe</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
              
              {/* Trust Badges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-cream/50 text-xs">
                  <Shield className="w-3.5 h-3.5 text-gold" />
                  <span>100% Authentic Assam Tea</span>
                </div>
                <div className="flex items-center gap-2 text-cream/50 text-xs">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  <span>24/7 Customer Support</span>
                </div>
                <div className="flex items-center gap-2 text-cream/50 text-xs">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span>FSSAI Certified Exporter</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-forest-deep rounded-full flex items-center justify-center border border-gold/30">
              <Leaf className="w-4 h-4 text-gold" />
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8">
            <div className="flex items-center gap-6">
              <span className="text-cream/40 text-xs uppercase tracking-[0.2em]">
                © {new Date().getFullYear()} R K Tea Sales
              </span>
              <span className="text-cream/30 text-xs">|</span>
              <span className="text-cream/40 text-xs uppercase tracking-[0.2em] flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-red-400 animate-pulse" /> in Assam
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
}