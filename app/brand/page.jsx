export default function AVCPage() {
  const products = [
    {
      name: '束線帶',
      desc: '尼龍束線帶 / 耐候型束線帶',
      url: 'https://www.avc-corp.com.tw/',
    },
    {
      name: '固定座',
      desc: '黏貼式固定座 / 螺絲固定座',
      url: 'https://www.avc-corp.com.tw/',
    },
    {
      name: '配線槽',
      desc: '工業配線槽 / 端子配線整理',
      url: 'https://www.avc-corp.com.tw/',
    },
    {
      name: '固定夾',
      desc: '電纜固定夾 / 配線固定',
      url: 'https://www.avc-corp.com.tw/',
    },
  ]

  return (
    <main className="min-h-screen bg-[#fffaf0] text-gray-900">
      <section className="bg-gradient-to-br from-[#f8efd9] via-[#efe0ba] to-[#d9bd82]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="bg-[#fff7e6] rounded-[40px] border border-[#d9bd82] p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1">
                <img
                  src="/logos/avc-logo.png"
                  alt="AVC Logo"
                  className="h-24 mb-8 bg-white p-4 rounded-2xl border border-[#e2cfa8]"
                />

                <p className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-4">
                  Industrial Wiring Accessories
                </p>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                  AVC 配線器材
                </h1>

                <p className="text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl">
                  提供束線帶、固定座、配線槽與各類工業配線相關產品，
                  適用於工廠設備、控制盤、配電箱與自動化工程。
                </p>

                <a
                  href="https://www.avc-corp.com.tw/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
                >
                  查看官方產品目錄
                </a>
              </div>

              <div className="flex-1">
                <div className="bg-[#f3e6c8] rounded-3xl p-8 border border-[#d9bd82]">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    AVC 產品分類
                  </h2>

                  <div className="grid grid-cols-2 gap-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="bg-[#fffaf0] rounded-2xl p-6 text-center border border-[#e2cfa8]"
                      >
                        <div className="text-xl font-bold mb-2 text-gray-900">
                          {item.name}
                        </div>

                        <div className="text-sm text-gray-600">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex justify-between items-center mb-10">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-gray-600 mb-3">
              Product Category
            </p>

            <h2 className="text-4xl font-bold text-gray-900">
              AVC 熱門產品
            </h2>
          </div>

          <a
            href="https://www.avc-corp.com.tw/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            官方網站
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fff7e6] border border-[#e2cfa8] rounded-3xl p-8 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="h-20 bg-[#f3f4f6] rounded-2xl mb-6"></div>

              <div className="text-3xl font-bold mb-4 text-gray-900">
                {item.name}
              </div>

              <div className="text-gray-600 leading-relaxed">
                {item.desc}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
