import React, { useState } from "react";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

    const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const [submitted, setSubmitted] = useState(false);


  return (  
    <div className='relative bg-[url(/imgsky/c_form-bg.jpg)] bg-center flex justify-center bg-no-repeat items-center md:bg-size-[150%] bg-cover w-full h-142 md:px-0 px-4 '>
      <div className='absolute inset-0 bg-white/50'></div>

      <form onSubmit={handleSubmit} className='relative text-[16px] gap-2 bg-white border-5 roboto-condensed-regular border-[#E4C37A] shadow-[8px_8px_10px_rgba(0,0,0,1)] rounded-2xl text-[#757575] flex flex-col w-166 h-106 pt-10 px-12'>
        <p className='text-center text-[32px] text-[#515151] roboto-condensed-semibold'>Ready to Build?</p>

        <div>
          <input 
          type="text"
          name="name"
          value={formData.name}
          placeholder='Name*'
          className='border-b outline-none w-full px-3 py-2 border-[#CCCCCC]'
          onChange={handleChange}
          required />
        </div>


        <div>
          <input 
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder='Phone Number*'
          className='border-b outline-none w-full px-2 py-2 border-[#CCCCCC]'
          onChange={handleChange}
          required/>
        </div>

        <div>
          <input 
          type="email"
          name="email"
          value={formData.email}
          placeholder='Email*'
          className='border-b outline-none w-full px-2 py-2 border-[#CCCCCC]'
          onChange={handleChange}
          required/>
        </div>

        <div className='flex flex-col pb-3'>
          <label className='absolute pt-3 px-2 text-gray-400' htmlFor="message">Message*</label>
          <input type="text" name="message" 
          id="message" 
          value={formData.message}
          onChange={handleChange}
          className='border-b outline-none w-full px-2 pt-10 border-[#CCCCCC]' />
        </div>

      <button className='bg-[#10133C]  ease-in-out  px-6 py-2 rounded-[3px] hover:border-[#F38831] hover:scale-95 text-[14px] text-white w-fit transition-all duration-100 hover:border-2  active:scale-90'>
        ENQUIRE NOW
      </button>

      </form>

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
                setFormData({name: "", phone: "", email: "", message: "" })
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

export default Contact