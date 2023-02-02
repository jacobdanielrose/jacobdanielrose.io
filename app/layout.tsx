import 'tailwindcss/tailwind.css'
import { Source_Code_Pro } from '@next/font/google'

import { AnalyticsWrapper } from '../components/analytics'

const SourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-src-code'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`text-black dark:text-white bg-gray-200 dark:bg-gray-900
      ${SourceCodePro.variable} scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-gray-800
      dark:scrollbar-thumb-red-800 dark:scrollbar-track-gray-200`}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
