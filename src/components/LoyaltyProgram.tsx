// import { motion } from "framer-motion";
// import {
//   Gift,
//   Star,
//   Crown,
//   Coffee,
//   Award,
//   ChevronRight,
// } from "lucide-react";

// export default function LoyaltyProgram() {
//   const benefits = [
//     {
//       icon: Gift,
//       title: "Welcome Reward",
//       description:
//         "Get 100 bonus tea points instantly when you join the RK Tea Loyalty Club.",
//     },
//     {
//       icon: Coffee,
//       title: "Earn Tea Points",
//       description:
//         "Collect points on every tea purchase and redeem them for exciting rewards.",
//     },
//     {
//       icon: Award,
//       title: "Exclusive Member Offers",
//       description:
//         "Access special discounts, seasonal tea collections, and members-only deals.",
//     },
//     {
//       icon: Star,
//       title: "Birthday Benefits",
//       description:
//         "Celebrate your special day with complimentary tea rewards and surprise gifts.",
//     },
//     {
//       icon: Crown,
//       title: "Premium Membership Tier",
//       description:
//         "Unlock premium perks, priority support, and early access to new products.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-green-50 via-white to-green-50">
//   <div className="max-w-7xl mx-auto px-6 lg:px-8">

//     {/* Header */}
//     <div className="text-center mb-16">
//      <span className="inline-flex items-center gap-2 px-6 py-3 bg-green-100 text-green-800 rounded-full font-semibold shadow-md mb-6">
//             <Crown size={18} />
//             RK Tea Loyalty Club
//           </span>

//       <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6">
//         Sip More, Earn More Rewards
//       </h2>

//       <p className="max-w-3xl mx-auto text-lg text-gray-600">
//         Join RK Tea Loyalty Club and enjoy exclusive discounts, reward points,
//         birthday gifts, premium memberships, and members-only offers.
//       </p>
//     </div>

//     {/* Main Card */}
//     <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-green-100">
//       <div className="grid lg:grid-cols-2">

//         {/* Left Side */}
//         <div className="bg-gradient-to-br from-green-800 via-green-700 to-green-600 p-10 lg:p-14 text-white">

//           <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
//             🌿
//           </div>

//           <h3 className="text-3xl font-bold mb-5">
//             Loyalty Membership Benefits
//           </h3>

//           <p className="text-green-100 leading-relaxed mb-8">
//             Become a member today and unlock special rewards every time
//             you purchase your favorite RK Tea products.
//           </p>

//           <div className="space-y-4">
//             {[
//               "Earn points on every purchase",
//               "Exclusive member discounts",
//               "Birthday reward vouchers",
//               "Early access to new products",
//               "Free samples and gifts",
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-3">
//                 <span className="text-yellow-300">✓</span>
//                 <span>{item}</span>
//               </div>
//             ))}
//           </div>

//           <button className="mt-10 bg-yellow-500 hover:bg-yellow-600 text-green-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg">
//             Join Now
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="p-10 lg:p-14">
//           <div className="grid gap-5">

//             {[
//               {
//                 title: "Welcome Bonus",
//                 desc: "Get 100 reward points instantly after registration.",
//                 icon: "🎁",
//               },
//               {
//                 title: "Reward Points",
//                 desc: "Earn points on every order and redeem them later.",
//                 icon: "⭐",
//               },
//               {
//                 title: "Exclusive Offers",
//                 desc: "Access special member-only promotions.",
//                 icon: "🏷️",
//               },
//               {
//                 title: "Birthday Rewards",
//                 desc: "Enjoy surprise discounts and gifts.",
//                 icon: "🎂",
//               },
//               {
//                 title: "Premium Access",
//                 desc: "Early access to newly launched tea products.",
//                 icon: "👑",
//               },
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex gap-4 p-5 border border-green-100 rounded-2xl hover:border-green-300 hover:shadow-lg transition-all"
//               >
//                 <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
//                   {item.icon}
//                 </div>

//                 <div>
//                   <h4 className="font-bold text-green-900 text-lg mb-1">
//                     {item.title}
//                   </h4>

//                   <p className="text-gray-600">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}

//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Membership Plans */}
//     <div className="mt-20">

//       <h3 className="text-3xl font-bold text-center text-green-900 mb-12">
//         Membership Plans
//       </h3>

//       <div className="grid md:grid-cols-3 gap-8">

