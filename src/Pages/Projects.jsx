import React from 'react'
import Nav from '../components/Nav'
import Contact from '../components/Contact'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <Nav />

      <div className='bg-[#10133C] h-62 flex items-center justify-center'>
        <p className=' md:text-[32px] txet-[24px] text-center roboto-condensed-bold bg-linear-to-r from-[#F4D88E] to-[#E4C37A] bg-clip-text text-transparent'>Handpicked Investments. Uncompromised Quality.</p>
      </div>

      {/* crds */}
      <div className='flex w-full flex-col gap-8.5 items-center justify-center mt-15 mb-18'>
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

      <Contact />

      <Footer />  
       
    </div>
  )
}

export default Projects