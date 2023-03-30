import image1 from '../assets/img1.svg'

const Banner = () => {
  return (
    <div className='grid md:grid-cols-2 px-[30px] gap-5 py-[20px] lg:px-[80px]'> 
        <div className='flex-col items-center md:mt-[50px] lg:mt-[40px]'>
            <h2 className='text-[20px] font-medium lg:text-[30px]'>
                We are home to the very best talents 
                & artistes, leading the  music industry.
            </h2>
            <p className='text-[12px] mt-4 text-left lg:text-[16px]'>
                Mocking by Jay has maintained a strong and innovative
                push to promote capacity building and creativity that
                showcase the richness and diversity of the Music
                culture via story-telling.
            </p>
            <button className='bg-black text-white px-[10px] py-[6px] border-none rounded-lg mt-3 '>
                Learn more
            </button>
        </div>
        <div className='flex items-center'>
            <img src={image1} alt='image'/>
        </div>
      
    </div>
  )
}

export default Banner
