// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Leaf, Menu, X } from "lucide-react";

// const links = [
//   { href: "#about", label: "About" },
//   { href: "#products", label: "Products" },
//   { href: "#bulk", label: "Bulk Orders" },
//   { href: "#export", label: "Export" },
//   { href: "#blog", label: "Journal" },
//   { href: "#contact", label: "Contact" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState<string>("");

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);

//       // scroll-spy: find section closest to top
//       let current = "";
//       for (const l of links) {
//         const el = document.querySelector(l.href);
//         if (!el) continue;
//         const rect = (el as HTMLElement).getBoundingClientRect();
//         if (rect.top <= 140) current = l.href;
//       }
//       setActive(current);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 font-display transition-all duration-500 ${
//         scrolled ? "py-3 bg-forest-deep/85 backdrop-blur-xl border-b border-gold/15" : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
//         <a href="#" className="flex items-center gap-2 text-cream">
//           <Leaf className="h-6 w-6 text-gold" strokeWidth={1.5} />
//           <span className="font-display text-xl tracking-wide">
//             R K <span className="text-gradient-gold">Tea Sales</span>
//           </span>
//         </a>

//         <nav className="hidden md:flex items-center gap-8">
//           {links.map((l) => {
//             const isActive = active === l.href;
//             return (
//               <a
//                 key={l.href}
//                 href={l.href}
//                 className={`relative font-display text-sm uppercase tracking-[0.22em] transition-colors ${
//                   isActive ? "text-gold" : "text-cream/80 hover:text-gold"
//                 }`}
//               >
//                 {l.label}
//                 {isActive && (
//                   <motion.span
//                     layoutId="nav-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-gold"
//                     transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                   />
//                 )}
//               </a>
//             );
//           })}
//         </nav>

//         <a
//           href="#contact"
//           className="hidden md:inline-flex items-center rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
//         >
//           Get Quote
//         </a>

//         <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {open && (
//         <div className="md:hidden bg-forest-deep/95 backdrop-blur-xl border-t border-gold/15 mt-3">
//           <div className="flex flex-col px-6 py-4 gap-4">
//             {links.map((l) => (
//               <a
//                 key={l.href}
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 className={`font-display text-sm uppercase tracking-widest transition-colors ${
//                   active === l.href ? "text-gold" : "text-cream/80 hover:text-gold"
//                 }`}
//               >
//                 {l.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </motion.header>
//   );
// }




// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Leaf, Menu, X, Home, Info, Package, Truck, BookOpen, Phone, FileText } from "lucide-react";
// import { Link, useLocation } from "@tanstack/react-router";

// const links = [
//   { href: "/", label: "Home", icon: Home, hash: "/" },
//   { href: "/", label: "About", icon: Info, hash: "#about" },
//   { href: "/", label: "Products", icon: Package, hash: "#products" },
//   { href: "/", label: "Bulk Orders", icon: Truck, hash: "#bulk" },
//   { href: "/", label: "Export", icon: FileText, hash: "#export" },
//   { href: "/blog", label: "Journal", icon: BookOpen },
//   { href: "/", label: "Contact", icon: Phone, hash: "#contact" },
// ];

// export function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState<string>("");
//   const location = useLocation();
//   const isBlogPage = location.pathname.startsWith("/blog");
//   const isHomePage = location.pathname === "/";

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);

//       // Only apply scroll-spy on homepage
//       if (isHomePage) {
//         let current = "";
//         for (const l of links) {
//           if (l.hash && l.hash !== "/") {
//             const el = document.querySelector(l.hash);
//             if (!el) continue;
//             const rect = (el as HTMLElement).getBoundingClientRect();
//             if (rect.top <= 140) current = l.hash;
//           }
//         }
//         setActive(current);
//       }
//     };
    
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, [isHomePage]);

//   const handleLinkClick = (link: typeof links[0]) => {
//     setOpen(false);
//     if (link.hash && link.hash !== "/" && link.href === "/") {
//       // If on blog page, navigate to homepage with hash
//       if (isBlogPage) {
//         window.location.href = `/${link.hash}`;
//       }
//     }
//   };

//   const isActiveLink = (link: typeof links[0]) => {
//     if (link.href === "/blog") {
//       return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
//     }
//     if (link.hash === "/") {
//       return location.pathname === "/";
//     }
//     if (link.hash && link.hash !== "/") {
//       return active === link.hash;
//     }
//     return false;
//   };

