import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink } from "lucide-react";

export function MapSection() {
  return (
    <section className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
            <MapPin className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Visit Us</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Find Us in{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">Hyderabad</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-cream/70 text-base md:text-lg">
            Visit our office in the heart of Hyderabad. We'd love to meet you and discuss your Tea requirements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left - Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/5"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3807.772362343981!2d78.4684791751646!3d17.374683383510327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1781874604444!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="R K Tea Sales Location - Begum Bazar, Hyderabad"
                className="w-full h-full"
              />
              
              {/* Map Overlay Gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-forest-deep to-transparent pointer-events-none" />
              
              {/* Open in Google Maps Button */}
              <a
                href="https://www.google.com/maps/dir//17.374683,78.468479"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-forest-deep text-xs font-semibold hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-gold/25 hover:scale-105"
              >
                <Navigation className="w-3.5 h-3.5" />
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Right - Address & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl text-cream">Our Office</h3>
              </div>
              
              <div className="space-y-2 text-cream/70 text-sm leading-relaxed">
                <p className="font-semibold text-cream">R. K. Tea SALES</p>
                <p>#15-6-464/470, 1st Floor,</p>
                <p>SALASAR COMPPLEX, BEGUM BAZAR,</p>
                <p>HYDERABAD-500012</p>
                
                <div className="pt-3 mt-3 border-t border-gold/20 space-y-2">
                  <div className="flex items-center gap-2 text-cream/60">
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    <a href="tel:+919849023900" className="hover:text-gold transition-colors">98490 23900</a>
                  </div>
                  <div className="flex items-center gap-2 text-cream/60">
                    <Mail className="w-3.5 h-3.5 text-gold" />
                    <a href="mailto:hello@rkTeasales.com" className="hover:text-gold transition-colors">hello@rkTeasales.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-xl text-cream">Business Hours</h3>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center border-b border-gold/10 pb-2">
                  <span className="text-cream/60">Monday - Friday</span>
                  <span className="text-cream font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center border-b border-gold/10 pb-2">
                  <span className="text-cream/60">Saturday</span>
                  <span className="text-cream font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-cream/60">Sunday</span>
                  <span className="text-cream font-medium text-gold">Closed</span>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gold to-amber-500 text-forest-deep font-semibold text-sm hover:shadow-lg hover:shadow-gold/25 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Contact Us
              </a>
              <a
                href="https://www.google.com/maps/dir//17.374683,78.468479"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gold/30 text-gold font-semibold text-sm hover:bg-gold/10 transition-all duration-300 hover:border-gold"
              >
                <ExternalLink className="w-4 h-4" />
                Directions
              </a>
            </div>
          </motion.div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream/5 border border-gold/20 backdrop-blur-sm">
            <span className="text-cream/50 text-xs uppercase tracking-wider">
              🏢 Visit us in person • Tea tasting available • Free consultation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}