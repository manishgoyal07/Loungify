import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-2">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loungify</span>
                    </a>
                    <div className="flex items-center space-x-8 rtl:space-x-reverse">
                        <a href="#" className="text-sm text-blue-600 dark:text-red-500 font-bold hover:underline">About</a>
                        <a href="#" className="text-sm text-blue-600 dark:text-red-500 font-bold hover:underline">Contact Us</a>
                    </div>
                </div>
            </nav>
            {/* <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-2 mx-auto">0
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Meditate</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Music</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">News</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-900 dark:text-white hover:underline">Games</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
        </div>
    )
}

export default Navbar