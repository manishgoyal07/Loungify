import React, { useEffect, useState } from 'react';
import './App.css';
import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import AboutUs from './About'
import { useSelector } from 'react-redux';


export default function Home() {

  const loginStatus = useSelector(store => store.user.isUserLoggedIn)
  const [showModalStatus, setShowModalStatus] = useState(false);


  return (
    <>
      <div className="home-page">
        <Navbar />

        <div className='bg-img'>

        </div>
        <div className="middle-section">
          <div className='brand  font-bold dark:text-white md:text-5xl lg:text-6xl'>
            Loungify
          </div>
          <div className='description'>
            Discover a world of Excitement and fun with Loungify, Your Online Oasis For Relaxation & Tranquility.
            <br /><br />
            {(!loginStatus) ? <button type="button" class="home-page-btn" onClick={() => setShowModalStatus(!showModalStatus)}>Explore</button> :
              <button type="button" class="home-page-btn"><Link to="/landing">Explore</Link></button>
            }
          </div>
          {(!showModalStatus) ? <></> : (<div id="alert-border-1" class="flex items-center my-8 p-4 mb-4 text-blue-800 border-t-4 border-blue-300 bg-blue-50 dark:text-blue-400 dark:bg-gray-800 dark:border-blue-800" role="alert">
            <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <div class="ms-3 text-sm font-medium">
              To Explore, You must Log in First!
            </div>
            <button type="button" onClick={() => setShowModalStatus(!showModalStatus)} class="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-1" aria-label="Close">
              <span class="sr-only">Dismiss</span>
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>)}
        </div>

      </div>
    </>
  )
}
