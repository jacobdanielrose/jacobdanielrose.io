import { getProviders } from 'next-auth/react'

import SignInComponent from './SignInComponent'

type Props = {}

export default async function SignInPage({ }: Props) {
    const providers = await getProviders()
    return (
        <div>
            <SignInComponent providers={providers} />
        </div>
    )
}