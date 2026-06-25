// import { motion } from "framer-motion";
// import {
//   ShieldCheck,
//   BadgeCheck,
//   FileText,
//   Award,
//   CheckCircle2,
// } from "lucide-react";

// export default function ComplianceSection() {
//   const certifications = [
//     {
//       icon: ShieldCheck,
//       title: "FSSAI Certified",
//       description:
//         "RK Tea complies with Food Safety and Standards Authority of India regulations, ensuring safe and quality products.",
//     },
//     {
//       icon: Award,
//       title: "Quality Assurance",
//       description:
//         "Every batch undergoes strict quality checks to maintain freshness, purity, and consistency.",
//     },
//     {
//       icon: BadgeCheck,
//       title: "Food Safety Standards",
//       description:
//         "Manufactured and packed following industry-approved hygiene and food safety practices.",
//     },
//     {
//       icon: FileText,
//       title: "Compliance Documents",
//       description:
//         "Certification documents and compliance records are maintained and available for verification.",
//     },
//   ];

//   return (
//     <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 px-5 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
//             🛡️ Certified & Trusted
//           </span>

//           <h2 className="mt-6 text-4xl lg:text-5xl font-black text-green-950">
//             Quality & Compliance
//             <span className="block bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-transparent">
//               You Can Trust
//             </span>
//           </h2>

//           <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
//             RK Tea is committed to maintaining the highest standards of food
//             safety, quality, and regulatory compliance, ensuring every cup is
//             safe, pure, and enjoyable.
//           </p>
//         </motion.div>

//         {/* Main Card */}
//         <div className="grid lg:grid-cols-2 gap-10 items-center">
//           {/* Certificate Preview */}
//           <motion.div
//             whileHover={{ scale: 1.02 }}
//             className="bg-white rounded-[32px] p-8 shadow-2xl border border-green-100"
//           >
//             <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-8 text-white text-center">
//               <ShieldCheck className="w-20 h-20 mx-auto text-yellow-400 mb-4" />

//               <h3 className="text-3xl font-bold mb-3">
//                 FSSAI Certified
//               </h3>

//               <p className="text-green-100 mb-6">
//                 Certified for maintaining food safety, hygiene,
//                 and quality standards.
//               </p>

//               <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md">
//                 <p className="text-sm text-green-100">
//                   FSSAI License Number
//                 </p>
//                 <p className="text-xl font-bold text-yellow-400">
//                   XXXXXXXXXXXXXX
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Compliance Features */}
//           <div className="grid gap-6">
//             {certifications.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.div
//                   key={index}
//                   whileHover={{ x: 8 }}
//                   className="bg-white rounded-3xl border border-green-100 p-6 shadow-lg hover:shadow-xl transition-all"
//                 >
//                   <div className="flex gap-5">
//                     <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center">
//                       <Icon className="w-8 h-8 text-green-700" />
//                     </div>

//                     <div>
//                       <h4 className="text-xl font-bold text-green-900 mb-2">
//                         {item.title}
//                       </h4>

//                       <p className="text-gray-600 leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Trust Points */}
//         <div className="grid md:grid-cols-3 gap-6 mt-16">
//           {[
//             "FSSAI Approved Manufacturing",
//             "Strict Quality Control Process",
//             "100% Food Safety Compliance",
//           ].map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl border border-green-100 p-5 shadow-md flex items-center gap-3"
//             >
//               <CheckCircle2 className="text-green-600 w-6 h-6" />
//               <span className="font-medium text-gray-700">{item}</span>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="mt-16 text-center">
//           <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition-all">
//             View Certifications
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }





import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  FileText,
  Award,
  CheckCircle2,
  Sparkles,
  Leaf,
} from "lucide-react";

