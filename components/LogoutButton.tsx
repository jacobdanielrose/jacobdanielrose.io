'use client'

import { signOut } from "next-auth/react"

type Props = {}

export default function LogoutButton({ }: Props) {
    return (
        <>
            <button
                className='tracking-wide text-lg text-gray-300/50 hover:underline'
                onClick={() => signOut()}
            >
                Sign Out
            </button>
        </>
    )
}