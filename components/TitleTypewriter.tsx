'use client'
import { Typewriter } from 'react-simple-typewriter'


type Props = {
    text: string,
}

export default function TypeWriter({ text }: Props) {
    return (
        <Typewriter
            words={[text]}
            cursor
            cursorColor='#ff0000'
        />
    )
}