export default function ComplianceSection() {
  const certifications = [
    {
      icon: ShieldCheck,
      title: "FSSAI Certified",
      description:
        "RK Tea complies with Food Safety and Standards Authority of India regulations, ensuring safe and quality products.",
      gradient: "from-emerald-600 to-teal-600",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700",
      border: "border-emerald-200",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description:
        "Every batch undergoes strict quality checks to maintain freshness, purity, and consistency.",
      gradient: "from-amber-500 to-orange-500",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-700",
      border: "border-amber-200",
    },
    {
      icon: BadgeCheck,
      title: "Food Safety Standards",
      description:
        "Manufactured and packed following industry-approved hygiene and food safety practices.",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      border: "border-blue-200",
    },
    {
      icon: FileText,
      title: "Compliance Documents",
      description:
        "Certification documents and compliance records are maintained and available for verification.",
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      border: "border-purple-200",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50/70">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-300/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-teal-300/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-24 left-10 opacity-20 animate-bounce-slow">
        <Leaf className="w-12 h-12 text-emerald-600" />
      </div>
      <div className="absolute bottom-32 right-10 opacity-20 animate-bounce-slow delay-300">
        <Sparkles className="w-10 h-10 text-yellow-500" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header with enhanced design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full font-semibold shadow-inner">
            <ShieldCheck className="w-5 h-5" />
            <span>Certified & Trusted</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          </div>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-green-950 leading-tight">
            Quality & Compliance
            <span className="block bg-gradient-to-r from-emerald-600 via-green-500 to-amber-500 bg-clip-text text-transparent mt-1">
              You Can Trust
            </span>
          </h2>

          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              RK Tea is committed to maintaining the highest standards of food
              safety, quality, and regulatory compliance, ensuring every cup is
              safe, pure, and enjoyable.
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
              <span className="w-6 h-1 bg-yellow-400 rounded-full" />
              <span className="w-12 h-1 bg-emerald-500 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Main Card - Enhanced Layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Certificate Preview - Redesigned */}
          <motion.div
            whileHover={{ scale: 1.02, rotateY: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-yellow-300 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-[32px] p-1 shadow-2xl border border-white/50">
              <div className="bg-gradient-to-br from-emerald-700 via-green-800 to-emerald-900 rounded-[28px] p-8 text-white overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-white/10 rounded-xl backdrop-blur">
                      <ShieldCheck className="w-8 h-8 text-yellow-400" />
                    </div>
                    <span className="text-sm font-medium text-emerald-200 tracking-wider">CERTIFICATE</span>
                  </div>

                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30 mb-6">
                      <ShieldCheck className="w-14 h-14 text-white" />
                    </div>

                    <h3 className="text-3xl font-bold mb-3">
                      FSSAI Certified
                    </h3>

                    <p className="text-emerald-100 mb-6 max-w-sm mx-auto">
                      Certified for maintaining food safety, hygiene,
                      and quality standards.
                    </p>

                    <div className="bg-white/10 rounded-2xl p-4 backdrop-blur-md border border-white/10 max-w-xs mx-auto">
                      <p className="text-sm text-emerald-200 uppercase tracking-wider">
                        FSSAI License Number
                      </p>
                      <p className="text-xl font-bold text-yellow-400 tracking-wider">
                        12345678901234
                      </p>
                    </div>

                    <div className="mt-6 flex justify-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <BadgeCheck className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-emerald-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Features - Enhanced Cards */}
          <div className="grid gap-5">
            {certifications.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 8, y: -4 }}
                  className={`group bg-white rounded-2xl border ${item.border} p-5 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                >
                  <div className={`absolute inset-0 ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative flex gap-4 items-start">
                    <div className={`w-14 h-14 rounded-2xl ${item.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-emerald-700 transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-gray-600 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Trust Points - Enhanced with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5 mt-16"
        >
          {[
            { text: "FSSAI Approved Manufacturing", icon: ShieldCheck },
            { text: "Strict Quality Control Process", icon: Award },
            { text: "100% Food Safety Compliance", icon: BadgeCheck },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group bg-white rounded-xl border border-emerald-100 p-4 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                <item.icon className="text-emerald-600 w-5 h-5" />
              </div>
              <span className="font-medium text-gray-700 group-hover:text-emerald-800 transition-colors">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-4 rounded-2xl font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all duration-300">
            <span className="relative flex items-center gap-2">
              View Certifications
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
          <p className="mt-3 text-sm text-gray-400">
            Verified compliance documentation available upon request
          </p>
        </motion.div>
      </div>
    </section>
  );
}