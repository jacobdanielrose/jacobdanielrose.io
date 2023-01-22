import Body from 'components/comments/CommentBody'
import Header from 'components/comments/CommentHeader'

export default function Comment() {
    return (
        <div className='max-w-2xl mx-auto mb-16 p-6 shadow-md hover:shadow-xl'>
            <Header />
            <article>
                <Body />
            </article>
        </div>
    )
}