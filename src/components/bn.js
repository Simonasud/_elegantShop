const Banner = () => {
  return (
    <div className='bg-yellow-200'>
      <div className='max-w-md mx-auto'>
        <h3 className='text-xl font-semibold text-blue-500 pl-3 pr-3 pt-2 pb-2'>
          PROMOTION
        </h3>
        <h1 className='text-3xl font-bold text-gray-900 mb-4 pl-3 pr-3'>
          Hurry up! 40% OFF
        </h1>
        <p className='text-gray-700 mb-4 pl-3'>
          Thousands of high tech are waiting for you
        </p>

        <div className='flex flex-col md:flex-row-reverse justify-between mb-4'>
          <div className='mb-4 pl-3'>
            <h3 className='mr-2 mb-4'>Offer expires in:</h3>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-2'>
                <div className='mr-2 mb-6 mt-4'>
                  <span className='font-bold bg-white  text-3xl p-4' id='days'>
                    02
                  </span>{' '}
                  <p className='mt-4 text-sm'>Days</p>
                </div>
                <div className='mr-2 mb-6 mt-4'>
                  <span className='font-bold bg-white  text-3xl p-4' id='hours'>
                    12
                  </span>{' '}
                  <p className='mt-4 text-sm'>Hours</p>
                </div>
                <div className='mr-2 mb-6 mt-4'>
                  <span
                    className='font-bold bg-white  text-3xl p-4'
                    id='minutes'
                  >
                    45
                  </span>{' '}
                  <p className='mt-4 text-sm'>Minutes</p>
                </div>
                <div className='mr-2 mb-6 mt-4'>
                  <span
                    className='font-bold bg-white  text-3xl p-4'
                    id='seconds'
                  >
                    45
                  </span>{' '}
                  <p className='mt-4 text-sm'>Seconds</p>
                </div>
              </div>
            </div>
          </div>
          <div className='md:mb-0 md:ml-2'>
            <button className='bg-black w-36 text-base text-white px-4 py-2 rounded border-2 border-black hover:bg-gray-800'>
              Shop now
            </button>
          </div>
        </div>
      </div>
      <div className='md:flex md:items-end'>
        <img
          className='h-48 w-full md:h-full md:w-48 object-cover md:object-contain mx-auto md:mb-0'
          src='/img/Image Placeholder.jpg'
          alt='Modern building architecture'
        />
      </div>
    </div>
  );
};

export default Banner;
