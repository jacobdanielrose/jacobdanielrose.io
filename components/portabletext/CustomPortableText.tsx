import { PortableText, PortableTextComponents } from '@portabletext/react'
import ImageBox from 'components/portabletext/ImageBox'
import { Block, Image } from 'sanity'

import CodeBox from './CodeBox'

export function CustomPortableText({
    paragraphClasses,
    value,
}: {
    paragraphClasses?: string
    value: Block[]
}) {
    const components: PortableTextComponents = {
        block: {
            normal: ({ children }) => {
                return <p className={paragraphClasses}>{children}</p>
            },
        },
        marks: {
            link: ({ children, value }) => {
                return (
                    <a
                        className="underline transition hover:opacity-50"
                        href={value?.href}
                        rel="noreferrer noopener"
                    >
                        {children}
                    </a>
                )
            },
        },
        types: {
            image: ({
                value,
            }: {
                value: Image & { alt?: string; caption?: string }
            }) => {
                return (
                    <div className="my-6 space-y-2">
                        <ImageBox
                            image={value}
                            alt={value.alt}
                            classesWrapper="relative aspect-[16/9]"
                        />
                        {value?.caption && (
                            <div className="font-sans text-sm text-gray-600">
                                {value.caption}
                            </div>
                        )}
                    </div>
                )
            },
            code: ({ value }) => {
                return <CodeBox value={value} />
            },
        },
    }

    return <PortableText components={components} value={value} />
}
