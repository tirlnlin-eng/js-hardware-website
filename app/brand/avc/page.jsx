export default function AVCPage() {
  const products = [
    {
      name: '束線帶',
      url: 'https://www.avc-corp.com.tw/big5/1.html',
    },
    {
      name: '固定座',
      url: 'https://www.avc-corp.com.tw/big5/1.html',
    },
    {
      name: '配線槽',
      url: 'https://www.avc-corp.com.tw/big5/1.html',
    },
  ]

  return (
    <main className="min-h-screen bg-[#fffaf0] text-gray-900">
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#fff7e6] border border-[#e2cfa8] rounded-3xl p-10">
          <img
            src="/logos/avc-logo.png"
            alt="AVC Logo"
            className="h-20 mb-8"
          />

          <h1 className="text-5xl font-bold mb-6">AVC 全冠企業</h1>

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            AVC 提供各類配線器材、束線帶、固定座、配線槽與工業用配線相關產品。
          </p>

          <a
            href="https://www.avc-corp.com.tw/big5/1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold"
          >
            前往 AVC 官方產品目錄
          </a>
        </div>

        <section className="mt-16">
          <h2 className="text-4xl font-bold mb-8">產品分類</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[#e2cfa8] rounded-3xl p-8 hover:shadow-xl transition"
              >
                <div className="text-2xl font-bold mb-3">{item.name}</div>
                <p className="text-gray-600">查看官方產品頁 →</p>
              </a>
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}
