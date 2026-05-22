import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import { useState } from "react";

type FormType = "distributor" | "bulk" | "contact";

export function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>("contact");
  const [sent, setSent] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    city: "",
    experience: "",
    investment: "",
    quantity: "",
    preferredDelivery: "",
    teaType: [] as string[],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setIsFlipped(true);
    
    // Here you would send data to your backend
    console.log("Form submitted:", activeForm, formData);
    
    // Reset flip after 3 seconds
    setTimeout(() => {
      setIsFlipped(false);
      setSent(false);
      // Reset form if needed
      // setFormData(initialState);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      teaType: prev.teaType.includes(value)
        ? prev.teaType.filter(t => t !== value)
        : [...prev.teaType, value]
    }));
  };

  const tabs = [
    { id: "contact" as FormType, label: "Contact Us", icon: User, description: "General inquiries" },
    { id: "distributor" as FormType, label: "Become a Distributor", icon: Users, description: "Partnership opportunities" },
    { id: "bulk" as FormType, label: "Bulk Order", icon: Package, description: "Wholesale inquiries" },
  ];

  const getSuccessMessage = () => {
    switch(activeForm) {
      case "distributor":
        return {
          title: "Welcome to the Family! 🎉",
          message: "Thank you for your interest in becoming a distributor. Our team will review your application and get back to you within 24-48 hours.",
          icon: <ThumbsUp className="w-16 h-16 text-gold" />,
          subtext: "We're excited to partner with you!"
        };
      case "bulk":
        return {
          title: "Order Received! 📦",
          message: "Thank you for your bulk order inquiry. A sales representative will contact you shortly with pricing and availability details.",
          icon: <Package className="w-16 h-16 text-gold" />,
          subtext: "Premium tea, ready for dispatch!"
        };
      default:
        return {
          title: "Message Sent! ✨",
          message: "Thank you for reaching out to R K Tea Sales. Our tea specialists will respond to your inquiry promptly.",
          icon: <Mail className="w-16 h-16 text-gold" />,
          subtext: "Steeped in excellence, served with care."
        };
    }
  };

  const successContent = getSuccessMessage();

  return (
    <section id="contact" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-10 md:py-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <TeaParticles count={15} />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-12 bg-gold" />
            <span className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Connect With Us</span>
            <span className="h-px w-12 bg-gold" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-4">
            Let's discuss your{' '}
            <span className="relative inline-block">
              <span className="italic text-gradient-gold">tea journey</span>
              <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
            </span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Partner with us for premium Assam tea solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-center gap-2 mb-5">
                <Leaf className="w-6 h-6 text-gold" />
                <h3 className="text-2xl font-display text-gold">Get in Touch</h3>
              </div>
              <p className="text-cream/70 text-base mb-6">
                Our team is ready to assist you with premium tea solutions
              </p>
              
              <div className="space-y-4">
                {[
                  { Icon: Mail, label: "Email", value: "hello@rkteasales.com", href: "mailto:hello@rkteasales.com" },
                  { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
                  { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
                  { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
                ].map(({ Icon, label, value, href }) => {
                  const inner = (
                    <>
                      <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-5 w-5" strokeWidth={1.5} />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{label}</div>
                        <div className="text-cream text-base font-medium">{value}</div>
                      </div>
                    </>
                  );
                  return href ? (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-cream/5 p-4 hover:bg-cream/10 transition-all duration-300 group">
                      {inner}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 rounded-xl bg-cream/5 p-4">{inner}</div>
                  );
                })}
              </div>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
              <h3 className="text-xl font-display text-gold mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Instagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
                  { Icon: Facebook, link: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
                  { Icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
                ].map(({ Icon, link, label, color }, i) => (
                  <a 
                    key={i} 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold" />
                  <p className="text-cream/80 text-sm leading-relaxed">Trusted by tea connoisseurs worldwide</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Section with Flip Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
            style={{ perspective: "1000px" }}
          >
            {/* Tab Buttons */}
            {!isFlipped && (
              <div className="flex flex-wrap gap-3 mb-6">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeForm === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveForm(tab.id);
                        setSent(false);
                      }}
                      className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
                          : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
                      <span>{tab.label}</span>
                      {!isActive && (
                        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Flip Card Container */}
            <div
              className={`relative transition-all duration-700 ease-in-out transform-gpu ${
                isFlipped ? "rotate-y-180" : ""
              }`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front Side - Form */}
              <div
                className={`bg-cream/5 backdrop-blur-sm rounded-2xl border border-gold/20 transition-all duration-300 ${
                  isFlipped ? "invisible" : "visible"
                }`}
                style={{ backfaceVisibility: "hidden" }}
              >
                <div className="p-6 md:p-8">
                  <AnimatePresence mode="wait">
                    <motion.form
                      key={activeForm}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      {/* Common Fields */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field 
                          label="Full Name" 
                          name="name" 
                          icon={User}
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                        <Field 
                          label="Email Address" 
                          name="email" 
                          type="email" 
                          icon={Mail}
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field 
                          label="Phone Number" 
                          name="phone" 
                          type="tel" 
                          icon={Phone}
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 99999 99999"
                        />
                        
                        {activeForm !== "contact" && (
                          <Field 
                            label="Company / Organization" 
                            name="company" 
                            icon={Building2}
                            value={formData.company}
                            onChange={handleChange}
                            required={activeForm !== "contact"}
                            placeholder="Your company name"
                          />
                        )}
                      </div>

                      {/* Distributor Specific Fields */}
                      {activeForm === "distributor" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="grid sm:grid-cols-2 gap-5">
                            <Field 
                              label="City / Region" 
                              name="city" 
                              icon={MapPin}
                              value={formData.city}
                              onChange={handleChange}
                              required
                              placeholder="Your city"
                            />
                            <div>
                              <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Years of Experience
                              </label>
                              <select
                                name="experience"
                                value={formData.experience}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
                                required
                              >
                                <option value="" className="bg-forest-deep">Select experience</option>
                                <option value="0-1" className="bg-forest-deep">0-1 years</option>
                                <option value="1-3" className="bg-forest-deep">1-3 years</option>
                                <option value="3-5" className="bg-forest-deep">3-5 years</option>
                                <option value="5+" className="bg-forest-deep">5+ years</option>
                              </select>
                            </div>
                          </div>
                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
                              <Package className="w-4 h-4" />
                              Initial Investment Capacity (₹)
                            </label>
                            <select
                              name="investment"
                              value={formData.investment}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
                              required
                            >
                              <option value="" className="bg-forest-deep">Select investment range</option>
                              <option value="1-5lakh" className="bg-forest-deep">₹1-5 Lakhs</option>
                              <option value="5-10lakh" className="bg-forest-deep">₹5-10 Lakhs</option>
                              <option value="10-25lakh" className="bg-forest-deep">₹10-25 Lakhs</option>
                              <option value="25lakh+" className="bg-forest-deep">₹25 Lakhs+</option>
                            </select>
                          </div>
                        </motion.div>
                      )}

                      {/* Bulk Order Specific Fields */}
                      {activeForm === "bulk" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="grid sm:grid-cols-2 gap-5">
                            <div>
                              <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
                                <Package className="w-4 h-4" />
                                Tea Type Interest
                              </label>
                              <div className="space-y-2">
                                {["CTC Tea", "Orthodox Tea", "Green Tea", "Flavored Tea", "Organic Tea"].map((type) => (
                                  <label key={type} className="flex items-center gap-3 text-cream/80 text-base cursor-pointer hover:text-cream transition-colors">
                                    <input
                                      type="checkbox"
                                      value={type}
                                      checked={formData.teaType.includes(type)}
                                      onChange={() => handleCheckboxChange(type)}
                                      className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
                                    />
                                    {type}
                                  </label>
                                ))}
                              </div>
                            </div>
                            <div className="space-y-5">
                              <Field 
                                label="Quantity (kg/month)" 
                                name="quantity" 
                                type="text"
                                icon={Truck}
                                value={formData.quantity}
                                onChange={handleChange}
                                required
                                placeholder="e.g., 1000 kg"
                              />
                              <div>
                                <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  Preferred Delivery Timeline
                                </label>
                                <select
                                  name="preferredDelivery"
                                  value={formData.preferredDelivery}
                                  onChange={handleChange}
                                  className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
                                  required
                                >
                                  <option value="" className="bg-forest-deep">Select timeline</option>
                                  <option value="immediate" className="bg-forest-deep">Immediate</option>
                                  <option value="1month" className="bg-forest-deep">Within 1 month</option>
                                  <option value="3months" className="bg-forest-deep">1-3 months</option>
                                  <option value="6months" className="bg-forest-deep">3-6 months</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Message Field */}
                      <div>
                        <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                          {activeForm === "distributor" && "Why do you want to partner with us?"}
                          {activeForm === "bulk" && "Specific requirements or notes"}
                          {activeForm === "contact" && "Your Message"}
                        </label>
                        <textarea
                          rows={4}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                          placeholder={
                            activeForm === "distributor" 
                              ? "Tell us about your distribution network and why you're interested..."
                              : activeForm === "bulk"
                              ? "Please share your specific requirements, packaging preferences, etc..."
                              : "How can we help you? Let us know your inquiry..."
                          }
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
                      >
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        {activeForm === "distributor" && "Submit Application"}
                        {activeForm === "bulk" && "Send Inquiry"}
                        {activeForm === "contact" && "Send Message"}
                      </button>
                    </motion.form>
                  </AnimatePresence>
                </div>
              </div>

              {/* Back Side - Success Message */}
              <div
                className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-cream/5 backdrop-blur-md rounded-2xl border-2 border-gold shadow-2xl flex items-center justify-center p-8 ${
                  isFlipped ? "visible" : "invisible"
                }`}
                style={{ 
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-6"
                  >
                    {successContent.icon}
                  </motion.div>
                  
                  <h3 className="text-3xl md:text-4xl font-display text-cream mb-4">
                    {successContent.title}
                  </h3>
                  
                  <p className="text-cream/90 text-lg mb-6 leading-relaxed">
                    {successContent.message}
                  </p>
                  
                  <div className="bg-gold/20 rounded-xl p-4 mb-6">
                    <p className="text-gold text-base font-medium">
                      {successContent.subtext}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>You'll hear from us within 24 hours</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-lg shadow-gold/25 hover:scale-110 transition-all duration-300 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
      </a>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  icon?: React.ComponentType<{ className?: string }>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", icon: Icon, value, onChange, required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label}
        {required && <span className="text-gold/60">*</span>}
      </label>
      <input
        required={required}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
      />
    </div>
  );
}