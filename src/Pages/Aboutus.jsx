import React from 'react'
import Nav from '../components/Nav'
import Props from '../components/Props'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

const Aboutus = () => {
  return (
    <div>
      <Nav />

      <div>
        <img className='h-133 w-full object-center object-cover' src="/imgsky/aboutpg.jpg" alt="" />
      </div>

      {/* about_sky */}
      <div className='px-15 flex flex-col items-center gap-8 pt-18 '>
        <p className='text-[24px] items-center roboto-condensed-bold text-[#10133C]'> <span className=' text-[#F38831]'>About</span> Skyline</p>
        <p className='text-[16px] roboto-condensed-regular text-center'>At Skyline Properties, we go beyond traditional development. We are asset creators who see every piece of land as a canvas for a future legacy. We are committed to building projects that are not only 
          beautiful but also financially sound. This ensures you enjoy immediate quality and see strong long-term value. Our foundation is built on transparency and deep expertise. We meticulously plan and 
          execute every project to guarantee clarity, full compliance, and an investment that lasts. With years of experience in the Chennai real estate market, we have earned a reputation for delivering projects 
          that combine aspirational living with smart investing. Skyline Properties is committed to creating spaces that inspire today and endure for generations to come.
        </p>
      </div>

      {/* goals */}
      <div className=' bg-[#F7F7F7] mt-18 flex flex-col items-center pb-8'>
        <p className='text-[24px] items-center roboto-condensed-bold text-[#10133C] pt-12 md:pb-24 pb-10'><span className=' text-[#F38831]'> Setting Our Sights:</span> The Skyline Vision</p>
        

        <div className='flex md:flex-row flex-col md:gap-6 gap-6'>
        {/* 1 */}
        <div className='lg:h-117 md:120 h-110 lg:w-101 md:w-80 w-80 rounded-3xl overflow-hidden shadow-[0px_0px_10px_rgba(0,0,0,1)]
        py-4 flex flex-col items-center gap-6'>

          <div className='rounded-full overflow-hidden w-53 h-53 flex flex-col '>
            <img src="/imgsky/mission.jpg" alt="" />
          </div>

          <p className='tex-[15px] py-2  w-27 text-center rounded-sm bg-[#F4D88E] roboto-condensed-regular'>Misson</p>

          <p className='roboto-condensed-regular text-[14px] px-6 text-center'>To be recognized as Chennai's most trusted and value-centric developer, 
            synonymous with quality, uncompromising compliance, and lasting customer relationships.</p>
        </div>

        {/* 2 */}
        <div className='lg:h-117 md:120 h-110 lg:w-101 md:w-80 w-80 rounded-3xl overflow-hidden shadow-[0_0_10px_rgba(0,0,0,1)] py-4
        flex flex-col items-center gap-6'>

          <div className='rounded-full overflow-hidden w-53 h-53 flex flex-col '>
            <img className='r' src="/imgsky/vision.png" alt="" />
          </div>

          <p className='tex-[15px] py-2  w-27 text-center rounded-sm bg-[#F4D88E] roboto-condensed-regular'>Vision</p>

          <p className='roboto-condensed-regular text-[14px] px-6 text-center'>
            To consistently deliver value-driven, transparently managed real estate projects that facilitate 
            wealth creation and fulfill the dream of property ownership for every client.</p>
        </div>
        </div>
      </div>

      {/* process */}
      <div className='md:pt-0 pt-12 md:px-0 px-8 border-t-2 border-b-2 border-r  rounded-tl-3xl rounded-tr-[320px] border-[#F38831] text-center w-full mb-14 bg-[#F7F7F7]'>

      <div className='flex flex-col gap-8 pt-12'>
        <p className='text-[24px] items-center roboto-condensed-bold text-[#10133C]'><span className='text-[#F38831] '>The Skyline Process:</span> Transparency in Action</p>
        <p className='lg:text-[16px] md:text-[12px] items-center roboto-condensed-semibold text-[#10133C]'>Our systematic approach guarantees excellence and peace of mind at every stage, providing the security our clients deserve:</p>
      </div>

      <div className='flex md:flex-row justify-center  md:flex-wrap flex-col items-center pt-8 md:scale-90 scale-90 md:pb-14 md:gap-4 gap-6'> 

        <Props
        logo={"/imgsky/ABT_1.png"}
        head={"Strategic Acquisition"}
        para={" Rigorous evaluation and due diligence on locations with high potential for infrastructure development and capital appreciation. We invest only where the future is growing."}/>

        <Props
        logo={"/imgsky/ABT_1.png"}
        head={"RERA-First Planning"}
        para={": Detailed layout design and securing all RERA and government approvals with zero compromise on legal sanctity. Your investment safety is non-negotiable."}/>

        <Props
        logo={"/imgsky/ABT_1.png"}
        head={"Development Excellence"}
        para={" Implementing superior quality standards in ground infrastructure, including robust roads, effective drainage, and essential utilities, guaranteeing the long-term reliability and livability of your property."}/>

        <Props
        logo={"/imgsky/ABT_1.png"}
        head={"Seamless Handover"}
        para={" Providing clear titles, smooth transfer processes, and comprehensive sales support that extends beyond the point of registration, ensuring a hassle-free ownership experience."}/>
      </div>  
      </div>

      <Contact/>

      <Footer/>

    </div>
  )
}

export default Aboutus