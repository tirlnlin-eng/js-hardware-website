export default function ServicesPage() {
  const services = [
    '工業電料供應',
    '品牌經銷',
    '代客找料',
    'BOM 採購支援',
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-5xl font-bold mb-12">
        服務項目
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
          >
            <div className="w-14 h-14 bg-gray-200 rounded-2xl mb-6" />

            <div className="text-2xl font-bold">
              {service}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
