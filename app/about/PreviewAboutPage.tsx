'use client'

import AboutPage from './AboutPage'
import { usePreview } from 'lib/sanity.preview'
import {
    type Settings,
    settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewAboutPage({ token }: { token: null | string }) {
    const settings: Settings = usePreview(token, settingsQuery) || {}

    return <AboutPage preview settings={settings} />
}