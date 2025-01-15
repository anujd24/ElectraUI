import React from 'react'
import Image from 'next/image'
import CountDown from './CountDown'

const Offer = () =>{
  return (
    <div className='bg-blue-200 h-screen flex flex-col md:flex-row md:justify-between md:h-[70vh]'>
      {/* Text */}
      <div className='flex-1 flex flex-col justify-center items-center text-center gap-8 p-6'>
        <h1 className='text-white text-5xl font-bold xl:text-6xl'>New Gen Laptop</h1>
        <p className='text-white xl:text-xl'>
            Introducing the new generation laptop for techies!
        </p>
        <CountDown/>
        <button className='bg-gray-600 text-white rounded-md py-3 px-6'>Order Now</button>
      </div>
      {/* Image */}
      <div className='flex-1 w-full relative md:h-full'>
        <Image src="/offerProd.jpg" alt='' fill className='object-contain'></Image>
      </div>
    </div>
  );
};
  
export default Offer;