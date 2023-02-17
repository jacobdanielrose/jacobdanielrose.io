'use client'

import PostPage from 'app/blog/[slug]/PostPage'
import { usePreview } from 'lib/sanity.preview'
import {
  type Post,
  type Settings,
  postAndMoreStoriesQuery,
  settingsQuery,
  Social,
  socialsQuery,
} from 'lib/sanity.queries'

export default function PreviewPostPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { post: Post; morePosts: Post[] } = usePreview(
    token,
    postAndMoreStoriesQuery,
    {
      slug,
    }
  ) || { post: null, morePosts: [] }

  return <PostPage preview data={data} />
}
