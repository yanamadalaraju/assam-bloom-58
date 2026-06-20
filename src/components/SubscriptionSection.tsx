// import { motion } from "framer-motion";
// import { 
//   Package, 
//   Clock, 
//   Shield, 
//   Truck, 
//   Star, 
//   Sparkles,
//   Calendar,
//   CheckCircle,
//   ArrowRight,
//   Coffee,
//   Leaf,
//   Crown,
//   Gift,
//   Heart,
//   Zap,
//   DollarSign,
//   RefreshCw,
//   Bell
// } from "lucide-react";
// import { useState } from "react";

// export function SubscriptionSection() {
//   const [selectedPlan, setSelectedPlan] = useState<'starter' | 'premium' | 'family'>('starter');
//   const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly'>('monthly');

//   const plans = [
//     {
//       id: 'starter',
//       name: 'Starter Blend',
//       description: 'Perfect for individual Tea lovers',
//       icon: Coffee,
//       price: { weekly: 199, biweekly: 349, monthly: 599 },
//       features: [
//         '500g Premium Assam Tea',
        
//         'Flexible delivery schedule',
        
//       ],
//       popular: false,
//       badge: null,
//       color: 'from-gold/20 to-amber-500/10'
//     },
//     {
//       id: 'premium',
//       name: 'Premium Collection',
//       description: 'For the discerning Tea connoisseur',
//       icon: Crown,
//       price: { weekly: 349, biweekly: 649, monthly: 1199 },
//       features: [
//         '1kg Premium Assam Tea',
//         'Includes 2 specialty blends',
      
//         'Priority customer support',
//         'Exclusive member discounts',
//       ],
//       popular: true,
//       badge: 'Most Popular',
//       color: 'from-gold/30 to-amber-500/20'
//     },
//     {
//       id: 'family',
//       name: 'Family Pack',
//       description: 'For households and offices',
//       icon: Heart,
//       price: { weekly: 499, biweekly: 949, monthly: 1699 },
//       features: [
//         '2kg Premium Assam Tea',
//         'Includes 4 specialty blends',
//         'Free express delivery',
//         'Dedicated account manager',
//         'Bulk pricing discounts',
//         'Custom packaging options',
//       ],
//       popular: false,
//       badge: 'Best Value',
//       color: 'from-green-500/20 to-emerald-500/10'
//     }
//   ];

//   const frequencyOptions = [
//     { id: 'weekly', label: 'Weekly', description: 'Every week' },
//     { id: 'biweekly', label: 'Bi-Weekly', description: 'Every 2 weeks' },
//     { id: 'monthly', label: 'Monthly', description: 'Every month' },
//   ];

//   const selectedPlanData = plans.find(p => p.id === selectedPlan)!;
//   const selectedPrice = selectedPlanData.price[frequency];
//   const Icon = selectedPlanData.icon;

//   return (
//     <section id="subscription" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
//       {/* Decorative Elements */}
//       <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
//           backgroundSize: "40px 40px"
//         }} />
//       </div>

//       <div className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="relative mx-auto max-w-7xl px-6">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 border border-gold/20 mb-4">
//             <RefreshCw className="w-3 h-3 text-gold" />
//             <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Subscribe & Save</span>
//           </div>
          
//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
//             Never Run Out of{' '}
//             <span className="relative whitespace-nowrap">
//               <span className="italic text-gold">Premium Tea</span>
//               <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
//                 <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
//                     <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
//                     <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
//                   </linearGradient>
//                 </defs>
//               </svg>
//             </span>
//           </h2>
          
//           <p className="text-cream/70 text-base md:text-lg">
//             Get your favorite Assam Tea delivered on your schedule. Save 15% on every order with flexible subscription plans.
//           </p>
//         </motion.div>

//         {/* Benefits Row */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
//         >
//           {[
//   { icon: DollarSign, label: "Save 15%", sub: "on every order" },
//   { icon: Calendar, label: "Flexible Schedule", sub: "weekly, bi-weekly, monthly" },
//   { icon: Package, label: "Flexible Quantities", sub: "25kg to bulk orders" },
//   { icon: Shield, label: "Quality Assured", sub: "premium Assam tea" },
// ].map((benefit, idx) => (
//             <motion.div
//               key={benefit.label}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
//               className="bg-cream/5 backdrop-blur-sm rounded-xl p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
//             >
//               <benefit.icon className="w-5 h-5 text-gold mx-auto mb-1" />
//               <p className="text-cream font-semibold text-sm">{benefit.label}</p>
//               <p className="text-cream/40 text-[10px]">{benefit.sub}</p>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Frequency Selector */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           className="flex flex-wrap justify-center gap-2 mb-8"
//         >
//           <span className="text-cream/60 text-xs uppercase tracking-[0.2em] flex items-center mr-2">
//             <Clock className="w-3 h-3 mr-1" /> Delivery:
//           </span>
//           {frequencyOptions.map((freq) => (
//             <button
//               key={freq.id}
//               onClick={() => setFrequency(freq.id as any)}
//               className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
//                 frequency === freq.id
//                   ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
//                   : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
//               }`}
//             >
//               {freq.label}
//             </button>
//           ))}
//         </motion.div>

