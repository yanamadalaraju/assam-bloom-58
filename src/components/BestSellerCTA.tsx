import { motion } from "framer-motion";
import { ShoppingBag, Award, ArrowRight } from "lucide-react";

export default function BestSellerCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-green-800 to-emerald-700" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 lg:p-16 text-center shadow-2xl"
        >
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-400 text-green-950 rounded-full font-bold mb-6">
            ⭐ Most Loved RK Tea Collection
          </span>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-6">
            Experience the Rich Taste of
            <span className="block text-yellow-400">
              Premium RK Tea
            </span>
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-lg text-green-100 leading-relaxed mb-10">
            Crafted from carefully selected tea leaves, RK Tea delivers
            exceptional aroma, freshness, and flavor in every cup.
            Discover our premium collections and customer favorites today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* Shop Now */}
            <button className="group inline-flex items-center gap-3 bg-white text-green-900 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all">
              <ShoppingBag size={20} />
              Shop Now
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>

            {/* Best Seller */}
            <button className="group inline-flex items-center gap-3 bg-yellow-400 text-green-950 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-yellow-300 hover:scale-105 transition-all">
              <Award size={20} />
              Try Our Best Seller
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {[
              ["50K+", "Happy Customers"],
              ["4.9★", "Customer Rating"],
              ["100K+", "Tea Packs Sold"],
              ["100%", "Premium Quality"],
            ].map(([value, label], index) => (
              <div
                key={index}
                className="bg-white/10 rounded-2xl p-5 border border-white/10"
              >
                <h3 className="text-3xl font-black text-yellow-400">
                  {value}
                </h3>
                <p className="text-green-100 mt-2 text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}