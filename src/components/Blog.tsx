// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import b1 from "@/assets/richestblog1.jpg";
// import b2 from "@/assets/assamgarden1.jpg";
// import b3 from "@/assets/wroldwide.jpg";
// import b4 from "@/assets/ctc.jpg";
// import b5 from "@/assets/benefits.jpg";

// export const posts = [
//   {
//     id: "heritage-of-assam-Tea",
//     img: b1,
//     tag: "Heritage",
//     date: "May 2026",
//     title: "The Rich Heritage of Assam Tea",
//     featured: true,
//     slug: "heritage-of-assam-Tea",
//     excerpt: "Discover the 200-year journey of Assam Tea, from its discovery in the Brahmaputra valley to becoming the world's most beloved breakfast Tea.",
//     content: `
//       <p>The story of Assam Tea begins in 1823 when Robert Bruce, a Scottish adventurer, discovered Tea plants growing wild in the dense jungles of the Brahmaputra Valley. Unlike the Chinese Tea plant (Camellia sinensis var. sinensis), the Assam variety (Camellia sinensis var. assamica) was uniquely adapted to the region's tropical climate.</p>

//       <h2>The Birth of an Industry</h2>
//       <p>By the 1830s, the first commercial Tea gardens were established in Assam, marking the beginning of India's Tea industry. The British East India Company recognized the potential and invested heavily in developing the region's Tea cultivation. Today, Assam produces over half of India's total Tea output.</p>

//       <h2>Unique Characteristics</h2>
//       <p>Assam Tea is renowned for its bold, malty flavor and bright amber liquor. The region's unique terroir—hot, humid summers, abundant rainfall, and the fertile alluvial soil of the Brahmaputra valley—contributes to its distinctive character.</p>

//       <h2>Cultural Significance</h2>
//       <p>For over two centuries, Tea has shaped Assam's economy and identity. The Tea gardens employ thousands and have created a unique culture that blends indigenous traditions with the heritage of the Tea industry. From the iconic bungalows to the Tea-picking songs, Tea is woven into the fabric of Assamese life.</p>
//     `,
//     author: "Rajesh Khanna",
//     readTime: "6 min read",
//     category: "Heritage",
//   },
//   {
//     id: "premium-Tea-crafting",
//     img: b2,
//     tag: "Craft",
//     date: "Apr 2026",
//     title: "How Premium Tea is Crafted",
//     slug: "premium-Tea-crafting",
//     excerpt: "Explore the meticulous artisanal process behind crafting premium orthodox Teas that command global admiration.",
//     content: `
//       <p>The journey from Tea leaf to your cup is an intricate dance of tradition, skill, and timing. Premium Tea crafting is an art form that has been perfected over generations in Assam's finest Tea gardens.</p>

//       <h2>The Orthodox Method</h2>
//       <p>Unlike CTC (Crush, Tear, Curl) processing, the orthodox method preserves the leaf's integrity. The process begins with careful withering, where freshly plucked leaves lose moisture and become pliable for rolling.</p>

//       <h2>Artisanal Rolling</h2>
//       <p>The rolling stage is crucial. Expert Tea makers gently roll the leaves, breaking cell walls to release essential oils and enzymes. This step determines the leaf's final shape and influences the Tea's flavor profile.</p>

//       <h2>Oxidation & Firing</h2>
//       <p>Oxidation, often called "fermentation," develops the Tea's color and flavor. Skilled Tea tasters monitor the process closely, stopping it at exactly the right moment. Finally, firing halts oxidation and removes remaining moisture, preserving the Tea for its journey to Tea lovers worldwide.</p>
//     `,
//     author: "Meera Sharma",
//     readTime: "5 min read",
//     category: "Craft",
//   },
//   {
//     id: "assam-Tea-global",
//     img: b3,
//     tag: "Global",
//     date: "Mar 2026",
//     title: "Why Assam Tea is Loved Worldwide",
//     slug: "assam-Tea-global",
//     excerpt: "From English breakfast blends to premium single-estate offerings, discover why Assam Tea captivates palates globally.",
//     content: `
//       <p>Assam Tea's bold character and versatility have made it a staple in Tea cups across six continents. Its robust flavor stands up to milk and sugar, making it perfect for breakfast blends worldwide.</p>

//       <h2>Global Export Markets</h2>
//       <p>Major markets include Russia, the United Kingdom, Germany, the United States, and the Middle East. Each region appreciates different aspects of Assam Tea, from its strength to its malty sweetness.</p>

//       <h2>Growing Popularity</h2>
//       <p>The specialty Tea movement has increased appreciation for single-origin Assam Teas. Tea connoisseurs seek out seasonal flushes, with the second flush being particularly prized for its golden tips and rich character.</p>
//     `,
//     author: "Vikram Singh",
//     readTime: "4 min read",
//     category: "Global Trade",
//   },
//   {
//     id: "orthodox-vs-ctc",
//     img: b4,
//     tag: "Guide",
//     date: "Feb 2026",
//     title: "Understanding Orthodox vs CTC Tea",
//     slug: "orthodox-vs-ctc",
//     excerpt: "Learn the key differences between traditional orthodox processing and modern CTC methods in Tea production.",
//     content: `
//       <p>Two primary methods dominate Tea processing: Orthodox and CTC (Crush, Tear, Curl). Each produces distinctly different Teas suited for different preferences and markets.</p>

//       <h2>Orthodox Processing</h2>
//       <p>Orthodox Tea maintains whole or large leaf pieces, offering complex, nuanced flavors that develop with each steep. This method is preferred for premium and specialty Teas.</p>

//       <h2>CTC Processing</h2>
//       <p>CTC produces small, uniform granules that brew quickly into a strong, dark liquor. This method is ideal for Tea bags and masala chai, delivering consistent strength and body.</p>

//       <h2>Choosing Your Tea</h2>
//       <p>Choose orthodox Teas for contemplative Tea sessions where you can appreciate evolving flavors. Choose CTC for robust morning cups or when adding milk and spices.</p>
//     `,
//     author: "Anjali Nair",
//     readTime: "5 min read",
//     category: "Guide",
//   },
//   {
//     id: "health-benefits",
//     img: b5,
//     tag: "Wellness",
//     date: "Jan 2026",
//     title: "Health Benefits of Drinking Pure Assam Tea",
//     slug: "health-benefits",
//     excerpt: "Discover the numerous health benefits of authentic Assam Tea, from heart health to mental clarity.",
//     content: `
//       <p>Beyond its delightful taste, pure Assam Tea offers numerous health benefits backed by scientific research. Rich in antioxidants and beneficial compounds, this robust Tea supports overall wellness.</p>

//       <h2>Heart Health</h2>
//       <p>Regular consumption of black Tea has been linked to reduced risk of cardiovascular disease. The flavonoids in Assam Tea help lower blood pressure and improve cholesterol levels.</p>

//       <h2>Mental Alertness</h2>
//       <p>The combination of caffeine and L-theanine in Tea provides sustained energy without the jitters, improving focus and cognitive function.</p>

//       <h2>Digestive Health</h2>
//       <p>Assam Tea's tannins can aid digestion and help maintain gut health. Many people find it soothing after heavy meals.</p>
//     `,
//     author: "Dr. Sanjay Gupta",
//     readTime: "4 min read",
//     category: "Wellness",
//   },
// ];

// export function Blog() {
//   return (
//     <section id="blog" className="relative bg-cream py-12 md:py-12">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Centered Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//           <div className="flex items-center justify-center gap-3 mb-3">
//             <span className="h-px w-12 bg-forest" />
//             <span className="text-xs uppercase tracking-[0.4em] text-forest">
//               Journal
//             </span>
//             <span className="h-px w-12 bg-forest" />
//           </div>

//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-3">
//             Stories from the{" "}
//             <span className="italic text-gradient-gold">
//               Tea garden
//             </span>
//           </h2>

//           <Link
//             to="/blog"
//             className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors mt-2"
//           >
//             All Articles <ArrowRight className="h-4 w-4" />
//           </Link>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((p, i) => (
//             <motion.article
//               key={p.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, delay: i * 0.1 }}
//               className={`group cursor-pointer ${
//                 p.featured ? "lg:row-span-2 lg:col-span-1" : ""
//               }`}
//             >
//               <Link
//                 to="/blog/$postId"
//                 params={{ postId: p.id }}
//                 className="block"
//               >
//                 <div
//                   className={`relative overflow-hidden rounded-sm mb-3 ${
//                     p.featured ? "aspect-[3/4]" : "aspect-[4/3]"
//                   }`}
//                 >
//                   <img
//                     src={p.img}
//                     alt={p.title}
//                     className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />

//                   <span className="absolute top-3 left-3 rounded-full bg-cream/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em] text-forest-deep">
//                     {p.tag}
//                   </span>
//                 </div>

//                 <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
//                   {p.date}
//                 </div>

//                 <h3
//                   className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-2 ${
//                     p.featured
//                       ? "text-xl md:text-2xl lg:text-3xl"
//                       : "text-lg md:text-xl"
//                   }`}
//                 >
//                   {p.title}
//                 </h3>

//                 <span className="inline-flex items-center gap-2 text-xs text-forest border-b border-gold/40 pb-1">
//                   Read more <ArrowRight className="h-3 w-3" />
//                 </span>
//               </Link>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import b1 from "@/assets/richestblog1.jpg";
// import b2 from "@/assets/assamgarden1.jpg";
// import b3 from "@/assets/wroldwide.jpg";
// import b4 from "@/assets/ctc.jpg";
// import b5 from "@/assets/benefits.jpg";

