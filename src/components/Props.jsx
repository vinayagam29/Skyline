import React from 'react'

const Props = ({logo,head,para}) => {
  return (
    <div className={`w-90 h-48 flex flex-col items-center border  border-[#F38831] rounded-2xl lg:px-2 md:px-0 px-2 py-4 shadow-xl shadow-[#0000003D]`} >
      <img className='w-12 h-12 ' src={logo} alt="" />

      <div className='gap-3 w-fit flex flex-col items-center'>
        <p className='text-[17px] roboto-condensed-semibold  text-[#F38831]'>{head}</p>
        <p className='text-[11px] uppercase text-center leading-4 roboto-condensed-regular]'>{para}</p>
      </div>
    </div>
  )
}

export default Props