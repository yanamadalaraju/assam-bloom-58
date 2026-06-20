// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import { useState } from "react";

// type FormType = "distributor" | "bulk" | "contact";

// export function Contact() {
//   const [activeForm, setActiveForm] = useState<FormType>("contact");
//   const [sent, setSent] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     company: "",
//     city: "",
//     experience: "",
//     investment: "",
//     quantity: "",
//     preferredDelivery: "",
//     TeaType: [] as string[],
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSent(true);
//     setIsFlipped(true);
    
//     // Here you would send data to your backend
//     console.log("Form submitted:", activeForm, formData);
    
//     // Reset flip after 3 seconds
//     setTimeout(() => {
//       setIsFlipped(false);
//       setSent(false);
//       // Reset form if needed
//       // setFormData(initialState);
//     }, 4000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       TeaType: prev.TeaType.includes(value)
//         ? prev.TeaType.filter(t => t !== value)
//         : [...prev.TeaType, value]
//     }));
//   };

//   const tabs = [
//     { id: "contact" as FormType, label: "Contact Us", icon: User, description: "General inquiries" },
//     { id: "distributor" as FormType, label: "Become a Distributor", icon: Users, description: "Partnership opportunities" },
//     { id: "bulk" as FormType, label: "Bulk Order", icon: Package, description: "Wholesale inquiries" },
//   ];

//   const getSuccessMessage = () => {
//     switch(activeForm) {
//       case "distributor":
//         return {
//           title: "Welcome to the Family! 🎉",
//           message: "Thank you for your interest in becoming a distributor. Our Team will review your application and get back to you within 24-48 hours.",
//           icon: <ThumbsUp className="w-16 h-16 text-gold" />,
//           subtext: "We're excited to partner with you!"
//         };
//       case "bulk":
//         return {
//           title: "Order Received! 📦",
//           message: "Thank you for your bulk order inquiry. A sales representative will contact you shortly with pricing and availability details.",
//           icon: <Package className="w-16 h-16 text-gold" />,
//           subtext: "Premium Tea, ready for dispatch!"
//         };
//       default:
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out to R K Tea Sales. Our Tea specialists will respond to your inquiry promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//     }
//   };

//   const successContent = getSuccessMessage();

//   return (
//     <section id="contact" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-10 md:py-8 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0">
//         <TeaParticles count={15} />
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//       </div>
      
//       <div className="absolute inset-0 opacity-[0.04]" style={{
//         backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
//         backgroundSize: "40px 40px"
//       }} />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-12 bg-gold" />
//             <span className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Connect With Us</span>
//             <span className="h-px w-12 bg-gold" />
//           </div>
//           <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-4">
//             Let's discuss your{' '}
//             <span className="relative inline-block">
//               <span className="italic text-gradient-gold">Tea journey</span>
//               <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
//             </span>
//           </h2>
//           <p className="text-cream/70 text-lg max-w-2xl mx-auto">
//             Partner with us for premium Assam Tea solutions
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Contact Info Sidebar */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-4 space-y-5"
//           >
//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
//               <div className="flex items-center gap-2 mb-5">
//                 <Leaf className="w-6 h-6 text-gold" />
//                 <h3 className="text-2xl font-display text-gold">Get in Touch</h3>
//               </div>
//               <p className="text-cream/70 text-base mb-6">
//                 Our Team is ready to assist you with premium Tea solutions
//               </p>
              
//               <div className="space-y-4">
//                 {[
//                   { Icon: Mail, label: "Email", value: "hello@rkTeasales.com", href: "mailto:hello@rkTeasales.com" },
//                   { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
//                   { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
//                   { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
//                 ].map(({ Icon, label, value, href }) => {
//                   const inner = (
//                     <>
//                       <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
//                         <Icon className="h-5 w-5" strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{label}</div>
//                         <div className="text-cream text-base font-medium">{value}</div>
//                       </div>
//                     </>
//                   );
//                   return href ? (
//                     <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-cream/5 p-4 hover:bg-cream/10 transition-all duration-300 group">
//                       {inner}
//                     </a>
//                   ) : (
//                     <div key={label} className="flex items-center gap-3 rounded-xl bg-cream/5 p-4">{inner}</div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
//               <h3 className="text-xl font-display text-gold mb-4">Follow Us</h3>
//               <div className="flex items-center gap-3">
//                 {[
//                   { Icon: Instagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
//                   { Icon: Facebook, link: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
//                   { Icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
//                 ].map(({ Icon, link, label, color }, i) => (
//                   <a 
//                     key={i} 
//                     href={link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className={`h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Trust Badges */}
//             <div className="space-y-3">
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Trusted by Tea connoisseurs worldwide</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Section with Flip Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-8"
//             style={{ perspective: "1000px" }}
//           >
//             {/* Tab Buttons */}
//             {!isFlipped && (
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   const isActive = activeForm === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => {
//                         setActiveForm(tab.id);
//                         setSent(false);
//                       }}
//                       className={`group relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
//                           : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
//                       }`}
//                     >
//                       <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
//                       <span>{tab.label}</span>
//                       {!isActive && (
//                         <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
//                       )}
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Flip Card Container */}
//             <div
//               className={`relative transition-all duration-700 ease-in-out transform-gpu ${
//                 isFlipped ? "rotate-y-180" : ""
//               }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side - Form */}
//               <div
//                 className={`bg-cream/5 backdrop-blur-sm rounded-2xl border border-gold/20 transition-all duration-300 ${
//                   isFlipped ? "invisible" : "visible"
//                 }`}
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="p-6 md:p-8">
//                   <AnimatePresence mode="wait">
//                     <motion.form
//                       key={activeForm}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-5"
//                     >
//                       {/* Common Fields */}
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Full Name" 
//                           name="name" 
//                           icon={User}
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           placeholder="John Doe"
//                         />
//                         <Field 
//                           label="Email Address" 
//                           name="email" 
//                           type="email" 
//                           icon={Mail}
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           placeholder="john@example.com"
//                         />
//                       </div>
                      
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Phone Number" 
//                           name="phone" 
//                           type="tel" 
//                           icon={Phone}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           placeholder="+91 99999 99999"
//                         />
                        
//                         {activeForm !== "contact" && (
//                           <Field 
//                             label="Company / Organization" 
//                             name="company" 
//                             icon={Building2}
//                             value={formData.company}
//                             onChange={handleChange}
//                             required={activeForm !== "contact"}
//                             placeholder="Your company name"
//                           />
//                         )}
//                       </div>

//                       {/* Distributor Specific Fields */}
//                       {activeForm === "distributor" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <Field 
//                               label="City / Region" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Years of Experience
//                               </label>
//                               <select
//                                 name="experience"
//                                 value={formData.experience}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="" className="bg-forest-deep">Select experience</option>
//                                 <option value="0-1" className="bg-forest-deep">0-1 years</option>
//                                 <option value="1-3" className="bg-forest-deep">1-3 years</option>
//                                 <option value="3-5" className="bg-forest-deep">3-5 years</option>
//                                 <option value="5+" className="bg-forest-deep">5+ years</option>
//                               </select>
//                             </div>
//                           </div>
//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <Package className="w-4 h-4" />
//                               Initial Investment Capacity (₹)
//                             </label>
//                             <select
//                               name="investment"
//                               value={formData.investment}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="" className="bg-forest-deep">Select investment range</option>
//                               <option value="1-5lakh" className="bg-forest-deep">₹1-5 Lakhs</option>
//                               <option value="5-10lakh" className="bg-forest-deep">₹5-10 Lakhs</option>
//                               <option value="10-25lakh" className="bg-forest-deep">₹10-25 Lakhs</option>
//                               <option value="25lakh+" className="bg-forest-deep">₹25 Lakhs+</option>
//                             </select>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Bulk Order Specific Fields */}
//                       {activeForm === "bulk" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Tea Type Interest
//                               </label>
//                               <div className="space-y-2">
//                                 {["CTC Tea", "Orthodox Tea", "Green Tea", "Flavored Tea", "Organic Tea"].map((type) => (
//                                   <label key={type} className="flex items-center gap-3 text-cream/80 text-base cursor-pointer hover:text-cream transition-colors">
//                                     <input
//                                       type="checkbox"
//                                       value={type}
//                                       checked={formData.TeaType.includes(type)}
//                                       onChange={() => handleCheckboxChange(type)}
//                                       className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
//                                     />
//                                     {type}
//                                   </label>
//                                 ))}
//                               </div>
//                             </div>
//                             <div className="space-y-5">
//                               <Field 
//                                 label="Quantity (kg/month)" 
//                                 name="quantity" 
//                                 type="text"
//                                 icon={Truck}
//                                 value={formData.quantity}
//                                 onChange={handleChange}
//                                 required
//                                 placeholder="e.g., 1000 kg"
//                               />
//                               <div>
//                                 <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                   <Calendar className="w-4 h-4" />
//                                   Preferred Delivery Timeline
//                                 </label>
//                                 <select
//                                   name="preferredDelivery"
//                                   value={formData.preferredDelivery}
//                                   onChange={handleChange}
//                                   className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                   required
//                                 >
//                                   <option value="" className="bg-forest-deep">Select timeline</option>
//                                   <option value="immediate" className="bg-forest-deep">Immediate</option>
//                                   <option value="1month" className="bg-forest-deep">Within 1 month</option>
//                                   <option value="3months" className="bg-forest-deep">1-3 months</option>
//                                   <option value="6months" className="bg-forest-deep">3-6 months</option>
//                                 </select>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Message Field */}
//                       <div>
//                         <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                           {activeForm === "distributor" && "Why do you want to partner with us?"}
//                           {activeForm === "bulk" && "Specific requirements or notes"}
//                           {activeForm === "contact" && "Your Message"}
//                         </label>
//                         <textarea
//                           rows={4}
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           required
//                           className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                           placeholder={
//                             activeForm === "distributor" 
//                               ? "Tell us about your distribution network and why you're interested..."
//                               : activeForm === "bulk"
//                               ? "Please share your specific requirements, packaging preferences, etc..."
//                               : "How can we help you? Let us know your inquiry..."
//                           }
//                         />
//                       </div>

//                       {/* Submit Button */}
//                       <button
//                         type="submit"
//                         className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
//                       >
//                         <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                         {activeForm === "distributor" && "Submit Application"}
//                         {activeForm === "bulk" && "Send Inquiry"}
//                         {activeForm === "contact" && "Send Message"}
//                       </button>
//                     </motion.form>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Back Side - Success Message */}
//               <div
//                 className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-cream/5 backdrop-blur-md rounded-2xl border-2 border-gold shadow-2xl flex items-center justify-center p-8 ${
//                   isFlipped ? "visible" : "invisible"
//                 }`}
//                 style={{ 
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)"
//                 }}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 360]
//                     }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mb-6"
//                   >
//                     {successContent.icon}
//                   </motion.div>
                  
//                   <h3 className="text-3xl md:text-4xl font-display text-cream mb-4">
//                     {successContent.title}
//                   </h3>
                  
//                   <p className="text-cream/90 text-lg mb-6 leading-relaxed">
//                     {successContent.message}
//                   </p>
                  
//                   <div className="bg-gold/20 rounded-xl p-4 mb-6">
//                     <p className="text-gold text-base font-medium">
//                       {successContent.subtext}
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
//                     <Clock className="w-4 h-4" />
//                     <span>You'll hear from us within 24 hours</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating WhatsApp */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-lg shadow-gold/25 hover:scale-110 transition-all duration-300 group"
//         aria-label="WhatsApp"
//       >
//         <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
//       </a>

//       <style jsx>{`
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   type?: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   placeholder?: string;
// }

// function Field({ label, name, type = "text", icon: Icon, value, onChange, required, placeholder }: FieldProps) {
//   return (
//     <div>
//       <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//         {Icon && <Icon className="w-4 h-4" />}
//         {label}
//         {required && <span className="text-gold/60">*</span>}
//       </label>
//       <input
//         required={required}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//       />
//     </div>
//   );
// }






// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award, Crown, Globe, BadgeDollarSign, Shield, Star } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import { useState } from "react";

// type FormType = "distributor" | "super-stockist" | "dealer" | "export";

// export function Contact() {
//   const [activeForm, setActiveForm] = useState<FormType>("distributor");
//   const [sent, setSent] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [formData, setFormData] = useState({
//     // Common fields
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     company: "",
//     city: "",
//     state: "",
//     pincode: "",
//     gst: "",
    
