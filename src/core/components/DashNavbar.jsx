import React from 'react';

const DashNavbar = () => {
  return (
    <nav className='py-2.5 dark:bg-rose-100 mb-8'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex items-center mb-2 md:mb-0'> {/* Modified */}
          <p className='text-white-950 text-sm md:text-xl font-semibold'>
            Hello User 👋,
          </p>
        </div>
        <div className=''>
          <form action='#' method='GET' className='w-full md:w-auto lg:pl-2'> {/* Modified */}
            <label htmlFor='topbar-search' className='sr-only'>
              Search
            </label>
            <div className='relative mt-1'>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-4 h-4 text-rose-500 dark:text-rose-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 20'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                  />
                </svg>
              </div>
              <input
                type='text'
                name='email'
                id='topbar-search'
                className='bg-white text-black-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Search'
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
