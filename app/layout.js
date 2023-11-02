import { Montserrat } from 'next/font/google'
import { ContextProvider } from './context/context'
import Navbar from '@/app/components/navbar/navbar'
import Footer from '@/app/components/footer/footer'
import Script from 'next/script'
import '@/public/bootstrap.min.css'
import './globals.scss'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] })

export const metadata = {
  title: 'Marcotel',
  description: 'Visita Puerto Paraíso y alójate con nosotros',
}

export default function RootLayout({ children }) {

  return (
    <html lang='es'>
      <body id='body' className={montserrat.className}>
        <ContextProvider>
          <Navbar />
          {children}
          <Footer />
          <Script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js' />
        </ContextProvider>
      </body>
    </html>
  )
}
