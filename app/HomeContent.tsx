'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'



export default function HomeContent() {
    return (
        <div className='flex flex-col md:flex-row md:justify-between mb-5 pr-5'>
            <div className='flex flex-col mb-5 pr-5'>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1.2 }}
                    className='font-sourcecode text-3xl md:text-5xl leading-tight tracking-tighter md:pr-8'>
                    Jacob Rose
                </motion.h2>
                <h3 className='font-sourcecode text-gray-500 text-xl leading-tight tracking-tighter mb-5'>IT Technical Specialist at IBM</h3>
                {/* <p
                    className='font-sourcecode text-gray-900 dark:text-gray-300'>
                    I like
                    <Typewriter
                        cursor={true}
                        cursorColor={'red'}
                        loop={true}
                        words={[
                            " physics",
                            " mathematics",
                            " to program",
                            " technology",
                        ]} />
                </p> */}
                <p
                    className='hidden md:flex font-sourcecode text-gray-900 dark:text-gray-300'>
                    I am a IT technical specialist at IBM. I love all things IT related, programming,
                    but also reading and learning about various topics such as physics, math, history,
                    politics and even urban planning. I also write about them sometimes. I also play guitar and
                    drums and love listening to music of all types but especially metal and rock music.
                </p>
            </div >
            <Image
                alt="Jacob Rose"
                width={300}
                height={200}
                src="/static/home_avatar.jpg"
                sizes="100vw"
                priority
                className="rounded-xl filter mb-8 md:mb-0 mx-auto md:mx-0"
            />
            <p
                className='md:hidden font-sourcecode text-gray-900 dark:text-gray-300'>
                I am a IT technical specialist at IBM. I love all things IT related, programming,
                but also reading and learning about various topics such as physics, math, history,
                politics and even urban planning. I also write about them sometimes. I also play guitar and
                drums and love listening to music of all types but especially metal and rock music.
            </p>
        </div >
    )
}