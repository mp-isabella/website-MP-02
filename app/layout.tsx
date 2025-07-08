import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MP Riquelme - Soluciones Digitales",
  description:
    "Somos una agencia de diseño de páginas web profesionales en Chile enfocada en desarrollar sitios web a la medida de cada cliente, adaptables y autoadministrables.",
    generator: 'mpriquelme.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
