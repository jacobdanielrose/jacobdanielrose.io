import Container from 'components/Container'
import Layout from 'components/Layout'
import TitleTypewriter from 'components/shared/TitleTypewriter'
import Image from 'next/image';

import Resume from './Resume';
import TopTracks from './TopTracks';


export default function AboutPage(props: {
    preview?: boolean
    loading?: boolean
}) {
    const { preview, loading } = props

    return (
        <>
            <Layout preview={preview} loading={loading}>
                <Container>
                    <header className="mb-5 flex flex-col items-center md:mb-8 md:flex-row md:justify-between">
                        <h1 className="font-sourcecode text-5xl md:text-7xl leading-tight tracking-tighter md:pr-8 mb-2 md:mb-5">
                            <TitleTypewriter cursor={true} text={'About'} />
                        </h1>
                    </header>
                    <div className='flex md:justify-between flex-col-reverse md:flex-row mb-5'>
                        <p className='font-sourcecode sm:mr-5 dark:text-gray-300'>
                            I graduated from the University of Houston with a B.Sc. in Physics in 2018
                            and completed my Masters Degree in Physics at the University of Erlangen-Nuremberg in 2022. My
                            initial field of research was high energy particle physics and I wrote my Bachelors thesis on the topic of Hadronic Matter
                            and Quark-Gluon Plasma. My focus switched over the course of my Masters and my Masters thesis involved
                            simulating X-ray reflection from black holes. I now work as an IT Technical Specialist at IBM.
                        </p>
                        <Image
                            alt="Jacob Rose"
                            width={300}
                            height={550}
                            src="/static/about_avatar.jpg"
                            sizes="100vw"
                            priority
                            className="rounded filter grayscale mb-8 md:mb-0 mx-auto"
                        />
                    </div>
                    <Resume />
                    <h2 className='text-3xl md:text-5xl font-sourcecode tracking-tighter mb-3
                    border-b-2 w-fit border-red-600 dark:border-red-800'>
                        My top tracks
                    </h2>
                    <p className='text-gray-900 dark:text-gray-400 font-sourcecode'>
                        I love listening to music and also making it myself.
                        Here you can see my top songs to get an idea
                        of my music taste. You can click each track to find their corresponding page on Spotify
                    </p>
                    <TopTracks />
                </Container>
            </Layout>
        </>
    )
}