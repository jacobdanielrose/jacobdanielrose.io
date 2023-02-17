import { PreviewSuspense } from 'components/preview/PreviewSuspense'
import { previewData } from 'next/headers'

import AboutPage from './AboutPage'
import PreviewAboutPage from './PreviewAboutPage'

export default async function IndexRoute() {

    if (previewData()) {
        const token = previewData().token || null
        return (
            <PreviewSuspense
                fallback={
                    <AboutPage loading preview />
                }
            >
                <PreviewAboutPage token={token} />
            </PreviewSuspense>
        )
    }
    return <AboutPage />
}