// // Import additional images (use existing or add new ones)
// import TeaKnowledgeImg from "@/assets/hero-1.jpg";
// import brewingGuideImg from "@/assets/hero-2.jpg";
// import healthBenefitsImg from "@/assets/guarantee.jpg";
// import assamVsDarjeelingImg from "@/assets/profit.jpg";
// import officeTeaImg from "@/assets/shiping.jpg";

// export const posts = [
//   // Featured/Original Posts
//   {
//     id: "heritage-of-assam-Tea",
//     img: b1,
//     tag: "Heritage",
//     date: "May 2026",
//     title: "The Rich Heritage of Assam Tea",
//     featured: true,
//     slug: "heritage-of-assam-Tea",
//     excerpt: "Discover the 200-year journey of Assam Tea, from its discovery in the Brahmaputra valley to becoming the world's most beloved breakfast Tea.",
//     content: `
//       <p>The story of Assam Tea begins in 1823 when Robert Bruce, a Scottish adventurer, discovered Tea plants growing wild in the dense jungles of the Brahmaputra Valley. Unlike the Chinese Tea plant (Camellia sinensis var. sinensis), the Assam variety (Camellia sinensis var. assamica) was uniquely adapted to the region's tropical climate.</p>

//       <h2>The Birth of an Industry</h2>
//       <p>By the 1830s, the first commercial Tea gardens were established in Assam, marking the beginning of India's Tea industry. The British East India Company recognized the potential and invested heavily in developing the region's Tea cultivation. Today, Assam produces over half of India's total Tea output.</p>

//       <h2>Unique Characteristics</h2>
//       <p>Assam Tea is renowned for its bold, malty flavor and bright amber liquor. The region's unique terroir—hot, humid summers, abundant rainfall, and the fertile alluvial soil of the Brahmaputra valley—contributes to its distinctive character.</p>

//       <h2>Cultural Significance</h2>
//       <p>For over two centuries, Tea has shaped Assam's economy and identity. The Tea gardens employ thousands and have created a unique culture that blends indigenous traditions with the heritage of the Tea industry. From the iconic bungalows to the Tea-picking songs, Tea is woven into the fabric of Assamese life.</p>
//     `,
//     author: "Rajesh Khanna",
//     readTime: "6 min read",
//     category: "Heritage",
//   },
//   {
//     id: "premium-Tea-crafting",
//     img: b2,
//     tag: "Craft",
//     date: "Apr 2026",
//     title: "How Premium Tea is Crafted",
//     slug: "premium-Tea-crafting",
//     excerpt: "Explore the meticulous artisanal process behind crafting premium orthodox Teas that command global admiration.",
//     content: `
//       <p>The journey from Tea leaf to your cup is an intricate dance of tradition, skill, and timing. Premium Tea crafting is an art form that has been perfected over generations in Assam's finest Tea gardens.</p>

//       <h2>The Orthodox Method</h2>
//       <p>Unlike CTC (Crush, Tear, Curl) processing, the orthodox method preserves the leaf's integrity. The process begins with careful withering, where freshly plucked leaves lose moisture and become pliable for rolling.</p>

//       <h2>Artisanal Rolling</h2>
//       <p>The rolling stage is crucial. Expert Tea makers gently roll the leaves, breaking cell walls to release essential oils and enzymes. This step determines the leaf's final shape and influences the Tea's flavor profile.</p>

//       <h2>Oxidation & Firing</h2>
//       <p>Oxidation, often called "fermentation," develops the Tea's color and flavor. Skilled Tea tasters monitor the process closely, stopping it at exactly the right moment. Finally, firing halts oxidation and removes remaining moisture, preserving the Tea for its journey to Tea lovers worldwide.</p>
//     `,
//     author: "Meera Sharma",
//     readTime: "5 min read",
//     category: "Craft",
//   },
//   {
//     id: "assam-Tea-global",
//     img: b3,
//     tag: "Global",
//     date: "Mar 2026",
//     title: "Why Assam Tea is Loved Worldwide",
//     slug: "assam-Tea-global",
//     excerpt: "From English breakfast blends to premium single-estate offerings, discover why Assam Tea captivates palates globally.",
//     content: `
//       <p>Assam Tea's bold character and versatility have made it a staple in Tea cups across six continents. Its robust flavor stands up to milk and sugar, making it perfect for breakfast blends worldwide.</p>

//       <h2>Global Export Markets</h2>
//       <p>Major markets include Russia, the United Kingdom, Germany, the United States, and the Middle East. Each region appreciates different aspects of Assam Tea, from its strength to its malty sweetness.</p>

//       <h2>Growing Popularity</h2>
//       <p>The specialty Tea movement has increased appreciation for single-origin Assam Teas. Tea connoisseurs seek out seasonal flushes, with the second flush being particularly prized for its golden tips and rich character.</p>
//     `,
//     author: "Vikram Singh",
//     readTime: "4 min read",
//     category: "Global Trade",
//   },
//   {
//     id: "orthodox-vs-ctc",
//     img: b4,
//     tag: "Guide",
//     date: "Feb 2026",
//     title: "Understanding Orthodox vs CTC Tea",
//     slug: "orthodox-vs-ctc",
//     excerpt: "Learn the key differences between traditional orthodox processing and modern CTC methods in Tea production.",
//     content: `
//       <p>Two primary methods dominate Tea processing: Orthodox and CTC (Crush, Tear, Curl). Each produces distinctly different Teas suited for different preferences and markets.</p>

//       <h2>Orthodox Processing</h2>
//       <p>Orthodox Tea maintains whole or large leaf pieces, offering complex, nuanced flavors that develop with each steep. This method is preferred for premium and specialty Teas.</p>

//       <h2>CTC Processing</h2>
//       <p>CTC produces small, uniform granules that brew quickly into a strong, dark liquor. This method is ideal for Tea bags and masala chai, delivering consistent strength and body.</p>

//       <h2>Choosing Your Tea</h2>
//       <p>Choose orthodox Teas for contemplative Tea sessions where you can appreciate evolving flavors. Choose CTC for robust morning cups or when adding milk and spices.</p>
//     `,
//     author: "Anjali Nair",
//     readTime: "5 min read",
//     category: "Guide",
//   },
//   {
//     id: "health-benefits",
//     img: b5,
//     tag: "Wellness",
//     date: "Jan 2026",
//     title: "Health Benefits of Drinking Pure Assam Tea",
//     slug: "health-benefits",
//     excerpt: "Discover the numerous health benefits of authentic Assam Tea, from heart health to mental clarity.",
//     content: `
//       <p>Beyond its delightful taste, pure Assam Tea offers numerous health benefits backed by scientific research. Rich in antioxidants and beneficial compounds, this robust Tea supports overall wellness.</p>

//       <h2>Heart Health</h2>
//       <p>Regular consumption of black Tea has been linked to reduced risk of cardiovascular disease. The flavonoids in Assam Tea help lower blood pressure and improve cholesterol levels.</p>

//       <h2>Mental Alertness</h2>
//       <p>The combination of caffeine and L-theanine in Tea provides sustained energy without the jitters, improving focus and cognitive function.</p>

//       <h2>Digestive Health</h2>
//       <p>Assam Tea's tannins can aid digestion and help maintain gut health. Many people find it soothing after heavy meals.</p>
//     `,
//     author: "Dr. Sanjay Gupta",
//     readTime: "4 min read",
//     category: "Wellness",
//   },

//   // New SEO Blog Posts
//   {
//     id: "Tea-knowledge-blog",
//     img: TeaKnowledgeImg,
//     tag: "Knowledge",
//     date: "Jun 2026",
//     title: "Essential Tea Knowledge: A Beginner's Guide to Assam Tea",
//     featured: false,
//     slug: "Tea-knowledge-blog",
//     excerpt: "Everything you need to know about Assam Tea - from its origins to brewing the perfect cup. A comprehensive guide for Tea enthusiasts.",
//     content: `
//       <p>Assam Tea is one of the most beloved Teas in the world, known for its bold, malty flavor and rich amber color. Whether you're a Tea connoisseur or just beginning your Tea journey, understanding the basics of Assam Tea will enhance your appreciation of this remarkable beverage.</p>

//       <h2>What Makes Assam Tea Special?</h2>
//       <p>Assam Tea comes from the Camellia sinensis var. assamica plant, which is native to the Assam region in Northeast India. The tropical climate, abundant rainfall, and fertile soil of the Brahmaputra Valley create the perfect conditions for producing Tea with a distinctive malty character.</p>

//       <h2>Types of Assam Tea</h2>
//       <p>Assam Tea is available in various forms including Orthodox (whole leaf), CTC (Crush, Tear, Curl), and green Tea. Each type offers a different flavor profile and brewing experience.</p>

//       <h2>Flushes and Seasons</h2>
//       <p>Assam Tea is harvested in three main flushes: First Flush (spring), Second Flush (summer), and Autumnal Flush. The Second Flush is particularly prized for its golden tips and rich flavor.</p>

//       <h2>Brewing Tips</h2>
//       <p>For the perfect cup of Assam Tea, use fresh water, steep at 95-100°C for 3-5 minutes, and enjoy with or without milk. The robust flavor stands up well to milk and sugar.</p>
//     `,
//     author: "Tea Sommelier",
//     readTime: "7 min read",
//     category: "Knowledge",
//   },
//   {
//     id: "Tea-brewing-guide",
//     img: brewingGuideImg,
//     tag: "Guide",
//     date: "Jun 2026",
//     title: "The Ultimate Tea Brewing Guide: Perfect Your Cup",
//     featured: false,
//     slug: "Tea-brewing-guide",
//     excerpt: "Master the art of brewing Assam Tea with our comprehensive guide. Learn the perfect water temperature, steeping time, and techniques for the best flavor.",
//     content: `
//       <p>Brewing the perfect cup of Assam Tea is both an art and a science. The right technique can elevate your Tea experience, bringing out the rich, malty flavors that Assam Tea is famous for.</p>

