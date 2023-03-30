import React from 'react'
import brands from '../assets/brands.svg'

const Brands = () => {
  return (
    <div className='px-[30px] py-[30px] md:py-[50px] flex justify-center'>
        <img src={brands} alt='brand'/>
      
    </div>
  )
}

export default Brands
