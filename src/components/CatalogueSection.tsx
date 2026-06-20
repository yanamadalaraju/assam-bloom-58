import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  X, 
  ArrowRight, 
  Leaf, 
  Star, 
  TrendingUp, 
  Clock, 
  Shield, 
  Package,
  Coffee,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info
} from "lucide-react";

// Product Data
const productCategories = [
  { id: "all", name: "All Products", icon: Package },
  { id: "premium", name: "Premium Tea", icon: Star },
  { id: "royal", name: "Royal Collection", icon: Sparkles },
  { id: "economic", name: "Economic Range", icon: TrendingUp },
  { id: "flavored", name: "Flavored Tea", icon: Coffee },
  { id: "organic", name: "Organic Tea", icon: Leaf },
];

const products = [
  {
    id: 1,
    name: "Premium Assam CTC Tea",
    category: "premium",
    price: "₹450/kg",
    wholesalePrice: "₹380/kg",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    badge: "Best Seller",
    description: "Bold, brisk, and full-bodied CTC Tea with rich golden liquor and strong malty character.",
    features: ["Single Estate", "Handpicked", "Grade: FBOP"],
    packaging: ["250g", "500g", "1kg", "5kg", "25kg"],
    availability: "In Stock",
    moq: "10 kg"
  },
  {
    id: 2,
    name: "Royal Orthodox TGFOP",
    category: "royal",
    price: "₹1,200/kg",
    wholesalePrice: "₹980/kg",
    rating: 5.0,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?w=400&h=400&fit=crop",
    badge: "Premium",
    description: "Exquisite whole-leaf orthodox Tea with complex notes of honey, malt, and a hint of fruit.",
    features: ["TGFOP Grade", "Whole Leaf", "First Flush"],
    packaging: ["250g", "500g", "1kg", "5kg"],
    availability: "Limited Stock",
    moq: "5 kg"
  },
  {
    id: 3,
    name: "Economic Assam Tea",
    category: "economic",
    price: "₹250/kg",
    wholesalePrice: "₹210/kg",
    rating: 4.5,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    badge: "Value Pack",
    description: "Quality Assam Tea at an accessible price point. Perfect for daily consumption.",
    features: ["Consistent Quality", "Good Strength", "Grade: BP"],
    packaging: ["500g", "1kg", "5kg", "10kg", "25kg"],
    availability: "In Stock",
    moq: "25 kg"
  },
  {
    id: 4,
    name: "Masala Chai Blend",
    category: "flavored",
    price: "₹550/kg",
    wholesalePrice: "₹470/kg",
    rating: 4.8,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    badge: "Popular",
    description: "Traditional Indian masala chai blend with cardamom, cinnamon, cloves, and ginger.",
    features: ["Spice Blend", "Aromatic", "Traditional Recipe"],
    packaging: ["250g", "500g", "1kg", "5kg"],
    availability: "In Stock",
    moq: "10 kg"
  },
  {
    id: 5,
    name: "Organic Green Tea",
    category: "organic",
    price: "₹800/kg",
    wholesalePrice: "₹680/kg",
    rating: 4.7,
    reviews: 278,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    badge: "Organic",
    description: "Certified organic green Tea with delicate flavor, fresh grassy notes, and high antioxidants.",
    features: ["USDA Organic", "Non-GMO", "Fresh Harvest"],
    packaging: ["250g", "500g", "1kg", "5kg"],
    availability: "In Stock",
    moq: "5 kg"
  },
  {
    id: 6,
    name: "Premium Orthodox Tea",
    category: "premium",
    price: "₹950/kg",
    wholesalePrice: "₹790/kg",
    rating: 4.9,
    reviews: 167,
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&h=400&fit=crop",
    badge: "Export Quality",
    description: "Premium orthodox Tea with rich aroma, golden color, and exceptional smoothness.",
    features: ["Export Grade", "Golden Tips", "GFOP"],
    packaging: ["250g", "500g", "1kg", "5kg", "10kg"],
    availability: "In Stock",
    moq: "10 kg"
  },
];

