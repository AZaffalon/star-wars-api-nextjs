import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
            <Link href={"/films"}>Films</Link>
            <Link href={"/planets"}>Planets</Link>
            <Link href={"/species"}>Species</Link>
            <Link href={"/starships"}>Starships</Link>
            <Link href={"/vehicles"}>Vehicles</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
