import { motion } from "framer-motion";
import {
  Gift,
  Sparkles,
  Leaf,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";



export default function SeasonalPackages() {
 const packages = [
  {
    image: "https://images.openai.com/static-rsc-4/5J5cswjDsJyEICQIxHhNaoeBh22jv8WlEtLldWxwYvfLXgYurtweDrfwMeF8QWwhmM8n0VU0jtUOMnoOhvTM37e9g90VvArdqWQP-IcVMrHp8j7cBkmpVzbwMVRv6lyHPCQ5om3fbnAkT3LUkFWTrLPpDhxa4qeP5onP33QeMgyC58p37Pp-aT3YLdT2zsEf?purpose=fullsize",
    title: "Festive Tea Gift Hamper",
    description:
      "Premium RK Tea gift hampers specially curated for festivals, celebrations, and family gatherings.",
    badge: "Best Seller",
  },
  {
    image: "https://images.openai.com/static-rsc-4/KlC0ulrZ0NVpie_3vplkj2q9r-wP0oQ3VH1i6tozzMCq2v4eF_awZXfhlrNj-5VAR-r-clN3KEodDRW58i2YMqu9lzRa-w2BvQXc98xaK6j52LhVBQgtzK2u315CG3TIV_GXV61y7jLFgdMGG1jBOwLyeoMjxvojBVCliS62cgJemmbDcBnbkWoOwYGvXhQE?purpose=fullsize",
    title: "Limited Edition Tea Collection",
    description:
      "Exclusive seasonal tea blends packed in luxury gift boxes for special occasions.",
    badge: "Limited Edition",
  },
  {
    image: "https://images.openai.com/static-rsc-4/HEGQTgCFZWwJ7v765Vxdl895GBdDV5Nyp9mw-g4UDL6KevYPkdWghca7YqQ_OLZQx5CBB7JvlNO956FkFv7rF7mnbo2zOzrr8-CQ90T_AO8CoQj-pZT8HIr2-mHfG93GgUEdfki7AWvImPUSZrS_siZGvPtItBPovjsKvDFxgntkA8fBxP1olvJNKfRDdKo6?purpose=fullsize",
    title: "Wellness & Seasonal Pack",
    description:
      "Refreshing herbal and wellness tea selections crafted for changing seasons.",
    badge: "Popular",
  },
  {
    image: "https://images.openai.com/static-rsc-4/Vi9uRAOKM8p4f-mei2-vUSPFsQTzXHd8w2YhiYeUcg38WPjERwV0LFNIkk_tSbiPEd4FzHIClfMXt-XGEZctVqU8psdTK2GYQSH-PVXe362CFSSuS1tmrYjKrDJxqsIVmqRROH2ah8nguLlkes743vMWoklIZoQmt4eIU5_joTyg6zAxjUhQil-bk3_kw4s-?purpose=fullsize",
    title: "Corporate Tea Gifting",
    description:
      "Elegant RK Tea gifting solutions designed for clients, employees, and festive events.",
    badge: "Premium",
  },
];

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
         
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full font-semibold shadow-lg shadow-green-200/50"
          >
            🎉 Seasonal & Festive Collections
            <Sparkles size={16} className="text-yellow-300" />
          </motion.span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-green-950 leading-tight">
            Celebrate Every Occasion with
            <span className="block bg-gradient-to-r from-green-700 via-green-500 to-yellow-500 bg-clip-text text-transparent">
              RK Tea Special Packages
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600 leading-relaxed">
            Explore exclusive festive hampers, seasonal tea collections,
            premium gift boxes, and limited-edition tea experiences crafted
            specially for every celebration.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
  {packages.map((item, index) => (
    <motion.div
      key={index}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-[30px] overflow-hidden shadow-xl border border-green-100 hover:shadow-2xl transition-all"
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <span className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-green-950 rounded-full text-xs font-bold">
          {item.badge}
        </span>

        <div className="absolute bottom-5 left-5">
          <h3 className="text-white text-xl font-bold">
            {item.title}
          </h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-600 leading-relaxed mb-6">
          {item.description}
        </p>

        <button className="w-full py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition">
          Explore Collection
        </button>
      </div>
    </motion.div>
  ))}
</div>

        {/* Featured Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="relative overflow-hidden rounded-[40px] shadow-2xl">
            <img
  src="https://images.openai.com/static-rsc-4/kXqI0MDN1bYwf0AzeYoF-Voj0Yv8NonitpJJPsGu3YaVdQYf_gHhPWWTGNHiLOJonajJGohZSQTKVweVQUZPAsKuxT_Ft1Uvt0Fy5-wtckftqiZX9LrRl-5K7MJoYDmNBVW_GZfTdRbplOvROCwrNondX0FKu1oSQgBkjPalzcY-M0sHe7bT4KerhlXzn3jI?purpose=fullsize"
  alt="RK Tea Collection"
  className="absolute inset-0 w-full h-full object-cover"
/>

            <div className="absolute inset-0 bg-gradient-to-r from-green-950/95 via-green-900/85 to-green-800/70" />

            <div className="relative z-10 p-10 lg:p-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 bg-yellow-400 text-green-950 px-5 py-2 rounded-full font-bold mb-6">
                  🎁 FESTIVE OFFER
                </span>

                <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
                  Premium Festive
                  <span className="block text-yellow-400">
                    Tea Gift Hampers
                  </span>
                </h3>

                <p className="text-green-100 text-lg leading-relaxed mb-8">
                  Surprise your loved ones, clients, and employees with RK Tea's
                  exclusive festive gift boxes featuring premium tea blends,
                  luxury packaging, and personalized gifting options.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="bg-yellow-400 text-green-950 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition-all">
                    Shop Festive Collection
                  </button>

                  <button className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                    View Packages
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            ["25+", "Seasonal Products"],
            ["10K+", "Gift Hampers Sold"],
            ["50+", "Corporate Clients"],
            ["100%", "Premium Quality Tea"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-green-100 rounded-3xl p-6 text-center shadow-lg"
            >
              <h4 className="text-3xl font-black text-green-700">
                {value}
              </h4>
              <p className="text-gray-600 mt-2">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}