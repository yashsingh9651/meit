import React from 'react';
import { RiHome4Line } from "react-icons/ri";
import { GrStatusInfo } from "react-icons/gr";
import { FaPlaceOfWorship } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className='flex flex-col text-xl text-orange-600 items-center gap-8 sticky top-0 left-0 h-screen w-20 py-8'>
        <div className="flex flex-col hover:scale-110 duration-200 hover:font-semibold items-center">
            <RiHome4Line/>
            <h1 className='text-sm'>Home</h1>
        </div>
        <div className="flex flex-col hover:scale-110 duration-200 hover:font-semibold items-center">
            <GrStatusInfo/>
            <h1 className='text-sm'>About</h1>
        </div>
        <div className="flex flex-col hover:scale-110 duration-200 hover:font-semibold items-center">
            <FaPlaceOfWorship/>
            <h1 className='text-sm'>Top Places</h1>
        </div>
        <div className="flex flex-col hover:scale-110 duration-200 hover:font-semibold items-center">
            <IoPeopleSharp/>
            <h1 className='text-sm'>Friends</h1>
        </div>
    </div>
  )
}

export default Sidebar