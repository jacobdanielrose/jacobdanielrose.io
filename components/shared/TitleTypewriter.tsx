'use client'
import { Typewriter } from 'react-simple-typewriter'


type Props = {
    text: string,
    cursor?: boolean
}

export default function TypeWriter({ text, cursor }: Props) {

    return (
        <Typewriter
            words={[text]}
            cursor={cursor}
            cursorColor='#ff0000'
        />
    )
}