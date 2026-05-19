export default function BrandsPage() {
  const brands = [
    {
      name: 'AVC',
      desc: '配線器材與束帶相關產品',
      url: '/brands/avc',
    },
    {
      name: 'KSS',
      desc: '配線固定與工業配件',
      url: '#',
    },
    {
      name: '士林電機',
      desc: '工業控制與電機產品',
      url: '#',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-6">
        品牌總覽
      </h1>

      <p className="text-gray-600 mb-12">
        點選品牌進入產品與型錄入口頁。
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.url}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200 hover:shadow-xl transition"
          >
            <div className="h-20 bg-gray-200 rounded-2xl mb-6 flex items-center justify-center">
              LOGO
            </div>

            <div className="text-3xl font-bold mb-3">
              {brand.name}
            </div>

            <p className="text-gray-600">
              {brand.desc}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
