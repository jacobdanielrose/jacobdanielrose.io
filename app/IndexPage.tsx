import Container from 'components/Container'
import Layout from 'components/Layout'
import NowPlaying from 'components/NowPlaying'
import { type Post } from 'lib/sanity.queries'

import HomeContent from './HomeContent'
import LatestPost from './LatestPost'

export default function IndexPage(props: {
    preview?: boolean
    loading?: boolean
    latestPost: Post
}) {
    const { preview, loading, latestPost } = props

    return (
        <>
            <Layout preview={preview} loading={loading}>
                <Container>
                    <HomeContent />
                    <LatestPost
                        title={latestPost.title}
                        coverImage={latestPost.coverImage}
                        date={latestPost.date}
                        author={latestPost.author}
                        slug={latestPost.slug}
                        excerpt={latestPost.excerpt}
                    />
                    <NowPlaying />
                </Container>
            </Layout>
        </>
    )
}