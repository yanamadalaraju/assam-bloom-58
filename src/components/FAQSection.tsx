// import { useState } from "react";
// import { ChevronDown, HelpCircle } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const faqs = [
//     {
//       question: "What is your Minimum Order Quantity (MOQ)?",
//       answer:
//         "Our standard MOQ starts from 25 KG. For wholesale buyers and exporters, we offer attractive pricing and special terms for orders above 100 KG and 500 KG.",
//     },
//     {
//       question: "Do you offer bulk and export orders?",
//       answer:
//         "Yes. We regularly supply tea to wholesalers, distributors, retailers, and export partners. Large-volume orders receive customized pricing and logistics support.",
//     },
//     {
//       question: "What packaging options are available?",
//       answer:
//         "We offer flexible packaging solutions including loose bulk packs, retail pouches, private-label packaging, and custom branded packaging based on buyer requirements.",
//     },
//     {
//       question: "What are your payment terms?",
//       answer:
//         "Payment terms vary based on order volume and customer relationship. We generally accept bank transfers, UPI, and other approved business payment methods. Export orders are handled through mutually agreed payment arrangements.",
//     },
//     {
//       question: "How long does order processing and delivery take?",
//       answer:
//         "Domestic orders are typically processed within 2–5 business days. Delivery timelines depend on order quantity and destination. Export shipments are scheduled according to logistics and customs requirements.",
//     },
//     {
//       question: "Do you provide export documentation?",
//       answer:
//         "Yes. We provide the necessary export documentation and shipping support required for international buyers and trading partners.",
//     },
//     {
//       question: "Can I request tea samples before placing a bulk order?",
//       answer:
//         "Absolutely. Sample requests are available for serious business inquiries so buyers can evaluate quality, aroma, and taste before committing to larger quantities.",
//     },
//     {
//       question: "Do you offer private labeling and custom branding?",
//       answer:
//         "Yes. We support private-label tea packaging and custom branding solutions for retailers, distributors, and export clients.",
//     },
//     {
//       question: "Which regions do you supply?",
//       answer:
//         "We supply across India and support international export opportunities through our distribution and logistics network.",
//     },
//     {
//       question: "How can I request a quotation?",
//       answer:
//         "Simply click the 'Get Quote' button or contact our sales team directly. Share your required quantity, packaging preferences, and destination, and we will provide a customized quotation.",
//     },
//   ];

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-white to-amber-50">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="text-center mb-14"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-medium text-sm">
//             <HelpCircle className="w-4 h-4" />
//             Frequently Asked Questions
//           </div>

//           <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
//             Everything Buyers Need to Know
//           </h2>

//           <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
//             Find answers to common questions about MOQ, pricing, packaging,
//             delivery, export documentation, payment terms, and bulk orders.
//           </p>
//         </motion.div>

//         {/* FAQ Accordion */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.05 }}
//               viewport={{ once: true }}
//               className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
//             >
//               <button
//                 onClick={() => toggleFAQ(index)}
//                 className="w-full flex justify-between items-center p-6 text-left"
//               >
//                 <h3 className="text-lg font-semibold text-gray-900 pr-6">
//                   {faq.question}
//                 </h3>

//                 <ChevronDown
//                   className={`w-5 h-5 text-amber-600 transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>

//               <AnimatePresence>
//                 {openIndex === index && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className="px-6 pb-6 text-gray-600 leading-relaxed">
//                       {faq.answer}
//                     </div>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.div>
//           ))}
//         </div>

      
//       </div>
//     </section>
//   );
// }




import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);



const faqs = [
  {
    question: "What is your Minimum Order Quantity (MOQ)?",
    answer:
      "Our standard MOQ starts from 25 KG. We offer special pricing and customized solutions for wholesale, distributor, and export orders above 100 KG and 500 KG.",
  },
  {
    question: "Do you offer bulk and wholesale pricing?",
    answer:
      "Yes. We provide competitive bulk pricing for retailers, wholesalers, distributors, supermarkets, hotels, and institutional buyers. Larger quantities receive better pricing benefits.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept Bank Transfer, NEFT, RTGS, UPI, and other approved business payment methods. Payment terms may vary depending on order quantity and business relationship.",
  },
  {
    question: "How long does order processing take?",
    answer:
      "Most orders are processed within 2–5 business days. Large-volume and customized packaging orders may require additional processing time.",
  },
  {
    question: "What are your delivery timelines?",
    answer:
      "Delivery timelines vary depending on quantity and destination. Domestic orders are usually delivered within a few business days, while export shipments depend on logistics schedules and customs clearance.",
  },
  {
    question: "Do you provide export documentation?",
    answer:
      "Yes. We provide the required export documentation and shipping support for international buyers, ensuring a smooth export process.",
  },
  {
    question: "Do you offer private labeling and custom branding?",
    answer:
      "Yes. We offer private-label packaging, custom branding, retail pouches, and personalized packaging solutions for distributors and retailers.",
  },
  {
    question: "Can I request tea samples before placing a bulk order?",
    answer:
      "Absolutely. Sample packs are available for serious business inquiries so buyers can evaluate the tea's quality, aroma, taste, and appearance before placing larger orders.",
  },
  {
    question: "Where is your tea sourced from?",
    answer:
      "Our premium tea is sourced directly from selected Assam tea gardens, ensuring authentic taste, rich aroma, and consistent quality.",
  },
  {
    question: "Do you support export orders worldwide?",
    answer:
      "Yes. We work with international buyers and export partners across multiple countries and provide complete support for export shipments.",
  },
  {
    question: "What packaging options are available?",
    answer:
      "We offer bulk packs, retail pouches, customized packaging, gift packs, and private-label solutions based on buyer requirements.",
  },
  {
    question: "How can I request a quotation?",
    answer:
      "Simply contact us through WhatsApp, phone, email, or the Get Quote form. Share your required quantity, packaging requirements, and destination, and our team will provide a customized quotation.",
  },
];


  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-green-50/40 to-emerald-50">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-100 text-green-700 font-medium text-sm shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-green-950">
            Everything Buyers Need to Know
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about MOQ, pricing, packaging,
            delivery, export documentation, payment terms, and bulk orders.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-white border-2 border-green-500 shadow-xl shadow-green-100"
                  : "bg-white border border-green-100 hover:border-green-300 hover:shadow-lg"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? "text-green-800"
                      : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>

                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? "bg-green-100"
                      : "bg-green-50"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 text-green-700 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-green-100">
                      <div className="pt-4">{faq.answer}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}