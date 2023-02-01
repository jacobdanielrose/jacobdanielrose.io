import cn from 'classnames';
import Link from "next/link";


function NavItem({ href, text }) {
    return (
        <Link
            href={href}
            className={cn(
                // ? 'font-semibold text-gray-800 dark:text-gray-200'
                'font-normal text-gray-600 dark:text-gray-400',
                'hidden md:inline-block p-1 sm:px-3 sm:py-2 hover:text-red-600 dark:hover:text-red-800 transition-all'
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
            <div className="ml-[-1.6rem]">
                {/* <MobileMenu /> */}
                <NavItem href="/" text="Home" />
                <NavItem href="/about" text="About" />
                <NavItem href="/blog" text="Blog" />
            </div>
        </nav>
    )
}