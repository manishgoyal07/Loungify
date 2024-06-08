import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const initialTime = 15*60; // 10 minutes in seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [message, setMessage] = useState('Your Time is Running');
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timer;

    if (isRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setMessage('Time is up!');
      setIsRunning(false);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning, timeRemaining]);

  const handleStart = () => {
    setIsRunning(true);
    setMessage('Your Time is Running');
    setTimeRemaining(initialTime);
  };

  const handleReset = () => {
    setIsRunning(false);
    setMessage('Start the Timer');
    setTimeRemaining(initialTime);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <nav class="bg-white dark:bg-gray-900 fixed w-full top-0 start-0 m-1/5 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{formatTime(timeRemaining)}</span>
        </a>
        <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {!isRunning && (
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleStart}>Start</button>
          )}
          {isRunning && (
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleReset}>Reset</button>
          )}
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" class="text-2xl py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-red-500" aria-current="page">{message}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
