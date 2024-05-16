import React from 'react'

export const Card = ({title, img, text, price}) => {
  return (
      <div className='w-[20%] h-[35rem] m-[1.5rem] mt-[3rem] rounded-[10px] bg-gradient-to-br from-[#ECE3CE]  to-white relative '>
        <div className='w-full  absolute '>
            <button className='w-full bg-[#4f6f52] text-[#ECE3CE] text-4xl p-[1rem] rounded-t-[10px]'>
                Add to card
            </button>
        </div> 
        <h1 className='w-full justify-center flex items-center p-[1rem] text-[#4f6f52] text-2xl absolute top-[15%]'>{title}</h1>  
        <div className='flex justify-center w-[100%] h-[100%] mt-[10rem]' >
            <div className='flex justify-center items-center rounded-[50%] w-[60%] h-[40%] bg-white'> 
                <img className='w-[60%] h-[60%] m-[1rem]  rounded-[30%]' src={img} alt="img product" />
            </div>
        </div>
        {/*<p>{text}</p>*/}
        <div className='absolute bottom-[15%]'>
        <h2 className='text-[#2f4832] text-4xl p-[2rem]'>${price}</h2>
        </div>
        <div className='absolute left-[77%] bottom-[0%] w-full '>
            <button className='w-[5rem] h-[5rem] bg-[#4f6f52]   rounded-bl-[50%]  rounded-tl-[50%] rounded-tr-[50%]  rounded-br-[10px] text-[#ECE3CE]'>
                More
            </button>
        </div>
    </div>
  )
}
