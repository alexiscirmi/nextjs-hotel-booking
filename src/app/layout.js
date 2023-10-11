// Bootstrap CSS
import '../../public/bootstrap/bootstrap.min.css'

import './globals.scss'
import { Montserrat } from 'next/font/google'
import dynamic from 'next/dynamic'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['200'] })

// Bootstrap JS
const DynamicBootstrap = dynamic(
  () => require('../../public/bootstrap/bootstrap.bundle.min.js'),
  { ssr: false }
);

export const metadata = {
  title: 'Marcotel',
  description: 'Visita Puerto Paraíso y alójate con nosotros',
}

export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body id='body' className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
