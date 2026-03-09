import { useState, useEffect } from "react";

const Imageslide = ({ images }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setCurrentSlide(0);
  }, [images]);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  
  return (
    
<div className="relative bg-[url(/imgsky/bgForslider.jpg)] 
bg-center bg-cover h-170 w-full 
flex justify-center items-center">

  <div className='absolute inset-0 bg-white/60'></div>

  {/* SLIDER WINDOW */}
  <div className="relative w-full overflow-hidden flex justify-center">

    {/* SLIDE TRACK */}
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{
        transform: `translateX(-${currentSlide * 100}%)`
      }}
    >
      {images.map((img, index) => (
        <div key={index} className="w-full shrink-0 flex items-center justify-center">
          <img
            src={img}
            className="md:w-200 w-full h-133 object-cover shadow-lg"
          />
        </div>
      ))}
    </div>

  </div>
      {/* button */}
      <button
      onClick={prevSlide}
      className="absolute md:left-24 left-6 top-1/2 -translate-y-1/2 -scale-x-100 md:bg-none bg-white rounded-full p-3 "  >
        <img  src="/imgsky/Button - Next slide.svg" alt="" />
      </button>

      <button
      onClick={nextSlide}
      className="absolute md:right-24 right-6 top-1/2 -translate-y-1/2  md:bg-none bg-white rounded-full p-3 "  >
         <img src="/imgsky/Button - Next slide.svg" alt="" />
      </button>

    
    </div>
  
  )
}

export default Imageslide