//   return (
//     <motion.header
//       initial={{ y: -40, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className={`fixed top-0 left-0 right-0 z-50 font-display transition-all duration-500 ${
//         scrolled 
//           ? "py-3 bg-forest-deep/95 backdrop-blur-xl border-b border-gold/15 shadow-lg" 
//           : isBlogPage || !isHomePage
//             ? "py-6 bg-forest-deep/90 backdrop-blur-md" 
//             : "py-6 bg-transparent"
//       }`}
//     >
//       <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
//         <Link to="/" className="flex items-center gap-2 text-cream hover:opacity-90 transition-opacity group">
//           <Leaf className="h-6 w-6 text-gold group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
//           <span className="font-display text-xl tracking-wide">
//             R K <span className="text-gradient-gold">Tea Sales</span>
//           </span>
//         </Link>

//         <nav className="hidden md:flex items-center gap-6">
//           {links.map((l) => {
//             const isActive = isActiveLink(l);
//             const Icon = l.icon;
            
//             return (
//               <Link
//                 key={l.label}
//                 to={l.href}
//                 hash={l.hash === "/" ? undefined : l.hash}
//                 className={`relative font-display text-sm uppercase tracking-[0.22em] transition-colors flex items-center gap-1.5 ${
//                   isActive ? "text-gold" : "text-cream/80 hover:text-gold"
//                 }`}
//                 onClick={() => handleLinkClick(l)}
//               >
//                 <Icon className="w-3.5 h-3.5" />
//                 {l.label}
//                 {isActive && (
//                   <motion.span
//                     layoutId="nav-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-gold"
//                     transition={{ type: "spring", damping: 25, stiffness: 200 }}
//                   />
//                 )}
//               </Link>
//             );
//           })}
//         </nav>

//         <Link
//           to="/"
//           hash="#contact"
//           className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
//         >
//           <FileText className="w-3.5 h-3.5" />
//           Get Quote
//         </Link>

//         <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <motion.div 
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           className="md:hidden bg-forest-deep/95 backdrop-blur-xl border-t border-gold/15 mt-3"
//         >
//           <div className="flex flex-col px-6 py-4 gap-3">
//             {links.map((l) => {
//               const Icon = l.icon;
//               const isActive = isActiveLink(l);
              
//               if (l.href === "/blog") {
//                 return (
//                   <Link
//                     key={l.label}
//                     to="/blog"
//                     onClick={() => setOpen(false)}
//                     className={`flex items-center gap-3 font-display text-sm uppercase tracking-widest transition-colors py-2 ${
//                       location.pathname.startsWith("/blog") ? "text-gold" : "text-cream/80 hover:text-gold"
//                     }`}
//                   >
//                     <Icon className="w-4 h-4" />
//                     {l.label}
//                   </Link>
//                 );
//               }
              
//               return (
//                 <Link
//                   key={l.label}
//                   to={l.href}
//                   hash={l.hash === "/" ? undefined : l.hash}
//                   onClick={() => handleLinkClick(l)}
//                   className={`flex items-center gap-3 font-display text-sm uppercase tracking-widest transition-colors py-2 ${
//                     (l.hash === "/" && isHomePage) || active === l.hash ? "text-gold" : "text-cream/80 hover:text-gold"
//                   }`}
//                 >
//                   <Icon className="w-4 h-4" />
//                   {l.label}
//                 </Link>
//               );
//             })}
            
//             {/* Mobile Get Quote Button */}
//             <Link
//               to="/"
//               hash="#contact"
//               onClick={() => setOpen(false)}
//               className="flex items-center justify-center gap-2 mt-4 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
//             >
//               <FileText className="w-3.5 h-3.5" />
//               Get Quote
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </motion.header>
//   );
// }



