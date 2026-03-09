import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


const Nav = () => {

  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);  

  const [formData, setFormData] = useState({
  name: "",
  phone: ""
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
    <div className='flex items-center justify-between h-19.5 lg:px-24 md:px-4 px-3 roboto-condensed-medium text-[14px]'>
      
      <Link to={'/'}>
      <div>
        <img className='md:scale-100 scale-80' src="/imgsky/Layer_1.svg" alt="" />
      </div>
      </Link>

      <div className='hidden md:flex lg:gap-16 md:gap-6 '>
        <Link to={'/'} className='anderline'>HOME</Link>
        <Link to={"/about"} className='anderline '>ABOUT US</Link >
        <Link to={"/project"} className='anderline'>PROJECT</Link >
        <Link to={"/contact"} className='anderline'>CONTACT US</Link >

      </div>

      <button 
      onClick={() => setOpenModal(true)}
      className='hidden md:block bg-[#10133C] hover:border-2 hover:border-[#F38831] text-white md:h-12 h-10 md:w-40 w-35 transition-all duration-300 ease-in-out active:scale-90'>
        ENQUIRE NOW
      </button>

      <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        <div
        className={`fixed z-10 top-0 left-0 w-full h-screen bg-white/90 flex flex-col items-center justify-center gap-10 text-lg roboto-condensed-medium transition-all duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 text-3xl"
          onClick={() => setIsOpen(false)}
        >
          ✕
        </button>

        <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
        <Link to="/project" onClick={() => setIsOpen(false)}>PROJECT</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT US</Link>

        <button 
        onClick={() => setOpenModal(true)}
        className="bg-[#10133C] text-white px-10 py-3 mt-4">
          ENQUIRE NOW
        </button>
      </div>    

      {openModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fadeIn">

            <button
              onClick={() => {
                setOpenModal(false);
                setSubmitted(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {!submitted ? (
              <>
                <h2 className="text-2xl roboto-condensed-semibold mb-6 text-center">
                  Enquire Now
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#F38831]"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border border-gray-300 rounded-md px-4 py-3 outline-none focus:border-[#F38831]"
                  />

                  <button
                    type="submit"
                    className="bg-[#10133C] text-white py-3 rounded-full hover:bg-[#F38831] transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
             
              <div className="text-center py-10">

                <div className="text-5xl mb-4 text-[#F38831]">
                  ✓
                </div>

                <h2 className="text-2xl roboto-condensed-semibold mb-2">
                  Thank You,{" "}
                  <span className="text-[#F38831]">
                    {formData.name}
                  </span>!
                </h2>

                <p className="text-gray-600 roboto-condensed-regular">
                  Our team will contact you shortly.
                </p>

                <button
                  onClick={() => {
                    setOpenModal(false);
                    setSubmitted(false);
                    setFormData({ name: "", phone: "" });
                  }}
                  className="mt-6 bg-[#10133C] text-white px-8 py-3 rounded-full hover:bg-[#F38831] transition duration-300"
                >
                  Close
                </button>

              </div>
            )}

          </div>
        </div>
      )}
      </div>
  )
}

export default Nav