import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { getAllPosts, getSettings, getSocials } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, posts, socials] = await Promise.all([getSettings(), getAllPosts(), getSocials()])

  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={
          <IndexPage loading preview posts={posts} settings={settings} socials={socials} />
        }
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage posts={posts} settings={settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
