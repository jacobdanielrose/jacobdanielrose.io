import { CodeBracketIcon, LinkIcon } from '@heroicons/react/24/solid'
import Link from "next/link"

import styles from './Comment.module.css'


export default function CommentInput() {
    const session = true

    if (session) {
        return (
            <div className="flex justify-center items-center w-full mb-8">
                <form className='w-full mx-auto' action="">
                    {/* <div className="flex justify-end mb-2">
                        <div className="flex gap-3 text-gray-500">
                            <LinkIcon className="h-6 w-6" />
                            <CodeBracketIcon className="h-6 w-6" />
                        </div>
                    </div> */}
                    <textarea placeholder='Add your comment...' className={styles.commentInput} />
                    <div className="flex justify-end">
                        <button className="text-sm font-semibold absolute bg-highlight/40 w-fit text-white py-2 rounded px-3">Post</button>
                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
            <div className="mx-auto text-gray-500 mb-10 flex justify-center 
            items-center hover:text-highlight/40">
                <Link
                    href={''}
                >
                    <h3>Please Sign In to comment!</h3>
                </Link>
            </div >
        )
    }

}