import { Nunito } from 'next/font/google'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import ClientOnly from './components/ClientOnly'
import Modal from './components/models/Modal'
import RegisterModal from './components/models/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/models/LoginModal'

export const metadata = {
  title: 'GaksGo',
  description: 'Find Places and Book them',
}
const inter = Nunito({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
