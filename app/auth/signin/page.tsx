import { getProviders } from "next-auth/react";

import SignInComponent from "./SignInComponent";

export default async function SignInRoute() {
    // const providers = await getProviders()
    return (
        <div className="h-full w-full py-16 px-4">
            <SignInComponent />
        </div>
    )
}
