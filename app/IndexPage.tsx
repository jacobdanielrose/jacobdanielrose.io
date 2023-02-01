import Container from 'components/Container'
import Layout from 'components/Layout'
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
                    <h1>THIS IS INDEX</h1>
                </Container>
            </Layout>
        </>
    )
}