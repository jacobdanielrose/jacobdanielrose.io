import AlertBanner from 'components/shared/AlertBanner'

import Footer from './shared/Footer'
import Navbar from './shared/Navbar'

export default function BlogLayout({
  preview,
  loading,
  children,
}: {
  preview: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <div className='flex flex-col justify-center px-8'>
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
