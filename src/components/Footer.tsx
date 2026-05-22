import { Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/70 pt-16 pb-8 border-t border-gold/15">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10 pb-12">
          <div className="md:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 text-cream mb-4">
              <Leaf className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="font-display text-2xl">R K <span className="text-gradient-gold">Tea Sales</span></span>
            </a>
            <p className="max-w-md text-sm leading-relaxed">
              Premium Assam tea, sourced directly from the gardens and delivered with care
              to discerning buyers around the world.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              {["About", "Products", "Bulk Orders", "Export", "Journal", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().split(" ")[0]}`} className="hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Newsletter</div>
            <p className="text-sm mb-4">Tea stories, drops and harvests — once a month.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex border-b border-gold/30 focus-within:border-gold">
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-2 outline-none text-sm text-cream placeholder:text-cream/40"
              />
              <button className="text-gold text-xs uppercase tracking-[0.25em] px-3">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 text-xs uppercase tracking-[0.2em] text-cream/50">
          <span>© {new Date().getFullYear()} R K Tea Sales. All rights reserved.</span>
          <span>Crafted in Assam, India</span>
        </div>
      </div>
    </footer>
  );
}