//     // Distributor specific
//     experience: "",
//     investment: "",
//     currentBusiness: "",
//     TeamSize: "",
//     warehouse: "",
    
//     // Super Stockist specific
//     existingNetwork: "",
//     storageCapacity: "",
//     logisticsCapability: "",
//     regionsCovered: "",
//     fleetSize: "",
    
//     // Dealer specific
//     shopName: "",
//     shopType: "",
//     yearsInBusiness: "",
//     monthlySales: "",
//     customerBase: "",
    
//     // Export specific
//     country: "",
//     importLicense: "",
//     containerSize: "",
//     shipmentFrequency: "",
//     exportVolume: "",
//     certifications: [] as string[],
//     paymentTerms: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSent(true);
//     setIsFlipped(true);
    
//     console.log("Form submitted:", activeForm, formData);
    
//     setTimeout(() => {
//       setIsFlipped(false);
//       setSent(false);
//     }, 4000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       certifications: prev.certifications.includes(value)
//         ? prev.certifications.filter(t => t !== value)
//         : [...prev.certifications, value]
//     }));
//   };

//   const tabs = [
//     { id: "distributor" as FormType, label: "Become Distributor", icon: Users, description: "Join as a distributor" },
//     { id: "super-stockist" as FormType, label: "Super Stockist", icon: Crown, description: "Become a super stockist" },
//     { id: "dealer" as FormType, label: "Dealer", icon: BadgeDollarSign, description: "Become a dealer" },
//     { id: "export" as FormType, label: "Export Enquiry", icon: Globe, description: "International inquiries" },
//   ];

//   const getSuccessMessage = () => {
//     switch(activeForm) {
//       case "distributor":
//         return {
//           title: "Application Received! 🎉",
//           message: "Thank you for your interest in becoming a distributor. Our Team will review your application and get back to you within 24-48 hours.",
//           icon: <Users className="w-16 h-16 text-gold" />,
//           subtext: "Welcome to the R.K. Tea family!"
//         };
//       case "super-stockist":
//         return {
//           title: "Super Stockist Application Submitted! ⭐",
//           message: "Thank you for your interest in becoming a Super Stockist. Our Team will contact you shortly to discuss partnership details.",
//           icon: <Crown className="w-16 h-16 text-gold" />,
//           subtext: "Elevate your business with R.K. Tea!"
//         };
//       case "dealer":
//         return {
//           title: "Dealer Registration Complete! 🏪",
//           message: "Thank you for registering as a dealer. We'll send you the dealer kit and pricing details within 24 hours.",
//           icon: <BadgeDollarSign className="w-16 h-16 text-gold" />,
//           subtext: "Start your Tea journey with us!"
//         };
//       case "export":
//         return {
//           title: "Export Inquiry Received! 🌍",
//           message: "Thank you for your export inquiry. Our international trade Team will respond with detailed pricing and shipping information.",
//           icon: <Globe className="w-16 h-16 text-gold" />,
//           subtext: "Bringing Assam Tea to the world!"
//         };
//       default:
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out. Our Team will respond promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//     }
//   };

//   const successContent = getSuccessMessage();

//   return (
//     <section id="contact" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-10 md:py-8 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0">
//         <TeaParticles count={15} />
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//       </div>
      
//       <div className="absolute inset-0 opacity-[0.04]" style={{
//         backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
//         backgroundSize: "40px 40px"
//       }} />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-12 bg-gold" />
//             <span className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Partner With Us</span>
//             <span className="h-px w-12 bg-gold" />
//           </div>
//           <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-4">
//             Grow Your{' '}
//             <span className="relative inline-block">
//               <span className="italic text-gradient-gold">Tea Business</span>
//               <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
//             </span>
//           </h2>
//           <p className="text-cream/70 text-lg max-w-2xl mx-auto">
//             Choose the right partnership model for your business
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Contact Info Sidebar */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-4 space-y-5"
//           >
//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
//               <div className="flex items-center gap-2 mb-5">
//                 <Leaf className="w-6 h-6 text-gold" />
//                 <h3 className="text-2xl font-display text-gold">Get in Touch</h3>
//               </div>
//               <p className="text-cream/70 text-base mb-6">
//                 Our Team is ready to assist you with premium Tea solutions
//               </p>
              
//               <div className="space-y-4">
//                 {[
//                   { Icon: Mail, label: "Email", value: "hello@rkTeasales.com", href: "mailto:hello@rkTeasales.com" },
//                   { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
//                   { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
//                   { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
//                 ].map(({ Icon, label, value, href }) => {
//                   const inner = (
//                     <>
//                       <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
//                         <Icon className="h-5 w-5" strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{label}</div>
//                         <div className="text-cream text-base font-medium">{value}</div>
//                       </div>
//                     </>
//                   );
//                   return href ? (
//                     <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-cream/5 p-4 hover:bg-cream/10 transition-all duration-300 group">
//                       {inner}
//                     </a>
//                   ) : (
//                     <div key={label} className="flex items-center gap-3 rounded-xl bg-cream/5 p-4">{inner}</div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
//               <h3 className="text-xl font-display text-gold mb-4">Follow Us</h3>
//               <div className="flex items-center gap-3">
//                 {[
//                   { Icon: Instagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
//                   { Icon: Facebook, link: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
//                   { Icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
//                 ].map(({ Icon, link, label, color }, i) => (
//                   <a 
//                     key={i} 
//                     href={link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className={`h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Trust Badges */}
//             <div className="space-y-3">
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Trusted since 1990</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Shield className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">100% quality guaranteed</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Section with Flip Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-8"
//             style={{ perspective: "1000px" }}
//           >
//             {/* Tab Buttons */}
//             {!isFlipped && (
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   const isActive = activeForm === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => {
//                         setActiveForm(tab.id);
//                         setSent(false);
//                       }}
//                       className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
//                           : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
//                       }`}
//                     >
//                       <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
//                       <span className="whitespace-nowrap">{tab.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Flip Card Container */}
//             <div
//               className={`relative transition-all duration-700 ease-in-out transform-gpu ${
//                 isFlipped ? "rotate-y-180" : ""
//               }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side - Form */}
//               <div
//                 className={`bg-cream/5 backdrop-blur-sm rounded-2xl border border-gold/20 transition-all duration-300 ${
//                   isFlipped ? "invisible" : "visible"
//                 }`}
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="p-6 md:p-8">
//                   <AnimatePresence mode="wait">
//                     <motion.form
//                       key={activeForm}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-5"
//                     >
//                       {/* Basic Information - Common for all forms */}
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Full Name" 
//                           name="name" 
//                           icon={User}
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           placeholder="John Doe"
//                         />
//                         <Field 
//                           label="Email Address" 
//                           name="email" 
//                           type="email" 
//                           icon={Mail}
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           placeholder="john@example.com"
//                         />
//                       </div>
                      
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Phone Number" 
//                           name="phone" 
//                           type="tel" 
//                           icon={Phone}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           placeholder="+91 99999 99999"
//                         />
//                         <Field 
//                           label="Company / Business Name" 
//                           name="company" 
//                           icon={Building2}
//                           value={formData.company}
//                           onChange={handleChange}
//                           required
//                           placeholder="Your company name"
//                         />
//                       </div>

//                       <div className="grid sm:grid-cols-3 gap-5">
//                         <Field 
//                           label="City" 
//                           name="city" 
//                           icon={MapPin}
//                           value={formData.city}
//                           onChange={handleChange}
//                           required
//                           placeholder="Your city"
//                         />
//                         <Field 
//                           label="State" 
//                           name="state" 
//                           value={formData.state}
//                           onChange={handleChange}
//                           required
//                           placeholder="Your state"
//                         />
//                         <Field 
//                           label="Pincode" 
//                           name="pincode" 
//                           value={formData.pincode}
//                           onChange={handleChange}
//                           required
//                           placeholder="Pincode"
//                         />
//                       </div>

//                       <Field 
//                         label="GST Number" 
//                         name="gst" 
//                         icon={FileText}
//                         value={formData.gst}
//                         onChange={handleChange}
//                         placeholder="GSTIN (if applicable)"
//                       />

//                       {/* Distributor Form */}
//                       {activeForm === "distributor" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Distributor Details</h4>
//                           </div>
                          
//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Years in Business
//                               </label>
//                               <select
//                                 name="experience"
//                                 value={formData.experience}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select experience</option>
//                                 <option value="0-1">0-1 years</option>
//                                 <option value="1-3">1-3 years</option>
//                                 <option value="3-5">3-5 years</option>
//                                 <option value="5-10">5-10 years</option>
//                                 <option value="10+">10+ years</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Current Business
//                               </label>
//                               <select
//                                 name="currentBusiness"
//                                 value={formData.currentBusiness}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select business type</option>
//                                 <option value="retail">Retail Store</option>
//                                 <option value="wholesale">Wholesale Business</option>
//                                 <option value="distributor">Existing Distributor</option>
//                                 <option value="supermarket">Supermarket Chain</option>
//                                 <option value="online">Online Seller</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Team Size
//                               </label>
//                               <select
//                                 name="TeamSize"
//                                 value={formData.TeamSize}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select Team size</option>
//                                 <option value="1-5">1-5 employees</option>
//                                 <option value="6-10">6-10 employees</option>
//                                 <option value="11-20">11-20 employees</option>
//                                 <option value="21-50">21-50 employees</option>
//                                 <option value="50+">50+ employees</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Investment Capacity
//                               </label>
//                               <select
//                                 name="investment"
//                                 value={formData.investment}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select investment range</option>
//                                 <option value="1-5lakh">₹1-5 Lakhs</option>
//                                 <option value="5-10lakh">₹5-10 Lakhs</option>
//                                 <option value="10-25lakh">₹10-25 Lakhs</option>
//                                 <option value="25-50lakh">₹25-50 Lakhs</option>
//                                 <option value="50lakh+">₹50 Lakhs+</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <Building2 className="w-4 h-4" />
//                               Warehouse / Storage Facility
//                             </label>
//                             <select
//                               name="warehouse"
//                               value={formData.warehouse}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select warehouse status</option>
//                               <option value="owned">Owned Warehouse</option>
//                               <option value="rented">Rented Warehouse</option>
//                               <option value="shared">Shared Warehouse</option>
//                               <option value="planning">Planning to Setup</option>
//                               <option value="no">No Warehouse</option>
//                             </select>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Super Stockist Form */}
//                       {activeForm === "super-stockist" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Super Stockist Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Existing Distribution Network
//                               </label>
//                               <select
//                                 name="existingNetwork"
//                                 value={formData.existingNetwork}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select network size</option>
//                                 <option value="1-10">1-10 dealers</option>
//                                 <option value="11-25">11-25 dealers</option>
//                                 <option value="26-50">26-50 dealers</option>
//                                 <option value="51-100">51-100 dealers</option>
//                                 <option value="100+">100+ dealers</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Storage Capacity (sq. ft.)
//                               </label>
//                               <select
//                                 name="storageCapacity"
//                                 value={formData.storageCapacity}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select capacity</option>
//                                 <option value="0-500">0-500 sq ft</option>
//                                 <option value="500-1000">500-1,000 sq ft</option>
//                                 <option value="1000-2000">1,000-2,000 sq ft</option>
//                                 <option value="2000-5000">2,000-5,000 sq ft</option>
//                                 <option value="5000+">5,000+ sq ft</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Logistics Capability
//                               </label>
//                               <select
//                                 name="logisticsCapability"
//                                 value={formData.logisticsCapability}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select capability</option>
//                                 <option value="own-fleet">Own Fleet</option>
//                                 <option value="rented">Rented Vehicles</option>
//                                 <option value="third-party">Third-Party Logistics</option>
//                                 <option value="multiple">Multiple Options</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Globe className="w-4 h-4" />
//                                 Regions Covered
//                               </label>
//                               <input
//                                 type="text"
//                                 name="regionsCovered"
//                                 value={formData.regionsCovered}
//                                 onChange={handleChange}
//                                 placeholder="e.g., North India, East India"
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <Truck className="w-4 h-4" />
//                               Fleet Size
//                             </label>
//                             <select
//                               name="fleetSize"
//                               value={formData.fleetSize}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select fleet size</option>
//                               <option value="0">No vehicles</option>
//                               <option value="1-2">1-2 vehicles</option>
//                               <option value="3-5">3-5 vehicles</option>
//                               <option value="6-10">6-10 vehicles</option>
//                               <option value="10+">10+ vehicles</option>
//                             </select>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Dealer Form */}
//                       {activeForm === "dealer" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Dealer Details</h4>
//                           </div>

//                           <Field 
//                             label="Shop / Store Name" 
//                             name="shopName" 
//                             icon={Building2}
//                             value={formData.shopName}
//                             onChange={handleChange}
//                             required
//                             placeholder="Your shop name"
//                           />

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Store className="w-4 h-4" />
//                                 Shop Type
//                               </label>
//                               <select
//                                 name="shopType"
//                                 value={formData.shopType}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select shop type</option>
//                                 <option value="kirana">Kirana / Grocery Store</option>
//                                 <option value="Tea-shop">Tea Shop / Chai Stall</option>
//                                 <option value="supermarket">Supermarket</option>
//                                 <option value="online">Online Store</option>
//                                 <option value="wholesale">Wholesale Shop</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Years in Business
//                               </label>
//                               <select
//                                 name="yearsInBusiness"
//                                 value={formData.yearsInBusiness}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select years</option>
//                                 <option value="0-1">0-1 years</option>
//                                 <option value="1-3">1-3 years</option>
//                                 <option value="3-5">3-5 years</option>
//                                 <option value="5-10">5-10 years</option>
//                                 <option value="10+">10+ years</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Monthly Sales Volume (kg)
//                               </label>
//                               <select
//                                 name="monthlySales"
//                                 value={formData.monthlySales}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select volume</option>
//                                 <option value="0-10">0-10 kg</option>
//                                 <option value="10-50">10-50 kg</option>
//                                 <option value="50-100">50-100 kg</option>
//                                 <option value="100-500">100-500 kg</option>
//                                 <option value="500+">500+ kg</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Customer Base
//                               </label>
//                               <select
//                                 name="customerBase"
//                                 value={formData.customerBase}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select customer base</option>
//                                 <option value="retail">Retail Customers</option>
//                                 <option value="wholesale">Wholesale Customers</option>
//                                 <option value="both">Both Retail & Wholesale</option>
//                                 <option value="institutional">Institutional</option>
//                               </select>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Export Enquiry Form */}
//                       {activeForm === "export" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Export Enquiry Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Globe className="w-4 h-4" />
//                                 Country / Region
//                               </label>
//                               <input
//                                 type="text"
//                                 name="country"
//                                 value={formData.country}
//                                 onChange={handleChange}
//                                 placeholder="e.g., USA, UK, UAE"
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//                                 required
//                               />
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <FileText className="w-4 h-4" />
//                                 Import License
//                               </label>
//                               <select
//                                 name="importLicense"
//                                 value={formData.importLicense}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select license status</option>
//                                 <option value="yes">Yes, I have</option>
//                                 <option value="no">No, but can arrange</option>
//                                 <option value="in-progress">In progress</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Container Size
//                               </label>
//                               <select
//                                 name="containerSize"
//                                 value={formData.containerSize}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select size</option>
//                                 <option value="20ft">20ft Container</option>
//                                 <option value="40ft">40ft Container</option>
//                                 <option value="40hc">40ft High Cube</option>
//                                 <option value="ltl">Less than Container</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Shipment Frequency
//                               </label>
//                               <select
//                                 name="shipmentFrequency"
//                                 value={formData.shipmentFrequency}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select frequency</option>
//                                 <option value="monthly">Monthly</option>
//                                 <option value="quarterly">Quarterly</option>
//                                 <option value="half-yearly">Half-Yearly</option>
//                                 <option value="yearly">Yearly</option>
//                                 <option value="one-time">One-Time</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Export Volume (kg/month)
//                               </label>
//                               <select
//                                 name="exportVolume"
//                                 value={formData.exportVolume}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select volume</option>
//                                 <option value="0-100">0-100 kg</option>
//                                 <option value="100-500">100-500 kg</option>
//                                 <option value="500-1000">500-1,000 kg</option>
//                                 <option value="1000-5000">1,000-5,000 kg</option>
//                                 <option value="5000+">5,000+ kg</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
//                               <CheckCircle className="w-4 h-4" />
//                               Certifications Required
//                             </label>
//                             <div className="grid grid-cols-2 gap-3">
//                               {["Organic", "Fair Trade", "ISO", "HACCP", "FSSAI", "USDA", "EU Organic", "Rainforest Alliance"].map((cert) => (
//                                 <label key={cert} className="flex items-center gap-3 text-cream/80 text-sm cursor-pointer hover:text-cream transition-colors">
//                                   <input
//                                     type="checkbox"
//                                     value={cert}
//                                     checked={formData.certifications.includes(cert)}
//                                     onChange={() => handleCheckboxChange(cert)}
//                                     className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
//                                   />
//                                   {cert}
//                                 </label>
//                               ))}
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <BadgeDollarSign className="w-4 h-4" />
//                               Payment Terms
//                             </label>
//                             <select
//                               name="paymentTerms"
//                               value={formData.paymentTerms}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select payment terms</option>
//                               <option value="lc">Letter of Credit (LC)</option>
//                               <option value="tt">Telegraphic Transfer (TT)</option>
//                               <option value="dp">Documents Against Payment (DP)</option>
//                               <option value="da">Documents Against Acceptance (DA)</option>
//                               <option value="advance">Advance Payment</option>
//                             </select>
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Message Field */}
//                       <div>
//                         <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                           Additional Information
//                         </label>
//                         <textarea
//                           rows={3}
//                           name="message"
//                           value={formData.message}
//                           onChange={handleChange}
//                           className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                           placeholder={
//                             activeForm === "distributor" 
//                               ? "Tell us about your distribution network and why you want to partner with us..."
//                               : activeForm === "super-stockist"
//                               ? "Describe your current operations and how you plan to scale with us..."
//                               : activeForm === "dealer"
//                               ? "Any specific requirements or preferences for your dealership..."
//                               : "Share your specific requirements, preferred Tea types, packaging preferences..."
//                           }
//                         />
//                       </div>

