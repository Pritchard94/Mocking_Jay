import {React, useState } from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Header = () => {
    const [nav, setNav] = useState(true)
    const clickMe = () =>{
      setNav(!nav)
    }

  return (
    <header className='flex fixed z-[100] justify-between items-center bg-[#F1F6FF] px-[30px] md:px-[30px] lg:px-[80px] py-[20px] w-full'>
        <img src={logo} alt="logo"/>
        <nav className='md:flex items-center hidden md:gap-10 lg:gap-20'>
        <ul className='flex gap-8 text-black'>
            <li className='border-b-4 border-[#F20A0A] cursor-pointer'><Link to='/'>HOME</Link></li>
            <li className='cursor-pointer'><Link to="/artistes">ARTISTE</Link></li>
            <li className='cursor-pointer'><Link to='/music'>MUSIC</Link></li>
            <li className='cursor-pointer'><Link to='/videos'>VIDEOS</Link></li>
        </ul>
        <button className='text-[#F20A0A]'>BOOK A SESSION</button>
        </nav>
        <div className='md:hidden'onClick={clickMe}>
            {nav ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>}
        </div>
        {/* drop down */}
        <div   className={!nav ? "fixed bg-[#F1F6FF] top-[70px] h-full p-10 right-0 w-fit ease-out duration-500" : "fixed -right-[100%]"}>
          <ul className='grid gap-8 text-black text-center'>
              <li className='cursor-pointer border-b-2'><Link to='/'>HOME</Link></li>
              <li className='cursor-pointer border-b-2'><Link to="/artistes">ARTISTE</Link></li>
              <li className='cursor-pointer border-b-2'><Link to='/music'>MUSIC</Link></li>
              <li className='cursor-pointer border-b-2'><Link to='/videos'>VIDEOS</Link></li>
          </ul>
          <button className='text-[#F20A0A] mt-[32px]'>BOOK A SESSION</button>
        </div>
        
        
    </header>
  )
}

export default Header
