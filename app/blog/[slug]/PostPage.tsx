import Container from 'components/Container'
import Layout from 'components/Layout'
import MoreStories from 'components/shared/MoreStories'
import SectionSeparator from 'components/shared/SectionSeparator'
import type { Post } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import ArticleProgress from './ArticleProgress'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostTitle from './PostTitle'

export default function PostPage(props: {
  preview?: boolean
  loading?: boolean
  data: { post: Post; morePosts: Post[] }
}) {
  const { preview, loading, data } = props
  const { post = {} as any, morePosts = [] } = data || {}

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
              <ArticleProgress />
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
