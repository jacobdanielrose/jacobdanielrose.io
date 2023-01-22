'use client'

import { signIn } from "next-auth/react"
import { SocialIcon } from "react-social-icons"

export default function SignInComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="shadow-xl rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                <p tabIndex={0} aria-label="Login to your account" className="text-2xl text-center font-extrabold leading-6 text-gray-500">
                    Login to Comment
                </p>
                <button
                    onClick={() => signIn("github")}
                    aria-label="Continue with github"
                    role="button"
                    className="bg-highlight/30 hover:bg-highlight/20 py-3.5 px-4 rounded-lg flex items-center w-full mt-10">
                    <SocialIcon
                        network="github"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <p className="text-base font-medium ml-4 text-gray-500">
                        Continue with GitHub
                    </p>
                </button>
            </div>
        </div>
    )
}