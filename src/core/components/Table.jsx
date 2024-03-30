import React, { useId } from 'react';

const Table = () => {
  const uid = useId();
  const salesData = [
    {
      title: 'Abstract 3D',
      description: 'description about Abstract 3D',
      image:
        'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8cd0f126236951.5635357783b33.png',
      stock: 32,
      price: 45.99,
      total: 20
    },
    {
      title: 'Sarphens illustration',
      description: 'description about Sarphens illustration',
      image:
        'https://thumbs.dreamstime.com/b/young-doctor-vector-illustration-65642526.jpg',
      stock: 30,
      price: 54.59,
      total: 39
    }
  ];

  return (
    <div className='mt-8 bg-white rounded-md px-6 py-4'>
      <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
        <h3 className='text-black-900 text-left text-xl font-semibold'>
          Product Sell
        </h3>
        <form className='lg:pl-2 w-full md:w-auto'>
          <div className='flex flex-col md:flex-row md:items-center md:gap-2'>
            <div className='relative'>
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
                id='table-search'
                className='bg-rose-100 text-rose-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 w-full' // Modified width to be full width
                placeholder='Search'
              />
            </div>

            <div className='relative mt-2 md:mt-0'>
              <select
                id='days'
                defaultValue='30'
                className='bg-rose-100 text-black-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-rose-200 dark:border-rose-200 dark:placeholder-rose-400 dark:text-black dark:focus:ring-rose-500 dark:focus:border-rose-500' // Modified width to be full width
              >
                <option className='text-left' value='30'>
                  Last 30 days
                </option>
                <option className='text-left' value='15'>
                  Last 15 days
                </option>
                <option className='text-left' value='7'>
                  Last 7 days
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>

      <article>
        <div className='relative overflow-x-auto'>
          <table className='w-full'>
            <thead className='text-black-600 text-sm border-b'>
              <tr>
                <th colSpan={2} scope='col' className='font-medium text-left'>
                  Product Name
                </th>
                <th scope='col' className='font-medium'>
                  Stock
                </th>
                <th scope='col' className='font-medium'>
                  Price
                </th>
                <th scope='col' className='font-medium'>
                  Total Sales
                </th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((product, index) => (
                <tr
                  key={index}
                  className='bg-white dark:bg-white-800 dark:border-white-700 text-sm text-black'
                >
                  <td className='py-2 w-auto md:w-20'>
                    <img
                      src={product.image}
                      alt={product.title}
                      loading='lazy'
                      className='rounded-md'
                    />
                  </td>
                  <td
                    colSpan={1}
                    scope='row'
                    className='py-2 font-medium text-black-900 whitespace-nowrap dark:text-black'
                  >
                    <div className='flex flex-col ml-4'>
                      <p className='text-md text-black-900 text-left font-semibold'>
                        {product.title}
                      </p>
                      <p className='text-xs text-rose-400 text-left'>
                        {product.description}
                      </p>
                    </div>
                  </td>
                  <td className='py-2'>{product.stock} in stock</td>
                  <td className='py-2 font-semibold'>$ {product.price}</td>
                  <td className='py-2'>{product.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>
    </div>
  );
};

export default Table;
