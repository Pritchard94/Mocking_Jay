import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='flex justify-between items-center bg-[#F1F6FF] px-[30px] md:px-[30px] lg:px-[80px] py-[20px] w-full'>
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
        
    </header>
  )
}

export default Header
