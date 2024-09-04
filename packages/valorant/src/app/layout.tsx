import '@tools/valorant/styles/globals.css'

import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import { TRPCReactProvider } from '@tools/valorant/trpc/react'

export const metadata: Metadata = {
  title: 'Create T3 App',
  description: 'Generated by create-t3-app',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col justify-center items-center  h-full w-full ">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  )
}
