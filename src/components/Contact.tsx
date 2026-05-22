import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative bg-forest-deep py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-forest-deep via-forest to-forest-deep" />
      <TeaParticles count={20} />
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
        backgroundSize: "44px 44px"
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-xs uppercase tracking-[0.4em] text-gold">Contact</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-6">
            Experience the authentic <span className="italic text-gradient-gold">taste of Assam</span>
          </h2>
          <p className="text-cream/70 text-lg">
            Partner with R K Tea Sales for premium tea solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { Icon: Mail, label: "Email", value: "hello@rkteasales.com", href: "mailto:hello@rkteasales.com" },
              { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
              { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
              { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
            ].map(({ Icon, label, value, href }) => {
              const inner = (
                <>
                  <div className="h-12 w-12 rounded-sm bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{label}</div>
                    <div className="text-cream">{value}</div>
                  </div>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-center gap-4 rounded-sm glass p-5 hover:border-gold/40 transition-colors">{inner}</a>
              ) : (
                <div key={label} className="flex items-center gap-4 rounded-sm glass p-5">{inner}</div>
              );
            })}

            <div className="flex items-center gap-3 pt-4">
              {[Instagram, Facebook, Linkedin].map((I, i) => (
                <a key={i} href="#" className="h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-forest-deep transition-colors">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass rounded-sm p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company / Organization" name="company" />
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2 block">Message</label>
              <textarea
                rows={5}
                required
                className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/40 resize-none transition-colors"
                placeholder="Tell us about your requirements…"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-forest-deep font-medium shadow-gold hover:scale-[1.02] transition-transform"
            >
              {sent ? "Message Sent" : "Send Inquiry"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.form>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-gold hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2 block">{label}</label>
      <input
        required
        type={type}
        name={name}
        className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream placeholder:text-cream/40 transition-colors"
      />
    </div>
  );
}
