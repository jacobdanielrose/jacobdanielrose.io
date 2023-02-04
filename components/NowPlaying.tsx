
'use client'

import fetcher from 'lib/fetcher'
import { NowPlayingSong } from 'lib/types';
import useSWR from 'swr'

import TitleTypewriter from './shared/TitleTypewriter';

export default function NowPlaying() {
    const { data } = useSWR<NowPlayingSong>('/api/spotify/now-playing', fetcher)
    return (
        <>
            <h2 className='text-center font-sourcecode md: mb-3 under'>
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
                            <svg fill="#000000" height="60px" width="60px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 256 256">
                                <path d="M127.2,236.5c60.4,0.5,108.6-49.4,108.8-108.3c0.5-60.4-47.9-108.2-108.3-108.8C67.2,18.9,19.1,68.8,18.9,127.7
	C18.3,188.1,68.3,236.2,127.2,236.5z M178.9,84.9c10.8,0.5,18.6,8.2,18.1,18.9c-0.5,10.8-8.2,18.6-18.9,18.1
	c-10.8-0.5-18.6-8.2-18.1-18.9C160.5,92.2,168.2,84.3,178.9,84.9z M127.8,142c26.3,0.3,49.9,15.6,62,41.1c2.1,5.1-0.5,10.8-5.5,12.9
	s-10.8-0.5-14.4-5.9c-7.7-17-24.2-27.9-42.8-28.2c-18.5-0.4-34.6,10.6-42.4,27.7c-2.6,5.7-9.1,7.6-13.4,5.3
	c-5.7-2.6-7.9-7.7-5.3-13.4C76.9,157.3,101.6,141.6,127.8,142z M79.7,84.8c10.7,0.5,18.6,8.2,18.1,19c-0.5,10.8-8.2,18.6-18.9,18.1
	c-9.2-0.2-18.6-8.2-18.1-18.9C60.9,93.7,68.9,84.3,79.7,84.8z"/>
                            </svg>
                        )}
                    </div>

                    <div className="font-sourcecode justify-center ">
                        {data?.songUrl ? (
                            <a
                                className="capsize text-gray-800 dark:text-gray-200 font-sourcecode  max-w-max truncate"
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
                        <p className="font-sourcecode text-gray-500 dark:text-gray-300 max-w-max truncate">
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