//         {[
//           {
//             name: "Silver",
//             price: "Free",
//             color: "green",
//           },
//           {
//             name: "Gold",
//             price: "₹299 / Year",
//             color: "yellow",
//           },
//           {
//             name: "Platinum",
//             price: "₹599 / Year",
//             color: "emerald",
//           },
//         ].map((plan, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl border border-green-100 shadow-xl p-8 text-center hover:-translate-y-2 transition-all"
//           >
//             <h4 className="text-2xl font-bold text-green-900 mb-4">
//               {plan.name}
//             </h4>

//             <div className="text-4xl font-bold text-green-700 mb-6">
//               {plan.price}
//             </div>

//             <ul className="space-y-3 text-gray-600 mb-8">
//               <li>✓ Earn Reward Points</li>
//               <li>✓ Member Discounts</li>
//               <li>✓ Exclusive Offers</li>
//               <li>✓ Priority Support</li>
//             </ul>

//             <button className="w-full py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold transition-all">
//               Choose Plan
//             </button>
//           </div>
//         ))}

//       </div>
//     </div>

//   </div>
// </section>
//   );
// }




import { motion } from "framer-motion";
import {
  Gift,
  Star,
  Crown,
  Coffee,
  Award,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
} from "lucide-react";

export default function LoyaltyProgram() {
  const benefits = [
    {
      icon: Gift,
      title: "Welcome Reward",
      description:
        "Get 100 bonus tea points instantly when you join the RK Tea Loyalty Club.",
    },
    {
      icon: Coffee,
      title: "Earn Tea Points",
      description:
        "Collect points on every tea purchase and redeem them for exciting rewards.",
    },
    {
      icon: Award,
      title: "Exclusive Member Offers",
      description:
        "Access special discounts, seasonal tea collections, and members-only deals.",
    },
    {
      icon: Star,
      title: "Birthday Benefits",
      description:
        "Celebrate your special day with complimentary tea rewards and surprise gifts.",
    },
    {
      icon: Crown,
      title: "Premium Membership Tier",
      description:
        "Unlock premium perks, priority support, and early access to new products.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg shadow-green-200/50 mb-6"
          >
            <Crown size={18} className="text-yellow-300" />
            RK Tea Loyalty Club
            <Sparkles size={14} className="text-yellow-300" />
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-green-900 mb-6"
          >
            Sip More,{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Earn More Rewards
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-lg text-gray-600"
          >
            Join RK Tea Loyalty Club and enjoy exclusive discounts, reward
            points, birthday gifts, premium memberships, and members-only
            offers.
          </motion.p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/50"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Side */}
            <div className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-700 p-10 lg:p-14 text-white relative overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full"
              />

              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-6 text-3xl backdrop-blur-sm"
              >
                🌿
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-5"
              >
                Loyalty Membership Benefits
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-green-100 leading-relaxed mb-8"
              >
                Become a member today and unlock special rewards every time you
                purchase your favorite RK Tea products.
              </motion.p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  "Earn points on every purchase",
                  "Exclusive member discounts",
                  "Birthday reward vouchers",
                  "Early access to new products",
                  "Free samples and gifts",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-yellow-300 text-xl"
                    >
                      ✓
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-green-950 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg flex items-center gap-2 group"
              >
                Join Now
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
            </div>

            {/* Right Side */}
            <div className="p-10 lg:p-14">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid gap-4"
              >
                {[
                  {
                    title: "Welcome Bonus",
                    desc: "Get 100 reward points instantly after registration.",
                    icon: "🎁",
                    color: "from-green-100 to-emerald-100",
                    iconBg: "from-green-200 to-emerald-200",
                  },
                  {
                    title: "Reward Points",
                    desc: "Earn points on every order and redeem them later.",
                    icon: "⭐",
                    color: "from-yellow-100 to-amber-100",
                    iconBg: "from-yellow-200 to-amber-200",
                  },
                  {
                    title: "Exclusive Offers",
                    desc: "Access special member-only promotions.",
                    icon: "🏷️",
                    color: "from-blue-100 to-cyan-100",
                    iconBg: "from-blue-200 to-cyan-200",
                  },
                  {
                    title: "Birthday Rewards",
                    desc: "Enjoy surprise discounts and gifts.",
                    icon: "🎂",
                    color: "from-pink-100 to-rose-100",
                    iconBg: "from-pink-200 to-rose-200",
                  },
                  {
                    title: "Premium Access",
                    desc: "Early access to newly launched tea products.",
                    icon: "👑",
                    color: "from-purple-100 to-violet-100",
                    iconBg: "from-purple-200 to-violet-200",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
                      borderColor: "#10b981",
                    }}
                    className={`flex gap-4 p-4 border border-green-100 rounded-2xl bg-gradient-to-r ${item.color} transition-all duration-300 cursor-pointer`}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.iconBg} flex items-center justify-center text-2xl flex-shrink-0`}
                    >
                      {item.icon}
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-green-900 text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Membership Plans */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-green-900 mb-4"
          >
            Choose Your <span className="text-emerald-600">Membership</span> Plan
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 mb-12"
          >
            Upgrade your tea experience with exclusive perks and rewards
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Silver",
                price: "Free",
                color: "from-gray-100 to-slate-100",
                border: "border-gray-200",
                icon: "🥈",
                features: [
                  "✓ Earn Reward Points",
                  "✓ Member Discounts",
                  "✓ Exclusive Offers",
                  "✗ Priority Support",
                ],
                buttonColor: "bg-gray-700 hover:bg-gray-800",
                delay: 0,
              },
              {
                name: "Gold",
                price: "₹299 / Year",
                color: "from-yellow-100 to-amber-100",
                border: "border-yellow-300",
                icon: "🥇",
                popular: true,
                features: [
                  "✓ Earn Reward Points",
                  "✓ Member Discounts",
                  "✓ Exclusive Offers",
                  "✓ Priority Support",
                ],
                buttonColor: "bg-yellow-600 hover:bg-yellow-700",
                delay: 0.1,
              },
              {
                name: "Platinum",
                price: "₹599 / Year",
                color: "from-purple-100 to-violet-100",
                border: "border-purple-300",
                icon: "💎",
                features: [
                  "✓ Earn Reward Points",
                  "✓ Member Discounts",
                  "✓ Exclusive Offers",
                  "✓ Priority Support",
                  "✓ Early Access",
                ],
                buttonColor: "bg-purple-700 hover:bg-purple-800",
                delay: 0.2,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: plan.delay }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className={`bg-white/90 backdrop-blur-sm rounded-3xl border-2 ${plan.border} shadow-xl p-8 text-center relative transition-all duration-300 ${plan.popular ? "ring-2 ring-yellow-400 shadow-2xl" : ""}`}
              >
                {plan.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-950 px-4 py-1 rounded-full text-sm font-bold shadow-lg"
                  >
                    ⭐ Popular
                  </motion.div>
                )}
                <div className={`text-5xl mb-4 bg-gradient-to-br ${plan.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                  {plan.icon}
                </div>
                <h4 className="text-2xl font-bold text-green-900 mb-2">
                  {plan.name}
                </h4>
                <div className="text-4xl font-bold text-green-700 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 text-gray-600 mb-8 text-left">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-2 ${feature.startsWith("✗") ? "text-gray-400" : ""}`}
                    >
                      <span
                        className={feature.startsWith("✗") ? "text-gray-400" : "text-green-600"}
                      >
                        {feature.startsWith("✗") ? "✗" : "✓"}
                      </span>
                      {feature.replace(/[✓✗]\s*/, "")}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-xl ${plan.buttonColor} text-white font-semibold transition-all shadow-lg hover:shadow-xl`}
                >
                  Choose Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  viewport={{ once: true }}
  className="mt-20"
>
  <motion.h3
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center text-green-900 mb-4"
  >
    Why Join Our <span className="text-emerald-600">Loyalty Club</span>?
  </motion.h3>
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true }}
    className="text-center text-gray-600 mb-12"
  >
    Discover the exclusive benefits waiting for you
  </motion.p>

  <div className="grid md:grid-cols-3 gap-8">
    {benefits.map((benefit, index) => {
      const Icon = benefit.icon;
      // Define unique images for each benefit
      const benefitImages = [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&crop=center", // Welcome gift
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop&crop=center", // Tea points
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop&crop=center", // Offers
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center", // Birthday
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop&crop=center", // Premium
      ];
      
      const imageUrls = [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1556881286-fc6915169721?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=300&fit=crop&crop=center",
      ];

      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.03,
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.1)",
          }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-green-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
        >
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={imageUrls[index]}
              alt={benefit.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            
            {/* Icon on top of image */}
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="absolute bottom-4 right-4 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
            >
              <Icon className="text-green-700" size={24} />
            </motion.div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h4 className="text-xl font-bold text-green-900 mb-2">
              {benefit.title}
            </h4>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        </motion.div>
      );
    })}
  </div>
      </motion.div>
      </div>
    </section>
  );
}