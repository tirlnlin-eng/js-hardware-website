import brands from '../../data/brands'

export default function BrandPage() {
  const visibleBrands = brands.filter((brand) => brand.show)

  return (
    <main className="min-h-screen bg-[#fffaf0] text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-3">
            Distribution Brands
          </p>

          <h1 className="text-5xl font-bold mb-6">經銷品牌</h1>

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            點選品牌 Logo，可開啟該品牌官方網站或產品目錄。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {visibleBrands.map((brand) => {
            const linkUrl = brand.catalog || brand.website || '#'

            return (
              <a
                key={`${brand.name}-${brand.logo}`}
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#fff7e6] border border-[#e2cfa8] rounded-3xl p-6 min-h-[180px] flex flex-col items-center justify-center hover:shadow-xl hover:-translate-y-1 transition"
              >
                <div className="h-24 w-full flex items-center justify-center mb-4 bg-white rounded-2xl border border-[#e2cfa8] p-4">
                  <img
                    src={`/logos/${brand.logo}`}
                    alt={`${brand.name} Logo`}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>

                <div className="text-lg font-bold text-gray-900 text-center leading-snug">
                  {brand.name}
                </div>

                {brand.chinese && brand.chinese !== brand.name && (
                  <div className="text-sm text-gray-600 mt-1 text-center">
                    {brand.chinese}
                  </div>
                )}

                <div className="text-xs text-gray-500 mt-3 text-center">
                  {brand.catalog ? '產品目錄' : '官方網站'}
                </div>
              </a>
            )
          })}
        </div>
      </section>
    </main>
  )
}
