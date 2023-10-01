import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ["100", "300", "400", "500","700"], variable: "--font-roboto" })

export const metadata = {
  title: 'Learning Next Js',
  description: 'Learning Next Js Module - 1',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        {children}
        </body>
    </html>
  )
}

export default RootLayout;