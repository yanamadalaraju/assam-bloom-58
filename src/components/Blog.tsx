import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import b1 from "@/assets/richestblog1.jpg";
import b2 from "@/assets/assamgarden1.jpg";
import b3 from "@/assets/wroldwide.jpg";
import b4 from "@/assets/ctc.jpg";
import b5 from "@/assets/benefits.jpg";

export const posts = [
  {
    id: "heritage-of-assam-tea",
    img: b1,
    tag: "Heritage",
    date: "May 2026",
    title: "The Rich Heritage of Assam Tea",
    featured: true,
    slug: "heritage-of-assam-tea",
    excerpt: "Discover the 200-year journey of Assam tea, from its discovery in the Brahmaputra valley to becoming the world's most beloved breakfast tea.",
    content: `
      <p>The story of Assam tea begins in 1823 when Robert Bruce, a Scottish adventurer, discovered tea plants growing wild in the dense jungles of the Brahmaputra Valley. Unlike the Chinese tea plant (Camellia sinensis var. sinensis), the Assam variety (Camellia sinensis var. assamica) was uniquely adapted to the region's tropical climate.</p>

      <h2>The Birth of an Industry</h2>
      <p>By the 1830s, the first commercial tea gardens were established in Assam, marking the beginning of India's tea industry. The British East India Company recognized the potential and invested heavily in developing the region's tea cultivation. Today, Assam produces over half of India's total tea output.</p>

      <h2>Unique Characteristics</h2>
      <p>Assam tea is renowned for its bold, malty flavor and bright amber liquor. The region's unique terroir—hot, humid summers, abundant rainfall, and the fertile alluvial soil of the Brahmaputra valley—contributes to its distinctive character.</p>

      <h2>Cultural Significance</h2>
      <p>For over two centuries, tea has shaped Assam's economy and identity. The tea gardens employ thousands and have created a unique culture that blends indigenous traditions with the heritage of the tea industry. From the iconic bungalows to the tea-picking songs, tea is woven into the fabric of Assamese life.</p>
    `,
    author: "Rajesh Khanna",
    readTime: "6 min read",
    category: "Heritage",
  },
  {
    id: "premium-tea-crafting",
    img: b2,
    tag: "Craft",
    date: "Apr 2026",
    title: "How Premium Tea is Crafted",
    slug: "premium-tea-crafting",
    excerpt: "Explore the meticulous artisanal process behind crafting premium orthodox teas that command global admiration.",
    content: `
      <p>The journey from tea leaf to your cup is an intricate dance of tradition, skill, and timing. Premium tea crafting is an art form that has been perfected over generations in Assam's finest tea gardens.</p>

      <h2>The Orthodox Method</h2>
      <p>Unlike CTC (Crush, Tear, Curl) processing, the orthodox method preserves the leaf's integrity. The process begins with careful withering, where freshly plucked leaves lose moisture and become pliable for rolling.</p>

      <h2>Artisanal Rolling</h2>
      <p>The rolling stage is crucial. Expert tea makers gently roll the leaves, breaking cell walls to release essential oils and enzymes. This step determines the leaf's final shape and influences the tea's flavor profile.</p>

      <h2>Oxidation & Firing</h2>
      <p>Oxidation, often called "fermentation," develops the tea's color and flavor. Skilled tea tasters monitor the process closely, stopping it at exactly the right moment. Finally, firing halts oxidation and removes remaining moisture, preserving the tea for its journey to tea lovers worldwide.</p>
    `,
    author: "Meera Sharma",
    readTime: "5 min read",
    category: "Craft",
  },
  {
    id: "assam-tea-global",
    img: b3,
    tag: "Global",
    date: "Mar 2026",
    title: "Why Assam Tea is Loved Worldwide",
    slug: "assam-tea-global",
    excerpt: "From English breakfast blends to premium single-estate offerings, discover why Assam tea captivates palates globally.",
    content: `
      <p>Assam tea's bold character and versatility have made it a staple in tea cups across six continents. Its robust flavor stands up to milk and sugar, making it perfect for breakfast blends worldwide.</p>

      <h2>Global Export Markets</h2>
      <p>Major markets include Russia, the United Kingdom, Germany, the United States, and the Middle East. Each region appreciates different aspects of Assam tea, from its strength to its malty sweetness.</p>

      <h2>Growing Popularity</h2>
      <p>The specialty tea movement has increased appreciation for single-origin Assam teas. Tea connoisseurs seek out seasonal flushes, with the second flush being particularly prized for its golden tips and rich character.</p>
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
    excerpt: "Learn the key differences between traditional orthodox processing and modern CTC methods in tea production.",
    content: `
      <p>Two primary methods dominate tea processing: Orthodox and CTC (Crush, Tear, Curl). Each produces distinctly different teas suited for different preferences and markets.</p>

      <h2>Orthodox Processing</h2>
      <p>Orthodox tea maintains whole or large leaf pieces, offering complex, nuanced flavors that develop with each steep. This method is preferred for premium and specialty teas.</p>

      <h2>CTC Processing</h2>
      <p>CTC produces small, uniform granules that brew quickly into a strong, dark liquor. This method is ideal for tea bags and masala chai, delivering consistent strength and body.</p>

      <h2>Choosing Your Tea</h2>
      <p>Choose orthodox teas for contemplative tea sessions where you can appreciate evolving flavors. Choose CTC for robust morning cups or when adding milk and spices.</p>
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
    excerpt: "Discover the numerous health benefits of authentic Assam tea, from heart health to mental clarity.",
    content: `
      <p>Beyond its delightful taste, pure Assam tea offers numerous health benefits backed by scientific research. Rich in antioxidants and beneficial compounds, this robust tea supports overall wellness.</p>

      <h2>Heart Health</h2>
      <p>Regular consumption of black tea has been linked to reduced risk of cardiovascular disease. The flavonoids in Assam tea help lower blood pressure and improve cholesterol levels.</p>

      <h2>Mental Alertness</h2>
      <p>The combination of caffeine and L-theanine in tea provides sustained energy without the jitters, improving focus and cognitive function.</p>

      <h2>Digestive Health</h2>
      <p>Assam tea's tannins can aid digestion and help maintain gut health. Many people find it soothing after heavy meals.</p>
    `,
    author: "Dr. Sanjay Gupta",
    readTime: "4 min read",
    category: "Wellness",
  },
];

