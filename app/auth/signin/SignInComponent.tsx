'use client'

import { getProviders } from "next-auth/react"
import { SocialIcon } from "react-social-icons"

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>
}

export default function SignInComponent({ providers }: Props) {
    return (
        <div>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button>
                        <SocialIcon
                            fgColor='gray'
                            bgColor='transparent'
                            network={provider.name.toLowerCase()} />
                    </button>
                </div>
            ))}
        </div>
    )
}