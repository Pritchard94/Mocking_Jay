import search from '../assets/search.svg'
import glass  from '../assets/glass.svg'
import abby from '../assets/Abby.svg'
import biancca from '../assets/Biannca.svg'
import broke from '../assets/Broke.svg'
import aviici from '../assets/Avicci.svg'
import blanco from '../assets/Blanco.svg'
import bad from '../assets/Bad.svg'
import co from '../assets/cash.svg'
import dash from '../assets/dash.svg'
import kitty from '../assets/kitty.svg'



const Search = () => {
  return (
    <div className='mt-10 px-[30px]  lg:px-[80px]'>
        <div className='flex items-center justify-between'>
            <h6>Meet our Top Artistes</h6>
            <img className='hidden md:block' src={search} alt='search'/>
            <img className='md:hidden' src={glass} alt='search'/>  
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 place-items-center gap-5 md:gap-10 mt-4'>
            <div>
                <img src={abby} alt='abby'/>
                <p className='mt-2 text-[12px]'>Abby Jasmine</p>
            </div>
            <div>
                <img src={biancca} alt='biannca'/>
                <p className='mt-2 text-[12px]'>Brianna Castro</p>
            </div>
            <div>
                <img src={aviici} alt='biannca'/>
                <p className='mt-2 text-[12px]'>Aviici</p>
            </div>
            <div>
                <img src={broke} alt='broke'/>
                <p className='mt-2 text-[12px]'>BrokeASF</p>
            </div>
            <div>
                <img src={blanco} alt='Benny Blanco'/>
                <p className='mt-2 text-[12px]'>Benny Blanco</p>
            </div>
            <div>
                <img src={bad} alt='bad gyal'/>
                <p className='mt-2 text-[12px]'>Bad Gyal</p>
            </div>
            <div>
                <img src={co} alt='co cash'/>
                <p className='mt-2 text-[12px]'>Co Cash</p>
            </div>
            <div>
                <img src={dash} alt='contradash'/>
                <p className='mt-2 text-[12px]'>Contradash</p>
            </div>
            <div>
                <img src={kitty} alt='kitty'/>
                <p className='mt-2 text-[12px]'>Kitty Cash</p>
            </div>
           

        </div> 
    </div>
  )
}

export default Search
