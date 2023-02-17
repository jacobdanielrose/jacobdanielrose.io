'use client'

import fetcher from 'lib/fetcher'
import { NowPlayingSong } from 'lib/types';
import { SocialIcon } from 'react-social-icons';
import useSWR from 'swr'

import TitleTypewriter from './shared/TitleTypewriter';

export default function NowPlaying() {
    const { data } = useSWR<NowPlayingSong>('/api/spotify/now-playing', fetcher)
    return (
        <>
            <h2 className='font-sourcecode md: mb-3 under'>
                <TitleTypewriter cursor={true} text={"What I'm listening to:"} />
            </h2>
            <div className='sm:flex sm:flex-row sm:justify-center'>
                <div className='flex flex-row-reverse sm:flex-col justify-between mb-5'>
                    <div className='sm:mb-2'>
                        {data?.isPlaying ? (
                            <div className='w-20 h-20 sm:w-80 sm:h-80'>
                                <img src={data?.albumImageUrl} />
                            </div>
                        ) : (
                            <div className='md:hidden'>
                                <SocialIcon
                                    network='spotify'
                                    className="cursor-pointer"
                                    fgColor='gray'
                                    bgColor='transparent'
                                />
                            </div>
                        )}
                    </div>

                    <div className="font-sourcecode justify-center ">
                        {data?.songUrl ? (
                            <a
                                className="capsize text-gray-800 dark:text-gray-200 font-sourcecode max-w-max"
                                href={data.songUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <TitleTypewriter text={data?.title} />
                            </a>
                        ) : (
                            <p className="text-gray-800 dark:text-gray-200 font-sourcecode">
                                Not Playing
                            </p>
                        )}
                        <p className="font-sourcecode text-gray-500 dark:text-gray-300 max-w-max">
                            <TitleTypewriter text={data?.artist ?? 'Spotify'} />
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}

{/* <div className="flex flex-row-reverse items-center sm:flex-row mb-8 space-x-0 sm:space-x-2 w-full">
                {data?.isPlaying ? (
                    <div className='w-20 h-20'>
                        <img src={data?.albumImageUrl} />
                    </div>
                ) : (
                    <div>
                        <h2>No song playing </h2>
                    </div>
                )}
                <div className="inline-flex flex-col sm:flex-row w-full max-w-full truncate">

                    {data?.songUrl ? (
                        <a
                            className="capsize text-gray-800 dark:text-gray-200 font-medium  max-w-max truncate"
                            href={data.songUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {data?.title}
                        </a>
                    ) : (
                        <p className="capsize text-gray-800 dark:text-gray-200 font-medium">
                            Not Playing
                        </p>
                    )}
                    <span className="capsize mx-2 text-gray-500 dark:text-gray-300 hidden sm:block">
                        {' – '}
                    </span>
                    <p className="capsize text-gray-500 dark:text-gray-300 max-w-max truncate">
                        {data?.artist ?? 'Spotify'}
                    </p>
                </div>
            </div> */}