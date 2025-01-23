import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Star } from "lucide-react"

type MenuItem = {
  name: string
  description: string
  price: number
  image: string
  category: "coffee" | "food" | "dessert"
}

const menuItems: MenuItem[] = [
    {
    name: "آمریکانو",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 49000,
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&q=80",
    category: "coffee",
  },
  {
    name: "اسپرسو",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 49000,
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500&q=80",
    category: "coffee",
  },
  {
    name: "شربت",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 35000,
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=80",
    category: "coffee",
  },
  {
    name: "لاته",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 60000,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=80",
    category: "coffee",
  },
  {
    name: "کاپوچینو عربیکا",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 28000,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=80",
    category: "coffee",
  },
  {
    name: "کرم شیر",
    description: "۲/۳ اسپرسو، ۱/۳ شیر بخارپز",
    price: 75000,
    image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?w=500&q=80",
    category: "dessert",
  },
  {
    name: "برگر ایتالیایی",
    description: "گوجه فرنگی، سوسیس ایتالیایی، گوشت چرخ کرده، پیاز، پنیر",
    price: 120000,
    image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=500&q=80",
    category: "food",
  },
  {
    name: "برگر مرغ",
    description: "سینه مرغ چرخ کرده، خردل، پاپریکا، پیاز",
    price: 170000,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80",
    category: "food",
  },
]

type Category = "all" | "coffee" | "food" | "dessert"

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")
  const [rating, setRating] = useState(0)

  const filteredItems = menuItems.filter((item) => activeCategory === "all" || item.category === activeCategory)

  return (
    <div className="min-h-screen py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#c7a17a] mb-4 text-lg"
          >
            بهترین را انتخاب کنید
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white text-5xl font-bold mb-12"
          >
            منوی کافی شاپ
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { key: "all", label: "همه" },
              { key: "food", label: "فست فود" },
              { key: "coffee", label: "قهوه داغ" },
              { key: "dessert", label: "دسر" },
            ].map(({ key, label }) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(key as Category)}
                className={cn(
                  "px-6 py-2 rounded-full transition-colors text-sm font-medium",
                  activeCategory === key ? "bg-[#c7a17a] text-white" : "bg-[#252525] text-white hover:bg-[#2a2a2a]",
                )}
              >
                {label}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 space-x-reverse group"
              >
                <motion.div whileHover={{ scale: 1.05 }} className="relative w-24 h-24 overflow-hidden rounded-lg ml-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <motion.span
                      className="text-[#c7a17a] font-bold ml-4 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {item.price.toFixed(1)} تومان
                    </motion.span>
                    <motion.div
                      className="border-b border-dotted border-gray-600 flex-1 mx-4"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    />
                    <h3 className="text-white text-xl font-semibold group-hover:text-[#c7a17a] transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  <motion.p
                    className="text-gray-400 text-right text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-white text-3xl font-bold mb-6">نظر شما</h2>
          <div className="flex justify-center space-x-2 space-x-reverse">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={cn(
                  "w-8 h-8 cursor-pointer",
                  star <= rating ? "text-[#c7a17a] fill-[#c7a17a]" : "text-gray-400",
                )}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <p className="text-white mt-4 text-lg">
            {rating > 0 ? `شما ${rating} ستاره به ما دادید. متشکریم!` : "لطفاً به ما امتیاز دهید"}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

