export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6">聯絡我們</h1>
        <p className="text-gray-600 mb-12">
          歡迎來電、Email 或導航至門市洽詢。
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-[#ead7b0] text-gray-900 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-8">鉅晟電料五金行</h2>

            <div className="space-y-5 text-lg text-gray-700">
              <p>地址：桃園市桃園區大華九街6號</p>
              <p>電話：03-332-0958</p>
              <p>傳真：03-332-1518</p>
              <p>Email：JS3320958@gmail.com</p>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://maps.google.com/?q=桃園市桃園區大華九街6號"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-6 py-3 rounded-2xl font-semibold"
              >
                Google 地圖
              </a>

              <a
                href="mailto:JS3320958@gmail.com"
                className="border border-[#b8924f] px-6 py-3 rounded-2xl font-semibold"
              >
                Email 聯絡
              </a>

              <a
                href="tel:033320958"
                className="border border-[#b8924f] px-6 py-3 rounded-2xl font-semibold"
              >
                立即撥號
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden min-h-[420px] border border-[#e2cfa8]">
            <iframe
              title="JS Hardware Map"
              src="https://maps.google.com/maps?q=桃園市桃園區大華九街6號&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[420px] border-0"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
