export default function HomePage() {
  const brands = [
    { name: '士林電機', url: '/brands' },
    { name: 'KSS', url: '/brands' },
    { name: '天得', url: '/brands' },
    { name: 'Omron', url: '/brands' },
    { name: 'AVC', url: '/brands/avc' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
            Industrial Supply Solutions
          </p>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            JS Hardware
            <br />
            工業電料與控制器材供應
          </h1>

          <p className="text-lg text-gray-200 max-w-2xl leading-relaxed mb-10">
            提供工業電料、控制器材、配線材料與代客找料服務。
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/brands"
              className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold"
            >
              查看品牌
            </a>

            <a
              href="/contact"
              className="border border-white px-6 py-3 rounded-2xl font-semibold"
            >
              聯絡我們
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">主要經銷品牌</h2>
          <p className="text-gray-600">
            點選品牌 Logo 進入品牌產品與型錄頁面。
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition text-center"
            >
              <div className="h-20 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center">
                LOGO
              </div>

              <div className="text-2xl font-bold">
                {brand.name}
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
