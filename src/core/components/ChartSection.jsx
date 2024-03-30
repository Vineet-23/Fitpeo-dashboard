import React from 'react';
import Barchart from '../charts/Barchart';
import Donutchart from '../charts/Donutchart';

const ChartSection = () => {
  return (
    <>
      <div className='col-span-2 mt-8 bg-white rounded-md px-6 py-4'>
        <div className='flex flex-col justify-between items-center'>
          <div className='flex justify-between items-center w-full mb-4'>
            <div>
              <h3 className='text-gray-900 text-left text-xl font-semibold'>
                Overview
              </h3>
              <p className='text-gray-400 text-xs'>Monthly Earning</p>
            </div>
            <div>
              <select
                id='months'
                defaultValue='3'
                className='bg-rose-100 text-black-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-rose-200 dark:border-rose-200 dark:placeholder-rose-400 dark:text-black dark:focus:ring-rose-500 dark:focus:border-rose-500'
              >
                <option className='text-left' value='3'>Quarterly</option>
                <option className='text-left' value='6'>Half yearly</option>
                <option className='text-left' value='12'>Annually</option>
              </select>
            </div>
          </div>
          <Barchart />
        </div>
      </div>

      <div className='mt-8 grid-cols-3 bg-white rounded-md px-6 py-4'>
        <div className='flex flex-col justify-between items-center'>
          <div className='w-full mb-4'>
            <h3 className='text-gray-900 text-left text-xl font-semibold'>
              Customers
            </h3>
            <p className='text-gray-400 text-xs text-left'>
              Customers that buy products
            </p>
          </div>
          <Donutchart />
        </div>
      </div>
    </>
  );
};

export default ChartSection;
