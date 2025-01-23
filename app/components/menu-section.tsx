"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type MenuItem = {
  name: string
  description: string
  price: number
  image: string
  category: "coffee" | "food" | "dessert"
}

const menuItems: MenuItem[] = [
  {
    name: "Americano",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 4.9,
    image: "/placeholder.svg?height=100&width=100",
    category: "coffee",
  },
  {
    name: "Espresso",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 4.9,
    image: "/placeholder.svg?height=100&width=100",
    category: "coffee",
  },
  {
    name: "Barista Pouring Syrup",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 3.5,
    image: "/placeholder.svg?height=100&width=100",
    category: "coffee",
  },
  {
    name: "Late",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 6.0,
    image: "/placeholder.svg?height=100&width=100",
    category: "coffee",
  },
  {
    name: "Cappuccino Arabica",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 2.8,
    image: "/placeholder.svg?height=100&width=100",
    category: "coffee",
  },
  {
    name: "Milk Cream",
    description: "2/3 espresso, 1/3 streamed milk",
    price: 7.5,
    image: "/placeholder.svg?height=100&width=100",
    category: "dessert",
  },
  {
    name: "Italian Burger",
    description: "Tomatoes, italian sausage, ground, onions, cheese",
    price: 12.8,
    image: "/placeholder.svg?height=100&width=100",
    category: "food",
  },
  {
    name: "Chicken Burger",
    description: "Ground chicken breast, mustard, paprika, onion",
    price: 17.5,
    image: "/placeholder.svg?height=100&width=100",
    category: "food",
  },
]

type Category = "all" | "coffee" | "food" | "dessert"

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const filteredItems = menuItems.filter(
    (item) =>
      activeCategory === "all" ||
      (activeCategory === "food" && item.category === "food") ||
      (activeCategory === "coffee" && item.category === "coffee") ||
      (activeCategory === "dessert" && item.category === "dessert"),
  )

  return (
    <section className="py-20 bg-[#1d1d1d]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c7a17a] mb-4">CHOOSE BEST OF</p>
          <h2 className="text-white text-4xl font-bold mb-8">Kaffen Coffee Menu</h2>
          <div className="flex justify-center gap-4">
            {["all", "food", "coffee", "dessert"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as Category)}
                className={cn(
                  "px-6 py-2 rounded transition-colors uppercase text-sm",
                  activeCategory === category
                    ? "bg-[#c7a17a] text-white"
                    : "bg-[#252525] text-white hover:bg-[#2a2a2a]",
                )}
              >
                {category === "all"
                  ? "ALL"
                  : category === "food"
                    ? "FAST FOOD"
                    : category === "coffee"
                      ? "HOT COFFEE"
                      : "DESSERT"}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 group">
              <div className="relative w-24 h-24 overflow-hidden rounded-lg">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="text-white text-xl font-semibold group-hover:text-[#c7a17a] transition-colors">
                    {item.name}
                  </h3>
                  <div className="border-b border-dotted border-gray-600 flex-1 mx-4"></div>
                  <span className="text-[#c7a17a] font-bold">${item.price.toFixed(1)}</span>
                </div>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

