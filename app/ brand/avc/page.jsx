export default function AVCPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-[32px] p-12 mb-12">
        <div className="w-24 h-24 bg-white/10 rounded-3xl flex items-center justify-center text-3xl font-bold mb-6">
          AVC
        </div>

        <h1 className="text-5xl font-bold mb-6">
          AVC 配線器材
        </h1>

        <p className="text-gray-200 max-w-3xl leading-relaxed mb-8">
          提供束線帶、固定座、配線槽與各類工業配線相關產品。
        </p>

        <a
          href="https://www.avc-corp.com.tw/big5/1.html"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-900 px-6 py-4 rounded-2xl font-semibold inline-block"
        >
          查看官方產品目錄
        </a>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {['束線帶', '固定座', '配線槽', '固定夾'].map((item) => (
          <div
            key={item}
            className="bg-gray-50 border border-gray-200 rounded-3xl p-8"
          >
            <div className="h-16 bg-gray-200 rounded-2xl mb-6" />

            <div className="text-2xl font-bold">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
