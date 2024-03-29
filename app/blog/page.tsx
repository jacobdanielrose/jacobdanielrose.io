import PreviewIndexPage from 'components/preview/PreviewIndexPage'
import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { getAllPosts, getSettings, getSocials } from 'lib/sanity.client'
import { previewData } from 'next/headers'

import BlogPage from './BlogPage'

export default async function IndexRoute() {
    // Fetch queries in parallel
    const [settings, posts, socials] = await Promise.all([getSettings(), getAllPosts(), getSocials()])

    if (previewData()) {
        const token = previewData().token || null

        return (
            <PreviewSuspense
                fallback={
                    <BlogPage loading preview posts={posts} settings={settings} socials={socials} />
                }
            >
                <PreviewIndexPage token={token} />
            </PreviewSuspense>
        )
    }

    return <BlogPage posts={posts} settings={settings} socials={socials} />
}