// src/components/BlogPost.tsx
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { posts } from "./Blog";
import b1 from "@/assets/blog-1.jpg";
import b2 from "@/assets/blog-2.jpg";
import b3 from "@/assets/competativepricing.jpg";
import b4 from "@/assets/customerservice.jpg";
import b5 from "@/assets/assamgarden1.jpg";

const postContentMap: Record<string, {
  content: string;
  longDescription: string;
  sections: Array<{ title: string; content: string }>;
  quote?: { text: string; author: string };
}> = {
  "The Rich Heritage of Assam Tea": {
    content: "Assam tea has a rich history dating back to 1823 when Robert Bruce discovered tea plants growing wild in the region.",
    longDescription: "Assam, the only place on earth where tea is indigenous, boasts a fascinating heritage that spans over two centuries. The discovery of Camellia sinensis var. assamica in the dense jungles of Assam marked the beginning of India's tryst with tea. Today, Assam produces over half of India's total tea output and is renowned worldwide for its robust, malty flavor profile.",
    sections: [
      {
        title: "The Discovery",
        content: "In 1823, Scottish adventurer Robert Bruce discovered tea plants growing wild in the hills of Assam. His brother, Charles Bruce, later established the first tea gardens in the region, laying the foundation for what would become a global tea empire. The indigenous Singpho tribe had been consuming tea for centuries, using fermented tea leaves as a medicinal preparation."
      },
      {
        title: "The British Era",
        content: "The British East India Company recognized the commercial potential of Assam tea and established the Assam Company in 1839. By the 1850s, tea production had become a major industry, with vast plantations carved out of the jungle. The unique climate of Assam - with its heavy rainfall, high humidity, and rich alluvial soil - proved ideal for tea cultivation."
      },
      {
        title: "Modern Legacy",
        content: "Today, Assam tea is celebrated globally as a breakfast tea staple. The region boasts over 850 tea gardens, employing millions of workers. Traditional practices blend with modern techniques to produce teas ranging from robust CTC to delicate orthodox varieties, each carrying the unmistakable essence of Assam."
      }
    ],
    quote: {
      text: "Assam tea is not just a beverage; it's the liquid heritage of a land that gave tea to the world.",
      author: "Tea Historian"
    }
  },
  "How Premium Tea is Crafted": {
    content: "The art of crafting premium Assam tea involves careful plucking and precise processing.",
    longDescription: "Premium tea crafting is an intricate art form that transforms fresh tea leaves into the aromatic beverage cherished worldwide. The journey from garden to cup involves several crucial steps, each demanding skill and precision.",
    sections: [
      {
        title: "Hand Plucking",
        content: "Premium teas are hand-plucked by skilled workers who select only the top two leaves and a bud - the most tender and flavorful parts of the tea plant. This meticulous process ensures only the finest leaves make it to production, typically yielding just 50-80 kg of finished tea per day per plucker."
      },
      {
        title: "Withering",
        content: "Freshly plucked leaves are spread on troughs or racks to wither for 12-18 hours. During this process, moisture content reduces from 75% to about 55-60%, making the leaves pliable for rolling and concentrating the natural flavors and aromas."
      },
      {
        title: "Rolling & Oxidation",
        content: "The withered leaves undergo rolling to rupture cell walls, releasing essential oils and enzymes. The oxidation process that follows determines the tea's character - minimal for green teas, complete for black teas, and partial for oolongs. This is where the iconic malty Assam flavor develops."
      },
      {
        title: "Firing & Grading",
        content: "Finally, the oxidized leaves are fired at precise temperatures to halt oxidation and lock in flavors. The dried leaves are then sorted and graded based on size and quality, from whole leaf (SFTGFOP) to broken grades like BOP and fannings."
      }
    ]
  },
  "Why Assam Tea is Loved Worldwide": {
    content: "Assam tea's bold, malty character has earned it a global following among tea connoisseurs.",
    longDescription: "From London tea rooms to Tokyo's trendy cafes, Assam tea has carved a special place in the hearts of tea lovers worldwide. Its distinctive characteristics make it uniquely versatile and beloved.",
    sections: [
      {
        title: "The Signature Malty Flavor",
        content: "Assam tea's bold, full-bodied profile with distinct malty notes comes from the region's unique terroir. The combination of high humidity, rich alluvial soil, and tropical climate creates teas that stand up beautifully to milk and sugar, making them perfect for breakfast blends."
      },
      {
        title: "Versatility in Blending",
        content: "Assam tea serves as the robust backbone for many famous blends, including English Breakfast, Irish Breakfast, and masala chai. Its strong character shines through other ingredients, providing depth and color while allowing additional spices or flavors to complement rather than overpower."
      },
      {
        title: "Health & Wellness Benefits",
        content: "Beyond taste, Assam tea offers impressive health benefits. Rich in polyphenols and antioxidants, it supports heart health, boosts mental alertness, and aids digestion. The higher caffeine content provides a natural energy boost, making it a healthier alternative to coffee for many."
      }
    ]
  },
  "Understanding Orthodox vs CTC Tea": {
    content: "Learn the key differences between traditional Orthodox processing and modern CTC methods.",
    longDescription: "The two primary methods of processing black tea - Orthodox and CTC (Crush, Tear, Curl) - produce distinctly different results. Understanding these methods helps tea lovers choose the right tea for their preferences.",
    sections: [
      {
        title: "Orthodox Method",
        content: "The traditional Orthodox method involves gentle rolling of withered leaves to preserve leaf integrity. This process produces whole or large broken leaves that yield complex, layered flavors. Orthodox teas require careful brewing and reward patience with nuanced tasting notes ranging from floral to fruity."
      },
      {
        title: "CTC Method",
        content: "CTC processing uses machines with serrated rollers to crush, tear, and curl leaves into small, hard pellets. This method extracts more color and strength quickly, producing a robust, consistent brew perfect for strong milk tea and commercial use. CTC teas dominate the mass market due to their efficiency and bold flavor."
      },
      {
        title: "Choosing Between Them",
        content: "Orthodox teas are ideal for contemplative tea sessions where flavor complexity is valued. CTC teas excel in quick brews, chai lattes, and any preparation requiring strong, consistent results. Many premium brands offer both styles, catering to different occasions and preferences."
      }
    ]
  },
  "Health Benefits of Drinking Pure Assam Tea": {
    content: "Discover how pure Assam tea can boost your health and wellbeing.",
    longDescription: "Beyond its delicious taste, pure Assam tea offers numerous scientifically-backed health benefits. Regular consumption as part of a balanced lifestyle can contribute significantly to overall wellness.",
    sections: [
      {
        title: "Heart Health",
        content: "Studies show that regular black tea consumption is associated with reduced risk of cardiovascular disease. The flavonoids in Assam tea help lower blood pressure, reduce LDL cholesterol levels, and improve blood vessel function. Drinking 2-3 cups daily may significantly benefit heart health."
      },
      {
        title: "Mental Alertness",
        content: "Assam tea contains L-theanine, an amino acid that works synergistically with caffeine to enhance cognitive function without the jitters. This combination promotes focused, calm alertness, improving concentration and reaction time. Many professionals prefer Assam tea as their workday beverage."
      },
      {
        title: "Gut Health & Immunity",
        content: "The polyphenols in Assam tea act as prebiotics, supporting beneficial gut bacteria growth. A healthy gut microbiome strengthens immune function and reduces inflammation. Additionally, tea's antimicrobial properties may help fight harmful bacteria in the digestive tract."
      }
    ]
  }
};