//                       {/* Submit Button */}
//                       <button
//                         type="submit"
//                         className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
//                       >
//                         <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                         {activeForm === "distributor" && "Apply as Distributor"}
//                         {activeForm === "super-stockist" && "Apply as Super Stockist"}
//                         {activeForm === "dealer" && "Register as Dealer"}
//                         {activeForm === "export" && "Send Export Enquiry"}
//                       </button>
//                     </motion.form>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Back Side - Success Message */}
//               <div
//                 className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-cream/5 backdrop-blur-md rounded-2xl border-2 border-gold shadow-2xl flex items-center justify-center p-8 ${
//                   isFlipped ? "visible" : "invisible"
//                 }`}
//                 style={{ 
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)"
//                 }}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 360]
//                     }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mb-6"
//                   >
//                     {successContent.icon}
//                   </motion.div>
                  
//                   <h3 className="text-3xl md:text-4xl font-display text-cream mb-4">
//                     {successContent.title}
//                   </h3>
                  
//                   <p className="text-cream/90 text-lg mb-6 leading-relaxed">
//                     {successContent.message}
//                   </p>
                  
//                   <div className="bg-gold/20 rounded-xl p-4 mb-6">
//                     <p className="text-gold text-base font-medium">
//                       {successContent.subtext}
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
//                     <Clock className="w-4 h-4" />
//                     <span>You'll hear from us within 24 hours</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating WhatsApp */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-lg shadow-gold/25 hover:scale-110 transition-all duration-300 group"
//         aria-label="WhatsApp"
//       >
//         <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
//       </a>

//       <style jsx>{`
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   type?: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   placeholder?: string;
// }

// function Field({ label, name, type = "text", icon: Icon, value, onChange, required, placeholder }: FieldProps) {
//   return (
//     <div>
//       <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//         {Icon && <Icon className="w-4 h-4" />}
//         {label}
//         {required && <span className="text-gold/60">*</span>}
//       </label>
//       <input
//         required={required}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//       />
//     </div>
//   );
// }

// // Store icon component (since it wasn't imported)
// function Store(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 7L4 17H20L22 7" />
//       <rect x="4" y="7" width="16" height="10" />
//       <rect x="4" y="7" width="16" height="10" transform="rotate(0 12 12)" />
//       <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" />
//     </svg>
//   );
// }





// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award, Crown, Globe, BadgeDollarSign, Shield, Star, HelpCircle } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import { useState } from "react";

// type FormType = "contact" | "distributor" | "super-stockist" | "dealer" | "export";

// export function Contact() {
//   const [activeForm, setActiveForm] = useState<FormType>("contact");
//   const [sent, setSent] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [formData, setFormData] = useState({
//     // Common fields
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     company: "",
//     city: "",
//     state: "",
//     pincode: "",
//     gst: "",
//     subject: "",
    
//     // Distributor specific
//     experience: "",
//     investment: "",
//     currentBusiness: "",
//     TeamSize: "",
//     warehouse: "",
    
//     // Super Stockist specific
//     existingNetwork: "",
//     storageCapacity: "",
//     logisticsCapability: "",
//     regionsCovered: "",
//     fleetSize: "",
    
//     // Dealer specific
//     shopName: "",
//     shopType: "",
//     yearsInBusiness: "",
//     monthlySales: "",
//     customerBase: "",
    
//     // Export specific
//     country: "",
//     importLicense: "",
//     containerSize: "",
//     shipmentFrequency: "",
//     exportVolume: "",
//     certifications: [] as string[],
//     paymentTerms: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSent(true);
//     setIsFlipped(true);
    
//     console.log("Form submitted:", activeForm, formData);
    
//     setTimeout(() => {
//       setIsFlipped(false);
//       setSent(false);
//     }, 4000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       certifications: prev.certifications.includes(value)
//         ? prev.certifications.filter(t => t !== value)
//         : [...prev.certifications, value]
//     }));
//   };

//   const tabs = [
//     { id: "contact" as FormType, label: "Contact Us", icon: HelpCircle, description: "General inquiries" },
//     { id: "distributor" as FormType, label: "Become Distributor", icon: Users, description: "Join as a distributor" },
//     { id: "super-stockist" as FormType, label: "Super Stockist", icon: Crown, description: "Become a super stockist" },
//     { id: "dealer" as FormType, label: "Dealer", icon: BadgeDollarSign, description: "Become a dealer" },
//     { id: "export" as FormType, label: "Export Enquiry", icon: Globe, description: "International inquiries" },
//   ];

//   const getSuccessMessage = () => {
//     switch(activeForm) {
//       case "contact":
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out to R.K. Tea Sales. Our Tea specialists will respond to your inquiry promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//       case "distributor":
//         return {
//           title: "Application Received! 🎉",
//           message: "Thank you for your interest in becoming a distributor. Our Team will review your application and get back to you within 24-48 hours.",
//           icon: <Users className="w-16 h-16 text-gold" />,
//           subtext: "Welcome to the R.K. Tea family!"
//         };
//       case "super-stockist":
//         return {
//           title: "Super Stockist Application Submitted! ⭐",
//           message: "Thank you for your interest in becoming a Super Stockist. Our Team will contact you shortly to discuss partnership details.",
//           icon: <Crown className="w-16 h-16 text-gold" />,
//           subtext: "Elevate your business with R.K. Tea!"
//         };
//       case "dealer":
//         return {
//           title: "Dealer Registration Complete! 🏪",
//           message: "Thank you for registering as a dealer. We'll send you the dealer kit and pricing details within 24 hours.",
//           icon: <BadgeDollarSign className="w-16 h-16 text-gold" />,
//           subtext: "Start your Tea journey with us!"
//         };
//       case "export":
//         return {
//           title: "Export Inquiry Received! 🌍",
//           message: "Thank you for your export inquiry. Our international trade Team will respond with detailed pricing and shipping information.",
//           icon: <Globe className="w-16 h-16 text-gold" />,
//           subtext: "Bringing Assam Tea to the world!"
//         };
//       default:
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out. Our Team will respond promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//     }
//   };

//   const successContent = getSuccessMessage();

//   return (
//     <section id="contact" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-10 md:py-8 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0">
//         <TeaParticles count={15} />
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//       </div>
      
