export default function HomePage() {
  const brands = [
    {
      brand: '士林電機',
      category: '無熔絲開關 / 接觸器',
      catalogUrl: '#',
    },
    {
      brand: 'KSS',
      category: '配線器材 / 束帶',
      catalogUrl: '#',
    },
    {
      brand: '天得',
      category: '按鈕開關 / 指示燈',
      catalogUrl: '#',
    },
    {
      brand: 'Omron',
      category: 'Relay / Sensor',
      catalogUrl: '#',
    },
    {
      brand: 'AVC',
      category: '配線器材 / 線上目錄',
      catalogUrl: 'https://www.avc-corp.com.tw/big5/1.html',
    },
  ]

  const services = [
    {
      title: '工業電料供應',
      desc: '提供各類工控、配線與電料相關產品。',
    },
    {
      title: '品牌經銷',
      desc: '經銷多項台灣本土與國際工控品牌。',
    },
    {
      title: '代客找料',
      desc: '協助停產料、特殊料、替代料與急件搜尋。',
    },
    {
      title: '採購支援',
      desc: '協助工廠與設備商進行整合採購。',
    },
  ]

  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      <section className="bg-gradient-to-br from-gray-900 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-300 mb-4">
              JS Hardware｜Industrial Electrical Supply Solutions
            </p>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              專業工業電料與<br />控制器材供應
            </h1>
            <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-xl">
              提供工業電料、控制器材、配線材料與代客找料服務，協助工廠與設備商快速解決採購與缺料需求。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition">
                立即詢價
              </a>
              <a href="#services" className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition">
                查看服務
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {['工業電料', '控制器材', '配線材料', '代客找料'].map((item) => (
                <div key={item} className="bg-white/10 rounded-2xl p-6 text-center text-lg font-medium">
                  {item}
                </div>
              ))}
            </div>
            <div className="bg-black/20 rounded-2xl p-6">
              <p className="text-sm text-gray-300 mb-4">主要經銷品牌</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {brands.map((item) => (
                  <a
                    key={item.brand}
                    href={item.catalogUrl}
                    target={item.catalogUrl === '#' ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="bg-white/10 hover:bg-white/20 transition rounded-2xl p-5 text-left border border-white/10"
                  >
                    <div className="h-12 rounded-xl bg-white/20 flex items-center justify-center text-sm font-bold tracking-wide mb-4">
                      LOGO
                    </div>
                    <div className="text-lg font-semibold mb-1">{item.brand}</div>
                    <div className="text-sm text-gray-300">{item.category}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gray-500 mb-4">Our Services</p>
          <h2 className="text-4xl font-bold mb-4">專業供應與採購支援</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            協助工業客戶快速取得所需電料與控制器材，提供穩定供應與專業服務。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-gray-50 rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition">
              <div className="w-14 h-14 rounded-2xl bg-gray-800 mb-6" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-12">
            <div>
              <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">Distribution Brands</p>
              <h2 className="text-4xl font-bold">主要經銷品牌</h2>
            </div>
            <p className="text-gray-600 max-w-xl leading-relaxed">
              點選品牌 Logo 可開啟該品牌線上目錄、產品分類或型錄入口，方便工程師與師傅快速查料。
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brands.map((item) => (
              <a
                key={item.brand}
                href={item.catalogUrl}
                target={item.catalogUrl === '#' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
              >
                <div className="h-20 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-lg mb-6">
                  LOGO
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">{item.brand}</div>
                <div className="text-sm text-gray-500 mb-4">{item.category}</div>
                <div className="inline-flex items-center text-sm font-medium text-gray-700 border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white transition">
                  查看產品目錄 →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500 mb-3">Brand Catalog Page Demo</p>
          <h2 className="text-4xl font-bold mb-4">AVC 品牌入口頁範例</h2>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            模擬工業客戶進入品牌頁後的畫面。先看到常用分類與熱門產品，再決定是否進入官方型錄。
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-[32px] overflow-hidden shadow-sm">
          <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <div className="w-24 h-24 rounded-3xl bg-white/10 flex items-center justify-center text-3xl font-bold mb-6">AVC</div>
                <h3 className="text-4xl font-bold mb-4">AVC 配線器材</h3>
                <p className="text-gray-200 max-w-2xl leading-relaxed">
                  提供束線帶、固定座、配線槽與各類配線相關產品。適用於工業設備、自動化控制盤與配電工程應用。
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.avc-corp.com.tw/big5/1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold text-center hover:scale-105 transition"
                >
                  查看官方產品目錄
                </a>
                <a href="#contact" className="border border-white/30 px-6 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition text-center">
                  線上詢價
                </a>
              </div>
            </div>
          </div>

          <div className="p-10">
            <div className="grid lg:grid-cols-4 gap-6 mb-12">
              {['束線帶', '固定座', '配線槽', '固定夾'].map((category) => (
                <button key={category} className="bg-gray-50 border border-gray-200 rounded-3xl p-8 hover:shadow-lg hover:-translate-y-1 transition text-left">
                  <div className="h-16 rounded-2xl bg-gray-200 mb-6" />
                  <div className="text-2xl font-bold mb-2">{category}</div>
                  <div className="text-gray-500 text-sm">查看相關產品與應用</div>
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200">
                <div className="text-2xl font-bold mb-6">熱門產品</div>
                <div className="space-y-4">
                  {['尼龍束線帶', '可調式固定座', 'PVC 配線槽', '配線固定夾'].map((item) => (
                    <div key={item} className="bg-white rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                      <div>
                        <div className="font-semibold mb-1">{item}</div>
                        <div className="text-sm text-gray-500">工業配線常用產品</div>
                      </div>
                      <a href="#contact" className="text-sm border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-900 hover:text-white transition">
                        詢價
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 text-white rounded-3xl p-8">
                <div className="text-2xl font-bold mb-6">工程應用與找料支援</div>
                <div className="space-y-5 text-gray-300 leading-relaxed">
                  <p>• 提供 AVC 常用產品快速查詢</p>
                  <p>• 協助替代料與相容料搜尋</p>
                  <p>• 可依 BOM 協助整合採購</p>
                  <p>• 急件與小量需求可協助詢料</p>
                </div>
                <div className="mt-10 p-6 bg-white/10 rounded-2xl border border-white/10">
                  <div className="text-lg font-semibold mb-2">找不到料號？</div>
                  <div className="text-gray-300 text-sm mb-4">可直接提供照片、型號或舊品資訊協助查詢。</div>
                  <a href="#contact" className="inline-block bg-white text-gray-900 px-5 py-3 rounded-xl font-semibold hover:scale-105 transition">
                    立即詢問
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gray-900 text-white py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-400 mb-4">Contact Us</p>
          <h2 className="text-5xl font-bold mb-6">快速詢價與代客找料</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            提供工業電料、控制器材與特殊料件採購支援，歡迎來電或線上詢問。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://line.me" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-900 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              LINE 詢價
            </a>
            <a href="mailto:your-email@gmail.com" className="border border-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-gray-900 transition">
              Email 聯絡
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
