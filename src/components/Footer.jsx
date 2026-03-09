import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#10133C] w-full h-full md:px-24 md:py-12 px-6 py-10 flex md:flex-row flex-col justify-between'>

      {/* left */}
      <div className='flex flex-col md:justify-around md:gap-0 gap-8 items-center'>
        <div><img className='' src="/imgsky/layer-2white.png" alt="" /></div>
        <div className='flex flex-col gap-4'>
          <p className='text-center text-[#F38831] roboto-condensed-regular text-[15px] uppercase'>follow us</p>
          <div className='flex md:gap-1 gap-2'>
            <a href="https://www.meta.com/in/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/meta.png" alt="" /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/insta.png" alt="" /></a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/x_twit.png" alt="" /></a>
            <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/linikin.png" alt="" /></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/utube.png" alt="" /></a>
            <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer"><img className='bg-white rounded-full p-1.5 object-center' src="/imgsky/pin.png" alt="" /></a>
          </div>
        </div>
      </div>

      {/* right */}

      <div className='md:w-[50%] w-full flex md:flex-row flex-col md:pt-0 pt-10 justify-between'>

      {/* add. */}
      <div className='roboto-condensed-regular text-white gap-3.75  text-[13px]
      flex md:flex-col flex-row text-start md:items-start items-center flex-wrap'>
        <p className='roboto-condensed-semibold text-[#F38831] md:py-4 py-0 text-[15px] uppercase '>addres</p>
        <p>Skyline</p>
        <p className='hidden md:block'>Ground Floor, Door No. 16/2, <br />
          Thiruveethi Amman Koil Street, <br /> 
          Koyambedu, Chennai 600107</p>
        <p className='hidden md:block' >Email :</p>
        <p> info@skylinepropertys.com</p>
        <p className='md:pl-0 pl-17'>phone :</p>
        <p className='md:pl-0 '> +91 97899 44999</p>
      </div>
       
      {/* Q-link */}
      <div className='roboto-condensed-regular text-white text-[13px]
      gap-3.75 flex md:flex-col flex-row text-start md:items-start items-center'>
        <p className='roboto-condensed-semibold py-4 text-[#F38831] uppercase text-[15px] '>quick link</p>
        <Link to={'/'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> <p> home</p></Link>
        <Link to={"/about"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> <p>about us</p></Link>
        <Link to={'/project'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> <p>project</p></Link>
        <Link to={'/contact'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}> <p>contact us</p></Link>
      </div>

      {/* prj */}
      <div className='roboto-condensed-regular text-white text-[13px]
      gap-3.75 flex md:flex-col flex-row text-start md:items-start items-center'>
        <p className='roboto-condensed-semibold text-[#F38831] uppercase py-4 text-[15px] '>ongoing projects</p>
        <Link to={"/aavas"}><p>Aavas</p> </Link>
        <Link to={"/siruvapuri"}><p>siruvapuri Gardens</p></Link>
      </div>

      </div>

    </div>
  )
}

export default Footer