//       <h2>Water Temperature Matters</h2>
//       <p>For black Assam Tea, water should be at a rolling boil (95-100°C). Using water that's not hot enough will result in weak, under-extracted Tea. For green Assam Tea, use slightly cooler water (75-80°C) to avoid bitterness.</p>

//       <h2>Steeping Time Guidelines</h2>
//       <p>For orthodox Assam Tea, steep for 3-5 minutes. CTC Tea requires 2-3 minutes for optimal extraction. Avoid over-steeping, which can make the Tea bitter.</p>

//       <h2>Tea-to-Water Ratio</h2>
//       <p>Use approximately 1 Teaspoon of Tea leaves per cup (8 oz) of water. For a stronger cup, add more leaves rather than steeping longer.</p>

//       <h2>Enhancing Your Tea</h2>
//       <p>Assam Tea pairs wonderfully with milk, sugar, or honey. For masala chai, add spices like cardamom, cinnamon, and ginger while brewing.</p>
//     `,
//     author: "Brewing Expert",
//     readTime: "6 min read",
//     category: "Brewing",
//   },
//   {
//     id: "health-benefits-articles",
//     img: healthBenefitsImg,
//     tag: "Wellness",
//     date: "May 2026",
//     title: "10 Surprising Health Benefits of Assam Tea",
//     featured: false,
//     slug: "health-benefits-articles",
//     excerpt: "Discover the science-backed health benefits of Assam Tea, from boosting immunity to supporting heart health and weight management.",
//     content: `
//       <p>Beyond its delicious taste, Assam Tea offers a wealth of health benefits backed by scientific research. Regular consumption of this antioxidant-rich beverage can support overall wellness in numerous ways.</p>

//       <h2>1. Rich in Antioxidants</h2>
//       <p>Assam Tea is packed with polyphenols and flavonoids that combat oxidative stress and protect cells from damage.</p>

//       <h2>2. Supports Heart Health</h2>
//       <p>Studies show that regular black Tea consumption can help lower blood pressure and reduce the risk of cardiovascular disease.</p>

//       <h2>3. Boosts Immunity</h2>
//       <p>The antioxidants in Assam Tea support the immune system, helping the body fight off infections and diseases.</p>

//       <h2>4. Promotes Digestive Health</h2>
//       <p>Tea tannins can aid digestion and help maintain a healthy gut microbiome.</p>

//       <h2>5. Enhances Mental Alertness</h2>
//       <p>The combination of caffeine and L-theanine improves focus, concentration, and cognitive function.</p>

//       <h2>6. Aids in Weight Management</h2>
//       <p>Regular Tea consumption can boost metabolism and support weight management when combined with a healthy lifestyle.</p>

//       <h2>7. Supports Bone Health</h2>
//       <p>Some studies suggest that Tea compounds may help maintain bone density and reduce the risk of fractures.</p>

//       <h2>8. Improves Oral Health</h2>
//       <p>Fluoride and tannins in Tea can help prevent tooth decay and maintain oral hygiene.</p>

//       <h2>9. Reduces Stress</h2>
//       <p>The L-theanine in Tea promotes relaxation and helps reduce stress and anxiety.</p>

//       <h2>10. Anti-Aging Properties</h2>
//       <p>Antioxidants in Assam Tea can help protect against premature aging by neutralizing free radicals.</p>
//     `,
//     author: "Dr. Nutritionist",
//     readTime: "8 min read",
//     category: "Health",
//   },
//   {
//     id: "assam-vs-darjeeling",
//     img: assamVsDarjeelingImg,
//     tag: "Comparison",
//     date: "May 2026",
//     title: "Assam Tea vs Darjeeling Tea: The Ultimate Comparison",
//     featured: false,
//     slug: "assam-vs-darjeeling",
//     excerpt: "Compare the bold, malty Assam Tea with the delicate, floral Darjeeling. Learn their differences, origins, and which one suits your taste.",
//     content: `
//       <p>Two of India's most celebrated Teas, Assam and Darjeeling, offer distinctly different experiences. While both come from the same country, their unique characteristics make them beloved for different reasons.</p>

//       <h2>Origins and Terroir</h2>
//       <p>Assam Tea comes from the tropical Brahmaputra Valley, while Darjeeling is grown in the Himalayan foothills. The elevation and climate create very different flavor profiles.</p>

//       <h2>Flavor Profile</h2>
//       <p>Assam Tea is known for its bold, malty, and full-bodied flavor with a bright amber liquor. Darjeeling Tea offers a delicate, floral, and muscatel flavor with a lighter golden color.</p>

//       <h2>Processing Methods</h2>
//       <p>Both Teas can be processed using orthodox methods, but Assam Tea is also commonly processed as CTC. Darjeeling Tea is almost exclusively orthodox processed to preserve its delicate flavor.</p>

//       <h2>Brewing Differences</h2>
//       <p>Assam Tea requires boiling water (95-100°C) and 3-5 minutes of steeping. Darjeeling Tea benefits from slightly cooler water (85-90°C) and 2-4 minutes of steeping.</p>

//       <h2>Best Uses</h2>
//       <p>Assam Tea is ideal for breakfast, with milk and sugar, or in masala chai. Darjeeling Tea is best enjoyed plain, without milk, to appreciate its subtle flavors.</p>

//       <h2>Which One to Choose?</h2>
//       <p>Choose Assam Tea if you prefer a strong, robust cup that stands up to milk and sugar. Choose Darjeeling Tea if you enjoy delicate, aromatic Teas with complex flavor notes.</p>
//     `,
//     author: "Tea Taster",
//     readTime: "6 min read",
//     category: "Comparison",
//   },
//   {
//     id: "best-Tea-for-offices",
//     img: officeTeaImg,
//     tag: "Business",
//     date: "Apr 2026",
//     title: "Best Tea for Offices: Choosing the Perfect Tea for Your Workplace",
//     featured: false,
//     slug: "best-Tea-for-offices",
//     excerpt: "A comprehensive guide to selecting the best Tea for offices. From employee satisfaction to cost-effectiveness, choose the perfect Tea for your workplace.",
//     content: `
//       <p>Tea is the second most consumed beverage in the world, and in offices, it's often the lifeblood of productivity. Choosing the right Tea for your office can boost employee morale, improve focus, and create a positive work environment.</p>

//       <h2>Why Tea in Offices Matters</h2>
//       <p>Offering Tea in the workplace shows that you care about employee well-being. Tea breaks provide opportunities for informal interactions and stress relief, improving Team dynamics and productivity.</p>

//       <h2>Assam Tea - The Ideal Office Tea</h2>
//       <p>Assam Tea is perhaps the best choice for offices due to its bold flavor, consistency, and versatility. It appeals to a wide range of palates and can be enjoyed with or without milk and sugar.</p>

//       <h2>Considerations When Choosing Office Tea</h2>
//       <ul>
//         <li><strong>Employee Preferences:</strong> Consider offering a variety of Teas to cater to different tastes.</li>
//         <li><strong>Quality vs. Cost:</strong> Find the right balance between quality and budget.</li>
//         <li><strong>Ease of Brewing:</strong> CTC Tea is easier to brew consistently in office settings.</li>
//         <li><strong>Packaging:</strong> Consider Tea bags for convenience or loose leaf for quality.</li>
//         <li><strong>Bulk Ordering:</strong> Tea exporters can provide consistent quality at competitive prices.</li>
//       </ul>

//       <h2>Types of Tea for Offices</h2>
//       <ul>
//         <li><strong>Assam CTC Tea:</strong> Strong, consistent, and perfect for office Tea breaks.</li>
//         <li><strong>Orthodox Assam:</strong> For offices that appreciate premium quality.</li>
//         <li><strong>Green Tea:</strong> For health-conscious employees.</li>
//         <li><strong>Masala Chai:</strong> For a more exotic flavor experience.</li>
//       </ul>

//       <h2>Benefits of Choosing Assam Tea for Your Office</h2>
//       <ul>
//         <li>Consistent quality and flavor</li>
//         <li>Competitive bulk pricing</li>
//         <li>Appeals to diverse palates</li>
//         <li>Trusted source since 1990</li>
//         <li>Reliable supply chain</li>
//       </ul>

//       <h2>How to Source Office Tea</h2>
//       <p>Partner with established Tea suppliers like R.K. Tea Sales for reliable quality and pricing. With over 35 years of experience, we help businesses across India choose the perfect Tea for their offices.</p>
//     `,
//     author: "Office Wellness Expert",
//     readTime: "7 min read",
//     category: "Business",
//   },
// ];

// export function Blog() {
//   // Separate featured and regular posts
//   const featuredPosts = posts.filter(p => p.featured);
//   const regularPosts = posts.filter(p => !p.featured);

//   // Combine: featured first, then regular posts
//   const allPosts = [...featuredPosts, ...regularPosts];

//   return (
//     <section id="blog" className="relative bg-cream py-12 md:py-12">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Centered Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-10"
//         >
//           <div className="flex items-center justify-center gap-3 mb-3">
//             <span className="h-px w-12 bg-forest" />
//             <span className="text-xs uppercase tracking-[0.4em] text-forest">
//               Journal
//             </span>
//             <span className="h-px w-12 bg-forest" />
//           </div>

//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-3">
//             Stories from the{" "}
//             <span className="italic text-gradient-gold">
//               Tea garden
//             </span>
//           </h2>

