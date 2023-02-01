import Container from 'components/Container'
import Layout from 'components/Layout'
import MoreStories from 'components/shared/MoreStories'
import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostTitle from './PostTitle'
import SectionSeparator from 'components/shared/SectionSeparator'
import type { Post, Settings, Social } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
  settings: Settings,
  socials: Social[]
}) {
  const { preview, loading, data, settings, socials } = props
  const { post = {} as any, morePosts = [] } = data || {}
  const { title } = settings || {}

  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        {preview && !post ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
            <SectionSeparator />
            {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}
