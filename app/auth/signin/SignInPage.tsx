// import Container from 'components/BlogContainer'
// import BlogHeader from 'components/BlogHeader'
// import Layout from 'components/BlogLayout'
// import { Settings, Social } from 'lib/sanity.queries'
// import { getProviders } from "next-auth/react"

// import SignInCard from './SignInCard'

// export default function SignInPage(props: {
//     providers: Awaited<ReturnType<typeof getProviders>>
//     preview?: boolean
//     loading?: boolean
//     settings: Settings,
//     socials: Social[],
// }) {
//     return (
//         <Layout preview={null} loading={null}>
//             <Container>
//                 {/* @ts-ignore */}
//                 <BlogHeader title={props.settings.title} level={2} socials={props.socials} />
//                 <div className="flex justify-center mt-5">
//                     <SignInCard providers={props.providers} callbackUrl="" />
//                 </div>
//             </Container>
//         </Layout>
//     )
// }