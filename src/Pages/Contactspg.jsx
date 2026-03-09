import React, { useState } from "react";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Contactspg = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    agree: false
  });

    const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData({
    ...formData,
    [name]: type === "checkbox" ? checked : value
  });
};

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);
  
  return (
    <div>
      <Nav />

      <div className='flex'>
        <img className='object-center object-cover' src="/imgsky/contact.jpg.png" alt="" />
      </div>

      <div className='flex text-center px-12 py-20'>
        <p className='roboto-condensed-semibold text-[16px] '>Whether you are an aspiring homeowner, a strategic investor, or a potential partner, the Skyline team is ready to provide the expertise and support you need. Reach out today and start the conversation about your next property asset</p>
      </div>

      {/* contact_deatails */}

      <div className='flex flex-col justify-center items-center'>
      <div className='flex md:flex-row flex-wrap flex-col lg:w-[90%] gap-4 justify-center items-center'>
        <a href='https://maps.app.goo.gl/sE37PSkvgrWRD4cg6' target='blank' 
        className='flex h-39 md:w-90 w-full p-4 gap-4 shadow-[0px_4px_12px_rgba(0,0,0,0.50)]'>
          <img className='w-fit h-fit' src="/imgsky/Cn_loc.png" alt="" />
          <div className='flex flex-col gap-4'>
            <p className='roboto-condensed-bold text-[20px]'>Corporate Office</p>
            <p className='roboto-condensed-regular text-[16px] '>Ground Floor, Door No. 16/2, <br />
              Thiruveethi Amman Koil Street, <br />
              Koyambedu, Chennai 600107</p>
          </div>
        </a>
        <a href='tel:+918754270612' className='flex  h-39 md:w-90 w-full p-4 gap-4 shadow-[0px_4px_12px_rgba(0,0,0,0.50)]'>
          <img className='w-fit h-fit' src="/imgsky/Cn_dail.png" alt="" />
          <div className='flex flex-col gap-4'>
            <p className='roboto-condensed-bold text-[20px]'>Call Us</p>
            <p className='roboto-condensed-regular text-[16px] '>+91 87542 70612</p>
          </div>
        </a>
        <a href="mailto:info@skylinepropertys.com" className='flex h-39 md:w-90 w-full p-4 gap-4 shadow-[0px_4px_12px_rgba(0,0,0,0.50)]'>
          <img className='w-fit h-fit' src="/imgsky/Cn_email.png" alt="" />
          <div className='flex flex-col gap-4'>
            <p className='roboto-condensed-bold text-[20px]'>E-Mail US</p>
            <p className='roboto-condensed-regular text-[16px] '> info@skylinepropertys.com</p>
          </div>
        </a>
        </div>

        <div className='bg-[#F38831] rounded-[20px] text-center mt-10 py-4 w-[90%]'>
        <p className='roboto-condensed-regular text-[16px] text-white '>
        Office Hours: Monday – Saturday: 9:30 AM to 6:30 PM
        </p>
        </div>
      </div>

      {/* social */}

      <div className='w-full flex flex-col items-center mt-20 mb-20 gap-4.5'>
        <p className='roboto-condensed-semibold text-[24px]'><span className='text-[#F38831]'>Connect with Us</span> On Social Media</p>
        <div className='flex gap-2'> 
          <a href="https://www.facebook.com/login.php?next=https%3A%2F%2Fwww.facebook.com%2Fadsmanager%2F%3Fnav_source%3Dfb4b&login_options%5B0%5D=FB&login_options%5B1%5D=SSO&login_options%5B2%5D=IG&config_ref=biz_login_tool_flavor_adsmanager">
            <img src="/imgsky/Listitem → Link01.png" alt="" />
          </a>

          <a href="https://www.instagram.com/skylineconstruction_chennai?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img src="/imgsky/Listitem → Link02.png" alt="" />
          </a>
          
          <a href="https://www.youtube.com/@SkylineConstruction">
            <img src="/imgsky/Listitem → Link03.png" alt="" />
          </a>

          <a href="https://in.linkedin.com/">
            <img src="/imgsky/Listitem → Link04.png" alt="" />
          </a>

          <a href="https://x.com/">
            <img src="/imgsky/Listitem → Link05.png" alt="" />
          </a>
        </div>
      </div>

      {/* map & enquiry */}
      
      <div className='flex lg:flex-row flex-col w-full  justify-center md:px-20 px-4 gap-10 mb-20'>
        
        {/* map */}
        <div className='lg:w-[70%] w-full '>
          <iframe 
          className='w-full max-w-229 aspect-229/137' 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62186.61510592725!2d80.1786630702106!3d13.057081804644662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52675860f899db%3A0xdb1db02d0ed55367!2sSkyline%20Construction!5e0!3m2!1sen!2sin!4v1772692620887!5m2!1sen!2sin" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          allowFullScreen></iframe>
        </div>

        {/* form */}
      
           
        <form onSubmit={handleSubmit} className='flex relative flex-col lg:w-[30%] w-full gap-2'>
          <p 
          className='roboto-condensed-semibold text-[26px] text-[#515151]'>
          Send An Enquiry
          </p>

          <input 
          type="text" 
          placeholder='Name*'
          name="name"
          value={formData.name}
          className='text-[16px] roboto-condensed-regular text-[#3F3F3F] border border-[#BCBCBC] outline-none rounded-sm px-4 py-3'
          onChange={handleChange}
          required
          />

          <input 
          type="tel" 
          name="phone"
          value={formData.phone}
          placeholder='Phone Number*'
          className='text-[16px] roboto-condensed-regular text-[#3F3F3F] border border-[#BCBCBC] outline-none rounded-sm px-4 py-3'
          onChange={handleChange}
          maxLength={10}
          required/>

          <input 
          type="email" 
          value={formData.email}
          name="email"
          placeholder='Email*'
          className='text-[16px] roboto-condensed-regular text-[#3F3F3F] border border-[#BCBCBC] outline-none rounded-sm px-4 py-3'
          onChange={handleChange}
          required/>

          <textarea
          className='text-[16px] roboto-condensed-regular text-[#3F3F3F] border border-[#BCBCBC] outline-none rounded-sm px-4 py-3'
          name="message" id=""
          value={formData.message}
          onChange={handleChange}
          ></textarea>

          <div className='flex text-start'>
            
            <p className='text-[16px] roboto-condensed-regular'>
              <input 
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
              />
              I authorize Skyline Property Developers
              and its representative to contact me with
              updates and notifications via Email,
              SMS, WhatsApp, and Call. This will
              override the registry on DND / NDNC.*
            </p>
          </div>
          
          <button type="submit" className='bg-[#10133C] text-white roboto-condensed-regular rounded-[30px] py-3'>
            Submit
          </button>
        </form>     
      </div>

      <Footer />

{submitted && (
  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
    
    
    <div className="bg-white rounded-2xl shadow-xl p-10 w-[90%] max-w-md text-center relative animate-fadeIn">

      
      <button
        onClick={() => setSubmitted(false)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      <h2 className="text-2xl roboto-condensed-semibold mb-4">
        Thank you,{" "}
        <span className="text-[#F38831]">
          {formData.name}
        </span>!
      </h2>

      <p className="text-gray-600 roboto-condensed-regular">
        Our Skyline team will contact you shortly.
      </p>

      <button
        onClick={() => { setSubmitted(false)
                setFormData({name: "", phone: "", email: "", message: "", agree:false  })
              }}
        className="mt-6 bg-[#10133C] text-white px-8 py-3 rounded-full hover:bg-[#F38831] transition duration-300"
      >
        Close
      </button>

    </div>
  </div>
)}
    </div>
  )
}

export default Contactspg