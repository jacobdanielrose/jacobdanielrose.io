import { PortableText } from '@portabletext/react'
import { Social } from 'lib/sanity.queries';
import Link from 'next/link'

import { SocialIcon } from "react-social-icons";
import styles from './BlogHeader.module.css'
import TitleTypewriter from './TitleTypewriter'

export default function BlogHeader({
  title,
  description,
  level,
  socials,
}: {
  title: string
  description?: any[]
  level: 1 | 2
  socials: Social[]
}) {
  switch (level) {
    case 1:
      return (
        <header className="mt-12 mb-10 flex flex-col items-center md:mb-12 md:flex-row md:justify-between">

          {/* {socials.map(social => (
              <SocialIcon
                key={social._id}
                url={social.url.toString()}
                fgColor='gray'
                bgColor='transparent'
              />
            ))} */}

          <h1 className="text-6xl font-bold leading-tight tracking-tighter md:pr-8 md:text-8xl">
            <TitleTypewriter text={title} />
            {/* {title} */}
          </h1>
          <div className='flex flex-col'>
            <div className='flex flex-row mt-6 items-center justify-between mx-auto'>
              <SocialIcon
                url={'facebook.com'}
                fgColor='gray'
                bgColor='transparent'
              />
              <SocialIcon
                url={'instagram.com'}
                fgColor='gray'
                bgColor='transparent'
              />
              <SocialIcon
                url={'linkedin.com'}
                fgColor='gray'
                bgColor='transparent'
              />
              <SocialIcon
                url={'github.com'}
                fgColor='gray'
                bgColor='transparent'
              />
            </div>
            <h4
              className={`mt-5 text-center text-lg md:pl-8 md:text-left ${styles.portableText}`}
            >
              <PortableText value={description} />
            </h4>
          </div>
        </header>
      )

    case 2:
      return (
        <header className='flex items-start justify-between'>
          <h2 className="mt-8 mb-20 text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
            <Link href="/" className="hover:text-highlight">
              <TitleTypewriter text={title} />
            </Link>
          </h2>
          <div className='flex flex-row mt-6 items-center'>
            <SocialIcon
              url={'facebook.com'}
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon
              url={'instagram.com'}
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon
              url={'linkedin.com'}
              fgColor='gray'
              bgColor='transparent'
            />
            <SocialIcon
              url={'github.com'}
              fgColor='gray'
              bgColor='transparent'
            />
          </div>
        </header>
      )

    default:
      throw new Error(
        `Invalid level: ${JSON.stringify(level) || typeof level
        }, only 1 or 2 are allowed`
      )
  }
}