//           <Link
//             to="/blog"
//             className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors mt-2"
//           >
//             All Articles <ArrowRight className="h-4 w-4" />
//           </Link>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {allPosts.map((p, i) => (
//             <motion.article
//               key={p.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, delay: i * 0.1 }}
//               className={`group cursor-pointer ${
//                 p.featured ? "lg:row-span-2 lg:col-span-1" : ""
//               }`}
//             >
//               <Link
//                 to="/blog/$postId"
//                 params={{ postId: p.id }}
//                 className="block"
//               >
//                 <div
//                   className={`relative overflow-hidden rounded-sm mb-3 ${
//                     p.featured ? "aspect-[3/4]" : "aspect-[4/3]"
//                   }`}
//                 >
//                   <img
//                     src={p.img}
//                     alt={p.title}
//                     className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />

//                   <span className="absolute top-3 left-3 rounded-full bg-cream/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em] text-forest-deep">
//                     {p.tag}
//                   </span>
//                 </div>

//                 <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
//                   {p.date}
//                 </div>

//                 <h3
//                   className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-2 ${
//                     p.featured
//                       ? "text-xl md:text-2xl lg:text-3xl"
//                       : "text-lg md:text-xl"
//                   }`}
//                 >
//                   {p.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
//                   {p.excerpt}
//                 </p>

//                 <span className="inline-flex items-center gap-2 text-xs text-forest border-b border-gold/40 pb-1">
//                   Read more <ArrowRight className="h-3 w-3" />
//                 </span>
//               </Link>
//             </motion.article>
//           ))}
//         </div>

//         {/* Category Tags for SEO */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-2 mt-10 pt-8 border-t border-forest-deep/10"
//         >
//           <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground mr-2">
//             Explore:
//           </span>
//           {["Heritage", "Craft", "Global Trade", "Guide", "Wellness", "Knowledge", "Brewing", "Health", "Comparison", "Business"].map((category) => (
//             <Link
//               key={category}
//               to="/blog"
//               className="px-3 py-1 rounded-full bg-forest-deep/5 text-forest-deep/70 text-xs hover:bg-gold/20 hover:text-gold transition-all duration-300"
//             >
//               {category}
//             </Link>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }






// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Link } from "@tanstack/react-router";
// import b1 from "@/assets/richestblog1.jpg";
// import b2 from "@/assets/assamgarden1.jpg";
// import b3 from "@/assets/wroldwide.jpg";
// import b4 from "@/assets/ctc.jpg";
// import b5 from "@/assets/benefits.jpg";

// // Import additional images (use existing or add new ones)
// import TeaKnowledgeImg from "@/assets/hero-1.jpg";
// import brewingGuideImg from "@/assets/hero-2.jpg";
// import healthBenefitsImg from "@/assets/guarantee.jpg";
// import assamVsDarjeelingImg from "@/assets/profit.jpg";
// import officeTeaImg from "@/assets/shiping.jpg";
// import { SEO } from "./SEO";

// export const posts = [
//   // Featured/Original Posts
//   {
//     id: "heritage-of-assam-Tea",
//     img: b1,
//     tag: "Heritage",
//     date: "May 2026",
//     title: "The Rich Heritage of Assam Tea",
//     featured: true,
//     slug: "heritage-of-assam-Tea",
//     excerpt: "Discover the 200-year journey of Assam Tea, from its discovery in the Brahmaputra valley to becoming the world's most beloved breakfast Tea.",
//     content: `
//       <p>The story of Assam Tea begins in 1823 when Robert Bruce, a Scottish adventurer, discovered Tea plants growing wild in the dense jungles of the Brahmaputra Valley. Unlike the Chinese Tea plant (Camellia sinensis var. sinensis), the Assam variety (Camellia sinensis var. assamica) was uniquely adapted to the region's tropical climate.</p>

//       <h2>The Birth of an Industry</h2>
//       <p>By the 1830s, the first commercial Tea gardens were established in Assam, marking the beginning of India's Tea industry. The British East India Company recognized the potential and invested heavily in developing the region's Tea cultivation. Today, Assam produces over half of India's total Tea output.</p>

//       <h2>Unique Characteristics</h2>
//       <p>Assam Tea is renowned for its bold, malty flavor and bright amber liquor. The region's unique terroir—hot, humid summers, abundant rainfall, and the fertile alluvial soil of the Brahmaputra valley—contributes to its distinctive character.</p>

//       <h2>Cultural Significance</h2>
//       <p>For over two centuries, Tea has shaped Assam's economy and identity. The Tea gardens employ thousands and have created a unique culture that blends indigenous traditions with the heritage of the Tea industry. From the iconic bungalows to the Tea-picking songs, Tea is woven into the fabric of Assamese life.</p>
//     `,
//     author: "Rajesh Khanna",
//     readTime: "6 min read",
//     category: "Heritage",
//   },
//   {
//     id: "premium-Tea-crafting",
//     img: b2,
//     tag: "Craft",
//     date: "Apr 2026",
//     title: "How Premium Tea is Crafted",
//     slug: "premium-Tea-crafting",
//     excerpt: "Explore the meticulous artisanal process behind crafting premium orthodox Teas that command global admiration.",
//     content: `
//       <p>The journey from Tea leaf to your cup is an intricate dance of tradition, skill, and timing. Premium Tea crafting is an art form that has been perfected over generations in Assam's finest Tea gardens.</p>

//       <h2>The Orthodox Method</h2>
//       <p>Unlike CTC (Crush, Tear, Curl) processing, the orthodox method preserves the leaf's integrity. The process begins with careful withering, where freshly plucked leaves lose moisture and become pliable for rolling.</p>

//       <h2>Artisanal Rolling</h2>
//       <p>The rolling stage is crucial. Expert Tea makers gently roll the leaves, breaking cell walls to release essential oils and enzymes. This step determines the leaf's final shape and influences the Tea's flavor profile.</p>

//       <h2>Oxidation & Firing</h2>
//       <p>Oxidation, often called "fermentation," develops the Tea's color and flavor. Skilled Tea tasters monitor the process closely, stopping it at exactly the right moment. Finally, firing halts oxidation and removes remaining moisture, preserving the Tea for its journey to Tea lovers worldwide.</p>
//     `,
//     author: "Meera Sharma",
//     readTime: "5 min read",
//     category: "Craft",
//   },
//   {
//     id: "assam-Tea-global",
//     img: b3,
//     tag: "Global",
//     date: "Mar 2026",
//     title: "Why Assam Tea is Loved Worldwide",
//     slug: "assam-Tea-global",
//     excerpt: "From English breakfast blends to premium single-estate offerings, discover why Assam Tea captivates palates globally.",
//     content: `
//       <p>Assam Tea's bold character and versatility have made it a staple in Tea cups across six continents. Its robust flavor stands up to milk and sugar, making it perfect for breakfast blends worldwide.</p>

//       <h2>Global Export Markets</h2>
//       <p>Major markets include Russia, the United Kingdom, Germany, the United States, and the Middle East. Each region appreciates different aspects of Assam Tea, from its strength to its malty sweetness.</p>

//       <h2>Growing Popularity</h2>
//       <p>The specialty Tea movement has increased appreciation for single-origin Assam Teas. Tea connoisseurs seek out seasonal flushes, with the second flush being particularly prized for its golden tips and rich character.</p>
//     `,
//     author: "Vikram Singh",
//     readTime: "4 min read",
//     category: "Global Trade",
//   },
//   {
//     id: "orthodox-vs-ctc",
//     img: b4,
//     tag: "Guide",
//     date: "Feb 2026",
//     title: "Understanding Orthodox vs CTC Tea",
//     slug: "orthodox-vs-ctc",
//     excerpt: "Learn the key differences between traditional orthodox processing and modern CTC methods in Tea production.",
//     content: `
//       <p>Two primary methods dominate Tea processing: Orthodox and CTC (Crush, Tear, Curl). Each produces distinctly different Teas suited for different preferences and markets.</p>

//       <h2>Orthodox Processing</h2>
//       <p>Orthodox Tea maintains whole or large leaf pieces, offering complex, nuanced flavors that develop with each steep. This method is preferred for premium and specialty Teas.</p>

//       <h2>CTC Processing</h2>
//       <p>CTC produces small, uniform granules that brew quickly into a strong, dark liquor. This method is ideal for Tea bags and masala chai, delivering consistent strength and body.</p>

//       <h2>Choosing Your Tea</h2>
//       <p>Choose orthodox Teas for contemplative Tea sessions where you can appreciate evolving flavors. Choose CTC for robust morning cups or when adding milk and spices.</p>
//     `,
//     author: "Anjali Nair",
//     readTime: "5 min read",
//     category: "Guide",
//   },
//   {
//     id: "health-benefits",
//     img: b5,
//     tag: "Wellness",
//     date: "Jan 2026",
//     title: "Health Benefits of Drinking Pure Assam Tea",
//     slug: "health-benefits",
//     excerpt: "Discover the numerous health benefits of authentic Assam Tea, from heart health to mental clarity.",
//     content: `
//       <p>Beyond its delightful taste, pure Assam Tea offers numerous health benefits backed by scientific research. Rich in antioxidants and beneficial compounds, this robust Tea supports overall wellness.</p>

//       <h2>Heart Health</h2>
//       <p>Regular consumption of black Tea has been linked to reduced risk of cardiovascular disease. The flavonoids in Assam Tea help lower blood pressure and improve cholesterol levels.</p>

//       <h2>Mental Alertness</h2>
//       <p>The combination of caffeine and L-theanine in Tea provides sustained energy without the jitters, improving focus and cognitive function.</p>