export function CatalogueSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filter products based on category and search
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset page when category or search changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  // Download Catalogue PDF
  const handleDownloadCatalogue = () => {
    // In production, this would download an actual PDF
    alert("Product catalogue will be downloaded. This feature is coming soon!");
  };

  return (
    <section id="catalogue" className="relative bg-gradient-to-br from-cream via-cream to-amber-50/30 py-16 md:py-20 overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #234B2F 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest/5 border border-forest/10 mb-4">
            <Package className="w-3 h-3 text-gold" />
            <span className="text-[11px] uppercase tracking-wider text-forest font-semibold">Product Catalogue</span>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-forest-deep leading-tight mb-4">
            Explore Our{' '}
            <span className="relative whitespace-nowrap">
              <span className="italic text-gold">Tea Collection</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2 L200 2" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity="0"/>
                    <stop offset="50%" stopColor="#D4AF37" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg">
            Discover our extensive range of premium Assam Teas. Perfect for retailers, distributors, and bulk buyers.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search Box */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors text-sm"
            />
          </div>

          {/* Download Button */}
          <button
            onClick={handleDownloadCatalogue}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-deep text-white rounded-lg hover:bg-forest transition-all duration-300 text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            Download Catalogue
          </button>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {productCategories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                  isActive
                    ? "bg-gold text-forest-deep font-semibold shadow-md"
                    : "bg-white text-gray-600 hover:bg-gold/10 border border-gray-200"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {category.name}
              </button>
            );
          })}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
        >
          {paginatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 px-2 py-1 bg-gold text-forest-deep text-[10px] font-bold rounded-full">
                    {product.badge}
                  </span>
                )}
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full text-forest-deep font-medium text-sm">
                    <Eye className="w-4 h-4" />
                    Quick View
                  </div>
                </button>
              </div>

              {/* Product Info */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-lg text-forest-deep font-semibold group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                    <span className="text-xs text-gray-600">{product.rating}</span>
                  </div>
                </div>
                
                <p className="text-gray-500 text-xs mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-gray-400">Retail Price</p>
                    <p className="text-lg font-bold text-forest-deep">{product.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Wholesale Price</p>
                    <p className="text-sm font-semibold text-gold">{product.wholesalePrice}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[9px] rounded-full">
                      {feature}
                    </span>
                  ))}
                  {product.features.length > 2 && (
                    <span className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[9px] rounded-full">
                      +{product.features.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <Package className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] text-gray-500">MOQ: {product.moq}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="text-gold text-xs font-medium hover:text-amber-600 transition-colors inline-flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gold transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-8 h-8 rounded-lg transition-all duration-300 text-sm ${
                  currentPage === i + 1
                    ? "bg-gold text-forest-deep font-semibold"
                    : "border border-gray-200 hover:border-gold"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:border-gold transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-500 mb-2">No products found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Product Quick View Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl w-full max-h-[85vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2 gap-6 p-6">
                {/* Product Image */}
                <div className="relative">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {selectedProduct.badge && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-gold text-forest-deep text-[10px] font-bold rounded-full">
                      {selectedProduct.badge}
                    </span>
                  )}
                </div>

                {/* Product Details */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-0.5">
                      <Star className="w-4 h-4 fill-gold text-gold" />
                      <span className="text-sm font-semibold">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-gray-400 text-sm">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <h3 className="font-display text-2xl text-forest-deep mb-3">{selectedProduct.name}</h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {selectedProduct.description}
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-sm">Retail Price:</span>
                      <span className="text-xl font-bold text-forest-deep">{selectedProduct.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">Wholesale Price:</span>
                      <span className="text-xl font-bold text-gold">{selectedProduct.wholesalePrice}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-forest-deep text-sm mb-2">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.features.map((feature: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-forest-deep text-sm mb-2">Packaging Options</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.packaging.map((pack: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 border border-gold/30 text-gold text-xs rounded-full">
                          {pack}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="text-green-700 text-sm font-medium">{selectedProduct.availability}</span>
                    </div>
                    <div className="text-sm text-gray-600">MOQ: {selectedProduct.moq}</div>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold text-forest-deep font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 text-sm"
                    >
                      Enquire Now
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="px-5 py-2.5 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all duration-300 text-sm"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}