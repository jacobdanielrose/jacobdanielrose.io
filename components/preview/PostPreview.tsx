import Avatar from 'components/shared/AuthorAvatar'
import CoverImage from 'components/shared/CoverImage'
import Date from 'components/shared/PostDate'
import type { Post } from 'lib/sanity.queries'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Post, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug font-sourcecode">
        <Link href={`/blog/${slug}`} className="hover:text-red-600 dark:hover:text-red-800 transition">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg font-sourcecode text-gray-500 dark:text-gray-400">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed font-sourcecode tracking-tight text-gray-700 dark:text-gray-200">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
