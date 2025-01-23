import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="w-full bg-[#1d1d1d] text-white">
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-[#c7a17a]" />
            <span className="text-gray-400">OPENING HOURS : 08:00 AM - 09:00 PM</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">Youtube</span>
            </Link>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white">
            Kaffen
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              HOME
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              ABOUT
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              MENU
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              PAGES
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              BLOG
            </Link>
            <Link href="#" className="hover:text-[#c7a17a] transition-colors">
              CONTACTS
            </Link>
          </div>
          <Button className="bg-[#c7a17a] hover:bg-[#b89165] text-white">BOOK A TABLE</Button>
        </div>
      </nav>
    </header>
  )
}

