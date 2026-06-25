// import { motion } from "framer-motion";
// import { Package, TrendingUp, Globe, CheckCircle } from "lucide-react";

// export default function MOQPricingSection() {
//   const pricingTiers = [
//     {
//       qty: "25 KG",
//       title: "Starter Order",
//       price: "Get Quote",
//       description: "Perfect for retailers and small distributors.",
//       features: [
//         "Premium Assam Tea",
//         "Custom Packaging Available",
//         "Domestic Delivery",
//       ],
//     },
//     {
//       qty: "100 KG",
//       title: "Wholesale Order",
//       price: "Special Pricing",
//       description: "Ideal for wholesalers and growing businesses.",
//       features: [
//         "Bulk Discounts",
//         "Private Label Options",
//         "Priority Dispatch",
//       ],
//       featured: true,
//     },
//     {
//       qty: "500 KG+",
//       title: "Export & Enterprise",
//       price: "Best Bulk Rates",
//       description: "Designed for exporters and large-volume buyers.",
//       features: [
//         "Export Documentation",
//         "Container Load Support",
//         "Dedicated Account Manager",
//       ],
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-amber-50">
//       <div className="max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
//             <Package className="w-4 h-4" />
//             Bulk Orders & Export Pricing
//           </span>

//           <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
//             Minimum Order Quantity & Pricing
//           </h2>

//           <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
//             We cater to retailers, wholesalers, distributors, and exporters.
//             Select the quantity that matches your business needs and request a
//             customized quote.
//           </p>
//         </motion.div>

//         {/* Pricing Cards */}
//         <div className="grid lg:grid-cols-3 gap-8">
//           {pricingTiers.map((tier, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               className={`relative rounded-3xl border overflow-hidden ${
//                 tier.featured
//                   ? "border-amber-500 shadow-2xl scale-105 bg-white"
//                   : "border-gray-200 bg-white"
//               }`}
//             >
//               {tier.featured && (
//                 <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-center py-2 text-sm font-semibold">
//                   Most Popular
//                 </div>
//               )}

//               <div className={`p-8 ${tier.featured ? "pt-12" : ""}`}>
//                 <div className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
//                   MOQ
//                 </div>

//                 <h3 className="text-4xl font-bold mt-2 text-gray-900">
//                   {tier.qty}
//                 </h3>

//                 <div className="mt-4 text-xl font-semibold text-amber-600">
//                   {tier.price}
//                 </div>

//                 <p className="mt-4 text-gray-600">
//                   {tier.description}
//                 </p>

//                 <ul className="mt-6 space-y-3">
//                   {tier.features.map((feature, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-3 text-gray-700"
//                     >
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <button className="w-full mt-8 bg-gradient-to-r from-amber-500 to-yellow-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
//                   Request Quote
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Bottom Highlights */}
//         <div className="grid md:grid-cols-3 gap-6 mt-16">
//           <div className="bg-white rounded-2xl p-6 border">
//             <TrendingUp className="w-10 h-10 text-amber-500 mb-4" />
//             <h4 className="font-bold text-lg mb-2">
//               Competitive Bulk Pricing
//             </h4>
//             <p className="text-gray-600">
//               Attractive pricing structure for wholesalers and distributors.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border">
//             <Globe className="w-10 h-10 text-amber-500 mb-4" />
//             <h4 className="font-bold text-lg mb-2">
//               Export Ready
//             </h4>
//             <p className="text-gray-600">
//               Complete export support, documentation, and logistics assistance.
//             </p>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border">
//             <Package className="w-10 h-10 text-amber-500 mb-4" />
//             <h4 className="font-bold text-lg mb-2">
//               Flexible Packaging
//             </h4>
//             <p className="text-gray-600">
//               Customized packaging and private labeling solutions available.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { motion } from "framer-motion";
import { Package, TrendingUp, Globe, CheckCircle } from "lucide-react";

export default function MOQPricingSection() {
  const pricingTiers = [
    {
      qty: "25 KG",
      title: "Starter Order",
      price: "Get Quote",
      description: "Perfect for retailers and small distributors.",
      features: [
        "Premium Assam Tea",
        "Custom Packaging Available",
        "Domestic Delivery",
      ],
    },
    {
      qty: "100 KG",
      title: "Wholesale Order",
      price: "Special Pricing",
      description: "Ideal for wholesalers and growing businesses.",
      features: [
        "Bulk Discounts",
        "Private Label Options",
        "Priority Dispatch",
      ],
      featured: true,
    },
    {
      qty: "500 KG+",
      title: "Export & Enterprise",
      price: "Best Bulk Rates",
      description: "Designed for exporters and large-volume buyers.",
      features: [
        "Export Documentation",
        "Container Load Support",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium shadow-sm">
            <Package className="w-4 h-4" />
            Bulk Orders & Export Pricing
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-green-950">
            Minimum Order Quantity & Pricing
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We cater to retailers, wholesalers, distributors, and exporters.
            Select the quantity that matches your business needs and request a
            customized quote.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                tier.featured
                  ? "border-2 border-green-600 shadow-2xl shadow-green-100 scale-105 bg-white"
                  : "border border-green-100 bg-white hover:border-green-300 hover:shadow-xl"
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className={`p-8 ${tier.featured ? "pt-12" : ""}`}>
                <div className="text-green-700 font-semibold text-sm uppercase tracking-wider">
                  MOQ
                </div>

                <h3 className="text-4xl font-bold mt-2 text-green-950">
                  {tier.qty}
                </h3>

                <div className="mt-2 text-lg font-semibold text-gray-800">
                  {tier.title}
                </div>

                <div className="mt-4 text-xl font-semibold text-green-700">
                  {tier.price}
                </div>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {tier.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full mt-8 bg-gradient-to-r from-green-700 to-emerald-600 hover:from-green-800 hover:to-emerald-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-green-100">
                  Request Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white rounded-2xl p-6 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
            <TrendingUp className="w-10 h-10 text-green-600 mb-4" />

            <h4 className="font-bold text-lg text-green-950 mb-2">
              Competitive Bulk Pricing
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Attractive pricing structure for wholesalers and distributors,
              helping maximize margins while ensuring premium quality.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
            <Globe className="w-10 h-10 text-green-600 mb-4" />

            <h4 className="font-bold text-lg text-green-950 mb-2">
              Export Ready
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Complete export support, documentation, logistics assistance, and
              international shipping coordination.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all duration-300">
            <Package className="w-10 h-10 text-green-600 mb-4" />

            <h4 className="font-bold text-lg text-green-950 mb-2">
              Flexible Packaging
            </h4>

            <p className="text-gray-600 leading-relaxed">
              Customized packaging, private labeling, and branding solutions
              tailored to your business requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

