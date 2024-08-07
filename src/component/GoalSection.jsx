import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import { TfiTarget } from "react-icons/tfi";
import { CiBurger } from "react-icons/ci";
import { PiBowlFood } from "react-icons/pi";
 
const GoalsSection = () => {
  return (
<div className="bg-light_black h-full  p-6 rounded-lg shadow-md">
<ul className='h-full py-10 text-2xl flex flex-col justify-between'>
<li className="flex items-center justify-between text-white mb-2">
    <span className='flex items-center justify-center gap-2'>
        <span className='text-red-600 bg-[#5F3237] p-4 rounded-full'><TfiTarget/></span>

<span >Goals</span>
    </span>
    <span className='bg-[#48494F] rounded-full p-4'>
    <IoMdArrowDropright className="text-xl" />
    </span>
</li>
<li className="flex items-center justify-between text-white mb-2">
    <span className='flex items-center justify-center gap-2'>
    <span className=' bg-[#3251eb] text-[#293368] p-4 rounded-full'><CiBurger/></span>
    <span>Popular Dishes</span>
    </span>
    <span className='bg-[#48494F] rounded-full p-4'>
    <IoMdArrowDropright className="text-xl" />
    </span>
</li>
<li className="flex items-center justify-between text-white">
  <span className='flex items-center justify-center gap-2'>
  <span className=' bg-[#278cc3] text-[#214A60] p-4 rounded-full'><PiBowlFood/></span>  
  <span>Menus</span>
    </span>  
    <span className='bg-[#48494F] rounded-full p-4'>
    <IoMdArrowDropright className="text-xl" />
    </span>
</li>
</ul>
</div>
  );
};
 
export default GoalsSection;