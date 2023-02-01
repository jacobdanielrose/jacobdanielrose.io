import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import HeroPost from 'components/HeroPost'
import MoreStories from 'components/MoreStories'
import type { Post, Settings, Social } from 'lib/sanity.queries'
import TitleTypewriter from './shared/TitleTypewriter'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  posts: Post[]
  settings: Settings
  socials?: Social[]
}) {
  const { preview, loading, posts, settings, socials } = props
  const [heroPost, ...morePosts] = posts || []
  const { title, description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <header className="mb-5 flex flex-col items-center md:mb-8 md:flex-row md:justify-between">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter md:pr-8">
              <TitleTypewriter text={'Blog'} />
            </h1>
          </header>

          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}