//       <div className="absolute inset-0 opacity-[0.04]" style={{
//         backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
//         backgroundSize: "40px 40px"
//       }} />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-12 bg-gold" />
//             <span className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Connect With Us</span>
//             <span className="h-px w-12 bg-gold" />
//           </div>
//           <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-4">
//             Let's discuss your{' '}
//             <span className="relative inline-block">
//               <span className="italic text-gradient-gold">Tea journey</span>
//               <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
//             </span>
//           </h2>
//           <p className="text-cream/70 text-lg max-w-2xl mx-auto">
//             Partner with us for premium Assam Tea solutions
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Contact Info Sidebar */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-4 space-y-5"
//           >
//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
//               <div className="flex items-center gap-2 mb-5">
//                 <Leaf className="w-6 h-6 text-gold" />
//                 <h3 className="text-2xl font-display text-gold">Get in Touch</h3>
//               </div>
//               <p className="text-cream/70 text-base mb-6">
//                 Our Team is ready to assist you with premium Tea solutions
//               </p>
              
//               <div className="space-y-4">
//                 {[
//                   { Icon: Mail, label: "Email", value: "hello@rkTeasales.com", href: "mailto:hello@rkTeasales.com" },
//                   { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
//                   { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
//                   { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
//                 ].map(({ Icon, label, value, href }) => {
//                   const inner = (
//                     <>
//                       <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
//                         <Icon className="h-5 w-5" strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{label}</div>
//                         <div className="text-cream text-base font-medium">{value}</div>
//                       </div>
//                     </>
//                   );
//                   return href ? (
//                     <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-cream/5 p-4 hover:bg-cream/10 transition-all duration-300 group">
//                       {inner}
//                     </a>
//                   ) : (
//                     <div key={label} className="flex items-center gap-3 rounded-xl bg-cream/5 p-4">{inner}</div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
//               <h3 className="text-xl font-display text-gold mb-4">Follow Us</h3>
//               <div className="flex items-center gap-3">
//                 {[
//                   { Icon: Instagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
//                   { Icon: Facebook, link: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
//                   { Icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
//                 ].map(({ Icon, link, label, color }, i) => (
//                   <a 
//                     key={i} 
//                     href={link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className={`h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Trust Badges */}
//             <div className="space-y-3">
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Trusted since 1990</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Shield className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">100% quality guaranteed</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Section with Flip Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-8"
//             style={{ perspective: "1000px" }}
//           >
//             {/* Tab Buttons */}
//             {!isFlipped && (
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   const isActive = activeForm === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => {
//                         setActiveForm(tab.id);
//                         setSent(false);
//                       }}
//                       className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
//                           : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
//                       }`}
//                     >
//                       <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
//                       <span className="whitespace-nowrap">{tab.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Flip Card Container */}
//             <div
//               className={`relative transition-all duration-700 ease-in-out transform-gpu ${
//                 isFlipped ? "rotate-y-180" : ""
//               }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side - Form */}
//               <div
//                 className={`bg-cream/5 backdrop-blur-sm rounded-2xl border border-gold/20 transition-all duration-300 ${
//                   isFlipped ? "invisible" : "visible"
//                 }`}
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="p-6 md:p-8">
//                   <AnimatePresence mode="wait">
//                     <motion.form
//                       key={activeForm}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-5"
//                     >
//                       {/* Basic Information - Common for all forms */}
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Full Name" 
//                           name="name" 
//                           icon={User}
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           placeholder="John Doe"
//                         />
//                         <Field 
//                           label="Email Address" 
//                           name="email" 
//                           type="email" 
//                           icon={Mail}
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           placeholder="john@example.com"
//                         />
//                       </div>
                      
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Phone Number" 
//                           name="phone" 
//                           type="tel" 
//                           icon={Phone}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           placeholder="+91 99999 99999"
//                         />
//                         <Field 
//                           label="Company / Business Name" 
//                           name="company" 
//                           icon={Building2}
//                           value={formData.company}
//                           onChange={handleChange}
//                           placeholder="Your company name"
//                         />
//                       </div>

//                       {/* Contact Us Form - Simple with subject */}
//                       {activeForm === "contact" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Get in Touch</h4>
//                           </div>

//                           <Field 
//                             label="Subject" 
//                             name="subject" 
//                             icon={HelpCircle}
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                             placeholder="What is your inquiry about?"
//                           />

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Your Message
//                             </label>
//                             <textarea
//                               rows={4}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               required
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Tell us how we can help you..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Distributor Form */}
//                       {activeForm === "distributor" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Distributor Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="GST Number" 
//                             name="gst" 
//                             icon={FileText}
//                             value={formData.gst}
//                             onChange={handleChange}
//                             placeholder="GSTIN (if applicable)"
//                           />
                          
//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Years in Business
//                               </label>
//                               <select
//                                 name="experience"
//                                 value={formData.experience}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select experience</option>
//                                 <option value="0-1">0-1 years</option>
//                                 <option value="1-3">1-3 years</option>
//                                 <option value="3-5">3-5 years</option>
//                                 <option value="5-10">5-10 years</option>
//                                 <option value="10+">10+ years</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Current Business
//                               </label>
//                               <select
//                                 name="currentBusiness"
//                                 value={formData.currentBusiness}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select business type</option>
//                                 <option value="retail">Retail Store</option>
//                                 <option value="wholesale">Wholesale Business</option>
//                                 <option value="distributor">Existing Distributor</option>
//                                 <option value="supermarket">Supermarket Chain</option>
//                                 <option value="online">Online Seller</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Team Size
//                               </label>
//                               <select
//                                 name="TeamSize"
//                                 value={formData.TeamSize}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select Team size</option>
//                                 <option value="1-5">1-5 employees</option>
//                                 <option value="6-10">6-10 employees</option>
//                                 <option value="11-20">11-20 employees</option>
//                                 <option value="21-50">21-50 employees</option>
//                                 <option value="50+">50+ employees</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Investment Capacity
//                               </label>
//                               <select
//                                 name="investment"
//                                 value={formData.investment}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select investment range</option>
//                                 <option value="1-5lakh">₹1-5 Lakhs</option>
//                                 <option value="5-10lakh">₹5-10 Lakhs</option>
//                                 <option value="10-25lakh">₹10-25 Lakhs</option>
//                                 <option value="25-50lakh">₹25-50 Lakhs</option>
//                                 <option value="50lakh+">₹50 Lakhs+</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <Building2 className="w-4 h-4" />
//                               Warehouse / Storage Facility
//                             </label>
//                             <select
//                               name="warehouse"
//                               value={formData.warehouse}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select warehouse status</option>
//                               <option value="owned">Owned Warehouse</option>
//                               <option value="rented">Rented Warehouse</option>
//                               <option value="shared">Shared Warehouse</option>
//                               <option value="planning">Planning to Setup</option>
//                               <option value="no">No Warehouse</option>
//                             </select>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Tell us about your distribution network and why you want to partner with us..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Super Stockist Form */}
//                       {activeForm === "super-stockist" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Super Stockist Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="GST Number" 
//                             name="gst" 
//                             icon={FileText}
//                             value={formData.gst}
//                             onChange={handleChange}
//                             placeholder="GSTIN (if applicable)"
//                           />

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Existing Distribution Network
//                               </label>
//                               <select
//                                 name="existingNetwork"
//                                 value={formData.existingNetwork}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select network size</option>
//                                 <option value="1-10">1-10 dealers</option>
//                                 <option value="11-25">11-25 dealers</option>
//                                 <option value="26-50">26-50 dealers</option>
//                                 <option value="51-100">51-100 dealers</option>
//                                 <option value="100+">100+ dealers</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Storage Capacity (sq. ft.)
//                               </label>
//                               <select
//                                 name="storageCapacity"
//                                 value={formData.storageCapacity}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select capacity</option>
//                                 <option value="0-500">0-500 sq ft</option>
//                                 <option value="500-1000">500-1,000 sq ft</option>
//                                 <option value="1000-2000">1,000-2,000 sq ft</option>
//                                 <option value="2000-5000">2,000-5,000 sq ft</option>
//                                 <option value="5000+">5,000+ sq ft</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Logistics Capability
//                               </label>
//                               <select
//                                 name="logisticsCapability"
//                                 value={formData.logisticsCapability}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select capability</option>
//                                 <option value="own-fleet">Own Fleet</option>
//                                 <option value="rented">Rented Vehicles</option>
//                                 <option value="third-party">Third-Party Logistics</option>
//                                 <option value="multiple">Multiple Options</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Globe className="w-4 h-4" />
//                                 Regions Covered
//                               </label>
//                               <input
//                                 type="text"
//                                 name="regionsCovered"
//                                 value={formData.regionsCovered}
//                                 onChange={handleChange}
//                                 placeholder="e.g., North India, East India"
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//                                 required
//                               />
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <Truck className="w-4 h-4" />
//                               Fleet Size
//                             </label>
//                             <select
//                               name="fleetSize"
//                               value={formData.fleetSize}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select fleet size</option>
//                               <option value="0">No vehicles</option>
//                               <option value="1-2">1-2 vehicles</option>
//                               <option value="3-5">3-5 vehicles</option>
//                               <option value="6-10">6-10 vehicles</option>
//                               <option value="10+">10+ vehicles</option>
//                             </select>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Describe your current operations and how you plan to scale with us..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Dealer Form */}
//                       {activeForm === "dealer" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Dealer Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="Shop / Store Name" 
//                             name="shopName" 
//                             icon={Building2}
//                             value={formData.shopName}
//                             onChange={handleChange}
//                             required
//                             placeholder="Your shop name"
//                           />

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Store className="w-4 h-4" />
//                                 Shop Type
//                               </label>
//                               <select
//                                 name="shopType"
//                                 value={formData.shopType}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select shop type</option>
//                                 <option value="kirana">Kirana / Grocery Store</option>
//                                 <option value="Tea-shop">Tea Shop / Chai Stall</option>
//                                 <option value="supermarket">Supermarket</option>
//                                 <option value="online">Online Store</option>
//                                 <option value="wholesale">Wholesale Shop</option>
//                                 <option value="other">Other</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Years in Business
//                               </label>
//                               <select
//                                 name="yearsInBusiness"
//                                 value={formData.yearsInBusiness}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select years</option>
//                                 <option value="0-1">0-1 years</option>
//                                 <option value="1-3">1-3 years</option>
//                                 <option value="3-5">3-5 years</option>
//                                 <option value="5-10">5-10 years</option>
//                                 <option value="10+">10+ years</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Monthly Sales Volume (kg)
//                               </label>
//                               <select
//                                 name="monthlySales"
//                                 value={formData.monthlySales}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select volume</option>
//                                 <option value="0-10">0-10 kg</option>
//                                 <option value="10-50">10-50 kg</option>
//                                 <option value="50-100">50-100 kg</option>
//                                 <option value="100-500">100-500 kg</option>
//                                 <option value="500+">500+ kg</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Users className="w-4 h-4" />
//                                 Customer Base
//                               </label>
//                               <select
//                                 name="customerBase"
//                                 value={formData.customerBase}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select customer base</option>
//                                 <option value="retail">Retail Customers</option>
//                                 <option value="wholesale">Wholesale Customers</option>
//                                 <option value="both">Both Retail & Wholesale</option>
//                                 <option value="institutional">Institutional</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Any specific requirements or preferences for your dealership..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Export Enquiry Form */}
//                       {activeForm === "export" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Export Enquiry Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Globe className="w-4 h-4" />
//                                 Country / Region
//                               </label>
//                               <input
//                                 type="text"
//                                 name="country"
//                                 value={formData.country}
//                                 onChange={handleChange}
//                                 placeholder="e.g., USA, UK, UAE"
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//                                 required
//                               />
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <FileText className="w-4 h-4" />
//                                 Import License
//                               </label>
//                               <select
//                                 name="importLicense"
//                                 value={formData.importLicense}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select license status</option>
//                                 <option value="yes">Yes, I have</option>
//                                 <option value="no">No, but can arrange</option>
//                                 <option value="in-progress">In progress</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Package className="w-4 h-4" />
//                                 Container Size
//                               </label>
//                               <select
//                                 name="containerSize"
//                                 value={formData.containerSize}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select size</option>
//                                 <option value="20ft">20ft Container</option>
//                                 <option value="40ft">40ft Container</option>
//                                 <option value="40hc">40ft High Cube</option>
//                                 <option value="ltl">Less than Container</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 Shipment Frequency
//                               </label>
//                               <select
//                                 name="shipmentFrequency"
//                                 value={formData.shipmentFrequency}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select frequency</option>
//                                 <option value="monthly">Monthly</option>
//                                 <option value="quarterly">Quarterly</option>
//                                 <option value="half-yearly">Half-Yearly</option>
//                                 <option value="yearly">Yearly</option>
//                                 <option value="one-time">One-Time</option>
//                               </select>
//                             </div>
//                             <div>
//                               <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                                 <Truck className="w-4 h-4" />
//                                 Export Volume (kg/month)
//                               </label>
//                               <select
//                                 name="exportVolume"
//                                 value={formData.exportVolume}
//                                 onChange={handleChange}
//                                 className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                                 required
//                               >
//                                 <option value="">Select volume</option>
//                                 <option value="0-100">0-100 kg</option>
//                                 <option value="100-500">100-500 kg</option>
//                                 <option value="500-1000">500-1,000 kg</option>
//                                 <option value="1000-5000">1,000-5,000 kg</option>
//                                 <option value="5000+">5,000+ kg</option>
//                               </select>
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
//                               <CheckCircle className="w-4 h-4" />
//                               Certifications Required
//                             </label>
//                             <div className="grid grid-cols-2 gap-3">
//                               {["Organic", "Fair Trade", "ISO", "HACCP", "FSSAI", "USDA", "EU Organic", "Rainforest Alliance"].map((cert) => (
//                                 <label key={cert} className="flex items-center gap-3 text-cream/80 text-sm cursor-pointer hover:text-cream transition-colors">
//                                   <input
//                                     type="checkbox"
//                                     value={cert}
//                                     checked={formData.certifications.includes(cert)}
//                                     onChange={() => handleCheckboxChange(cert)}
//                                     className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
//                                   />
//                                   {cert}
//                                 </label>
//                               ))}
//                             </div>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//                               <BadgeDollarSign className="w-4 h-4" />
//                               Payment Terms
//                             </label>
//                             <select
//                               name="paymentTerms"
//                               value={formData.paymentTerms}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer"
//                               required
//                             >
//                               <option value="">Select payment terms</option>
//                               <option value="lc">Letter of Credit (LC)</option>
//                               <option value="tt">Telegraphic Transfer (TT)</option>
//                               <option value="dp">Documents Against Payment (DP)</option>
//                               <option value="da">Documents Against Acceptance (DA)</option>
//                               <option value="advance">Advance Payment</option>
//                             </select>
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Share your specific requirements, preferred Tea types, packaging preferences..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Submit Button */}
//                       <button
//                         type="submit"
//                         className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
//                       >
//                         <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                         {activeForm === "contact" && "Send Message"}
//                         {activeForm === "distributor" && "Apply as Distributor"}
//                         {activeForm === "super-stockist" && "Apply as Super Stockist"}
//                         {activeForm === "dealer" && "Register as Dealer"}
//                         {activeForm === "export" && "Send Export Enquiry"}
//                       </button>
//                     </motion.form>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Back Side - Success Message */}
//               <div
//                 className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-cream/5 backdrop-blur-md rounded-2xl border-2 border-gold shadow-2xl flex items-center justify-center p-8 ${
//                   isFlipped ? "visible" : "invisible"
//                 }`}
//                 style={{ 
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)"
//                 }}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 360]
//                     }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mb-6"
//                   >
//                     {successContent.icon}
//                   </motion.div>
                  
