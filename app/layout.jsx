import { Montserrat } from 'next/font/google'
import Header from '@/app/components/header/header'
import Footer from '@/app/components/footer/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] })

export const metadata = {
  title: 'Marcotel',
  description: 'Visit Puerto Paraíso and stay with us',
}

export default async function RootLayout({ children }) {

  return (
    <html lang='es'>
      <body id='body' className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
