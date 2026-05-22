import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#bulk", label: "Bulk Orders" },
  { href: "#export", label: "Export" },
  { href: "#blog", label: "Journal" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // scroll-spy: find section closest to top
      let current = "";
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (!el) continue;
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= 140) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 font-display transition-all duration-500 ${
        scrolled ? "py-3 bg-forest-deep/85 backdrop-blur-xl border-b border-gold/15" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 text-cream">
          <Leaf className="h-6 w-6 text-gold" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-wide">
            R K <span className="text-gradient-gold">Tea Sales</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-display text-sm uppercase tracking-[0.22em] transition-colors ${
                  isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-gold"
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
        >
          Get Quote
        </a>

        <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-forest-deep/95 backdrop-blur-xl border-t border-gold/15 mt-3">
          <div className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-display text-sm uppercase tracking-widest transition-colors ${
                  active === l.href ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.header>
  );
}