//                   <h3 className="text-3xl md:text-4xl font-display text-cream mb-4">
//                     {successContent.title}
//                   </h3>
                  
//                   <p className="text-cream/90 text-lg mb-6 leading-relaxed">
//                     {successContent.message}
//                   </p>
                  
//                   <div className="bg-gold/20 rounded-xl p-4 mb-6">
//                     <p className="text-gold text-base font-medium">
//                       {successContent.subtext}
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
//                     <Clock className="w-4 h-4" />
//                     <span>You'll hear from us within 24 hours</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating WhatsApp */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-lg shadow-gold/25 hover:scale-110 transition-all duration-300 group"
//         aria-label="WhatsApp"
//       >
//         <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
//       </a>

//       <style jsx>{`
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   type?: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   placeholder?: string;
// }

// function Field({ label, name, type = "text", icon: Icon, value, onChange, required, placeholder }: FieldProps) {
//   return (
//     <div>
//       <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//         {Icon && <Icon className="w-4 h-4" />}
//         {label}
//         {required && <span className="text-gold/60">*</span>}
//       </label>
//       <input
//         required={required}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//       />
//     </div>
//   );
// }

// // Store icon component
// function Store(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 7L4 17H20L22 7" />
//       <rect x="4" y="7" width="16" height="10" />
//       <rect x="4" y="7" width="16" height="10" transform="rotate(0 12 12)" />
//       <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" />
//     </svg>
//   );
// }




// import { motion, AnimatePresence } from "framer-motion";
// import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award, Crown, Globe, BadgeDollarSign, Shield, Star, HelpCircle } from "lucide-react";
// import { TeaParticles } from "./TeaParticles";
// import { useState } from "react";

// type FormType = "contact" | "distributor" | "super-stockist" | "dealer" | "export";

// export function Contact() {
//   const [activeForm, setActiveForm] = useState<FormType>("contact");
//   const [sent, setSent] = useState(false);
//   const [isFlipped, setIsFlipped] = useState(false);
//   const [formData, setFormData] = useState({
//     // Common fields
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     company: "",
//     city: "",
//     state: "",
//     pincode: "",
//     gst: "",
//     subject: "",
    
//     // Distributor specific
//     experience: "",
//     investment: "",
//     currentBusiness: "",
//     TeamSize: "",
//     warehouse: "",
    
//     // Super Stockist specific
//     existingNetwork: "",
//     storageCapacity: "",
//     logisticsCapability: "",
//     regionsCovered: "",
//     fleetSize: "",
    
//     // Dealer specific
//     shopName: "",
//     shopType: "",
//     yearsInBusiness: "",
//     monthlySales: "",
//     customerBase: "",
    
//     // Export specific
//     country: "",
//     importLicense: "",
//     containerSize: "",
//     shipmentFrequency: "",
//     exportVolume: "",
//     certifications: [] as string[],
//     paymentTerms: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setSent(true);
//     setIsFlipped(true);
    
//     console.log("Form submitted:", activeForm, formData);
    
//     setTimeout(() => {
//       setIsFlipped(false);
//       setSent(false);
//     }, 4000);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleCheckboxChange = (value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       certifications: prev.certifications.includes(value)
//         ? prev.certifications.filter(t => t !== value)
//         : [...prev.certifications, value]
//     }));
//   };

//   const tabs = [
//     { id: "contact" as FormType, label: "Contact Us", icon: HelpCircle, description: "General inquiries" },
//     { id: "distributor" as FormType, label: "Become Distributor", icon: Users, description: "Join as a distributor" },
//     { id: "super-stockist" as FormType, label: "Super Stockist", icon: Crown, description: "Become a super stockist" },
//     { id: "dealer" as FormType, label: "Dealer", icon: BadgeDollarSign, description: "Become a dealer" },
//     // { id: "export" as FormType, label: "Export Enquiry", icon: Globe, description: "International inquiries" },
//   ];

//   const getSuccessMessage = () => {
//     switch(activeForm) {
//       case "contact":
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out to R.K. Tea Sales. Our Tea specialists will respond to your inquiry promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//       case "distributor":
//         return {
//           title: "Application Received! 🎉",
//           message: "Thank you for your interest in becoming a distributor. Our Team will review your application and get back to you within 24-48 hours.",
//           icon: <Users className="w-16 h-16 text-gold" />,
//           subtext: "Welcome to the R.K. Tea family!"
//         };
//       case "super-stockist":
//         return {
//           title: "Super Stockist Application Submitted! ⭐",
//           message: "Thank you for your interest in becoming a Super Stockist. Our Team will contact you shortly to discuss partnership details.",
//           icon: <Crown className="w-16 h-16 text-gold" />,
//           subtext: "Elevate your business with R.K. Tea!"
//         };
//       case "dealer":
//         return {
//           title: "Dealer Registration Complete! 🏪",
//           message: "Thank you for registering as a dealer. We'll send you the dealer kit and pricing details within 24 hours.",
//           icon: <BadgeDollarSign className="w-16 h-16 text-gold" />,
//           subtext: "Start your Tea journey with us!"
//         };
//       case "export":
//         return {
//           title: "Export Inquiry Received! 🌍",
//           message: "Thank you for your export inquiry. Our international trade Team will respond with detailed pricing and shipping information.",
//           icon: <Globe className="w-16 h-16 text-gold" />,
//           subtext: "Bringing Assam Tea to the world!"
//         };
//       default:
//         return {
//           title: "Message Sent! ✨",
//           message: "Thank you for reaching out. Our Team will respond promptly.",
//           icon: <Mail className="w-16 h-16 text-gold" />,
//           subtext: "Steeped in excellence, served with care."
//         };
//     }
//   };

//   const successContent = getSuccessMessage();

//   // Reusable Select component with proper styling
//   const SelectField = ({ label, name, icon: Icon, value, onChange, required, options, placeholder }: any) => (
//     <div>
//       <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//         {Icon && <Icon className="w-4 h-4" />}
//         {label}
//         {required && <span className="text-gold/60">*</span>}
//       </label>
//       <select
//         name={name}
//         value={value}
//         onChange={onChange}
//         required={required}
//         className="w-full bg-forest-deep/80 border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer appearance-none"
//         style={{ 
//           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF37' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
//           backgroundRepeat: "no-repeat",
//           backgroundPosition: "right 0 center",
//           paddingRight: "2rem"
//         }}
//       >
//         <option value="" className="bg-forest-deep text-cream/60">{placeholder || `Select ${label}`}</option>
//         {options.map((opt: string) => (
//           <option key={opt} value={opt} className="bg-forest-deep text-cream">
//             {opt}
//           </option>
//         ))}
//       </select>
//     </div>
//   );

//   return (
//     <section id="contact" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-10 md:py-8 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0">
//         <TeaParticles count={15} />
//         <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
//       </div>
      
//       <div className="absolute inset-0 opacity-[0.04]" style={{
//         backgroundImage: "radial-gradient(circle at 1px 1px, oklch(0.85 0.12 85) 1px, transparent 0)",
//         backgroundSize: "40px 40px"
//       }} />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="flex items-center justify-center gap-3 mb-4">
//             <span className="h-px w-12 bg-gold" />
//             <span className="text-sm uppercase tracking-[0.3em] text-gold font-medium">Connect With Us</span>
//             <span className="h-px w-12 bg-gold" />
//           </div>
//           <h2 className="font-display text-5xl md:text-6xl text-cream leading-tight mb-4">
//             Let's discuss your{' '}
//             <span className="relative inline-block">
//               <span className="italic text-gradient-gold">Tea journey</span>
//               <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
//             </span>
//           </h2>
//           <p className="text-cream/70 text-lg max-w-2xl mx-auto">
//             Partner with us for premium Assam Tea solutions
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* Contact Info Sidebar */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-4 space-y-5"
//           >
//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20 hover:border-gold/40 transition-all duration-300">
//               <div className="flex items-center gap-2 mb-5">
//                 <Leaf className="w-6 h-6 text-gold" />
//                 <h3 className="text-2xl font-display text-gold">Get in Touch</h3>
//               </div>
//               <p className="text-cream/70 text-base mb-6">
//                 Our Team is ready to assist you with premium Tea solutions
//               </p>
              
//               <div className="space-y-4">
//                 {[
//                   { Icon: Mail, label: "Email", value: "hello@rkTeasales.com", href: "mailto:hello@rkTeasales.com" },
//                   { Icon: Phone, label: "Call", value: "+91 99999 99999", href: "tel:+919999999999" },
//                   { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919999999999" },
//                   { Icon: MapPin, label: "Visit", value: "Dibrugarh, Assam, India" },
//                 ].map(({ Icon, label, value, href }) => {
//                   const inner = (
//                     <>
//                       <div className="h-12 w-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold flex-shrink-0 group-hover:scale-110 transition-transform">
//                         <Icon className="h-5 w-5" strokeWidth={1.5} />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-1">{label}</div>
//                         <div className="text-cream text-base font-medium">{value}</div>
//                       </div>
//                     </>
//                   );
//                   return href ? (
//                     <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl bg-cream/5 p-4 hover:bg-cream/10 transition-all duration-300 group">
//                       {inner}
//                     </a>
//                   ) : (
//                     <div key={label} className="flex items-center gap-3 rounded-xl bg-cream/5 p-4">{inner}</div>
//                   );
//                 })}
//               </div>
//             </div>

