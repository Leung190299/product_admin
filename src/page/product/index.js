import { Link } from 'react-router-dom';
const Product = () => {

  return (
    <main className='h-full pb-16 overflow-y-auto'>
      <div className='container grid px-6 mx-auto'>
        <h2 className='my-6  text-2xl font-semibold text-gray-700 dark:text-gray-200'>
          Sản Phẩm
        </h2>

        <div className='w-full overflow-hidden  shadow-xs'>
          <Link to='create' className='px-3 inline-block py-2 bg-purple-600 text-white font-bold rounded-lg mb-3'>
            +Thêm
          </Link>
          <div className='w-full overflow-x-auto'>
            <table className='w-full whitespace-no-wrap'>
              <thead>
                <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                  <th className='px-4 py-3'>Tên </th>
                  <th className='px-4 py-3'>Ảnh</th>
                  <th className='px-4 py-3'>Trạng thái</th>
                  <th className='px-4 py-3'>Giá</th>
                  <th className='px-4 py-3'>Chức năng</th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
                <tr className='text-gray-700 dark:text-gray-400'>
                  <td className='px-4 py-3'>
                    <div className='flex items-center text-sm'>
                      <p className='font-semibold'>Hans Burger</p>
                    </div>
                  </td>
                  <td className='px-4 py-3 text-sm'>
                    <div className='relative hidden w-10 h-10 mr-3 md:block'>

                    <img
                      className='object-cover w-full h-full'
                      src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
                      alt=''
                      loading='lazy'
                    />
                  </div>
                  </td>
                  <td className='px-4 py-3 text-xs'>
                    <span className='px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100'>
                     Còn hàng
                    </span>
                  </td>
                  <td className='px-4 py-3 text-sm'>300.000.000vnd</td>
                  <td className='px-4 py-3'>
                    <div className='flex items-center space-x-4 text-sm'>
                      <button
                        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                        aria-label='Edit'
                      >
                        <svg
                          className='w-5 h-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
                        </svg>
                      </button>
                      <button
                        className='flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray'
                        aria-label='Delete'
                      >
                        <svg
                          className='w-5 h-5'
                          aria-hidden='true'
                          fill='currentColor'
                          viewBox='0 0 20 20'
                        >
                          <path
                            fillRule='evenodd'
                            d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          <div className='grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
            <span className='flex items-center col-span-3'>
              Showing 21-30 of 100
            </span>
            <span className='col-span-2' />
            <span className='flex col-span-4 mt-2 sm:mt-auto sm:justify-end'>
              <nav aria-label='Table navigation'>
                <ul className='inline-flex items-center'>
                  <li>
                    <button
                      className='px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple'
                      aria-label='Previous'
                    >
                      <svg
                        className='w-4 h-4 fill-current'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                      >
                        <path
                          d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                          clipRule='evenodd'
                          fillRule='evenodd'
                        />
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      1
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      2
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      3
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      4
                    </button>
                  </li>
                  <li>
                    <span className='px-3 py-1'>...</span>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      8
                    </button>
                  </li>
                  <li>
                    <button className='px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'>
                      9
                    </button>
                  </li>
                  <li>
                    <button
                      className='px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple'
                      aria-label='Next'
                    >
                      <svg
                        className='w-4 h-4 fill-current'
                        aria-hidden='true'
                        viewBox='0 0 20 20'
                      >
                        <path
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                          fillRule='evenodd'
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </nav>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;