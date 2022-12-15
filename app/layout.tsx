import 'tailwindcss/tailwind.css'

import Providers from 'components/Providers'

import { AnalyticsWrapper } from '../components/analytics'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black dark:bg-dark dark:text-white
      scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-highlight/80">
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