interface BlogPostProps {
  postTitle: string;
}

export function BlogPost({ postTitle }: BlogPostProps) {
  const navigate = useNavigate();
  const post = posts.find(p => p.title === postTitle);
  const content = postContentMap[postTitle];
  
  // Map post titles to images
  const postImageMap: Record<string, any> = {
    "The Rich Heritage of Assam Tea": b1,
    "How Premium Tea is Crafted": b2,
    "Why Assam Tea is Loved Worldwide": b3,
    "Understanding Orthodox vs CTC Tea": b4,
    "Health Benefits of Drinking Pure Assam Tea": b5,
  };
  
  const postImage = post ? postImageMap[post.title] : b1;

  if (!post || !content) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-forest-deep mb-4">Post not found</h1>
          <button
            onClick={() => navigate({ to: "/" })}
            className="text-gold hover:text-gold/80 transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleShare = async (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        await navigator.clipboard.writeText(url);
        alert("Link copied to clipboard!");
        return;
    }
    
    if (shareUrl) window.open(shareUrl, "_blank", "width=600,height=400");
  };

  return (
    <main className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={postImage}
            alt={post.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-cream" />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-6 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <button
                onClick={() => navigate({ to: "/" })}
                className="inline-flex items-center gap-2 text-cream/80 hover:text-cream transition-colors mb-6 group"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-gold" />
                <span className="text-xs uppercase tracking-[0.4em] text-cream">
                  {post.tag}
                </span>
              </div>
              
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-cream/80">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm">{post.tag}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-xl text-forest-deep/80 leading-relaxed mb-8 font-light">
                  {content.longDescription}
                </p>
                
                {content.sections.map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="mb-10"
                  >
                    <h2 className="font-display text-2xl md:text-3xl text-forest-deep mb-4">
                      {section.title}
                    </h2>
                    <p className="text-forest-deep/70 leading-relaxed">
                      {section.content}
                    </p>
                  </motion.div>
                ))}
                
                {content.quote && (
                  <motion.blockquote
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="border-l-4 border-gold pl-6 my-12 italic text-forest-deep/80"
                  >
                    <p className="text-xl">"{content.quote.text}"</p>
                    <footer className="text-sm mt-2">— {content.quote.author}</footer>
                  </motion.blockquote>
                )}
              </motion.article>
            </div>
            
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:pl-8"
            >
              {/* Share Section */}
              <div className="bg-white/50 rounded-sm p-6 mb-8">
                <h3 className="font-display text-xl text-forest-deep mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare("facebook")}
                    className="p-2 bg-forest-deep/5 hover:bg-gold hover:text-white rounded-full transition-all duration-300"
                  >
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-2 bg-forest-deep/5 hover:bg-gold hover:text-white rounded-full transition-all duration-300"
                  >
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-2 bg-forest-deep/5 hover:bg-gold hover:text-white rounded-full transition-all duration-300"
                  >
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="p-2 bg-forest-deep/5 hover:bg-gold hover:text-white rounded-full transition-all duration-300"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Related Posts */}
              <div className="bg-white/50 rounded-sm p-6">
                <h3 className="font-display text-xl text-forest-deep mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {posts.filter(p => p.title !== post.title).slice(0, 3).map((relatedPost) => (
                    <button
                      key={relatedPost.title}
                      onClick={() => navigate({ to: `/blog/${encodeURIComponent(relatedPost.title)}` })}
                      className="group block w-full text-left"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
                        {relatedPost.tag}
                      </p>
                      <p className="font-display text-forest-deep group-hover:text-gold transition-colors">
                        {relatedPost.title}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </main>
  );
}