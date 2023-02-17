import AuthorAvatar from 'components/shared/AuthorAvatar'
import CoverImage from 'components/shared/CoverImage'
import Date from 'components/shared/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function HeroPost(
  props: Pick<
    Post,
    'title' | 'coverImage' | 'date' | 'excerpt' | 'slug'
  >
) {
  const { title, coverImage, date, excerpt, slug } = props
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage slug={slug} title={title} image={coverImage} priority />
      </div>
      <div className="mb-20 md:mb-28 md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <div>
          <h3 className="mb-4 text-3xl leading-tight lg:text-5xl font-sourcecode">
            <Link href={`/blog/${slug}`} className="hover:text-red-600 dark:hover:text-red-800 transition">
              {title || 'Untitled'}
            </Link>
          </h3>
          <div className="mb-4 text-lg md:mb-0 text-gray-900 dark:text-gray-400 text-opacity-80 font-sourcecode">
            <Date dateString={date} />
          </div>
        </div>
        <div>
          {excerpt && <p className="mb-4 text-lg leading-relaxed font-sourcecode text-gray-900 dark:text-gray-400">{excerpt}</p>}
        </div>
      </div>
    </section>
  )
}
