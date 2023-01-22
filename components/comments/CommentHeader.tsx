import Avatar from 'components/AuthorAvatar'
import CommentDate from 'components/comments/CommentDate'

export default function CommentHeader() {
    const date = '2022-12-16 18:32'
    return (
        <>
            <div className="mb-2">
                <Avatar name='Lorem Ipsum' />
            </div>
            <div className="mb-4 text-lg">
                <CommentDate dateString={date} />
            </div>
        </>
    )
}