//             <div className="bg-cream/5 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
//               <h3 className="text-xl font-display text-gold mb-4">Follow Us</h3>
//               <div className="flex items-center gap-3">
//                 {[
//                   { Icon: Instagram, link: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500" },
//                   { Icon: Facebook, link: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-600" },
//                   { Icon: Linkedin, link: "https://linkedin.com", label: "LinkedIn", color: "hover:bg-blue-700" }
//                 ].map(({ Icon, link, label, color }, i) => (
//                   <a 
//                     key={i} 
//                     href={link} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={label}
//                     className={`h-11 w-11 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:text-white ${color} transition-all duration-300 hover:scale-110 hover:border-transparent`}
//                   >
//                     <Icon className="h-5 w-5" />
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Trust Badges */}
//             <div className="space-y-3">
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Award className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Trusted since 1990</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Clock className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
//                 </div>
//               </div>
//               <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
//                 <div className="flex items-center gap-3">
//                   <Shield className="w-5 h-5 text-gold" />
//                   <p className="text-cream/80 text-sm leading-relaxed">100% quality guaranteed</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Form Section with Flip Card */}
//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="lg:col-span-8"
//             style={{ perspective: "1000px" }}
//           >
//             {/* Tab Buttons */}
//             {!isFlipped && (
//               <div className="flex flex-wrap gap-3 mb-6">
//                 {tabs.map((tab) => {
//                   const Icon = tab.icon;
//                   const isActive = activeForm === tab.id;
//                   return (
//                     <button
//                       key={tab.id}
//                       onClick={() => {
//                         setActiveForm(tab.id);
//                         setSent(false);
//                       }}
//                       className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                         isActive
//                           ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
//                           : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
//                       }`}
//                     >
//                       <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
//                       <span className="whitespace-nowrap">{tab.label}</span>
//                     </button>
//                   );
//                 })}
//               </div>
//             )}

//             {/* Flip Card Container */}
//             <div
//               className={`relative transition-all duration-700 ease-in-out transform-gpu ${
//                 isFlipped ? "rotate-y-180" : ""
//               }`}
//               style={{ transformStyle: "preserve-3d" }}
//             >
//               {/* Front Side - Form */}
//               <div
//                 className={`bg-cream/5 backdrop-blur-sm rounded-2xl border border-gold/20 transition-all duration-300 ${
//                   isFlipped ? "invisible" : "visible"
//                 }`}
//                 style={{ backfaceVisibility: "hidden" }}
//               >
//                 <div className="p-6 md:p-8">
//                   <AnimatePresence mode="wait">
//                     <motion.form
//                       key={activeForm}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.3 }}
//                       onSubmit={handleSubmit}
//                       className="space-y-5"
//                     >
//                       {/* Basic Information - Common for all forms */}
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Full Name" 
//                           name="name" 
//                           icon={User}
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           placeholder="John Doe"
//                         />
//                         <Field 
//                           label="Email Address" 
//                           name="email" 
//                           type="email" 
//                           icon={Mail}
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           placeholder="john@example.com"
//                         />
//                       </div>
                      
//                       <div className="grid sm:grid-cols-2 gap-5">
//                         <Field 
//                           label="Phone Number" 
//                           name="phone" 
//                           type="tel" 
//                           icon={Phone}
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           placeholder="+91 99999 99999"
//                         />
//                         <Field 
//                           label="Company / Business Name" 
//                           name="company" 
//                           icon={Building2}
//                           value={formData.company}
//                           onChange={handleChange}
//                           placeholder="Your company name"
//                         />
//                       </div>

//                       {/* Contact Us Form - Simple with subject */}
//                       {activeForm === "contact" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Get in Touch</h4>
//                           </div>

//                           <Field 
//                             label="Subject" 
//                             name="subject" 
//                             icon={HelpCircle}
//                             value={formData.subject}
//                             onChange={handleChange}
//                             required
//                             placeholder="What is your inquiry about?"
//                           />

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Your Message
//                             </label>
//                             <textarea
//                               rows={4}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               required
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Tell us how we can help you..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Distributor Form */}
//                       {activeForm === "distributor" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Distributor Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="GST Number" 
//                             name="gst" 
//                             icon={FileText}
//                             value={formData.gst}
//                             onChange={handleChange}
//                             placeholder="GSTIN (if applicable)"
//                           />
                          
//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Years in Business"
//                               name="experience"
//                               icon={Calendar}
//                               value={formData.experience}
//                               onChange={handleChange}
//                               required
//                               options={["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"]}
//                               placeholder="Select experience"
//                             />
//                             <SelectField
//                               label="Current Business"
//                               name="currentBusiness"
//                               icon={Package}
//                               value={formData.currentBusiness}
//                               onChange={handleChange}
//                               required
//                               options={["Retail Store", "Wholesale Business", "Existing Distributor", "Supermarket Chain", "Online Seller", "Other"]}
//                               placeholder="Select business type"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Team Size"
//                               name="TeamSize"
//                               icon={Users}
//                               value={formData.TeamSize}
//                               onChange={handleChange}
//                               required
//                               options={["1-5 employees", "6-10 employees", "11-20 employees", "21-50 employees", "50+ employees"]}
//                               placeholder="Select Team size"
//                             />
//                             <SelectField
//                               label="Investment Capacity"
//                               name="investment"
//                               icon={Truck}
//                               value={formData.investment}
//                               onChange={handleChange}
//                               required
//                               options={["₹1-5 Lakhs", "₹5-10 Lakhs", "₹10-25 Lakhs", "₹25-50 Lakhs", "₹50 Lakhs+"]}
//                               placeholder="Select investment range"
//                             />
//                           </div>

//                           <SelectField
//                             label="Warehouse / Storage Facility"
//                             name="warehouse"
//                             icon={Building2}
//                             value={formData.warehouse}
//                             onChange={handleChange}
//                             required
//                             options={["Owned Warehouse", "Rented Warehouse", "Shared Warehouse", "Planning to Setup", "No Warehouse"]}
//                             placeholder="Select warehouse status"
//                           />

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Tell us about your distribution network and why you want to partner with us..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Super Stockist Form */}
//                       {activeForm === "super-stockist" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Super Stockist Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="GST Number" 
//                             name="gst" 
//                             icon={FileText}
//                             value={formData.gst}
//                             onChange={handleChange}
//                             placeholder="GSTIN (if applicable)"
//                           />

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Existing Distribution Network"
//                               name="existingNetwork"
//                               icon={Users}
//                               value={formData.existingNetwork}
//                               onChange={handleChange}
//                               required
//                               options={["1-10 dealers", "11-25 dealers", "26-50 dealers", "51-100 dealers", "100+ dealers"]}
//                               placeholder="Select network size"
//                             />
//                             <SelectField
//                               label="Storage Capacity (sq. ft.)"
//                               name="storageCapacity"
//                               icon={Package}
//                               value={formData.storageCapacity}
//                               onChange={handleChange}
//                               required
//                               options={["0-500 sq ft", "500-1,000 sq ft", "1,000-2,000 sq ft", "2,000-5,000 sq ft", "5,000+ sq ft"]}
//                               placeholder="Select capacity"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Logistics Capability"
//                               name="logisticsCapability"
//                               icon={Truck}
//                               value={formData.logisticsCapability}
//                               onChange={handleChange}
//                               required
//                               options={["Own Fleet", "Rented Vehicles", "Third-Party Logistics", "Multiple Options"]}
//                               placeholder="Select capability"
//                             />
//                             <Field 
//                               label="Regions Covered" 
//                               name="regionsCovered" 
//                               icon={Globe}
//                               value={formData.regionsCovered}
//                               onChange={handleChange}
//                               required
//                               placeholder="e.g., North India, East India"
//                             />
//                           </div>

//                           <SelectField
//                             label="Fleet Size"
//                             name="fleetSize"
//                             icon={Truck}
//                             value={formData.fleetSize}
//                             onChange={handleChange}
//                             required
//                             options={["No vehicles", "1-2 vehicles", "3-5 vehicles", "6-10 vehicles", "10+ vehicles"]}
//                             placeholder="Select fleet size"
//                           />

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Describe your current operations and how you plan to scale with us..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Dealer Form */}
//                       {activeForm === "dealer" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Dealer Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <Field 
//                             label="Shop / Store Name" 
//                             name="shopName" 
//                             icon={Building2}
//                             value={formData.shopName}
//                             onChange={handleChange}
//                             required
//                             placeholder="Your shop name"
//                           />

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Shop Type"
//                               name="shopType"
//                               icon={Store}
//                               value={formData.shopType}
//                               onChange={handleChange}
//                               required
//                               options={["Kirana / Grocery Store", "Tea Shop / Chai Stall", "Supermarket", "Online Store", "Wholesale Shop", "Other"]}
//                               placeholder="Select shop type"
//                             />
//                             <SelectField
//                               label="Years in Business"
//                               name="yearsInBusiness"
//                               icon={Calendar}
//                               value={formData.yearsInBusiness}
//                               onChange={handleChange}
//                               required
//                               options={["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"]}
//                               placeholder="Select years"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <SelectField
//                               label="Monthly Sales Volume (kg)"
//                               name="monthlySales"
//                               icon={Package}
//                               value={formData.monthlySales}
//                               onChange={handleChange}
//                               required
//                               options={["0-10 kg", "10-50 kg", "50-100 kg", "100-500 kg", "500+ kg"]}
//                               placeholder="Select volume"
//                             />
//                             <SelectField
//                               label="Customer Base"
//                               name="customerBase"
//                               icon={Users}
//                               value={formData.customerBase}
//                               onChange={handleChange}
//                               required
//                               options={["Retail Customers", "Wholesale Customers", "Both Retail & Wholesale", "Institutional"]}
//                               placeholder="Select customer base"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Any specific requirements or preferences for your dealership..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Export Enquiry Form */}
//                       {activeForm === "export" && (
//                         <motion.div
//                           initial={{ opacity: 0, height: 0 }}
//                           animate={{ opacity: 1, height: "auto" }}
//                           exit={{ opacity: 0, height: 0 }}
//                           className="space-y-5 overflow-hidden"
//                         >
//                           <div className="border-t border-gold/20 pt-5">
//                             <h4 className="text-gold font-display text-lg mb-4">Export Enquiry Details</h4>
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <Field 
//                               label="City" 
//                               name="city" 
//                               icon={MapPin}
//                               value={formData.city}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your city"
//                             />
//                             <Field 
//                               label="State" 
//                               name="state" 
//                               value={formData.state}
//                               onChange={handleChange}
//                               required
//                               placeholder="Your state"
//                             />
//                             <Field 
//                               label="Pincode" 
//                               name="pincode" 
//                               value={formData.pincode}
//                               onChange={handleChange}
//                               required
//                               placeholder="Pincode"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-2 gap-5">
//                             <Field 
//                               label="Country / Region" 
//                               name="country" 
//                               icon={Globe}
//                               value={formData.country}
//                               onChange={handleChange}
//                               required
//                               placeholder="e.g., USA, UK, UAE"
//                             />
//                             <SelectField
//                               label="Import License"
//                               name="importLicense"
//                               icon={FileText}
//                               value={formData.importLicense}
//                               onChange={handleChange}
//                               required
//                               options={["Yes, I have", "No, but can arrange", "In progress"]}
//                               placeholder="Select license status"
//                             />
//                           </div>

