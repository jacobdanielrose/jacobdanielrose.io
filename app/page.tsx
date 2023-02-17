import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { getAllPosts, getSettings, getSocials } from 'lib/sanity.client'
import { previewData } from 'next/headers'

import IndexPage from './IndexPage'
import PreviewIndexPage from './PreviewIndexPage'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const posts = await getAllPosts()

  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview latestPost={posts[0]} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage latestPost={posts[0]} />
}