//       <h2>Digestive Health</h2>
//       <p>Assam Tea's tannins can aid digestion and help maintain gut health. Many people find it soothing after heavy meals.</p>
//     `,
//     author: "Dr. Sanjay Gupta",
//     readTime: "4 min read",
//     category: "Wellness",
//   },

//   // New SEO Blog Posts
//   {
//     id: "Tea-knowledge-blog",
//     img: TeaKnowledgeImg,
//     tag: "Knowledge",
//     date: "Jun 2026",
//     title: "Essential Tea Knowledge: A Beginner's Guide to Assam Tea",
//     featured: false,
//     slug: "Tea-knowledge-blog",
//     excerpt: "Everything you need to know about Assam Tea - from its origins to brewing the perfect cup. A comprehensive guide for Tea enthusiasts.",
//     content: `
//       <p>Assam Tea is one of the most beloved Teas in the world, known for its bold, malty flavor and rich amber color. Whether you're a Tea connoisseur or just beginning your Tea journey, understanding the basics of Assam Tea will enhance your appreciation of this remarkable beverage.</p>

//       <h2>What Makes Assam Tea Special?</h2>
//       <p>Assam Tea comes from the Camellia sinensis var. assamica plant, which is native to the Assam region in Northeast India. The tropical climate, abundant rainfall, and fertile soil of the Brahmaputra Valley create the perfect conditions for producing Tea with a distinctive malty character.</p>

//       <h2>Types of Assam Tea</h2>
//       <p>Assam Tea is available in various forms including Orthodox (whole leaf), CTC (Crush, Tear, Curl), and green Tea. Each type offers a different flavor profile and brewing experience.</p>

//       <h2>Flushes and Seasons</h2>
//       <p>Assam Tea is harvested in three main flushes: First Flush (spring), Second Flush (summer), and Autumnal Flush. The Second Flush is particularly prized for its golden tips and rich flavor.</p>

//       <h2>Brewing Tips</h2>
//       <p>For the perfect cup of Assam Tea, use fresh water, steep at 95-100°C for 3-5 minutes, and enjoy with or without milk. The robust flavor stands up well to milk and sugar.</p>
//     `,
//     author: "Tea Sommelier",
//     readTime: "7 min read",
//     category: "Knowledge",
//   },
//   {
//     id: "Tea-brewing-guide",
//     img: brewingGuideImg,
//     tag: "Guide",
//     date: "Jun 2026",
//     title: "The Ultimate Tea Brewing Guide: Perfect Your Cup",
//     featured: false,
//     slug: "Tea-brewing-guide",
//     excerpt: "Master the art of brewing Assam Tea with our comprehensive guide. Learn the perfect water temperature, steeping time, and techniques for the best flavor.",
//     content: `
//       <p>Brewing the perfect cup of Assam Tea is both an art and a science. The right technique can elevate your Tea experience, bringing out the rich, malty flavors that Assam Tea is famous for.</p>

//       <h2>Water Temperature Matters</h2>
//       <p>For black Assam Tea, water should be at a rolling boil (95-100°C). Using water that's not hot enough will result in weak, under-extracted Tea. For green Assam Tea, use slightly cooler water (75-80°C) to avoid bitterness.</p>

//       <h2>Steeping Time Guidelines</h2>
//       <p>For orthodox Assam Tea, steep for 3-5 minutes. CTC Tea requires 2-3 minutes for optimal extraction. Avoid over-steeping, which can make the Tea bitter.</p>

//       <h2>Tea-to-Water Ratio</h2>
//       <p>Use approximately 1 Teaspoon of Tea leaves per cup (8 oz) of water. For a stronger cup, add more leaves rather than steeping longer.</p>

//       <h2>Enhancing Your Tea</h2>
//       <p>Assam Tea pairs wonderfully with milk, sugar, or honey. For masala chai, add spices like cardamom, cinnamon, and ginger while brewing.</p>
//     `,
//     author: "Brewing Expert",
//     readTime: "6 min read",
//     category: "Brewing",
//   },
//   {
//     id: "health-benefits-articles",
//     img: healthBenefitsImg,
//     tag: "Wellness",
//     date: "May 2026",
//     title: "10 Surprising Health Benefits of Assam Tea",
//     featured: false,
//     slug: "health-benefits-articles",
//     excerpt: "Discover the science-backed health benefits of Assam Tea, from boosting immunity to supporting heart health and weight management.",
//     content: `
//       <p>Beyond its delicious taste, Assam Tea offers a wealth of health benefits backed by scientific research. Regular consumption of this antioxidant-rich beverage can support overall wellness in numerous ways.</p>

//       <h2>1. Rich in Antioxidants</h2>
//       <p>Assam Tea is packed with polyphenols and flavonoids that combat oxidative stress and protect cells from damage.</p>

//       <h2>2. Supports Heart Health</h2>
//       <p>Studies show that regular black Tea consumption can help lower blood pressure and reduce the risk of cardiovascular disease.</p>

//       <h2>3. Boosts Immunity</h2>
//       <p>The antioxidants in Assam Tea support the immune system, helping the body fight off infections and diseases.</p>

//       <h2>4. Promotes Digestive Health</h2>
//       <p>Tea tannins can aid digestion and help maintain a healthy gut microbiome.</p>

//       <h2>5. Enhances Mental Alertness</h2>
//       <p>The combination of caffeine and L-theanine improves focus, concentration, and cognitive function.</p>

//       <h2>6. Aids in Weight Management</h2>
//       <p>Regular Tea consumption can boost metabolism and support weight management when combined with a healthy lifestyle.</p>

//       <h2>7. Supports Bone Health</h2>
//       <p>Some studies suggest that Tea compounds may help maintain bone density and reduce the risk of fractures.</p>

//       <h2>8. Improves Oral Health</h2>
//       <p>Fluoride and tannins in Tea can help prevent tooth decay and maintain oral hygiene.</p>

//       <h2>9. Reduces Stress</h2>
//       <p>The L-theanine in Tea promotes relaxation and helps reduce stress and anxiety.</p>

//       <h2>10. Anti-Aging Properties</h2>
//       <p>Antioxidants in Assam Tea can help protect against premature aging by neutralizing free radicals.</p>
//     `,
//     author: "Dr. Nutritionist",
//     readTime: "8 min read",
//     category: "Health",
//   },
//   {
//     id: "assam-vs-darjeeling",
//     img: assamVsDarjeelingImg,
//     tag: "Comparison",
//     date: "May 2026",
//     title: "Assam Tea vs Darjeeling Tea: The Ultimate Comparison",
//     featured: false,
//     slug: "assam-vs-darjeeling",
//     excerpt: "Compare the bold, malty Assam Tea with the delicate, floral Darjeeling. Learn their differences, origins, and which one suits your taste.",
//     content: `
//       <p>Two of India's most celebrated Teas, Assam and Darjeeling, offer distinctly different experiences. While both come from the same country, their unique characteristics make them beloved for different reasons.</p>

//       <h2>Origins and Terroir</h2>
//       <p>Assam Tea comes from the tropical Brahmaputra Valley, while Darjeeling is grown in the Himalayan foothills. The elevation and climate create very different flavor profiles.</p>

//       <h2>Flavor Profile</h2>
//       <p>Assam Tea is known for its bold, malty, and full-bodied flavor with a bright amber liquor. Darjeeling Tea offers a delicate, floral, and muscatel flavor with a lighter golden color.</p>

//       <h2>Processing Methods</h2>
//       <p>Both Teas can be processed using orthodox methods, but Assam Tea is also commonly processed as CTC. Darjeeling Tea is almost exclusively orthodox processed to preserve its delicate flavor.</p>

//       <h2>Brewing Differences</h2>
//       <p>Assam Tea requires boiling water (95-100°C) and 3-5 minutes of steeping. Darjeeling Tea benefits from slightly cooler water (85-90°C) and 2-4 minutes of steeping.</p>

//       <h2>Best Uses</h2>
//       <p>Assam Tea is ideal for breakfast, with milk and sugar, or in masala chai. Darjeeling Tea is best enjoyed plain, without milk, to appreciate its subtle flavors.</p>

//       <h2>Which One to Choose?</h2>
//       <p>Choose Assam Tea if you prefer a strong, robust cup that stands up to milk and sugar. Choose Darjeeling Tea if you enjoy delicate, aromatic Teas with complex flavor notes.</p>
//     `,
//     author: "Tea Taster",
//     readTime: "6 min read",
//     category: "Comparison",
//   },
//   {
//     id: "best-Tea-for-offices",
//     img: officeTeaImg,
//     tag: "Business",
//     date: "Apr 2026",
//     title: "Best Tea for Offices: Choosing the Perfect Tea for Your Workplace",
//     featured: false,
//     slug: "best-Tea-for-offices",
//     excerpt: "A comprehensive guide to selecting the best Tea for offices. From employee satisfaction to cost-effectiveness, choose the perfect Tea for your workplace.",
//     content: `
//       <p>Tea is the second most consumed beverage in the world, and in offices, it's often the lifeblood of productivity. Choosing the right Tea for your office can boost employee morale, improve focus, and create a positive work environment.</p>

//       <h2>Why Tea in Offices Matters</h2>
//       <p>Offering Tea in the workplace shows that you care about employee well-being. Tea breaks provide opportunities for informal interactions and stress relief, improving Team dynamics and productivity.</p>

//       <h2>Assam Tea - The Ideal Office Tea</h2>
//       <p>Assam Tea is perhaps the best choice for offices due to its bold flavor, consistency, and versatility. It appeals to a wide range of palates and can be enjoyed with or without milk and sugar.</p>