//                           <div className="grid sm:grid-cols-3 gap-5">
//                             <SelectField
//                               label="Container Size"
//                               name="containerSize"
//                               icon={Package}
//                               value={formData.containerSize}
//                               onChange={handleChange}
//                               required
//                               options={["20ft Container", "40ft Container", "40ft High Cube", "Less than Container"]}
//                               placeholder="Select size"
//                             />
//                             <SelectField
//                               label="Shipment Frequency"
//                               name="shipmentFrequency"
//                               icon={Calendar}
//                               value={formData.shipmentFrequency}
//                               onChange={handleChange}
//                               required
//                               options={["Monthly", "Quarterly", "Half-Yearly", "Yearly", "One-Time"]}
//                               placeholder="Select frequency"
//                             />
//                             <SelectField
//                               label="Export Volume (kg/month)"
//                               name="exportVolume"
//                               icon={Truck}
//                               value={formData.exportVolume}
//                               onChange={handleChange}
//                               required
//                               options={["0-100 kg", "100-500 kg", "500-1,000 kg", "1,000-5,000 kg", "5,000+ kg"]}
//                               placeholder="Select volume"
//                             />
//                           </div>

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
//                               <CheckCircle className="w-4 h-4" />
//                               Certifications Required
//                             </label>
//                             <div className="grid grid-cols-2 gap-3">
//                               {["Organic", "Fair Trade", "ISO", "HACCP", "FSSAI", "USDA", "EU Organic", "Rainforest Alliance"].map((cert) => (
//                                 <label key={cert} className="flex items-center gap-3 text-cream/80 text-sm cursor-pointer hover:text-cream transition-colors">
//                                   <input
//                                     type="checkbox"
//                                     value={cert}
//                                     checked={formData.certifications.includes(cert)}
//                                     onChange={() => handleCheckboxChange(cert)}
//                                     className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
//                                   />
//                                   {cert}
//                                 </label>
//                               ))}
//                             </div>
//                           </div>

//                           <SelectField
//                             label="Payment Terms"
//                             name="paymentTerms"
//                             icon={BadgeDollarSign}
//                             value={formData.paymentTerms}
//                             onChange={handleChange}
//                             required
//                             options={["Letter of Credit (LC)", "Telegraphic Transfer (TT)", "Documents Against Payment (DP)", "Documents Against Acceptance (DA)", "Advance Payment"]}
//                             placeholder="Select payment terms"
//                           />

//                           <div>
//                             <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
//                               Additional Information
//                             </label>
//                             <textarea
//                               rows={3}
//                               name="message"
//                               value={formData.message}
//                               onChange={handleChange}
//                               className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
//                               placeholder="Share your specific requirements, preferred Tea types, packaging preferences..."
//                             />
//                           </div>
//                         </motion.div>
//                       )}

//                       {/* Submit Button */}
//                       <button
//                         type="submit"
//                         className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
//                       >
//                         <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                         {activeForm === "contact" && "Send Message"}
//                         {activeForm === "distributor" && "Apply as Distributor"}
//                         {activeForm === "super-stockist" && "Apply as Super Stockist"}
//                         {activeForm === "dealer" && "Register as Dealer"}
//                         {activeForm === "export" && "Send Export Enquiry"}
//                       </button>
//                     </motion.form>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               {/* Back Side - Success Message */}
//               <div
//                 className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gold/10 to-cream/5 backdrop-blur-md rounded-2xl border-2 border-gold shadow-2xl flex items-center justify-center p-8 ${
//                   isFlipped ? "visible" : "invisible"
//                 }`}
//                 style={{ 
//                   backfaceVisibility: "hidden",
//                   transform: "rotateY(180deg)"
//                 }}
//               >
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.5, delay: 0.2 }}
//                   className="text-center"
//                 >
//                   <motion.div
//                     animate={{ 
//                       scale: [1, 1.2, 1],
//                       rotate: [0, 360]
//                     }}
//                     transition={{ duration: 0.8, delay: 0.3 }}
//                     className="mb-6"
//                   >
//                     {successContent.icon}
//                   </motion.div>
                  
//                   <h3 className="text-3xl md:text-4xl font-display text-cream mb-4">
//                     {successContent.title}
//                   </h3>
                  
//                   <p className="text-cream/90 text-lg mb-6 leading-relaxed">
//                     {successContent.message}
//                   </p>
                  
//                   <div className="bg-gold/20 rounded-xl p-4 mb-6">
//                     <p className="text-gold text-base font-medium">
//                       {successContent.subtext}
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center justify-center gap-2 text-cream/60 text-sm">
//                     <Clock className="w-4 h-4" />
//                     <span>You'll hear from us within 24 hours</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Floating WhatsApp */}
//       <a
//         href="https://wa.me/919999999999"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-gold flex items-center justify-center text-forest-deep shadow-lg shadow-gold/25 hover:scale-110 transition-all duration-300 group"
//         aria-label="WhatsApp"
//       >
//         <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform" />
//       </a>

//       <style jsx>{`
//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </section>
//   );
// }

// interface FieldProps {
//   label: string;
//   name: string;
//   type?: string;
//   icon?: React.ComponentType<{ className?: string }>;
//   value: string;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   required?: boolean;
//   placeholder?: string;
// }

// function Field({ label, name, type = "text", icon: Icon, value, onChange, required, placeholder }: FieldProps) {
//   return (
//     <div>
//       <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
//         {Icon && <Icon className="w-4 h-4" />}
//         {label}
//         {required && <span className="text-gold/60">*</span>}
//       </label>
//       <input
//         required={required}
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         placeholder={placeholder}
//         className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 transition-colors"
//       />
//     </div>
//   );
// }

// // Store icon component
// function Store(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M2 7L4 17H20L22 7" />
//       <rect x="4" y="7" width="16" height="10" />
//       <rect x="4" y="7" width="16" height="10" transform="rotate(0 12 12)" />
//       <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" />
//     </svg>
//   );
// }






import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Facebook, Linkedin, Users, Package, User, Building2, Calendar, Truck, FileText, CheckCircle, Sparkles, Leaf, ThumbsUp, Clock, Award, Crown, Globe, BadgeDollarSign, Shield, Star, HelpCircle } from "lucide-react";
import { TeaParticles } from "./TeaParticles";
import { useState } from "react";

type FormType = "contact" | "distributor" | "super-stockist" | "dealer" | "export";

