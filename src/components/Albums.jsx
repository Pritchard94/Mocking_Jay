import bar1 from '../assets/bars.svg'
import bar2 from '../assets/bars2.svg'
import first from '../assets/First.svg'
import rema from '../assets/Rema.svg'
import blanc from '../assets/blanc.svg'
import way from '../assets/way.svg'
import dif from '../assets/dif.svg'
import miss from '../assets/miss.svg'
import numb from '../assets/numb.svg'
import tooley from '../assets/brokeasf.svg'

const Albums = () => {
  return (
    <div className='mt-10 px-[30px]  lg:px-[80px]'>
        <div className='flex items-center border-b-4 border-[#F20A0A] justify-between'>
            <h6>Music</h6>
            <div className='flex items-center pb-2'>
                <img className='w-[20px]' src={bar1} alt='bar'/>
                <img className='ml-3 w-[20px]' src={bar2} alt ='bar2'/>
            </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 md:gap-10 mt-4'>
            <div className='relative'>
                <img src={first} alt='first'/>               
                <p className='absolute top-[85%]  text-white text-[8px] md:text-white lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px]'>Abby Jasmine - "First Day Out"</p>
            </div>
            <div className='relative'>
                <img src={rema} alt='rema'/>               
                <p className='absolute top-[85%] text-white text-[8px] lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px]'>Bad Gyal - "44"</p>
            </div>
            <div className='relative'>
                <img src={blanc} alt='blanco'/>               
                <p className='absolute top-[85%] text-white text-[8px] lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px]'>Benny Blanco - "Found You"</p>
            </div>
            <div className='relative'>
                <img src={way} alt='way out'/>               
                <p className='absolute top-[85%] text-white text-[8px] lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px]'>Contradash - "Way Out"</p>
            </div>
            <div className='relative'>
                <img src={dif} alt='difference'/>               
                <p className='absolute top-[85%] text-white lg:text-[20px] bg-[#222222a2] w-full text-center  lg:py-3 py-[3px] text-[8px]'>Co Cash - "Difference"</p>
            </div>
            <div className='relative'>
                <img src={miss} alt='missing'/>               
                <p className='absolute top-[85%] text-white lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px] text-[8px]'>Kitty Cash - "Missing You"</p>
            </div>
            <div className='relative'>
                <img src={tooley} alt='brokeasf'/>               
                <p className='absolute top-[85%] text-white lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px] text-[8px]'>BrokeASF - "Tooley"</p>
            </div>
            <div className='relative'>
                <img src={numb} alt='numb'/>               
                <p className='absolute top-[85%] text-white lg:text-[20px] bg-[#222222a2] w-full text-center lg:py-3 py-[3px] text-[8px]'>Brianna Castro - "Numb"</p>
            </div>

        </div>
      
    </div>
  )
}

export default Albums
