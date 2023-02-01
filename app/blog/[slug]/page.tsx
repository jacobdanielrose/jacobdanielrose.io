import PostPage from './PostPage'
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
          />
        }
      >
        <PreviewPostPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }

  const data = getPostAndMoreStories(params.slug)
  return <PostPage data={await data} />
}