import Container from 'components/Container'
import Layout from 'components/Layout'
import TitleTypewriter from 'components/shared/TitleTypewriter'
import type { Settings, Social } from 'lib/sanity.queries'
import Image from 'next/image';


export default function AboutPage(props: {
    preview?: boolean
    loading?: boolean
    settings: Settings
    socials?: Social[]
}) {
    const { preview, loading } = props

    return (
        <>
            <Layout preview={preview} loading={loading}>
                <Container>
                    <header className="mb-5 flex flex-col items-center md:mb-8 md:flex-row md:justify-between">
                        <h1 className="font-sourcecode text-5xl md:text-7xl font-bold leading-tight tracking-tighter md:pr-8 mb-2 md:mb-5">
                            <TitleTypewriter cursor={true} text={'About'} />
                        </h1>
                    </header>
                    <div className='flex md:justify-between flex-col-reverse md:flex-row mb-5'>
                        <p className='font-sourcecode sm:mr-5'>
                            I graduated from the University of Houston with a B.Sc. in Physics in 2018\
                            and have recently completed my Masters Degree in Physics at the University of Erlangen-Nuremberg. My
                            initial field of research was high energy particle physics and I wrote my Bachelors thesis on the topic of Hadronic Matter
                            and Quark-Gluon Plasma. My focus switched over the course of my Masters and my Masters thesis involved
                            simulating X-ray reflection from black holes. I now work as an IT Technical Specialist at IBM.
                        </p>
                        <Image
                            alt="Jacob Rose"
                            width={300}
                            height={550}
                            src="/static/avatar.jpg"
                            sizes="100vw"
                            priority
                            className="rounded filter grayscale mb-8 md:mb-0 mx-auto"
                        />
                    </div>
                </Container>
            </Layout>
        </>
    )
}