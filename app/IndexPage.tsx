import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import type { Settings, Social } from 'lib/sanity.queries'

export default function IndexPage(props: {
    preview?: boolean
    loading?: boolean
    settings: Settings
    socials?: Social[]
}) {
    const { preview, loading } = props

    return (
        <>
            <Layout preview={preview} loading={loading}>
                <Container>
                </Container>
            </Layout>
        </>
    )
}