import "./globals.css"
import Link from "next/link"

export const metadata = {
  title: "鉅晟電料五金行",
  description: "JS Hardware Industrial Supply",
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="border-[#b8924f] text-gray-900">

        <header className="border-b border-[#b8924f]">
          <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

            <div>
              <Link href="/" className="text-4xl font-bold">
                鉅晟電料五金行
              </Link>

              <p className="text-gray-500 tracking-[0.2em] mt-1">
                JS HARDWARE
              </p>
            </div>

            <nav className="flex gap-10 text-lg">
              <Link href="/" className="hover:text-blue-700">
                首頁
              </Link>

              <Link href="/brand" className="hover:text-blue-700">
                經銷品牌
              </Link>

              <Link href="/services" className="hover:text-blue-700">
                服務項目
              </Link>

              <Link href="/contact" className="hover:text-blue-700">
                聯絡我們
              </Link>
            </nav>

          </div>
        </header>

        {children}

      </body>
    </html>
  )
}
