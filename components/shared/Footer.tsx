import Link from "next/link";

const ExternalLink = ({ href, children }) => (
    <a
        className="text-gray-500 font-sourcecode hover:text-red-600 dark:hover:text-red-800 transition"
        target="_blank"
        rel="noopener noreferrer"
        href={href}
    >
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-start max-w-3xl mx-auto w-full mb-8 mt-5">
            <hr className="w-full border-1 border-gray-300 dark:border-gray-800 mb-8" />
            <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3 pl-5">
                <div className="flex flex-col space-y-4">
                    <Link
                        href="/"
                        className="font-sourcecode text-gray-500 hover:text-red-600 dark:hover:text-red-800 transition">
                        Home
                    </Link>
                    <Link
                        href="/blog"
                        className="font-sourcecode text-gray-500 hover:text-red-600 dark:hover:text-red-800 transition">
                        Blog
                    </Link>
                </div>
                <div className="flex flex-col space-y-4">
                    <Link
                        href="/about"
                        className="font-sourcecode text-gray-500 hover:text-red-600 dark:hover:text-red-800 transition">
                        About
                    </Link>
                    <ExternalLink href="https://github.com/jacobdanielrose">GitHub</ExternalLink>
                </div>
                <div className="flex flex-col space-y-4">
                    <ExternalLink href="https://twitter.com/jacobdanielrose">
                        Twitter
                    </ExternalLink>
                    <ExternalLink href="https://reddit.com/u/jacobdanielrose">Reddit</ExternalLink>

                </div>
            </div>
        </footer>
    )
}