//         {/* Plans Grid */}
//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {plans.map((plan, index) => {
//             const PlanIcon = plan.icon;
//             const isSelected = selectedPlan === plan.id;
//             const price = plan.price[frequency];

//             return (
//               <motion.div
//                 key={plan.id}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 onClick={() => setSelectedPlan(plan.id as any)}
//                 className={`relative cursor-pointer group rounded-2xl p-6 border transition-all duration-500 ${
//                   isSelected
//                     ? 'border-gold bg-gradient-to-br from-gold/15 to-amber-500/10 shadow-2xl shadow-gold/20 scale-[1.02]'
//                     : 'border-gold/20 bg-cream/5 hover:border-gold/40 hover:bg-cream/10 hover:scale-[1.01]'
//                 }`}
//               >
//                 {/* Popular Badge */}
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-amber-500 text-forest-deep text-[10px] font-bold uppercase tracking-wider shadow-lg">
//                     ⭐ Most Popular
//                   </div>
//                 )}

//                 {plan.badge && !plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
//                     {plan.badge}
//                   </div>
//                 )}

//                 <div className="flex items-center gap-3 mb-3">
//                   <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
//                     isSelected ? 'bg-gold/30' : 'bg-gold/20 group-hover:bg-gold/30'
//                   } transition-all duration-300`}>
//                     <PlanIcon className={`w-5 h-5 ${isSelected ? 'text-gold' : 'text-gold/80'}`} />
//                   </div>
//                   <div>
//                     <h3 className="font-display text-xl text-cream">{plan.name}</h3>
//                     <p className="text-cream/50 text-xs">{plan.description}</p>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <span className="text-3xl font-display text-gold font-bold">₹{price}</span>
//                   <span className="text-cream/40 text-sm ml-1">/ {frequency}</span>
//                   <div className="text-cream/30 text-[10px] mt-1">₹{(price / (frequency === 'weekly' ? 1 : frequency === 'biweekly' ? 2 : 4)).toFixed(0)} per day</div>
//                 </div>

//                 <ul className="space-y-2 mb-4">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start gap-2 text-cream/70 text-sm">
//                       <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => setSelectedPlan(plan.id as any)}
//                   className={`w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
//                     isSelected
//                       ? 'bg-gold text-forest-deep shadow-lg shadow-gold/30'
//                       : 'bg-cream/10 text-cream/70 hover:bg-gold/20 hover:text-cream border border-gold/20'
//                   }`}
//                 >
//                   {isSelected ? '✓ Selected' : `Select ${plan.name}`}
//                 </button>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Subscription Summary & CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-2xl p-6 md:p-8 border border-gold/20"
//         >
//           <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
//                 <Package className="w-7 h-7 text-gold" />
//               </div>
//               <div>
//                 <h4 className="text-cream font-display text-lg">
//                   {selectedPlanData.name} • {frequency} Delivery
//                 </h4>
//                 <p className="text-cream/50 text-sm">
//                   ₹{selectedPrice} per delivery • Save 15% vs one-time purchases
//                 </p>
//                 <div className="flex items-center gap-2 mt-1">
//                   <Star className="w-3 h-3 text-gold fill-gold" />
//                   <span className="text-cream/40 text-[10px]">Free delivery •   • 100% satisfaction</span>
//                 </div>
//               </div>
//             </div>
//             <div className="flex flex-col sm:flex-row items-center gap-3">
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20 text-sm"
//               >
//                 Start Subscription
//                 <ArrowRight className="w-4 h-4" />
//               </a>
//               <a
//                 href="#products"
//                 className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm"
//               >
//                 <Bell className="w-4 h-4" />
//                 Remind Me Later
//               </a>
//             </div>
//           </div>
//         </motion.div>

