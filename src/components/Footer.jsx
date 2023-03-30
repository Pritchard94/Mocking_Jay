import React from 'react'
import logo2 from '../assets/logo2.svg'

const Footer = () => {
  return (
    <div className='flex-col justify-center w-full mt-[60px]'>
        <div className='text-center px-[30px] mb-5'>
            <h3 className='text-[12px] md:text-[16px]'>
                You can reach us right away. Let’s begin your project.
                <span className='text-[#F20A0A]'>Write us a message.</span>
            </h3>
        </div>
        <footer className='bg-black px-[30px] py-[30px] flex items-center gap-8 justify-center lg:justify-evenly'>
            <div>
                <img className='mb-2' src={logo2} alt='logo'/>
                <p className='text-white text-[8px] md:text-[12px] lg:text-[14px] font-light md:w-[366px]'>
                    Mocking by Jay is a major record
                    label that is mostly
                    focused on rap music. We manage loads of different artists
                    and therefore are quite a large company whose image is
                    changing constantly.
                </p>
            </div>
            <div>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Careers</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Contact</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Privacy Policies</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Artist Royalties</p>
            </div>
            <div>
                <p className='text-white text-[10px] font-medium lg:text-[14px]'>Connect</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Linkedin</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Twitter</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Facebook</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Instagram</p>
                <p className='text-white text-[10px] font-light lg:text-[14px]'>Pinterest</p>
            </div>

        </footer>
      
    </div>
  )
}

export default Footer
