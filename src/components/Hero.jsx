import React from 'react'
import mic from '../assets/mic.svg'

const Hero = () => {
  return (
    <div className='bg-[#0D0D0D] grid w-full justify-center md:flex md:gap-20 px-[30px] md:py-[150px]'>
        <div className='w-full md:w-[474px] mt-8'>
            <h2 className='text-white text-[30px] md:text-[60px] font-[700]'>
                When words fail,<span className='text-[#F20A0A]'>Music</span>speaks.
            </h2>
            <p className='text-white text-[15px] md:text-[40px] font-[300] italic mt-[30px]'>
                This is the home of music!
            </p>
            <button className='bg-white text-[#F20A0A] px-[40px] py-[10px] font-[700] md:text-[30px] mt-[30px] rounded-lg'>
                Book an Artiste
            </button>
        </div>
        <div>
            <img src={mic} alt='mic'/>
        </div>
      
    </div>
  )
}

export default Hero
