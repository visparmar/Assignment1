import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { VscBellDot } from "react-icons/vsc";
import logo from '../assets/logo.png'
import profile from '../assets/OIP.jpeg'

const Navbar = () => {
  return (
      <div className="w-full flex  justify-between items-center p-4 bg-[#202028]">
          <div className='flex gap-8'>
              <div className="mb-4 md:mb-0">
                  <img src={logo} alt="" className='w-6 h-6' />
              </div>

              <div className="w-full md:w-max flex justify-center items-center bg-[#2A2B30] text-white gap-3 px-2 rounded-md py-1 mb-4 md:mb-0">
                  <CiSearch />
                  <input
                      type="text"
                      placeholder="Search"
                      className="bg-[#2A2B30]  font-normal placeholder-white w-full md:w-auto"
                  />
              </div>
          </div>


          <div className="flex  md:gap-1 md:items-center md:justify-center items-start gap-2">
              <div className='bg-[#44454A] opacity-50 rounded-full p-1 text-white'><CiMail /></div>
              <div className='bg-[#44454A] opacity-50 rounded-full p-1 text-white'><IoSettingsOutline /></div>
              <div className='bg-[#44454A] opacity-50 rounded-full p-1 text-white'><VscBellDot /></div>
              <div className='bg-[#44454A] opacity-50 rounded-full p-1 text-white'><img src={profile} alt="profil" className="w-10 h-10 rounded-full" /></div>
          </div>
      </div>
  )
}

export default Navbar