import './globals.scss'

export const metadata = {
  title: 'Defitcreative Store Front',
  description: 'An aliexpress store front for Defitcreative',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
