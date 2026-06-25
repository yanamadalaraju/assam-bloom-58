import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function CustomerTestimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Hyderabad",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review:
        "RK Tea has become a part of my daily routine. The aroma, freshness, and rich taste are simply unmatched.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      location: "Vijayawada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "I purchased the festive tea hamper for my family, and everyone loved it. Premium quality and beautiful packaging.",
      rating: 5,
    },
    {
      name: "Anjali Reddy",
      location: "Bangalore",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review:
        "The RK Tea Wellness Collection is my favorite. It keeps me refreshed and energized throughout the day.",
      rating: 5,
    },
    {
      name: "Suresh Patel",
      location: "Mumbai",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      review:
        "Excellent taste, consistent quality, and fast delivery. RK Tea has become our family's preferred tea brand.",
      rating: 5,
    },
    {
      name: "Kavya Nair",
      location: "Chennai",
      image: "https://randomuser.me/api/portraits/women/22.jpg",
      review:
        "The premium tea gift box was perfect for gifting. Elegant packaging and truly exceptional tea blends.",
      rating: 5,
    },
    {
      name: "Arun Verma",
      location: "Pune",
      image: "https://randomuser.me/api/portraits/men/76.jpg",
      review:
        "I've tried many tea brands, but RK Tea offers the perfect balance of flavor, freshness, and quality.",
      rating: 5,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-800 font-semibold">
            ⭐ Customer Reviews
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-green-900">
            What Our Customers Say About
            <span className="block bg-gradient-to-r from-green-700 to-yellow-500 bg-clip-text text-transparent">
              RK Tea
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-lg text-gray-600">
            Thousands of tea lovers trust RK Tea for its premium quality,
            refreshing taste, and unforgettable tea experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[30px] p-8 border border-green-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-green-200 mb-5" />

              <p className="text-gray-600 leading-relaxed mb-6">
                "{item.review}"
              </p>

              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-green-100"
                />

                <div>
                  <h4 className="font-bold text-green-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            ["50K+", "Happy Customers"],
            ["4.9/5", "Average Rating"],
            ["100K+", "Tea Packs Sold"],
            ["98%", "Customer Satisfaction"],
          ].map(([value, label], index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-lg border border-green-100 rounded-3xl p-6 text-center shadow-lg"
            >
              <h3 className="text-3xl font-black text-green-700">
                {value}
              </h3>
              <p className="text-gray-600 mt-2">{label}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20">
          <div className="rounded-[40px] bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 p-10 lg:p-14 text-white shadow-2xl text-center">
            <h3 className="text-4xl font-black mb-4">
              Join Thousands of Happy Tea Lovers
            </h3>

            <p className="text-green-100 max-w-2xl mx-auto mb-8 text-lg">
              Experience the rich taste, premium quality, and freshness that
              make RK Tea a trusted choice for tea lovers across India.
            </p>

            <button className="bg-yellow-400 text-green-950 px-8 py-4 rounded-2xl font-bold hover:bg-yellow-300 transition-all">
              Explore RK Tea Products
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