//         {/* Trust Badges */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="flex flex-wrap justify-center gap-4 mt-8"
//         >
//           <div className="flex items-center gap-2 text-cream/40 text-xs">
//             <Shield className="w-4 h-4 text-gold" />
//             <span>100% Quality Guarantee</span>
//           </div>
//           <span className="text-cream/20">|</span>
//           <div className="flex items-center gap-2 text-cream/40 text-xs">
//             <Truck className="w-4 h-4 text-gold" />
//             <span>Free Pan India Delivery</span>
//           </div>
//           <span className="text-cream/20">|</span>
//           <div className="flex items-center gap-2 text-cream/40 text-xs">
//             <RefreshCw className="w-4 h-4 text-gold" />
//             <span>Flexible Scheduling</span>
//           </div>
//           <span className="text-cream/20">|</span>
//           <div className="flex items-center gap-2 text-cream/40 text-xs">
//             <Heart className="w-4 h-4 text-gold" />
//             <span>500+ Happy Subscribers</span>
//           </div>
//         </motion.div>

//         {/* Subscriber Testimonial */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="text-center mt-8 p-4 rounded-xl bg-cream/5 border border-gold/10"
//         >
//           <p className="text-cream/60 text-sm italic max-w-2xl mx-auto">
//             "I've been on the Premium Collection plan for 6 months now. Never run out of Tea, and the quality is consistently excellent. Best decision I made!"
//           </p>
//           <p className="text-cream/40 text-xs mt-2">— Rajesh K. • Premium Subscriber since 2025</p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import { motion } from "framer-motion";
import { 
  Package, 
  Clock, 
  Shield, 
  Truck, 
  Star, 
  Sparkles,
  Calendar,
  CheckCircle,
  ArrowRight,
  Coffee,
  Leaf,
  Crown,
  Gift,
  Heart,
  Zap,
  DollarSign,
  RefreshCw,
  Bell
} from "lucide-react";
import { useState } from "react";

