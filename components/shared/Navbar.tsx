'use client'

import cn from 'classnames';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { SocialIcon } from 'react-social-icons';

function NavItem({ href, text }) {
    let pathname = usePathname()
    if (pathname.includes('/blog/')) {
        pathname = '/blog'
    }

    const isActive = pathname === href

    return (
        <Link
            href={href}
            className={cn(
                isActive
                    ? 'font-sourcecode text-xl text-gray-900 dark:text-gray-100'
                    : 'font-sourcecode text-gray-600 dark:text-gray-400',
                // 'hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:text-red-600 dark:hover:text-red-800 transition-all'
                'p-1 px-2 sm:px-3 sm:py-2 hover:text-red-600 dark:hover:text-red-800 transition-all'

            )}
        >
            <span className="capsize">{text}</span>
        </Link>
    );
}

export default function Navbar() {
    return (
        <nav
            className="flex items-center justify-between w-full relative 
            max-w-3xl border-gray-200 dark:border-gray-700 mx-auto
            pt-8 pb-8 sm:pb-16 text-gray-900 
          dark:text-gray-100">
            <div className="md:ml-[-1.6rem]">
                <NavItem href="/" text="Home" />
                <NavItem href="/about" text="About" />
                <NavItem href="/blog" text="Blog" />
            </div>
            <div className='hidden md:flex flex-row items-center'>
                <SocialIcon
                    url={'https://www.linkedin.com/in/jacob-rose-0b929b21b/'}
                    className="cursor-pointer"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url={'https://www.facebook.com/jacobdanielrose'}
                    className="cursor-pointer md:hidden"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url={'https://www.instagram.com/jacobdanielrose'}
                    className="cursor-pointer"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url={'https://github.com/jacobdanielrose'}
                    className="cursor-pointer"
                    fgColor='gray'
                    bgColor='transparent'
                />

            </div>
        </nav>
    )
}