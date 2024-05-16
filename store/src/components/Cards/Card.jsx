import React from 'react'

export const Card = ({title, img, text, price}) => {
  return (
      <div className='w-[23%] h-[35rem] m-[1.5rem] mt-[3rem] rounded-[10px] bg-gradient-to-br from-[#7C96AB]  to-white to-[90%] relative '>
        <div className='w-full  absolute '>
            <button className='w-full bg-[#503A7A] text-[#ECE3CE] text-4xl p-[1rem] rounded-t-[10px] hover:text-[2.5rem]'>
                Show More
            </button>
        </div> 
        <h1 className='w-full justify-center flex items-center p-[1rem] text-[#503A7A] text-2xl absolute top-[15%] font-bold'>{title}</h1>  
        <div className='flex justify-center w-[100%] h-[100%] mt-[10rem]' >
            <div className='flex justify-center items-center rounded-[50%] w-[60%] h-[40%] bg-gradient-to-br from-white to-transparent to-[70%]'> 
                <img className='w-[60%] h-[60%] m-[1rem]  rounded-[30%]' src={img} alt="img product" />
            </div>
        </div>
        {/*<p>{text}</p>*/}
        <div className='absolute bottom-[15%]'>
        <h2 className='text-[#503A7A] text-3xl p-[2rem] font-bold'>${price}</h2>
        </div>

        <div className='absolute right-[84%] bottom-[0%]  w-[4rem] h-[4rem] bg-[#503A7A]     rounded-bl-[20%] rounded-tr-[100%]  rounded-br-[20%] shadow-md'></div>
        <div className='absolute left-[80%] bottom-[0%] w-full '>
            <button className='w-[5rem] h-[5rem] bg-[#7C96AB] text-6xl font-bold rounded-bl-[50%]  rounded-tl-[50%] rounded-tr-[50%]  rounded-br-[10px] text-[#ECE3CE] shadow-md hover:w-[5.2rem] hover:h-[5.2rem] hover:text-[4.5rem]'>
                <div className='relative bottom-1'>
                    +
                </div>
            </button>
        </div>
    </div>
  )
}
