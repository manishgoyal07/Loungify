import React from 'react';
import Navbar from '../Navbar/navbar'

const AboutUs = () => {
    return (
        <>
        <div className='flex flex-col items-center'>
            <h1 class="my-4 text-3xl flex flex-col justify-center font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">About the Creators</span></h1>
            <div class="flex flex-wrap justify-around">

                <div className="max-w-xl m-8 p-8 sm:flex w-full sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    {/* <div className="flex-shrink-0 w-full mx-8 mb-6 h-64 sm:h-44 sm:w-44 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div> */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-3xl font-semibold">Harsan Singh</h2>
                            <a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">Developer</a>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center mb-4 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="my-2 w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">singhharsan@gmail.com</span>
                            </span>
                            <div>
                                <button type="button" class="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LinkedIn</button>
                                <button type="button" class="focus:outline-none mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl m-8 p-8 sm:flex w-full sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    {/* <div className="flex-shrink-0 w-full mx-8 mb-6 h-64 sm:h-44 sm:w-44 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div> */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-3xl font-semibold">Ishaan Rawat</h2>
                            <a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">Developer</a>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center mb-4 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="my-2 w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">ishaan.rawat.ishu@gmail.com</span>
                            </span>
                            <div>
                                <button type="button" class="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LinkedIn</button>
                                <button type="button" class="focus:outline-none mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl m-8 p-8 sm:flex w-full sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    {/* <div className="flex-shrink-0 w-full mx-8 mb-6 h-64 sm:h-44 sm:w-44 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div> */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-3xl font-semibold">Manish Goyal</h2>
                            <a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">Developer</a>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center mb-4 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="my-2 w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">manishgoyalbsr7@gmail.com</span>
                            </span>
                            <div>
                                <button type="button" onClick='https://www.linkedin.com/in/manish-goyal-47b454209/' class="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LinkedIn</button>
                                <button type="button" class="focus:outline-none mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Github</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-xl m-8 p-8 sm:flex w-full sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                    {/* <div className="flex-shrink-0 w-full mx-8 mb-6 h-64 sm:h-44 sm:w-44 sm:mb-0">
                        <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                    </div> */}
                    <div className="flex flex-col space-y-4">
                        <div>
                            <h2 className="text-3xl font-semibold">Ishu Malik</h2>
                            <a href="#" class="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 inline-flex items-center justify-center">UI Designer</a>
                        </div>
                        <div className="space-y-1">
                            <span className="flex items-center mb-4 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="my-2 w-4 h-4">
                                    <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                                </svg>
                                <span className="dark:text-gray-400">ishum276@gmail.com</span>
                            </span>
                            <div>
                                <button type="button" class="text-white mx-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">LinkedIn</button>
                                <button type="button" class="focus:outline-none mx-2 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Github</button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </div>
        </>

    )
}

export default AboutUs