//       <h2>Considerations When Choosing Office Tea</h2>
//       <ul>
//         <li><strong>Employee Preferences:</strong> Consider offering a variety of Teas to cater to different tastes.</li>
//         <li><strong>Quality vs. Cost:</strong> Find the right balance between quality and budget.</li>
//         <li><strong>Ease of Brewing:</strong> CTC Tea is easier to brew consistently in office settings.</li>
//         <li><strong>Packaging:</strong> Consider Tea bags for convenience or loose leaf for quality.</li>
//         <li><strong>Bulk Ordering:</strong> Tea exporters can provide consistent quality at competitive prices.</li>
//       </ul>

//       <h2>Types of Tea for Offices</h2>
//       <ul>
//         <li><strong>Assam CTC Tea:</strong> Strong, consistent, and perfect for office Tea breaks.</li>
//         <li><strong>Orthodox Assam:</strong> For offices that appreciate premium quality.</li>
//         <li><strong>Green Tea:</strong> For health-conscious employees.</li>
//         <li><strong>Masala Chai:</strong> For a more exotic flavor experience.</li>
//       </ul>

//       <h2>Benefits of Choosing Assam Tea for Your Office</h2>
//       <ul>
//         <li>Consistent quality and flavor</li>
//         <li>Competitive bulk pricing</li>
//         <li>Appeals to diverse palates</li>
//         <li>Trusted source since 1990</li>
//         <li>Reliable supply chain</li>
//       </ul>

//       <h2>How to Source Office Tea</h2>
//       <p>Partner with established Tea suppliers like R.K. Tea Sales for reliable quality and pricing. With over 35 years of experience, we help businesses across India choose the perfect Tea for their offices.</p>
//     `,
//     author: "Office Wellness Expert",
//     readTime: "7 min read",
//     category: "Business",
//   },
// ];

// export function Blog() {
//   // Separate featured and regular posts
//   const featuredPosts = posts.filter(p => p.featured);
//   const regularPosts = posts.filter(p => !p.featured);

//   // Combine: featured first, then regular posts
//   const allPosts = [...featuredPosts, ...regularPosts];

//   return (
//     <>
//     <SEO
//         title="Assam Tea Blog — Heritage, Craft & Knowledge"
//         description="Explore our Tea blog covering Assam Tea heritage, brewing guides, health benefits, and industry insights. Stay informed with R K Tea Sales."
//         keywords={[
//           'Assam Tea blog',
//           'Tea heritage',
//           'Tea brewing guide',
//           'Tea health benefits',
//           'Assam Tea knowledge'
//         ]}
//         image="https://rkTeasales.com/blog-og-image.jpg"
//         type="website"
//         structuredData={blogStructuredData}
//       />
   
//     <section id="blog" className="relative bg-cream py-16 md:py-20">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* Centered Header Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12 md:mb-14"
//         >
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <span className="h-px w-14 bg-forest" />
//             <span className="text-sm uppercase tracking-[0.4em] text-forest font-semibold">
//               Journal
//             </span>
//             <span className="h-px w-14 bg-forest" />
//           </div>

//           <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
//             Stories from the{" "}
//             <span className="italic text-gradient-gold">
//               Tea garden
//             </span>
//           </h2>

//           <Link
//             to="/blog"
//             className="inline-flex items-center gap-2.5 text-base uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors mt-3"
//           >
//             All Articles <ArrowRight className="h-5 w-5" />
//           </Link>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {allPosts.map((p, i) => (
//             <motion.article
//               key={p.title}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-80px" }}
//               transition={{ duration: 0.8, delay: i * 0.1 }}
//               className={`group cursor-pointer ${
//                 p.featured ? "lg:row-span-2 lg:col-span-1" : ""
//               }`}
//             >
//               <Link
//                 to="/blog/$postId"
//                 params={{ postId: p.id }}
//                 className="block"
//               >
//                 <div
//                   className={`relative overflow-hidden rounded-sm mb-4 ${
//                     p.featured ? "aspect-[3/4]" : "aspect-[4/3]"
//                   }`}
//                 >
//                   <img
//                     src={p.img}
//                     alt={p.title}
//                     className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
//                     loading="lazy"
//                   />

//                   <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />

//                   <span className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-forest-deep font-semibold">
//                     {p.tag}
//                   </span>
//                 </div>

//                 <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-2">
//                   {p.date}
//                 </div>

//                 <h3
//                   className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-2.5 ${
//                     p.featured
//                       ? "text-xl md:text-2xl lg:text-3xl"
//                       : "text-lg md:text-xl"
//                   }`}
//                 >
//                   {p.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm md:text-base mb-3 line-clamp-2">
//                   {p.excerpt}
//                 </p>

//                 <span className="inline-flex items-center gap-2.5 text-sm text-forest border-b border-gold/40 pb-1.5 font-medium">
//                   Read more <ArrowRight className="h-4 w-4" />
//                 </span>
//               </Link>
//             </motion.article>
//           ))}
//         </div>

//         {/* Category Tags for SEO */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.3 }}
//           className="flex flex-wrap justify-center gap-3 mt-12 pt-8 border-t border-forest-deep/10"
//         >
//           <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mr-2 font-medium">
//             Explore:
//           </span>
//           {["Heritage", "Craft", "Global Trade", "Guide", "Wellness", "Knowledge", "Brewing", "Health", "Comparison", "Business"].map((category) => (
//             <Link
//               key={category}
//               to="/blog"
//               className="px-4 py-1.5 rounded-full bg-forest-deep/5 text-forest-deep/70 text-sm hover:bg-gold/20 hover:text-gold transition-all duration-300"
//             >
//               {category}
//             </Link>
//           ))}
//         </motion.div> */}
//       </div>
//     </section>
//      </>
//   );
// }




// components/Blog.tsx
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import b1 from "@/assets/richestblog1.jpg";
import b2 from "@/assets/assamgarden1.jpg";
import b3 from "@/assets/wroldwide.jpg";
import b4 from "@/assets/ctc.jpg";
import b5 from "@/assets/benefits.jpg";

// Import additional images
import TeaKnowledgeImg from "@/assets/hero-1.jpg";
import brewingGuideImg from "@/assets/hero-2.jpg";
import healthBenefitsImg from "@/assets/guarantee.jpg";
import assamVsDarjeelingImg from "@/assets/profit.jpg";
import officeTeaImg from "@/assets/shiping.jpg";
import { SEO } from "./SEO";

// Define the Post type for TypeScript
export interface Post {
  id: string;
  img: string;
  tag: string;
  date: string;
  title: string;
  featured?: boolean;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
  category: string;
}

