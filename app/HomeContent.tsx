'use client'

import { motion } from 'framer-motion'
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'



export default function HomeContent() {
    return (
        <div className='flex flex-col-reverse md:flex-row md:justify-between mb-5 px-5'>
            <div className='flex flex-col'>
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeIn", duration: 1.2 }}
                    className='font-sourcecode mx-auto md:mx-0 text-3xl md:text-5xl leading-tight tracking-tighter md:pr-8 mb-2 md:mb-5'>
                    Jacob Rose
                </motion.h2>
                <p
                    className='font-sourcecode mx-auto md:mx-0 dark:text-gray-500'>
                    I like
                    <Typewriter
                        cursor={true}
                        cursorColor={'red'}
                        words={[" math", " programming"]} />
                </p>
            </div >
            <Image
                alt="Jacob Rose"
                width={200}
                height={200}
                src="/static/avatar.jpg"
                sizes="100vw"
                priority
                className="rounded-xl filter grayscale mb-8 md:mb-0 mx-auto md:mx-0"
            />
        </div>
    )
}