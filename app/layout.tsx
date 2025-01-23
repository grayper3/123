import "./globals.css"
import { Vazirmatn } from "next/font/google"

const vazir = Vazirmatn({ subsets: ["arabic"] })

export const metadata = {
  title: "کافه کافن",
  description: "منوی قهوه کافن",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazir.className}>{children}</body>
    </html>
  )
}

