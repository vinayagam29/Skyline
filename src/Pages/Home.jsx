import React from 'react'
import Nav from '../components/Nav'
import Cards from '../components/Cards'
import Properties from '../components/Properties'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>

      <Nav />

      {/* hero */}
      <div>
        <img src="/imgsky/hero1.png" alt="" />
      </div>

      {/* h-content */}
      <div className='flex flex-col items-center justify-center md:px-25 px-10 mt-16 gap-8'>
        <p className='text-[24px]  roboto-condensed-bold text-[#F38831]'>Your Journey <span className='text-[#10133C]'> to Smart Real Estate Starts Here </span></p>
        <p className='roboto-condensed-regular text-[14px] text-center'>At Skyline Properties, we go beyond traditional development.
           We are asset creators who see every piece of land as a canvas for a future legacy.
            We are committed to building projects that are not only beautiful but also financially sound. 
            This ensures you enjoy immediate quality and see strong long-term value. 
            Our foundation is built on transparency and deep expertise.</p>
      </div>

      {/* cards */}
      <div className='flex w-full flex-col gap-8.5 items-center justify-center mt-15'>
        <p className='text-[24px] roboto-condensed-bold text-[#07083F] ' > <span className='text-[#F38831]'>Featured </span> Developments</p>
        <div className='flex md:flex-row flex-col gap-12'>
          
          <Link to={"/aavas"}>
          <Cards 
          src={"/imgsky/prj0.png"}
          title={"Aavas"}
          loc={"Tondiarpet, Chennai"}
          type={"Villa plots"}
          price={"65"}
          />
          </Link>

          <Link to={"/siruvapuri"}>
          <Cards 
          src={"/imgsky/prj1.png"}
          title={"Siruvapuri Gardens"}
          loc={"Siruvapuri"}
          type={"villa plots"}
          price={"39"}
          />
          </Link>
        </div>
        </div>

        {/* prop */}
        <div className='mt-18 justify-center items-center flex flex-col gap-6 w-full mb-16 '>
          <p className='text-[24px] text-center roboto-condensed-bold text-[#07083F] tracking-normal'>why choose <span className='text-[#F38831]'>skyline?</span></p>

          <div className='flex md:flex-row flex-wrap flex-col justify-center items-center md:gap-4 gap-6 md:scale-90 scale-85'>
            <Properties
            logo={"/imgsky/object01.png"}
            head={"Financial Foresight"}
            para={"We selected sites based on rigorous research into future growth patterns, ensuring our properties are positioned for maximum asset appreciation."} />

            <Properties 
            logo={"/imgsky/obj02.png"}
            head={"Unwavering Compliance"}
            para={"Every development is fully RERA-compliant with clear, verified titles. We eliminate uncertainty and ensure absolute legal safety."}
            />

            <Properties 
            logo={"/imgsky/obj03.png"}
            head={"Quality Infrastructure"}
            para={"Every development is fully RERA-compliant with clear, verified titles. We eliminate uncertainty and ensure absolute legal safety."}
            />
          </div>
        </div>

      {/* c-sec */}
      <Contact />

      {/* footer */}
      <Footer />

      </div>
    
  )
}

export default Home