export default function HomePage() {
  const brands = [
    { name: 'AVC', desc: '配線器材 / 束線帶', url: '/brand/avc' },
    { name: 'KSS', desc: '配線固定 / 工業配件', url: '/brand' },
    { name: '士林電機', desc: '無熔絲開關 / 接觸器', url: '/brand' },
    { name: '天得', desc: '按鈕開關 / 指示燈', url: '/brand' },
    { name: 'Omron', desc: 'Relay / Sensor', url: '/brand' },
  ]

  const services = ['工業電料供應', '控制器材', '配線材料', '代客找料']

  return (
    <div className="min-h-screen bg-[#fffaf0] text-gray-900">
      <section className="bg-gradient-to-br from-[#f8efd9] via-[#efe0ba] to-[#d9bd82]">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-700 mb-4">
              Industrial Electrical & Hardware Supply
            </p>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-900">
              鉅晟電料五金行
            </h1>

            <p className="text-2xl lg:text-3xl text-gray-800 font-semibold mb-8">
              JS Hardware Industrial Supply
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 max-w-xl">
              提供工業電料、控制器材、配線材料、五金零件與代客找料服務，
              協助工廠、設備商與維修工程人員快速解決採購與缺料需求。
            </p>

            <a
              href="/brand"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              查看經銷品牌
            </a>
          </div>

          <div className="bg-[#fff7e6] rounded-3xl p-8 border border-[#d9bd82] shadow-xl">
            <p className="text-sm text-gray-700 mb-6">主要服務項目</p>

            <div className="grid grid-cols-2 gap-4">
              {services.map((item) => (
                <div
                  key={item}
                  className="bg-[#f3e6c8] rounded-2xl p-8 text-center text-xl font-medium text-gray-900 border border-[#e2cfa8]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 bg-[#fffaf0]">
        <div className="flex flex-col lg:flex-row justify-between gap-8 mb-12">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-3">
              Distribution Brands
            </p>

            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              主要經銷品牌
            </h2>

            <p className="text-gray-700">
              點選品牌 Logo 進入產品與型錄入口頁，方便工程師與師傅快速查料。
            </p>
          </div>

          <a
            href="/brand"
            className="self-start bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition"
          >
            查看全部品牌
          </a>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              className="bg-[#fff7e6] rounded-3xl p-6 border border-[#e2cfa8] hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <div className="h-20 bg-white rounded-2xl mb-6 flex items-center justify-center border border-[#e2cfa8] font-bold text-gray-600">
                LOGO
              </div>

              <div className="text-2xl font-bold mb-2 text-gray-900">
                {brand.name}
              </div>

              <div className="text-sm text-gray-600">{brand.desc}</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
