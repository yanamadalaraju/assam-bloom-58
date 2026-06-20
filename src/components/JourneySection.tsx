
import React from "react";
import { motion } from "framer-motion";


// Images
import step1 from "@/assets/Teagarden1.jpg";
import step2 from "@/assets/handpulking.jpg";
import step3 from "@/assets/Teaprocessimage.jpg";
import step4 from "@/assets/Teapacking.jpg";
import step5 from "@/assets/hero-Tea-garden.jpg";
import step6 from "@/assets/cup.jpg";
import SectionReveal from "./SectionReveal";

const journeyData = [
  {
    title: "Tea Gardens",
    desc: "Sourced directly from the lush Tea estates of Upper Assam.",
    img: step1,
  },
  {
    title: "Hand Plucking",
    desc: "Carefully handpicked leaves to ensure premium quality.",
    img: step2,
  },
  {
    title: "Processing",
    desc: "Expertly processed to preserve aroma, strength, and flavor.",
    img: step3,
  },
  {
    title: "Packaging",
    desc: "Hygienically packed with bulk & private label options.",
    img: step4,
  },
  {
    title: "Global Export",
    desc: "Shipped worldwide with quality and consistency assurance.",
    img: step5,
  },
  {
    title: "Perfect Cup",
    desc: "Enjoy a rich, aromatic cup of authentic Assam Tea.",
    img: step6,
  },
];

const JourneySection: React.FC = () => {
  return (
    <section className="py-24 bg-[#f8f5f0] overflow-hidden">
      <div className="container mx-auto px-4 text-center">

        {/* Heading */}
        <SectionReveal>
          <h2 className="text-3xl md:text-5xl font-bold text-green-900 mb-6">
            The Journey of Every Tea Leaf 🍃☕
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-20">
            Discover the journey of our premium Assam Tea — crafted with care 
            at every step to deliver unmatched taste and quality.
          </p>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">

          {/* Wave Line */}
          <svg
            className="absolute top-1/2 left-0 w-full -translate-y-1/2"
            height="120"
            viewBox="0 0 1200 120"
            fill="none"
          >
            <path
              d="M0 60 
                 Q100 0 200 60 
                 T400 60 
                 T600 60 
                 T800 60 
                 T1000 60 
                 T1200 60"
              stroke="#065f46"
              strokeWidth="6"
              fill="transparent"
            />
          </svg>

          {/* Steps */}
          <div className="flex justify-between items-center relative">

            {journeyData.map((item, index) => {
              const isTop = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isTop ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex flex-col items-center w-[160px]"
                >

                  {/* TOP CONTENT */}
                  {isTop && (
                    <div className="mb-6 text-center">
                      <h3 className="font-semibold text-green-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  )}

                  {/* IMAGE HOVER EFFECT */}
                  <div className="relative group flex items-center justify-center">

                    {/* Small Image */}
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white z-10">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transition duration-300 group-hover:opacity-0"
                      />
                    </div>

                    {/* Large Hover Image */}
                    <div className="absolute w-44 h-44 rounded-xl overflow-hidden shadow-2xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition duration-300 z-20">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                  </div>

                  {/* Vertical Line */}
                  <div
                    className={`w-1 h-10 bg-green-700 ${
                      isTop ? "mt-2" : "mb-2"
                    }`}
                  ></div>

                  {/* BOTTOM CONTENT */}
                  {!isTop && (
                    <div className="mt-6 text-center">
                      <h3 className="font-semibold text-green-900">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default JourneySection;