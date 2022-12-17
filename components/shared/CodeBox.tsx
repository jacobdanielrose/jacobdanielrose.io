'use client'


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function CodeBox({ value }: {
    value: any
}) {

    // convert language names that don't match
    // those in react-syntax-highlighter
    switch (value.language) {
        case 'golang':
            value.language = 'go'
            break
        case 'sh':
            value.language = 'bash'
            break
    }


    return (
        //TODO: better the styles and add copy button
        <div className='bg-[#1d1f21] rounded-t-xl'>
            <h4 className='text-gray-400 ml-3 pl-3 pt-3'>
                {value?.filename}
            </h4>
            <SyntaxHighlighter
                language={value.language}
                style={atomDark}
                showLineNumbers={true}>
                {value.code}
            </SyntaxHighlighter>
        </div>
    )
}