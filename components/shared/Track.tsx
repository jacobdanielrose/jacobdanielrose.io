'use client'

import { motion } from 'framer-motion'
import { Song } from "lib/types";
import Image from 'next/image';


export default function Track(track: Song) {
    return (
        <div className="flex flex-row justify-between items-center border-b border-gray-200 dark:border-gray-800 max-w-3xl w-full mt-8">
            <div className="flex items-baseline">
                <p className="text-sm font-sourcecode font-bold text-gray-400 dark:text-gray-600">
                    {track.ranking}
                </p>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col pl-3">
                    <a
                        className="font-sourcecode hover:text-red-600 dark:hover:text-red-800 text-gray-900 dark:text-gray-100 truncate w-60 sm:w-96 md:w-full"
                        href={track.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {track.title}
                    </a>
                    <p
                        className="font-sourcecode text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
                        color="gray.500"
                    >

                        {track.artist}
                    </p>
                </motion.div>
            </div>
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className='mr-10 mb-4'
                    src={track.albumImageUrl}
                    width={100}
                    height={100}
                    alt={track.title} />
            </motion.a>
        </div>
    );
}
