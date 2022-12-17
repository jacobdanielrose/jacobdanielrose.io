import PostPage from 'components/PostPage'
import PreviewPostPage from 'components/preview/PreviewPostPage'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import {
  getAllPostsSlugs,
  getPostAndMoreStories,
  getSettings,
  getSocials
} from 'lib/sanity.client'
import { previewData } from 'next/headers'

export async function generateStaticParams() {
  return await getAllPostsSlugs()
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  // Start fetching settings early, so it runs in parallel with the post query
  const settings = getSettings()
  const socials = getSocials()

  if (previewData()) {
    const token = previewData().token || null
    const data = getPostAndMoreStories(params.slug, token)
    return (
      <PreviewSuspense
        fallback={
          <PostPage
            loading
            preview
            data={await data}
            settings={await settings}
            socials={await socials}
          />
        }
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }

  const data = getPostAndMoreStories(params.slug)
  return <PostPage data={await data} settings={await settings} socials={await socials} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
