import React from 'react'
import Image2 from '../assets/micB.svg'

const Banner2 = () => {
  return (
    <div className='grid md:grid-cols-2 px-[30px] gap-4 py-[30px] lg:px-[80px]'>
        <div>
            <h2 className='text-[20px] font-medium md:mt-[50px] lg:mt-[40px] lg:text-[30px]'>
                 We license, distribute and publish rich musiccal
                content for artistes, song writers and producers.
            </h2>
            <p className='text-[12px] mt-4 text-left lg:text-[16px]'>
                We have a transparent structure ensuring that revenues
                made through content distribution get to these artistes,
                producers and songwriters as due them.

                We are a music company that is more artistic with extra
                support that ensures result for our signed talents.
            </p>
            <button className='bg-black text-white px-[10px] py-[6px] border-none rounded-lg mt-3 '>
                    Learn more
            </button>
        </div>
        <div className='flex items-center md:order-first'>
            <img src={Image2} alt='mic'/>
        </div>
    </div>
  )
}

export default Banner2
