'use client'

import { urlForImage } from 'lib/sanity.image'
import type { Post } from 'lib/sanity.queries'
import Image from 'next/image'
import Link from 'next/link'


export default function HeroPost(
    props: Pick<
        Post,
        'title' | 'coverImage' | 'date' | 'excerpt' | 'author' | 'slug'
    >
) {
    const { title, coverImage, excerpt, slug } = props
    return (
        <section className='mb-10'>
            <h2 className='font-sourcecode text-3xl tracking-tighter md:text-5xl mb-5
            border-b-2 dark:border-red-800 border-red-600 w-fit'>Latest Blog Post</h2>
            <div className="mb-4 container">
                <Link href={`/blog/${slug}`}>
                    <Image
                        className="h-auto w-full"
                        width={2000}
                        height={1000}
                        alt={`Cover Image for ${title}`}
                        src={urlForImage(coverImage).height(1000).width(2000).url()}
                        sizes="100vw"
                        priority={true} />
                </Link>

            </div>
            <h3 className="mb-4 text-3xl leading-tight lg:text-5xl font-sourcecode text-center">
                <Link href={`/blog/${slug}`} className="hover:text-red-600 dark:hover:text-red-800 transition">
                    {title || 'Untitled'}
                </Link>
            </h3>
        </section>
    )
}
