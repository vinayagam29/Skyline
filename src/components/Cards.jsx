import React from 'react'

const Cards = ({src,title,loc,type,price}) => {
  return (
    <div className='lg:h-136 md:120 h-110 lg:w-100 md:w-80 w-80 rounded-3xl overflow-hidden shadow-xl shadow-black/30'>

      <div className='flex relative lg:h-95 md:h-70 h-70 '>
        <img className='object-cover object-center ' src={src} alt="" />
        <p className='absolute bottom-0 w-full bg-black/40 text-white roboto-condensed-regular text-[24px] tracking-normal py-1.5 pl-2'>{title}</p>
      </div>

      <div className='w-full flex flex-col  gap-4 py-3 pl-3.75 roboto-condensed-regular
        bg-[url(/imgsky/Image.png)]  bg-top-right bg-cover'>
        <p className='flex items-center gap-4'> <img className='scale-90 pr-2' src="/imgsky/location.png" alt="" /> {loc}</p>
        <p className='flex items-center gap-4'> <img className='scale-90 pr-2' src="/imgsky/villa.png" alt=""  />{type}</p>
        <p className='flex gap-4'> <img className='scale-90 pr-2' src="/imgsky/rupees.png" alt="" />Rs. {price}L* Onwards</p>
        <div className='flex items-center gap-5'>
          <p className='flex gap-2 pr-4 border-r-2 justify-center items-center border-[#F38831]'> <img className='h-4 w-4' src="/imgsky/right.png" alt="" />Know More</p>
          <p className='flex gap-2 justify-center items-center'> <img className='h-4 w-4' src="/imgsky/downward.png" alt="" />Download Brochure</p>
        </div>
      </div>
    </div>
  )
}

export default Cards