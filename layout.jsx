import './globals.css'

export const metadata = {
  title: 'JS Hardware｜工業電料與控制器材供應',
  description: 'JS Hardware 提供工業電料、控制器材、配線材料、品牌經銷與代客找料服務。',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  )
}
