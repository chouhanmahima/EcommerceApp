import React from 'react'

const FooterTop = () => {
  return (
    <div className='w=full bg-white py-6'>
        <div className='w-full py-8 border-t-[1px] border-b-[1px] '>

            <div className='w-64 mx-auto text-center flex flex-col gap-1'>
                <p className='text-sm'>See personalized recommendations</p>
                <button className='bg-yellow-400 w-full rounded-md py-1 cursor-pointer mt-1 hover:bg-yellow-500 font-titleFont font-semibold'>Sign in</button>
                <p className='text-xs mt-1'>New customer?
                  <span className='text-blue-600 cursor-pointer'> Start here.</span>
                </p>
            </div>

        </div>
    </div>
  );
};

export default FooterTop;