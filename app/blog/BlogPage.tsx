import Container from 'components/Container'
import Layout from 'components/Layout'
import MoreStories from 'components/shared/MoreStories'
import type { Post, Settings, Social } from 'lib/sanity.queries'

import TitleTypewriter from '../../components/shared/TitleTypewriter'
import HeroPost from './HeroPost'

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
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter md:pr-8 mb-2 md:mb-5">
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
