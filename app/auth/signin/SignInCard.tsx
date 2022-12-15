// 'use client'

// import Image from 'next/image'
// import { getProviders, signIn } from "next-auth/react"
// import { SocialIcon } from "react-social-icons"

// export default function SignInCard(props: {
//     providers: Awaited<ReturnType<typeof getProviders>>
//     callbackUrl?: string
// }) {
//     return (
//         <div className='border border-highlight rounded-3xl p-4 shadow-xl'>
//             <Image
//                 src=""
//                 width={500}
//                 height={500}
//                 alt={''}
//             />

//             <h3 className="text-xl mb-2">
//                 Sign Up or Login with one of the following providers:
//             </h3>
//             {Object.values(props.providers).map(provider => (
//                 <div key={provider.name}>
//                     <button
//                         onClick={() => signIn(provider.id, {
//                             callbackUrl: process.env.VERCEL_URL || "https://localhost:3000"
//                         })}>
//                         <SocialIcon
//                             fgColor='gray'
//                             bgColor='transparent'
//                             network={provider.name.toLowerCase()} />
//                     </button>
//                 </div>
//             ))}
//         </div>
//     )
// }