
import { getSettings, getSocials } from 'lib/sanity.client'
import { getProviders } from 'next-auth/react'

import SignInPage from './SignInPage'


// TODO: add preview and loading sections 

export default async function SignInRoute() {
    const [settings, socials, providers] = await Promise.all([getSettings(), getSocials(), getProviders()])

    return <></>
    // return <SignInPage providers={providers} settings={settings} socials={socials} />

}