export const posts: Post[] = [
  // Featured/Original Posts
  {
    id: "heritage-of-assam-Tea",
    img: b1,
    tag: "Heritage",
    date: "May 2026",
    title: "The Rich Heritage of Assam Tea",
    featured: true,
    slug: "heritage-of-assam-Tea",
    excerpt: "Discover the 200-year journey of Assam Tea, from its discovery in the Brahmaputra valley to becoming the world's most beloved breakfast Tea.",
    content: `
      <p>The story of Assam Tea begins in 1823 when Robert Bruce, a Scottish adventurer, discovered Tea plants growing wild in the dense jungles of the Brahmaputra Valley. Unlike the Chinese Tea plant (Camellia sinensis var. sinensis), the Assam variety (Camellia sinensis var. assamica) was uniquely adapted to the region's tropical climate.</p>

      <h2>The Birth of an Industry</h2>
      <p>By the 1830s, the first commercial Tea gardens were established in Assam, marking the beginning of India's Tea industry. The British East India Company recognized the potential and invested heavily in developing the region's Tea cultivation. Today, Assam produces over half of India's total Tea output.</p>

      <h2>Unique Characteristics</h2>
      <p>Assam Tea is renowned for its bold, malty flavor and bright amber liquor. The region's unique terroir—hot, humid summers, abundant rainfall, and the fertile alluvial soil of the Brahmaputra valley—contributes to its distinctive character.</p>

      <h2>Cultural Significance</h2>
      <p>For over two centuries, Tea has shaped Assam's economy and identity. The Tea gardens employ thousands and have created a unique culture that blends indigenous traditions with the heritage of the Tea industry. From the iconic bungalows to the Tea-picking songs, Tea is woven into the fabric of Assamese life.</p>
    `,
    author: "Rajesh Khanna",
    readTime: "6 min read",
    category: "Heritage",
  },
  {
    id: "premium-Tea-crafting",
    img: b2,
    tag: "Craft",
    date: "Apr 2026",
    title: "How Premium Tea is Crafted",
    slug: "premium-Tea-crafting",
    excerpt: "Explore the meticulous artisanal process behind crafting premium orthodox Teas that command global admiration.",
    content: `
      <p>The journey from Tea leaf to your cup is an intricate dance of tradition, skill, and timing. Premium Tea crafting is an art form that has been perfected over generations in Assam's finest Tea gardens.</p>

      <h2>The Orthodox Method</h2>
      <p>Unlike CTC (Crush, Tear, Curl) processing, the orthodox method preserves the leaf's integrity. The process begins with careful withering, where freshly plucked leaves lose moisture and become pliable for rolling.</p>

      <h2>Artisanal Rolling</h2>
      <p>The rolling stage is crucial. Expert Tea makers gently roll the leaves, breaking cell walls to release essential oils and enzymes. This step determines the leaf's final shape and influences the Tea's flavor profile.</p>

      <h2>Oxidation & Firing</h2>
      <p>Oxidation, often called "fermentation," develops the Tea's color and flavor. Skilled Tea tasters monitor the process closely, stopping it at exactly the right moment. Finally, firing halts oxidation and removes remaining moisture, preserving the Tea for its journey to Tea lovers worldwide.</p>
    `,
    author: "Meera Sharma",
    readTime: "5 min read",
    category: "Craft",
  },
  {
    id: "assam-Tea-global",
    img: b3,
    tag: "Global",
    date: "Mar 2026",
    title: "Why Assam Tea is Loved Worldwide",
    slug: "assam-Tea-global",
    excerpt: "From English breakfast blends to premium single-estate offerings, discover why Assam Tea captivates palates globally.",
    content: `
      <p>Assam Tea's bold character and versatility have made it a staple in Tea cups across six continents. Its robust flavor stands up to milk and sugar, making it perfect for breakfast blends worldwide.</p>

      <h2>Global Export Markets</h2>
      <p>Major markets include Russia, the United Kingdom, Germany, the United States, and the Middle East. Each region appreciates different aspects of Assam Tea, from its strength to its malty sweetness.</p>

      <h2>Growing Popularity</h2>
      <p>The specialty Tea movement has increased appreciation for single-origin Assam Teas. Tea connoisseurs seek out seasonal flushes, with the second flush being particularly prized for its golden tips and rich character.</p>
    `,
    author: "Vikram Singh",
    readTime: "4 min read",
    category: "Global Trade",
  },
  {
    id: "orthodox-vs-ctc",
    img: b4,
    tag: "Guide",
    date: "Feb 2026",
    title: "Understanding Orthodox vs CTC Tea",
    slug: "orthodox-vs-ctc",
    excerpt: "Learn the key differences between traditional orthodox processing and modern CTC methods in Tea production.",
    content: `
      <p>Two primary methods dominate Tea processing: Orthodox and CTC (Crush, Tear, Curl). Each produces distinctly different Teas suited for different preferences and markets.</p>

      <h2>Orthodox Processing</h2>
      <p>Orthodox Tea maintains whole or large leaf pieces, offering complex, nuanced flavors that develop with each steep. This method is preferred for premium and specialty Teas.</p>

      <h2>CTC Processing</h2>
      <p>CTC produces small, uniform granules that brew quickly into a strong, dark liquor. This method is ideal for Tea bags and masala chai, delivering consistent strength and body.</p>

      <h2>Choosing Your Tea</h2>
      <p>Choose orthodox Teas for contemplative Tea sessions where you can appreciate evolving flavors. Choose CTC for robust morning cups or when adding milk and spices.</p>
    `,
    author: "Anjali Nair",
    readTime: "5 min read",
    category: "Guide",
  },
  {
    id: "health-benefits",
    img: b5,
    tag: "Wellness",
    date: "Jan 2026",
    title: "Health Benefits of Drinking Pure Assam Tea",
    slug: "health-benefits",
    excerpt: "Discover the numerous health benefits of authentic Assam Tea, from heart health to mental clarity.",
    content: `
      <p>Beyond its delightful taste, pure Assam Tea offers numerous health benefits backed by scientific research. Rich in antioxidants and beneficial compounds, this robust Tea supports overall wellness.</p>

      <h2>Heart Health</h2>
      <p>Regular consumption of black Tea has been linked to reduced risk of cardiovascular disease. The flavonoids in Assam Tea help lower blood pressure and improve cholesterol levels.</p>

      <h2>Mental Alertness</h2>
      <p>The combination of caffeine and L-theanine in Tea provides sustained energy without the jitters, improving focus and cognitive function.</p>

      <h2>Digestive Health</h2>
      <p>Assam Tea's tannins can aid digestion and help maintain gut health. Many people find it soothing after heavy meals.</p>
    `,
    author: "Dr. Sanjay Gupta",
    readTime: "4 min read",
    category: "Wellness",
  },

  // New SEO Blog Posts
  {
    id: "Tea-knowledge-blog",
    img: TeaKnowledgeImg,
    tag: "Knowledge",
    date: "Jun 2026",
    title: "Essential Tea Knowledge: A Beginner's Guide to Assam Tea",
    featured: false,
    slug: "Tea-knowledge-blog",
    excerpt: "Everything you need to know about Assam Tea - from its origins to brewing the perfect cup. A comprehensive guide for Tea enthusiasts.",
    content: `
      <p>Assam Tea is one of the most beloved Teas in the world, known for its bold, malty flavor and rich amber color. Whether you're a Tea connoisseur or just beginning your Tea journey, understanding the basics of Assam Tea will enhance your appreciation of this remarkable beverage.</p>

      <h2>What Makes Assam Tea Special?</h2>
      <p>Assam Tea comes from the Camellia sinensis var. assamica plant, which is native to the Assam region in Northeast India. The tropical climate, abundant rainfall, and fertile soil of the Brahmaputra Valley create the perfect conditions for producing Tea with a distinctive malty character.</p>

      <h2>Types of Assam Tea</h2>
      <p>Assam Tea is available in various forms including Orthodox (whole leaf), CTC (Crush, Tear, Curl), and green Tea. Each type offers a different flavor profile and brewing experience.</p>

      <h2>Flushes and Seasons</h2>
      <p>Assam Tea is harvested in three main flushes: First Flush (spring), Second Flush (summer), and Autumnal Flush. The Second Flush is particularly prized for its golden tips and rich flavor.</p>

      <h2>Brewing Tips</h2>
      <p>For the perfect cup of Assam Tea, use fresh water, steep at 95-100°C for 3-5 minutes, and enjoy with or without milk. The robust flavor stands up well to milk and sugar.</p>
    `,
    author: "Tea Sommelier",
    readTime: "7 min read",
    category: "Knowledge",
  },
  {
    id: "Tea-brewing-guide",
    img: brewingGuideImg,
    tag: "Guide",
    date: "Jun 2026",
    title: "The Ultimate Tea Brewing Guide: Perfect Your Cup",
    featured: false,
    slug: "Tea-brewing-guide",
    excerpt: "Master the art of brewing Assam Tea with our comprehensive guide. Learn the perfect water temperature, steeping time, and techniques for the best flavor.",
    content: `
      <p>Brewing the perfect cup of Assam Tea is both an art and a science. The right technique can elevate your Tea experience, bringing out the rich, malty flavors that Assam Tea is famous for.</p>

      <h2>Water Temperature Matters</h2>
      <p>For black Assam Tea, water should be at a rolling boil (95-100°C). Using water that's not hot enough will result in weak, under-extracted Tea. For green Assam Tea, use slightly cooler water (75-80°C) to avoid bitterness.</p>

      <h2>Steeping Time Guidelines</h2>
      <p>For orthodox Assam Tea, steep for 3-5 minutes. CTC Tea requires 2-3 minutes for optimal extraction. Avoid over-steeping, which can make the Tea bitter.</p>

      <h2>Tea-to-Water Ratio</h2>
      <p>Use approximately 1 Teaspoon of Tea leaves per cup (8 oz) of water. For a stronger cup, add more leaves rather than steeping longer.</p>

      <h2>Enhancing Your Tea</h2>
      <p>Assam Tea pairs wonderfully with milk, sugar, or honey. For masala chai, add spices like cardamom, cinnamon, and ginger while brewing.</p>
    `,
    author: "Brewing Expert",
    readTime: "6 min read",
    category: "Brewing",
  },
  {
    id: "health-benefits-articles",
    img: healthBenefitsImg,
    tag: "Wellness",
    date: "May 2026",
    title: "10 Surprising Health Benefits of Assam Tea",
    featured: false,
    slug: "health-benefits-articles",
    excerpt: "Discover the science-backed health benefits of Assam Tea, from boosting immunity to supporting heart health and weight management.",
    content: `
      <p>Beyond its delicious taste, Assam Tea offers a wealth of health benefits backed by scientific research. Regular consumption of this antioxidant-rich beverage can support overall wellness in numerous ways.</p>

      <h2>1. Rich in Antioxidants</h2>
      <p>Assam Tea is packed with polyphenols and flavonoids that combat oxidative stress and protect cells from damage.</p>

      <h2>2. Supports Heart Health</h2>
      <p>Studies show that regular black Tea consumption can help lower blood pressure and reduce the risk of cardiovascular disease.</p>

      <h2>3. Boosts Immunity</h2>
      <p>The antioxidants in Assam Tea support the immune system, helping the body fight off infections and diseases.</p>

      <h2>4. Promotes Digestive Health</h2>
      <p>Tea tannins can aid digestion and help maintain a healthy gut microbiome.</p>

      <h2>5. Enhances Mental Alertness</h2>
      <p>The combination of caffeine and L-theanine improves focus, concentration, and cognitive function.</p>

      <h2>6. Aids in Weight Management</h2>
      <p>Regular Tea consumption can boost metabolism and support weight management when combined with a healthy lifestyle.</p>

      <h2>7. Supports Bone Health</h2>
      <p>Some studies suggest that Tea compounds may help maintain bone density and reduce the risk of fractures.</p>

      <h2>8. Improves Oral Health</h2>
      <p>Fluoride and tannins in Tea can help prevent tooth decay and maintain oral hygiene.</p>

      <h2>9. Reduces Stress</h2>
      <p>The L-theanine in Tea promotes relaxation and helps reduce stress and anxiety.</p>

      <h2>10. Anti-Aging Properties</h2>
      <p>Antioxidants in Assam Tea can help protect against premature aging by neutralizing free radicals.</p>
    `,
    author: "Dr. Nutritionist",
    readTime: "8 min read",
    category: "Health",
  },
  {
    id: "assam-vs-darjeeling",
    img: assamVsDarjeelingImg,
    tag: "Comparison",
    date: "May 2026",
    title: "Assam Tea vs Darjeeling Tea: The Ultimate Comparison",
    featured: false,
    slug: "assam-vs-darjeeling",
    excerpt: "Compare the bold, malty Assam Tea with the delicate, floral Darjeeling. Learn their differences, origins, and which one suits your taste.",
    content: `
      <p>Two of India's most celebrated Teas, Assam and Darjeeling, offer distinctly different experiences. While both come from the same country, their unique characteristics make them beloved for different reasons.</p>

      <h2>Origins and Terroir</h2>
      <p>Assam Tea comes from the tropical Brahmaputra Valley, while Darjeeling is grown in the Himalayan foothills. The elevation and climate create very different flavor profiles.</p>

      <h2>Flavor Profile</h2>
      <p>Assam Tea is known for its bold, malty, and full-bodied flavor with a bright amber liquor. Darjeeling Tea offers a delicate, floral, and muscatel flavor with a lighter golden color.</p>

      <h2>Processing Methods</h2>
      <p>Both Teas can be processed using orthodox methods, but Assam Tea is also commonly processed as CTC. Darjeeling Tea is almost exclusively orthodox processed to preserve its delicate flavor.</p>

      <h2>Brewing Differences</h2>
      <p>Assam Tea requires boiling water (95-100°C) and 3-5 minutes of steeping. Darjeeling Tea benefits from slightly cooler water (85-90°C) and 2-4 minutes of steeping.</p>

      <h2>Best Uses</h2>
      <p>Assam Tea is ideal for breakfast, with milk and sugar, or in masala chai. Darjeeling Tea is best enjoyed plain, without milk, to appreciate its subtle flavors.</p>

      <h2>Which One to Choose?</h2>
      <p>Choose Assam Tea if you prefer a strong, robust cup that stands up to milk and sugar. Choose Darjeeling Tea if you enjoy delicate, aromatic Teas with complex flavor notes.</p>
    `,
    author: "Tea Taster",
    readTime: "6 min read",
    category: "Comparison",
  },
  {
    id: "best-Tea-for-offices",
    img: officeTeaImg,
    tag: "Business",
    date: "Apr 2026",
    title: "Best Tea for Offices: Choosing the Perfect Tea for Your Workplace",
    featured: false,
    slug: "best-Tea-for-offices",
    excerpt: "A comprehensive guide to selecting the best Tea for offices. From employee satisfaction to cost-effectiveness, choose the perfect Tea for your workplace.",
    content: `
      <p>Tea is the second most consumed beverage in the world, and in offices, it's often the lifeblood of productivity. Choosing the right Tea for your office can boost employee morale, improve focus, and create a positive work environment.</p>

      <h2>Why Tea in Offices Matters</h2>
      <p>Offering Tea in the workplace shows that you care about employee well-being. Tea breaks provide opportunities for informal interactions and stress relief, improving Team dynamics and productivity.</p>

      <h2>Assam Tea - The Ideal Office Tea</h2>
      <p>Assam Tea is perhaps the best choice for offices due to its bold flavor, consistency, and versatility. It appeals to a wide range of palates and can be enjoyed with or without milk and sugar.</p>

      <h2>Considerations When Choosing Office Tea</h2>
      <ul>
        <li><strong>Employee Preferences:</strong> Consider offering a variety of Teas to cater to different tastes.</li>
        <li><strong>Quality vs. Cost:</strong> Find the right balance between quality and budget.</li>
        <li><strong>Ease of Brewing:</strong> CTC Tea is easier to brew consistently in office settings.</li>
        <li><strong>Packaging:</strong> Consider Tea bags for convenience or loose leaf for quality.</li>
        <li><strong>Bulk Ordering:</strong> Tea exporters can provide consistent quality at competitive prices.</li>
      </ul>

      <h2>Types of Tea for Offices</h2>
      <ul>
        <li><strong>Assam CTC Tea:</strong> Strong, consistent, and perfect for office Tea breaks.</li>
        <li><strong>Orthodox Assam:</strong> For offices that appreciate premium quality.</li>
        <li><strong>Green Tea:</strong> For health-conscious employees.</li>
        <li><strong>Masala Chai:</strong> For a more exotic flavor experience.</li>
      </ul>

      <h2>Benefits of Choosing Assam Tea for Your Office</h2>
      <ul>
        <li>Consistent quality and flavor</li>
        <li>Competitive bulk pricing</li>
        <li>Appeals to diverse palates</li>
        <li>Trusted source since 1990</li>
        <li>Reliable supply chain</li>
      </ul>

      <h2>How to Source Office Tea</h2>
      <p>Partner with established Tea suppliers like R.K. Tea Sales for reliable quality and pricing. With over 35 years of experience, we help businesses across India choose the perfect Tea for their offices.</p>
    `,
    author: "Office Wellness Expert",
    readTime: "7 min read",
    category: "Business",
  },
];

