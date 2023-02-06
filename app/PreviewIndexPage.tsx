'use client'

import { usePreview } from 'lib/sanity.preview'
import {
    type Post,
    indexQuery,
} from 'lib/sanity.queries'

import IndexPage from './IndexPage'

export default function PreviewIndexPage({ token }: { token: null | string }) {
    const posts: Post[] = usePreview(token, indexQuery) || []

    return <IndexPage preview latestPost={posts[0]} />
}