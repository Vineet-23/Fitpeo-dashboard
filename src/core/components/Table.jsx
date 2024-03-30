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
        'data:image/png;base64,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',
      stock: 30,
      price: 54.59,
      total: 39
    }
  ];

  return (
    <div className='mt-8 bg-white rounded-md px-6 py-4'>
      <div className='flex flex-wrap justify-between items-center mb-8'>
        <h3 className='text-black-900 text-left text-xl font-semibold'>
          Product Sell
        </h3>
        <form className='lg:pl-2'>
          <div className='flex items-center gap-2'>
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
                id='table-search'
                className='bg-rose-100 text-rose-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block text-left pl-9 p-2.5 outline-none dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Search'
              />
            </div>

            <div>
              <select
                id='days'
                defaultValue='30'
                className='bg-rose-100 text-rose-900 text-sm rounded-lg outline-none block w-full p-2.5 dark:bg-rose-700 dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option className='text-left' value='30' selected>
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
                  className='bg-black dark:bg-black-800 dark:border-black-700 text-sm'
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
                    className='py-2 font-medium text-black-900 whitespace-nowrap dark:text-white'
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
