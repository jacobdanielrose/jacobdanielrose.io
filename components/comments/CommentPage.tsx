import Comment from 'components/comments/Comment'

import CommentInput from './CommentInput'

export default function CommentPage() {
    return (
        <div className='mt-24'>
            <h2 className='text-2xl mb-8 tracking-wide
            border-highlight/40 border-b-2 w-32'>
                Comments
            </h2>
            <CommentInput />
            <div className='flex flex-col'>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}