export function SubscriptionSection() {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'premium' | 'family'>('starter');
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'monthly'>('monthly');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Blend',
      description: 'Perfect for individual Tea lovers',
      icon: Coffee,
      price: { weekly: 549, biweekly: 999, monthly: 549 },
      features: [
        '500g + 500g Premium Assam Tea',
        'Free delivery up to 5km',
        'Flexible delivery schedule',
        
      ],
      popular: false,
      badge: null,
      color: 'from-gold/20 to-amber-500/10'
    },
    {
      id: 'premium',
      name: 'Premium Collection',
      description: 'For the discerning Tea connoisseur',
      icon: Crown,
      price: { weekly: 999, biweekly: 1799, monthly: 1199 },
      features: [
        '1kg + 1kg Premium Assam Tea',
        'Free delivery up to 5km',
        'Includes 2 specialty blends',
        'Priority customer support',
        'Exclusive member discounts',
      ],
      popular: true,
      badge: 'Most Popular',
      color: 'from-gold/30 to-amber-500/20'
    },
    {
      id: 'family',
      name: 'Family Pack',
      description: 'For households and offices',
      icon: Heart,
      price: { weekly: 1799, biweekly: 3299, monthly: 1799 },
      features: [
        '1kg + 1kg + 1kg Premium Assam Tea',
        'Free delivery up to 5km',
        'Includes 3 specialty blends',
       
        'Dedicated account manager',
        'Bulk pricing discounts',
        'Custom packaging options',
      ],
      popular: false,
      badge: 'Best Value',
      color: 'from-green-500/20 to-emerald-500/10'
    }
  ];

  const frequencyOptions = [
    { id: 'weekly', label: 'Weekly', description: 'Every week' },
    { id: 'biweekly', label: 'Bi-Weekly', description: 'Every 2 weeks' },
    { id: 'monthly', label: 'Monthly', description: 'Every month' },
  ];

  const selectedPlanData = plans.find(p => p.id === selectedPlan)!;
  const selectedPrice = selectedPlanData.price[frequency];
  const Icon = selectedPlanData.icon;

  return (
    <section id="subscription" className="relative bg-gradient-to-br from-forest-deep via-forest to-forest-deep py-16 md:py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="absolute top-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

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
            <RefreshCw className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-gold font-semibold">Subscribe & Save</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-4">
            Never Run Out of{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">Premium Tea</span>
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
            Get your favorite Assam Tea delivered on your schedule. Save 15% on every order with flexible subscription plans.
          </p>
        </motion.div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10"
        >
          {[
            { icon: DollarSign, label: "Save 15%", sub: "on every order" },
            { icon: Calendar, label: "Flexible Schedule", sub: "weekly, bi-weekly, monthly" },
            { icon: Package, label: "Flexible Quantities", sub: "25kg to bulk orders" },
            { icon: Shield, label: "Quality Assured", sub: "premium Assam tea" },
          ].map((benefit, idx) => (
            <motion.div
              key={benefit.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + idx * 0.05 }}
              className="bg-cream/5 backdrop-blur-sm rounded-xl p-3 text-center border border-gold/20 hover:border-gold/40 transition-all duration-300"
            >
              <benefit.icon className="w-5 h-5 text-gold mx-auto mb-1" />
              <p className="text-cream font-semibold text-sm">{benefit.label}</p>
              <p className="text-cream/40 text-[10px]">{benefit.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Frequency Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <span className="text-cream/60 text-xs uppercase tracking-[0.2em] flex items-center mr-2">
            <Clock className="w-3 h-3 mr-1" /> Delivery:
          </span>
          {frequencyOptions.map((freq) => (
            <button
              key={freq.id}
              onClick={() => setFrequency(freq.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                frequency === freq.id
                  ? 'bg-gold text-forest-deep shadow-lg shadow-gold/25'
                  : 'bg-cream/10 text-cream/70 hover:bg-cream/20 border border-gold/20'
              }`}
            >
              {freq.label}
            </button>
          ))}
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            const isSelected = selectedPlan === plan.id;
            const price = plan.price[frequency];

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedPlan(plan.id as any)}
                className={`relative cursor-pointer group rounded-2xl p-6 border transition-all duration-500 ${
                  isSelected
                    ? 'border-gold bg-gradient-to-br from-gold/15 to-amber-500/10 shadow-2xl shadow-gold/20 scale-[1.02]'
                    : 'border-gold/20 bg-cream/5 hover:border-gold/40 hover:bg-cream/10 hover:scale-[1.01]'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-gold to-amber-500 text-forest-deep text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    ⭐ Most Popular
                  </div>
                )}

                {plan.badge && !plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-300 text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                    {plan.badge}
                  </div>
                )}

                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isSelected ? 'bg-gold/30' : 'bg-gold/20 group-hover:bg-gold/30'
                  } transition-all duration-300`}>
                    <PlanIcon className={`w-5 h-5 ${isSelected ? 'text-gold' : 'text-gold/80'}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-cream">{plan.name}</h3>
                    <p className="text-cream/50 text-xs">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="text-3xl font-display text-gold font-bold">₹{price}</span>
                  <span className="text-cream/40 text-sm ml-1">/ {frequency}</span>
                </div>

                <ul className="space-y-2 mb-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-cream/70 text-sm">
                      <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPlan(plan.id as any)}
                  className={`w-full py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? 'bg-gold text-forest-deep shadow-lg shadow-gold/30'
                      : 'bg-cream/10 text-cream/70 hover:bg-gold/20 hover:text-cream border border-gold/20'
                  }`}
                >
                  {isSelected ? '✓ Selected' : `Select ${plan.name}`}
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Subscription Summary & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-gold/10 to-amber-500/10 rounded-2xl p-6 md:p-8 border border-gold/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-7 h-7 text-gold" />
              </div>
              <div>
                <h4 className="text-cream font-display text-lg">
                  {selectedPlanData.name} • {frequency} Delivery
                </h4>
                <p className="text-cream/50 text-sm">
                  ₹{selectedPrice} per delivery • Save 15% vs one-time purchases
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-cream/40 text-[10px]">Free delivery up to 5km •   • 100% satisfaction</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-forest-deep font-semibold rounded-full hover:bg-amber-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20 text-sm"
              >
                Start Subscription
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/30 text-gold rounded-full hover:bg-gold/10 transition-all duration-300 text-sm"
              >
                <Bell className="w-4 h-4" />
                Remind Me Later
              </a>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            <Shield className="w-4 h-4 text-gold" />
            <span>100% Quality Guarantee</span>
          </div>
          <span className="text-cream/20">|</span>
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            <Truck className="w-4 h-4 text-gold" />
            <span>Free Delivery up to 5km</span>
          </div>
          <span className="text-cream/20">|</span>
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            <RefreshCw className="w-4 h-4 text-gold" />
            <span>Flexible Scheduling</span>
          </div>
          <span className="text-cream/20">|</span>
          <div className="flex items-center gap-2 text-cream/40 text-xs">
            <Heart className="w-4 h-4 text-gold" />
            <span>500+ Happy Subscribers</span>
          </div>
        </motion.div>

        {/* Subscriber Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 p-4 rounded-xl bg-cream/5 border border-gold/10"
        >
          <p className="text-cream/60 text-sm italic max-w-2xl mx-auto">
            "I've been on the Premium Collection plan for 6 months now. Never run out of Tea, and the quality is consistently excellent. Best decision I made!"
          </p>
          <p className="text-cream/40 text-xs mt-2">— Rajesh K. • Premium Subscriber since 2025</p>
        </motion.div>
      </div>
    </section>
  );
}