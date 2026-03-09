import React from 'react'

const Properties = ({logo,head,para}) => {
  return (
    <div className={`w-102 flex flex-col items-center border border-[#F38831] rounded-2xl px-6 py-6 shadow-xl shadow-[#0000003D]`} >
      <img className='w-fit ' src={logo} alt="" />

      <div className='gap-3 w-fit flex flex-col items-center'>
        <p className='text-[24px] roboto-condensed-semibold  text-[#F38831]'>{head}</p>
        <p className='text-[13px] uppercase text-center leading-6 roboto-condensed-regular]'>{para}</p>
      </div>
    </div>
  )
}

export default Properties