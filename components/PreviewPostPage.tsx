'use client'

import PostPage from 'components/PostPage'
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
  const settings: Settings = usePreview(token, settingsQuery) || {}
  const socials: Social[] = usePreview(token, socialsQuery) || []

  return <PostPage preview data={data} settings={settings} socials={socials} />
}