export function Blog() {
  return (
    <section id="blog" className="relative bg-cream py-12 md:py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-12 bg-forest" />
            <span className="text-xs uppercase tracking-[0.4em] text-forest">
              Journal
            </span>
            <span className="h-px w-12 bg-forest" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-3">
            Stories from the{" "}
            <span className="italic text-gradient-gold">
              tea garden
            </span>
          </h2>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-forest hover:text-gold transition-colors mt-2"
          >
            All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group cursor-pointer ${
                p.featured ? "lg:row-span-2 lg:col-span-1" : ""
              }`}
            >
              <Link
                to="/blog/$postId"
                params={{ postId: p.id }}
                className="block"
              >
                <div
                  className={`relative overflow-hidden rounded-sm mb-3 ${
                    p.featured ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 via-transparent to-transparent" />

                  <span className="absolute top-3 left-3 rounded-full bg-cream/90 backdrop-blur px-2.5 py-0.5 text-[10px] uppercase tracking-[0.25em] text-forest-deep">
                    {p.tag}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1.5">
                  {p.date}
                </div>

                <h3
                  className={`font-display text-forest-deep group-hover:text-gold transition-colors leading-tight mb-2 ${
                    p.featured
                      ? "text-xl md:text-2xl lg:text-3xl"
                      : "text-lg md:text-xl"
                  }`}
                >
                  {p.title}
                </h3>

                <span className="inline-flex items-center gap-2 text-xs text-forest border-b border-gold/40 pb-1">
                  Read more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}