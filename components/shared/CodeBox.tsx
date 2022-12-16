'use client'


import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


export default function CodeBox({ value }: {
    value: any
}) {
    return (
        <SyntaxHighlighter
            language={value.language}
            style={atomDark}
            showLineNumbers={true}>
            {value.code}
        </SyntaxHighlighter>
    )
}