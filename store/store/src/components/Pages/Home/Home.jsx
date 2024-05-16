import React, { useEffect, useState } from 'react'
import { Header } from '../../Layouts/Header/Header'
import { BiSolidDownArrow } from "react-icons/bi";
import { TbSearch } from "react-icons/tb";
import { Main } from '../../Layouts/Main/Main';
import { Card } from '../../Cards/Card';





export const Home = () => {
    const [product, setproduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])


    return (
        <>
            <Header>
                <div className="w-[100%] h-[100%] flex items-center justify-between ">

                    <div className="flex items-center">
                        <div className="bg-[#4F6F52] w-[4rem] h-[4rem] rounded-[50%] " ></div>
                        <h1 className='text-[#4F6F52] text-[3rem] pl-[1rem]'>Store</h1>
                    </div>

                    <div className="flex justify-center relative items-center bg-[#D0C9C0] pt-[1rem] pb-[1rem] pl-[2rem] pr-[6rem] rounded-[20px] border-[2px] border-[#ECE3CE] ">
                        <h2 className=' text-[#4F6F52] text-[2rem] pl-[1rem]'>FILTER</h2>
                        <BiSolidDownArrow className=" absolute right-5 text-[#5F7161] text-[2rem]    " />
                        <hr className='absolute top-[0] right-[64px] bg-[#ECE3CE] w-[3px] h-full' />
                    </div>

                    <div className=' relative flex gap-3 bg-[#D0C9C0] pt-[0.5rem] pb-[0.5rem] pr-[1rem] rounded-[20px] border-[2px] border-[#ECE3CE]'>
                        <div className='w-full h-full flex justify-start '>
                            <TbSearch className=' text-[#5F7161] text-[2rem] ml-[1rem]' />
                            <input className='ml-[32px] pr-[4rem] bg-[#D0C9C0] ' type="text" />
                        </div>
                        <hr className='absolute top-[0] left-[64px] bg-[#ECE3CE] w-[3px] h-full' />
                    </div>

                </div>
            </Header>
            <Main>

            <div className=''>
                <div className='w-[90%] m-[5%] flex flex-wrap justify-center'>
                    {product.map(data => (
                        <Card
                            key={data.id}
                            title={data.title.split(" ").slice(0, 3)}
                            img={data.image}
                            text={data.description}
                            price={data.price}
                        />
                    ))}
                </div>
            </div>
            </Main>
        </>
    )
}