import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Leaf, Menu, X, Home, Info, Package, Truck, BookOpen, Phone, FileText } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const links = [
  { href: "/", label: "Home", icon: Home, hash: "#home", isHash: false },
  { href: "/", label: "About", icon: Info, hash: "#about", isHash: true },
  { href: "/", label: "Products", icon: Package, hash: "#products", isHash: true },
  { href: "/", label: "Bulk Orders", icon: Truck, hash: "#bulk", isHash: true },
  { href: "/", label: "Export", icon: FileText, hash: "#export", isHash: true },
  { href: "/#blog", label: "Journal", icon: BookOpen, hash: "#blog", isHash: true, isBlogSection: true },
  { href: "/", label: "Contact", icon: Phone, hash: "#contact", isHash: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith("/blog");
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // Only apply scroll-spy on homepage
      if (isHomePage) {
        let current = "";
        for (const l of links) {
          if (l.isHash && l.hash) {
            const el = document.querySelector(l.hash);
            if (!el) continue;
            const rect = (el as HTMLElement).getBoundingClientRect();
            if (rect.top <= 140) current = l.hash;
          }
        }
        setActiveHash(current);
      }
    };
    
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomePage]);

  const handleLinkClick = (link: typeof links[0]) => {
    setOpen(false);
  };

  const isActiveLink = (link: typeof links[0]) => {
    // For Blog page route (not section)
    if (link.href === "/blog" && !link.isBlogSection) {
      return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    }
    
    // For Journal section on homepage
    if (link.isBlogSection && isHomePage) {
      return activeHash === "#blog";
    }
    
    // For Home page with hash links
    if (link.isHash && isHomePage) {
      return activeHash === link.hash;
    }
    
    // For Home page when no hash is active
    if (!link.isHash && isHomePage && !activeHash) {
      return true;
    }
    
    return false;
  };

  // Function to get the correct href or to for navigation
  const getLinkProps = (link: typeof links[0]) => {
    // For Journal - always go to homepage blog section
    if (link.isBlogSection) {
      if (isHomePage) {
        return { href: "#blog" };
      }
      return { to: "/", hash: "blog" };
    }
    
    // For regular blog route (if you have separate blog page)
    if (link.href === "/blog" && !link.isBlogSection) {
      return { to: "/blog" };
    }
    
    // For hash links on homepage
    if (link.isHash && isHomePage) {
      return { href: link.hash };
    }
    
    // For hash links on other pages
    if (link.isHash) {
      return { to: "/", hash: link.hash.replace("#", "") };
    }
    
    return { to: "/" };
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 font-display transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-forest-deep/95 backdrop-blur-xl border-b border-gold/15 shadow-lg" 
          : isBlogPage || !isHomePage
            ? "py-6 bg-forest-deep/90 backdrop-blur-md" 
            : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-cream hover:opacity-90 transition-opacity group">
          <Leaf className="h-6 w-6 text-gold group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
          <span className="font-display text-xl tracking-wide">
            R K <span className="text-gradient-gold">Tea Sales</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const isActive = isActiveLink(l);
            const Icon = l.icon;
            const linkProps = getLinkProps(l);
            
            // If it's a hash link on homepage, use regular anchor for smooth scroll
            if ((l.isHash || l.isBlogSection) && isHomePage) {
              return (
                <a
                  key={l.label}
                  href={linkProps.href}
                  className={`relative font-display text-sm uppercase tracking-[0.22em] transition-colors flex items-center gap-1.5 ${
                    isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
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
            }
            
            // For Router links (blog page navigation from other pages)
            return (
              <Link
                key={l.label}
                to={linkProps.to || "/"}
                hash={linkProps.hash}
                className={`relative font-display text-sm uppercase tracking-[0.22em] transition-colors flex items-center gap-1.5 ${
                  isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
                onClick={() => handleLinkClick(l)}
              >
                <Icon className="w-3.5 h-3.5" />
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-gold"
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Get Quote Button */}
        {isHomePage ? (
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Get Quote
          </a>
        ) : (
          <Link
            to="/"
            hash="contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Get Quote
          </Link>
        )}

        {/* Mobile Menu Button */}
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-forest-deep/95 backdrop-blur-xl border-t border-gold/15 mt-3 max-h-[80vh] overflow-y-auto"
        >
          <div className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => {
              const Icon = l.icon;
              const isActive = isActiveLink(l);
              const linkProps = getLinkProps(l);
              
              // For hash links on homepage
              if ((l.isHash || l.isBlogSection) && isHomePage) {
                return (
                  <a
                    key={l.label}
                    href={linkProps.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 font-display text-sm uppercase tracking-widest transition-colors py-2 ${
                      isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {l.label}
                  </a>
                );
              }
              
              // For Router links
              return (
                <Link
                  key={l.label}
                  to={linkProps.to || "/"}
                  hash={linkProps.hash}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 font-display text-sm uppercase tracking-widest transition-colors py-2 ${
                    isActive ? "text-gold" : "text-cream/80 hover:text-gold"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {l.label}
                </Link>
              );
            })}
            
            {/* Mobile Get Quote Button */}
            {isHomePage ? (
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                Get Quote
              </a>
            ) : (
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 mt-4 rounded-full border border-gold/60 px-5 py-2 font-display text-sm uppercase tracking-widest text-gold hover:bg-gold hover:text-forest-deep transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                Get Quote
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}