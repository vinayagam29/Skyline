// src/pages/ProjectD.jsx
import React, { useState } from "react";
import Nav from "../components/Nav";
import Imageslide from "../components/Imageslide";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const ProjectD = ({ project }) => {
  
  const [category, setCategory] = useState("interior");
  const [openIndex, setOpenIndex] = useState(null);

  if (!project) return <div>Project Not Found</div>;

  return (
    <div>
      <Nav />

      {/* Hero */}
      <div>
        <img src={project.hero} alt={project.about.title} className="w-full" />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center text-center md:px-18 px-3 pt-16 pb-30 gap-8">
        <p className="text-[24px] roboto-condensed-bold text-[#07083F]">
          <span className="text-[#F38831]">{project.about.highlight}</span>{" "}
          {project.about.title.replace(project.about.highlight, "")}
        </p>
        <p className="text-[16px] roboto-condensed-regular">
          {project.about.description}
        </p>
      </div>


      {/* c */}
      <div className="flex lg:flex-row flex-col relative justify-center  md:px-20 px-4 gap-8 mt-10">

        <div className="relative border-2 md:w-107 w-fit md:h-87 h-70 border-[#F38831] rounded-[20px]">
          <img className="lg:absolute -top-3 -left-5  md:w-106 rounded-[20px] md:h-86 h-69 " 
          src={project.titleimage} alt="title" />
        </div>

        <div className="flex flex-col lg:w-[50%] w-full items-start justify-center gap-7">
          <p className="text-[26px] roboto-condensed-bold text-[#F38831]">
            {project.whyTitle}
          </p>
          <ol className="list-decimal list-inside roboto-condensed-regular text-[15px] leading-9 ">
            {project.whyPoints?.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Key Features */}
      <div className="flex flex-col h-auto border-2 border-[#F38831] rounded-[20px] mt-20 pt-12 lg:mx-30 md:mx-10 mx-6 text-center shadow-[0px_0px_12px_rgba(0,0,0,1)]">
        <p className="text-[26px] roboto-condensed-bold">
          <span className="text-[#F38831]">Key</span> Features
        </p>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 lg:px-45 md:px-10 px-8 pt-8 ">
          {project.keyfeatures?.map((feature, index) => (
            <div
              key={index}
              className="flex items-center md:w-70 lg:w-full  gap-2 border-b border-[#F38831] py-2"
            >
              <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              <span>{feature.title}</span>
            </div>
          ))}
        </div>      
        </div>

      {/* imageslide */}
      <div className="flex items-center flex-col gap-8 mt-20">
        <p className="text-[26px] roboto-condensed-bold text-[#10133C]">
          <span className="text-[#F38831]">Our </span>Gallery
        </p>

        {/* Buttons */}
        <div className="flex w-full justify-center md:gap-10 gap-2 roboto-condensed-regular text-[18px] ">
          {["interior", "exterior", "building"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="hover:border-2 items-center hover:border-[#F38831] px-6 py-3 transition-all ease-in-out duration-100 hover:scale-90 active:scale-85"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Image Slider */}
        <div className="w-full">
          <Imageslide images={project.gallery?.[category] || []} />
        </div>
      </div>

      {/* map */}

      <div className="flex flex-col text-center justify-center mt-20 gap-4">
        <p className="text-[26px] roboto-condensed-bold"><span className="text-[#F38831]">{project.maptitle?.title} </span>{project.maptitle?.subtitle} </p>    
        <p> {project.maptitle?.details}</p>
      </div>    

      <div className="flex flex-col lg:flex-row gap-10 mt-20 mb-10 lg:px-30 md:px-10 px-6">

        {/* MAP */}
        <div className="w-full lg:w-4/4  overflow-hidden shadow-lg">
          <iframe
            src={project.mapLink}
            className="w-full h-100"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* ACCORDION PANEL */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">

          {project.locationData?.map((item, index) => (
            <div key={index} className="border-2 border-black rounded-lg">

              {/* Header */}
              <div
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex justify-between items-center p-4 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img src={item.icon} alt="" className="w-5 h-5" />
                  <span className="roboto-condensed-regular">
                    {item.title}
                  </span>
                </div>

                {/* Arrow */}
                <span
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </div>

              {/* Expand Content */}
              {openIndex === index && (
                <div className="px-6 pb-4 space-y-2 text-[14px]">
                  {item.places.map((place, i) => (
                    <p key={i}>{place}</p>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>

      <Contact />
      <Footer />

    </div>
  );
};

export default ProjectD;