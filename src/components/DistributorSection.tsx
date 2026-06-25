import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, 
  Package, 
  Truck, 
  Shield, 
  Award, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Building, 
  User, 
  MessageCircle, 
  Send, 
  CheckCircle,
  ArrowRight,
  Star,
  Heart,
  TrendingUp,
  Clock
} from "lucide-react";

const benefits = [
  { icon: Award, title: "Premium Products", text: "Access to India's finest Assam Tea at competitive wholesale rates." },
  { icon: Truck, title: "Pan India Delivery", text: "Fast and reliable logistics network across all major cities." },
  { icon: Shield, title: "100% Quality Assured", text: "FSSAI certified products with consistent quality standards." },
  { icon: TrendingUp, title: "High Margins", text: "Attractive profit margins and volume-based discounts." },
  { icon: Package, title: "Marketing Support", text: "Branding materials, product samples, and promotional support." },
  { icon: Clock, title: "Quick Turnaround", text: "Fast order processing and timely deliveries guaranteed." },
];

export function DistributorSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    experience: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        experience: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="distributors" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
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
            <Users className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Become a Partner</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Join Our{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">Distributor Network</span>
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
            Partner with India's most trusted Assam Tea exporter. Grow your business with premium quality products and exceptional support.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-cream/5 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold text-base mb-1">{benefit.title}</h3>
                  <p className="text-cream/60 text-sm leading-relaxed">{benefit.text}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Form and Stats Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
              <h3 className="text-cream text-xl font-display mb-4">Why Partner With Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                  <span className="text-cream/70 text-sm">Active Distributors</span>
                  <span className="text-gold font-bold text-lg">250+</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                  <span className="text-cream/70 text-sm">Cities Covered</span>
                  <span className="text-gold font-bold text-lg">50+</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-gold/20">
                  <span className="text-cream/70 text-sm">Annual Revenue Growth</span>
                  <span className="text-gold font-bold text-lg">40%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-cream/70 text-sm">Customer Satisfaction</span>
                  <span className="text-gold font-bold text-lg">98%</span>
                </div>
              </div>
            </div>

            <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-gold fill-gold" />
                <h3 className="text-cream font-semibold">What Our Distributors Say</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cream/10">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 text-sm italic">"Excellent product quality and amazing support. Sales have grown 3x since joining."</p>
                  <p className="text-gold text-xs mt-2 font-semibold">- Rajesh Kumar, Mumbai</p>
                </div>
                <div className="p-4 rounded-xl bg-cream/10">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-cream/80 text-sm italic">"Timely deliveries and consistent quality. Best decision for our business."</p>
                  <p className="text-gold text-xs mt-2 font-semibold">- Priya Sharma, Delhi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Distributor Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20"
          >
            <div className="mb-6">
              <h3 className="text-cream text-2xl font-display mb-2">Apply for Distributorship</h3>
              <p className="text-cream/60 text-sm">Fill out the form and our Team will get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h4 className="text-cream text-xl font-semibold mb-2">Application Submitted!</h4>
                <p className="text-cream/60 text-sm">Thank you for your interest. Our Team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">Company Name *</label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">City *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-cream/70 text-xs mb-1">State *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/40" />
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm"
                        placeholder="State"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-xs mb-1">Business Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream focus:outline-none focus:border-gold transition-colors text-sm"
                  >
                    <option value="">Select experience level</option>
                    <option value="Less than 1 year">Less than 1 year</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5+ years">5+ years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-cream/70 text-xs mb-1">Message (Optional)</label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-4 h-4 text-gold/40" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-10 pr-4 py-2.5 bg-cream/10 border border-gold/20 rounded-lg text-cream placeholder-cream/30 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-gold to-amber-500 text-forest-deep font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                >
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      Apply Now
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-cream/40 text-[10px] text-center">
                  By submitting, you agree to our terms and conditions. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}