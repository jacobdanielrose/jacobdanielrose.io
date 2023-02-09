import { BsCalendarDate } from 'react-icons/bs'
import { FaUniversity } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { IoBusinessSharp } from 'react-icons/io5'

export default function Resume() {
    return (
        <div className='container flex flex-col md:flex-row justify-between mb-5 font-sourcecode'>
            <div>
                <h2 className='text-3xl md:text-5xl font-sourcecode tracking-tighter
                border-b-2 w-fit border-red-600 dark:border-red-800 mb-4'>Education</h2>
                <ul>
                    <li className='list-item w-fit mb-4'>
                        <h3 className="md:text-xl">B.Sc. of Physics </h3>
                        <div className='flex flex-row items-center'>
                            <FaUniversity className='mr-3' />
                            <p>University of Houston</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <BsCalendarDate className='mr-3' />
                            <p className="text-gray-500">
                                Sep 2015 - May 2018
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <GoLocation className='mr-3' />
                            <p className="text-gray-400">Houston, USA</p>
                        </div>
                    </li>
                    <li className='list-item w-fit mb-4'>
                        <h3 className="md:text-xl">M.Sc. of Physics </h3>
                        <div className='flex flex-row items-center'>
                            <FaUniversity className='mr-3' />
                            <p>Friedrich-Alexander University</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <BsCalendarDate className='mr-3' />
                            <p className="text-gray-500">
                                Oct 2018 - Feb 2022
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <GoLocation className='mr-3' />
                            <p className="text-gray-400">Erlangen, Germany</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className='text-3xl md:text-5xl font-sourcecode tracking-tighter
                border-b-2 w-fit border-red-600 dark:border-red-800 mb-4'>Job History</h2>
                <ul>
                    <li className='list-item w-fit mb-4'>
                        <h3 className="md:text-xl">IT Assitant </h3>
                        <div className='flex flex-row items-center'>
                            <IoBusinessSharp className='mr-3' />
                            <p>Friedrich-Alexander University</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <BsCalendarDate className='mr-3' />
                            <p className="text-gray-500">
                                Dec 2018 - Feb 2022
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <GoLocation className='mr-3' />
                            <p className="text-gray-400">Erlangen, Germany</p>
                        </div>
                    </li>
                    <li className='list-item w-fit mb-4'>
                        <h3 className="md:text-xl">Software Developer</h3>
                        <div className='flex flex-row items-center'>
                            <IoBusinessSharp className='mr-3' />
                            <p>Insevis GmbH</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <BsCalendarDate className='mr-3' />
                            <p className="text-gray-500">
                                Mar 2022 - May 2022
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <GoLocation className='mr-3' />
                            <p className="text-gray-400">Erlangen, Germany</p>
                        </div>
                    </li>
                    <li className='list-item w-fit mb-4'>
                        <h3 className="md:text-xl">IT Technical Specialist</h3>
                        <div className='flex flex-row items-center'>
                            <IoBusinessSharp className='mr-3' />
                            <p>IBM Deutschland GmbH</p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <BsCalendarDate className='mr-3' />
                            <p className="text-gray-500">
                                Jul 2022 - Present
                            </p>
                        </div>
                        <div className='flex flex-row items-center'>
                            <GoLocation className='mr-3' />
                            <p className="text-gray-400">Erlangen, Germany</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}