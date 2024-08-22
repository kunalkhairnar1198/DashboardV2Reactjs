import { ClockIcon } from '@heroicons/react/24/solid';
import React from 'react';

const SelectDropdown = () => {
  return (
    <div className="flex max-h-10 bg-white">
       <button
          id="hs-split-dropdown"
          type="button"
          className="hs-dropdown-toggle relative -ml-[.3125rem] py-3 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-l-md border border-gray-200 bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
>
          <span className="sr-only">Toggle Dropdown</span>
               <ClockIcon class="h-6 w-6 text-black" />
          </button>
     
      <div className="hs-dropdown relative inline-flex">
      <button
        type="button"
        className="relative py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-r-md border border-gray-200 bg-white text-gray-800 hover:bg-white-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
      >
        Last 2 Days
      </button>

        <div
          className="hs-dropdown-menu w-72 transition-opacity duration-150 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
          aria-labelledby="hs-split-dropdown"
        >
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
          >
            Newsletter
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
          >
            Purchases
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
          >
            Downloads
          </a>
          <a
            className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
            href="#"
          >
            Team Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
