import { getProviders } from "next-auth/react";

import SignInComponent from "./SignInComponent";

export default async function SignInRoute() {
    // const providers = await getProviders()
    return (
        <div className="h-full w-full py-16 px-4">
            <SignInComponent />
        </div>
        // <div className="flex-col justify-center shadow-sm max-w-md text-center">
        //     <h2>TEST THIS BUTTON</h2>


        //     {/* @ts-ignore */}
        // </div>
    )
}
