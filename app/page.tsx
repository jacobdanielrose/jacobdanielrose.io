import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { getAllPosts, getSettings, getSocials } from 'lib/sanity.client'
import { previewData } from 'next/headers'

import IndexPage from './IndexPage'
import PreviewIndexPage from './PreviewIndexPage'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts, socials] = await Promise.all([getSettings(), getAllPosts(), getSocials()])

  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview settings={settings} socials={socials} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage settings={settings} socials={socials} />
}