export function Contact() {
  const [activeForm, setActiveForm] = useState<FormType>("contact");
  const [sent, setSent] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [formData, setFormData] = useState({
    // Common fields
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "",
    city: "",
    state: "",
    pincode: "",
    gst: "",
    subject: "",
    
    // Distributor specific
    experience: "",
    investment: "",
    currentBusiness: "",
    TeamSize: "",
    warehouse: "",
    
    // Super Stockist specific
    existingNetwork: "",
    storageCapacity: "",
    logisticsCapability: "",
    regionsCovered: "",
    fleetSize: "",
    
    // Dealer specific
    shopName: "",
    shopType: "",
    yearsInBusiness: "",
    monthlySales: "",
    customerBase: "",
    
    // Export specific
    country: "",
    importLicense: "",
    containerSize: "",
    shipmentFrequency: "",
    exportVolume: "",
    certifications: [] as string[],
    paymentTerms: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setIsFlipped(true);
    
    console.log("Form submitted:", activeForm, formData);
    
    setTimeout(() => {
      setIsFlipped(false);
      setSent(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.includes(value)
        ? prev.certifications.filter(t => t !== value)
        : [...prev.certifications, value]
    }));
  };

  const tabs = [
    { id: "contact" as FormType, label: "Contact Us", icon: HelpCircle, description: "General inquiries" },
    { id: "distributor" as FormType, label: "Become Distributor", icon: Users, description: "Join as a distributor" },
    { id: "super-stockist" as FormType, label: "Super Stockist", icon: Crown, description: "Become a super stockist" },
    { id: "dealer" as FormType, label: "Dealer", icon: BadgeDollarSign, description: "Become a dealer" },
    // { id: "export" as FormType, label: "Export Enquiry", icon: Globe, description: "International inquiries" },
  ];

  const getSuccessMessage = () => {
    switch(activeForm) {
      case "contact":
        return {
          title: "Message Sent! ✨",
          message: "Thank you for reaching out to R.K. Tea Sales. Our Tea specialists will respond to your inquiry promptly.",
          icon: <Mail className="w-16 h-16 text-gold" />,
          subtext: "Steeped in excellence, served with care."
        };
      case "distributor":
        return {
          title: "Application Received! 🎉",
          message: "Thank you for your interest in becoming a distributor. Our Team will review your application and get back to you within 24-48 hours.",
          icon: <Users className="w-16 h-16 text-gold" />,
          subtext: "Welcome to the R.K. Tea family!"
        };
      case "super-stockist":
        return {
          title: "Super Stockist Application Submitted! ⭐",
          message: "Thank you for your interest in becoming a Super Stockist. Our Team will contact you shortly to discuss partnership details.",
          icon: <Crown className="w-16 h-16 text-gold" />,
          subtext: "Elevate your business with R.K. Tea!"
        };
      case "dealer":
        return {
          title: "Dealer Registration Complete! 🏪",
          message: "Thank you for registering as a dealer. We'll send you the dealer kit and pricing details within 24 hours.",
          icon: <BadgeDollarSign className="w-16 h-16 text-gold" />,
          subtext: "Start your Tea journey with us!"
        };
      case "export":
        return {
          title: "Export Inquiry Received! 🌍",
          message: "Thank you for your export inquiry. Our international trade Team will respond with detailed pricing and shipping information.",
          icon: <Globe className="w-16 h-16 text-gold" />,
          subtext: "Bringing Assam Tea to the world!"
        };
      default:
        return {
          title: "Message Sent! ✨",
          message: "Thank you for reaching out. Our Team will respond promptly.",
          icon: <Mail className="w-16 h-16 text-gold" />,
          subtext: "Steeped in excellence, served with care."
        };
    }
  };

  const successContent = getSuccessMessage();

  // Reusable Select component with proper styling
  const SelectField = ({ label, name, icon: Icon, value, onChange, required, options, placeholder }: any) => (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block flex items-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {label}
        {required && <span className="text-gold/60">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-forest-deep/80 border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base transition-colors cursor-pointer appearance-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23D4AF37' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0 center",
          paddingRight: "2rem"
        }}
      >
        <option value="" className="bg-forest-deep text-cream/60">{placeholder || `Select ${label}`}</option>
        {options.map((opt: string) => (
          <option key={opt} value={opt} className="bg-forest-deep text-cream">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

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
              <span className="italic text-gradient-gold">Tea journey</span>
              <Sparkles className="absolute -top-2 -right-8 w-5 h-5 text-gold animate-pulse" />
            </span>
          </h2>
          <p className="text-cream/70 text-lg max-w-2xl mx-auto">
            Partner with us for premium Assam Tea solutions
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
                Our Team is ready to assist you with premium Tea solutions
              </p>
              
              <div className="space-y-4">
                {[
                  { Icon: Mail, label: "Email", value: "hello@rkTeasales.com", href: "mailto:hello@rkTeasales.com" },
                  { Icon: Phone, label: "Call", value: "98490 23900", href: "tel:+919849023900" },
                  { Icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/919849023900" },
                  { Icon: MapPin, label: "Visit", value: "Hyderabad, India" },
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
                  { Icon: Instagram, link: "https://www.instagram.com/adyaagoldTea?igsh=bm50ZWsxMWowOGp3", label: "Instagram", color: "hover:bg-pink-500" },
                  { Icon: Facebook, link: "https://www.facebook.com/profile.php?id=61572091612170", label: "Facebook", color: "hover:bg-blue-600" },
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
                  <p className="text-cream/80 text-sm leading-relaxed">Trusted since 1990</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold" />
                  <p className="text-cream/80 text-sm leading-relaxed">Response within 24 hours</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-gold/10 to-transparent rounded-xl p-4 border-l-2 border-gold">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gold" />
                  <p className="text-cream/80 text-sm leading-relaxed">100% quality guaranteed</p>
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
                      className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-gold text-forest-deep shadow-lg shadow-gold/25"
                          : "bg-cream/10 text-cream/80 hover:bg-cream/20 border border-gold/30"
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-forest-deep" : "text-gold"}`} />
                      <span className="whitespace-nowrap">{tab.label}</span>
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
                      {/* Basic Information - Common for all forms */}
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
                          placeholder="98490 23900"
                        />
                        <Field 
                          label="Company / Business Name" 
                          name="company" 
                          icon={Building2}
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your company name"
                        />
                      </div>

                      {/* Contact Us Form - Simple with subject */}
                      {activeForm === "contact" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="border-t border-gold/20 pt-5">
                            <h4 className="text-gold font-display text-lg mb-4">Get in Touch</h4>
                          </div>

                          <Field 
                            label="Subject" 
                            name="subject" 
                            icon={HelpCircle}
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="What is your inquiry about?"
                          />

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                              Your Message
                            </label>
                            <textarea
                              rows={4}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                              placeholder="Tell us how we can help you..."
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Distributor Form */}
                      {activeForm === "distributor" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="border-t border-gold/20 pt-5">
                            <h4 className="text-gold font-display text-lg mb-4">Distributor Details</h4>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-5">
                            <Field 
                              label="City" 
                              name="city" 
                              icon={MapPin}
                              value={formData.city}
                              onChange={handleChange}
                              required
                              placeholder="Your city"
                            />
                            <Field 
                              label="State" 
                              name="state" 
                              value={formData.state}
                              onChange={handleChange}
                              required
                              placeholder="Your state"
                            />
                            <Field 
                              label="Pincode" 
                              name="pincode" 
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                              placeholder="Pincode"
                            />
                          </div>

                          <Field 
                            label="GST Number" 
                            name="gst" 
                            icon={FileText}
                            value={formData.gst}
                            onChange={handleChange}
                            placeholder="GSTIN (if applicable)"
                          />
                          
                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Years in Business"
                              name="experience"
                              icon={Calendar}
                              value={formData.experience}
                              onChange={handleChange}
                              required
                              options={["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"]}
                              placeholder="Select experience"
                            />
                            <SelectField
                              label="Current Business"
                              name="currentBusiness"
                              icon={Package}
                              value={formData.currentBusiness}
                              onChange={handleChange}
                              required
                              options={["Retail Store", "Wholesale Business", "Existing Distributor", "Supermarket Chain", "Online Seller", "Other"]}
                              placeholder="Select business type"
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Team Size"
                              name="TeamSize"
                              icon={Users}
                              value={formData.TeamSize}
                              onChange={handleChange}
                              required
                              options={["1-5 employees", "6-10 employees", "11-20 employees", "21-50 employees", "50+ employees"]}
                              placeholder="Select Team size"
                            />
                            <SelectField
                              label="Investment Capacity"
                              name="investment"
                              icon={Truck}
                              value={formData.investment}
                              onChange={handleChange}
                              required
                              options={["₹1-5 Lakhs", "₹5-10 Lakhs", "₹10-25 Lakhs", "₹25-50 Lakhs", "₹50 Lakhs+"]}
                              placeholder="Select investment range"
                            />
                          </div>

                          <SelectField
                            label="Warehouse / Storage Facility"
                            name="warehouse"
                            icon={Building2}
                            value={formData.warehouse}
                            onChange={handleChange}
                            required
                            options={["Owned Warehouse", "Rented Warehouse", "Shared Warehouse", "Planning to Setup", "No Warehouse"]}
                            placeholder="Select warehouse status"
                          />

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                              Additional Information
                            </label>
                            <textarea
                              rows={3}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                              placeholder="Tell us about your distribution network and why you want to partner with us..."
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Super Stockist Form */}
                      {activeForm === "super-stockist" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="border-t border-gold/20 pt-5">
                            <h4 className="text-gold font-display text-lg mb-4">Super Stockist Details</h4>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-5">
                            <Field 
                              label="City" 
                              name="city" 
                              icon={MapPin}
                              value={formData.city}
                              onChange={handleChange}
                              required
                              placeholder="Your city"
                            />
                            <Field 
                              label="State" 
                              name="state" 
                              value={formData.state}
                              onChange={handleChange}
                              required
                              placeholder="Your state"
                            />
                            <Field 
                              label="Pincode" 
                              name="pincode" 
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                              placeholder="Pincode"
                            />
                          </div>

                          <Field 
                            label="GST Number" 
                            name="gst" 
                            icon={FileText}
                            value={formData.gst}
                            onChange={handleChange}
                            placeholder="GSTIN (if applicable)"
                          />

                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Existing Distribution Network"
                              name="existingNetwork"
                              icon={Users}
                              value={formData.existingNetwork}
                              onChange={handleChange}
                              required
                              options={["1-10 dealers", "11-25 dealers", "26-50 dealers", "51-100 dealers", "100+ dealers"]}
                              placeholder="Select network size"
                            />
                            <SelectField
                              label="Storage Capacity (sq. ft.)"
                              name="storageCapacity"
                              icon={Package}
                              value={formData.storageCapacity}
                              onChange={handleChange}
                              required
                              options={["0-500 sq ft", "500-1,000 sq ft", "1,000-2,000 sq ft", "2,000-5,000 sq ft", "5,000+ sq ft"]}
                              placeholder="Select capacity"
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Logistics Capability"
                              name="logisticsCapability"
                              icon={Truck}
                              value={formData.logisticsCapability}
                              onChange={handleChange}
                              required
                              options={["Own Fleet", "Rented Vehicles", "Third-Party Logistics", "Multiple Options"]}
                              placeholder="Select capability"
                            />
                            <Field 
                              label="Regions Covered" 
                              name="regionsCovered" 
                              icon={Globe}
                              value={formData.regionsCovered}
                              onChange={handleChange}
                              required
                              placeholder="e.g., North India, East India"
                            />
                          </div>

                          <SelectField
                            label="Fleet Size"
                            name="fleetSize"
                            icon={Truck}
                            value={formData.fleetSize}
                            onChange={handleChange}
                            required
                            options={["No vehicles", "1-2 vehicles", "3-5 vehicles", "6-10 vehicles", "10+ vehicles"]}
                            placeholder="Select fleet size"
                          />

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                              Additional Information
                            </label>
                            <textarea
                              rows={3}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                              placeholder="Describe your current operations and how you plan to scale with us..."
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Dealer Form */}
                      {activeForm === "dealer" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="border-t border-gold/20 pt-5">
                            <h4 className="text-gold font-display text-lg mb-4">Dealer Details</h4>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-5">
                            <Field 
                              label="City" 
                              name="city" 
                              icon={MapPin}
                              value={formData.city}
                              onChange={handleChange}
                              required
                              placeholder="Your city"
                            />
                            <Field 
                              label="State" 
                              name="state" 
                              value={formData.state}
                              onChange={handleChange}
                              required
                              placeholder="Your state"
                            />
                            <Field 
                              label="Pincode" 
                              name="pincode" 
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                              placeholder="Pincode"
                            />
                          </div>

                          <Field 
                            label="Shop / Store Name" 
                            name="shopName" 
                            icon={Building2}
                            value={formData.shopName}
                            onChange={handleChange}
                            required
                            placeholder="Your shop name"
                          />

                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Shop Type"
                              name="shopType"
                              icon={Store}
                              value={formData.shopType}
                              onChange={handleChange}
                              required
                              options={["Kirana / Grocery Store", "Tea Shop / Chai Stall", "Supermarket", "Online Store", "Wholesale Shop", "Other"]}
                              placeholder="Select shop type"
                            />
                            <SelectField
                              label="Years in Business"
                              name="yearsInBusiness"
                              icon={Calendar}
                              value={formData.yearsInBusiness}
                              onChange={handleChange}
                              required
                              options={["0-1 years", "1-3 years", "3-5 years", "5-10 years", "10+ years"]}
                              placeholder="Select years"
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <SelectField
                              label="Monthly Sales Volume (kg)"
                              name="monthlySales"
                              icon={Package}
                              value={formData.monthlySales}
                              onChange={handleChange}
                              required
                              options={["0-10 kg", "10-50 kg", "50-100 kg", "100-500 kg", "500+ kg"]}
                              placeholder="Select volume"
                            />
                            <SelectField
                              label="Customer Base"
                              name="customerBase"
                              icon={Users}
                              value={formData.customerBase}
                              onChange={handleChange}
                              required
                              options={["Retail Customers", "Wholesale Customers", "Both Retail & Wholesale", "Institutional"]}
                              placeholder="Select customer base"
                            />
                          </div>

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                              Additional Information
                            </label>
                            <textarea
                              rows={3}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                              placeholder="Any specific requirements or preferences for your dealership..."
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Export Enquiry Form */}
                      {activeForm === "export" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-5 overflow-hidden"
                        >
                          <div className="border-t border-gold/20 pt-5">
                            <h4 className="text-gold font-display text-lg mb-4">Export Enquiry Details</h4>
                          </div>

                          <div className="grid sm:grid-cols-3 gap-5">
                            <Field 
                              label="City" 
                              name="city" 
                              icon={MapPin}
                              value={formData.city}
                              onChange={handleChange}
                              required
                              placeholder="Your city"
                            />
                            <Field 
                              label="State" 
                              name="state" 
                              value={formData.state}
                              onChange={handleChange}
                              required
                              placeholder="Your state"
                            />
                            <Field 
                              label="Pincode" 
                              name="pincode" 
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                              placeholder="Pincode"
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-5">
                            <Field 
                              label="Country / Region" 
                              name="country" 
                              icon={Globe}
                              value={formData.country}
                              onChange={handleChange}
                              required
                              placeholder="e.g., USA, UK, UAE"
                            />
                            <SelectField
                              label="Import License"
                              name="importLicense"
                              icon={FileText}
                              value={formData.importLicense}
                              onChange={handleChange}
                              required
                              options={["Yes, I have", "No, but can arrange", "In progress"]}
                              placeholder="Select license status"
                            />
                          </div>

                          <div className="grid sm:grid-cols-3 gap-5">
                            <SelectField
                              label="Container Size"
                              name="containerSize"
                              icon={Package}
                              value={formData.containerSize}
                              onChange={handleChange}
                              required
                              options={["20ft Container", "40ft Container", "40ft High Cube", "Less than Container"]}
                              placeholder="Select size"
                            />
                            <SelectField
                              label="Shipment Frequency"
                              name="shipmentFrequency"
                              icon={Calendar}
                              value={formData.shipmentFrequency}
                              onChange={handleChange}
                              required
                              options={["Monthly", "Quarterly", "Half-Yearly", "Yearly", "One-Time"]}
                              placeholder="Select frequency"
                            />
                            <SelectField
                              label="Export Volume (kg/month)"
                              name="exportVolume"
                              icon={Truck}
                              value={formData.exportVolume}
                              onChange={handleChange}
                              required
                              options={["0-100 kg", "100-500 kg", "500-1,000 kg", "1,000-5,000 kg", "5,000+ kg"]}
                              placeholder="Select volume"
                            />
                          </div>

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-3 block flex items-center gap-2">
                              <CheckCircle className="w-4 h-4" />
                              Certifications Required
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                              {["Organic", "Fair Trade", "ISO", "HACCP", "FSSAI", "USDA", "EU Organic", "Rainforest Alliance"].map((cert) => (
                                <label key={cert} className="flex items-center gap-3 text-cream/80 text-sm cursor-pointer hover:text-cream transition-colors">
                                  <input
                                    type="checkbox"
                                    value={cert}
                                    checked={formData.certifications.includes(cert)}
                                    onChange={() => handleCheckboxChange(cert)}
                                    className="w-4 h-4 rounded border-gold/30 text-gold focus:ring-gold focus:ring-offset-0"
                                  />
                                  {cert}
                                </label>
                              ))}
                            </div>
                          </div>

                          <SelectField
                            label="Payment Terms"
                            name="paymentTerms"
                            icon={BadgeDollarSign}
                            value={formData.paymentTerms}
                            onChange={handleChange}
                            required
                            options={["Letter of Credit (LC)", "Telegraphic Transfer (TT)", "Documents Against Payment (DP)", "Documents Against Acceptance (DA)", "Advance Payment"]}
                            placeholder="Select payment terms"
                          />

                          <div>
                            <label className="text-xs uppercase tracking-[0.2em] text-gold mb-2 block">
                              Additional Information
                            </label>
                            <textarea
                              rows={3}
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              className="w-full bg-transparent border-b border-gold/30 focus:border-gold outline-none py-3 text-cream text-base placeholder:text-cream/40 resize-none transition-colors"
                              placeholder="Share your specific requirements, preferred Tea types, packaging preferences..."
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="group w-full inline-flex items-center justify-center gap-3 rounded-full bg-gradient-gold px-8 py-4 text-base uppercase tracking-[0.2em] font-semibold text-forest-deep shadow-lg shadow-gold/25 hover:scale-[1.02] transition-all duration-300"
                      >
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        {activeForm === "contact" && "Send Message"}
                        {activeForm === "distributor" && "Apply as Distributor"}
                        {activeForm === "super-stockist" && "Apply as Super Stockist"}
                        {activeForm === "dealer" && "Register as Dealer"}
                        {activeForm === "export" && "Send Export Enquiry"}
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
        href="https://wa.me/919849023900"
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

// Store icon component
function Store(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 7L4 17H20L22 7" />
      <rect x="4" y="7" width="16" height="10" />
      <rect x="4" y="7" width="16" height="10" transform="rotate(0 12 12)" />
      <path d="M8 7V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V7" />
    </svg>
  );
}