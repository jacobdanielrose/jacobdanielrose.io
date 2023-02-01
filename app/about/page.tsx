import AboutPage from './AboutPage'
import PreviewAboutPage from './PreviewAboutPage'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { getAllPosts, getSettings, getSocials } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
    // Fetch queries in parallel
    const [settings, posts, socials] = await Promise.all([getSettings(), getAllPosts(), getSocials()])

    if (previewData()) {
        const token = previewData().token || null

        return (
            <PreviewSuspense
                fallback={
                    <AboutPage loading preview settings={settings} socials={socials} />
                }
            >
                <PreviewAboutPage token={token} />
            </PreviewSuspense>
        )
    }

    return <AboutPage settings={settings} socials={socials} />
}