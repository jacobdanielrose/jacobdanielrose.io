import Avatar from 'components/shared/AuthorAvatar'
import CoverImage from 'components/shared/CoverImage'
import Date from 'components/shared/PostDate'
import type { Post } from 'lib/sanity.queries'

import PostTitle from './PostTitle'
import ViewCounter from './ViewCounter'

export default function PostHeader(
  props: Pick<Post, 'title' | 'coverImage' | 'date' | 'slug'>
) {
  const { title, coverImage, date, slug } = props
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-4 sm:mx-0 md:mb-8">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-row mb-6 text-lg font-sourcecode dark:text-gray-500 justify-between">
          <Date dateString={date} />
          {/* TODO: disable this when in preview mode */}
          <ViewCounter slug={slug} />
        </div>
      </div>
    </>
  )
}