export function Blog() {
  // Separate featured and regular posts
  const featuredPosts = posts.filter(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  // Combine: featured first, then regular posts
  const allPosts = [...featuredPosts, ...regularPosts];

  // Generate blog listing structured data
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": posts.map((post, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
          "@type": "Person",
          "name": post.author || "R K Tea Sales"
        },
        "image": `https://rkTeasales.com${post.img}`,
        "url": `https://rkTeasales.com/blog/${post.slug}`
      }
    }))
  };

  // Generate blog collection structured data (for the page itself)
  const collectionStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Assam Tea Blog | R K Tea Sales",
    "description": "Explore our Tea blog covering Assam Tea heritage, brewing guides, health benefits, and industry insights.",
    "url": "https://rkTeasales.com/blog",
    "mainEntity": blogStructuredData
  };

  // Generate category structured data for SEO
  const categories = [...new Set(posts.map(p => p.category))];
  const categoryStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Blog Categories",
    "itemListElement": categories.map((category, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": category,
      "url": `https://rkTeasales.com/blog/category/${category.toLowerCase()}`
    }))
  };

  return (
    <>
      <SEO
        title="Assam Tea Blog — Heritage, Craft & Knowledge | R K Tea Sales"
        description="Explore expert articles on Assam Tea heritage, brewing techniques, health benefits, and industry insights. Stay informed with R K Tea Sales."
        canonical="/blog"
        keywords={[
          'Assam Tea blog',
          'Tea heritage',
          'Tea brewing guide',
          'Tea health benefits',
          'Assam Tea knowledge',
          'Premium Tea',
          'Tea culture',
          'Tea education'
        ]}
        image="https://rkTeasales.com/blog-og-image.jpg"
        type="website"
        structuredData={collectionStructuredData}
      />

      <section id="blog" className="relative bg-cream py-16 md:py-20" aria-label="Blog section">
        <div className="mx-auto max-w-7xl px-6">
          {/* Centered Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-14"
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-14 bg-forest" aria-hidden="true" />
              <span className="text-sm uppercase tracking-[0.4em] text-forest font-semibold">
                Journal
              </span>
              <span className="h-px w-14 bg-forest" aria-hidden="true" />
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
              Stories from the{" "}
              <span className="italic text-gradient-gold">
                Tea garden
              </span>
            </h1>

            <p className="text-forest-deep/60 text-lg max-w-2xl mx-auto mb-4">
              Explore the rich heritage, craftsmanship, and health benefits of authentic Assam Tea
            </p>

            <Link
              to="/blog"
              className="inline-flex items-center gap-2.5 text-base uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors mt-3"
            >
              All Articles <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {allPosts.map((p, i) => (
              <motion.article
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`group cursor-pointer ${
                  p.featured ? "lg:row-span-2 lg:col-span-1" : ""
                }`}
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link
                  to="/blog/$postId"
                  params={{ postId: p.id }}
                  className="block"
                >
                  <div
                    className={`relative overflow-hidden rounded-sm mb-4 ${
                      p.featured ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={p.img}
                      alt={`${p.title} - R K Tea Sales Blog`}
                      className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                      loading="lazy"
                      width={800}
                      height={p.featured ? 1066 : 600}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" aria-hidden="true" />

                    <span className="absolute top-4 left-4 rounded-full bg-cream/90 backdrop-blur px-3.5 py-1 text-xs uppercase tracking-[0.25em] text-forest-deep font-semibold">
                      {p.tag}
                    </span>
                  </div>

                  <div className="text-sm uppercase tracking-[0.25em] text-muted-foreground mb-2" aria-hidden="true">
                    {p.date}
                  </div>

                  <h2
                    className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-2.5 ${
                      p.featured
                        ? "text-xl md:text-2xl lg:text-3xl"
                        : "text-lg md:text-xl"
                    }`}
                    itemProp="headline"
                  >
                    {p.title}
                  </h2>

                  <p className="text-muted-foreground text-sm md:text-base mb-3 line-clamp-2" itemProp="description">
                    {p.excerpt}
                  </p>

                  <span className="inline-flex items-center gap-2.5 text-sm text-forest border-b border-gold/40 pb-1.5 font-medium group-hover:border-gold transition-colors">
                    Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>

                  {/* Hidden schema data for each post */}
                  <meta itemProp="datePublished" content={p.date} />
                  <meta itemProp="author" content={p.author || "R K Tea Sales"} />
                  <meta itemProp="image" content={`https://rkTeasales.com${p.img}`} />
                  <meta itemProp="url" content={`https://rkTeasales.com/blog/${p.slug}`} />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Category Tags for SEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-12 pt-8 border-t border-forest-deep/10"
          >
            <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground mr-2 font-medium">
              Explore:
            </span>
            {["Heritage", "Craft", "Global Trade", "Guide", "Wellness", "Knowledge", "Brewing", "Health", "Comparison", "Business"].map((category) => (
              <Link
                key={category}
                to="/blog"
                className="px-4 py-1.5 rounded-full bg-forest-deep/5 text-forest-deep/70 text-sm hover:bg-gold/20 hover:text-gold transition-all duration-300"
              >
                {category}
              </Link>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}