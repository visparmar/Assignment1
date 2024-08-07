import React, { useReducer, useState } from 'react'
import { MdHomeFilled } from "react-icons/md";
import { RiBarChartBoxLine } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { IoBagCheckOutline } from "react-icons/io5";
import { LuWallet } from "react-icons/lu";
import { GrPower } from "react-icons/gr";

const initialState = {
  home: true,
  portfolio: false,
  checklist: false,
  wallet: false,
  bag: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return {
        home: false,
        portfolio: false,
        checklist: false,
        wallet: false,
        bag: false,
        [action.payload]: true,
      };
    default:
      return state;
  }
};


const Sidebar = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  const handleActiveState = (value) => {

    dispatch({ type: 'SET_ACTIVE', payload: value });   
  }
  return (
    <div className='sticky bottom-0 flex z-50 md:h-[94vh] md:flex-col justify-between items-center bg-[#202028] text-white py-2 '>
      <div className='flex flex-row md:flex-col w-full justify-between items-center md:gap-6'>
      <div 
      className={`border-b-4 md:border-b-0 md:border-l-4  transition-all duration-300 ease-in-out text-lg sm:text-2xl
         ${state.home?'border-primary_blue  transition-all duration-300 ease-in-out text-primary_blue' : 'border-transparent'} rounded-r-sm-sm px-4 py-2 `}
       onClick={() => handleActiveState('home')}><MdHomeFilled /></div>
      <div className={`border-b-4 md:border-b-0 md:border-l-4  transition-all duration-300 ease-in-out text-lg sm:text-2xl ${state.portfolio?'border-primary_blue text-primary_blue' : 'border-transparent'} rounded-r-sm-sm px-4 py-2`} onClick={() => handleActiveState('portfolio')}><RiBarChartBoxLine /></div>
      <div className={`border-b-4 md:border-b-0 md:border-l-4  transition-all duration-300 ease-in-out text-lg sm:text-2xl ${state.checklist?'border-primary_blue text-primary_blue' : 'border-transparent'} rounded-r-sm-sm px-4 py-2`} onClick={() => handleActiveState('checklist')}><GoChecklist /></div>
      <div className={`border-b-4 md:border-b-0 md:border-l-4  transition-all duration-300 ease-in-out text-lg sm:text-2xl ${state.wallet?'border-primary_blue text-primary_blue' : 'border-transparent'} rounded-r-sm-sm px-4 py-2`} onClick={() => handleActiveState('wallet')}><IoBagCheckOutline /></div>
      <div className={`border-b-4 md:border-b-0 md:border-l-4  transition-all duration-300 ease-in-out text-lg sm:text-2xl ${state.bag?'border-primary_blue text-primary_blue' : 'border-transparent'} rounded-r-sm-sm px-4 py-2`} onClick={() => handleActiveState('bag')}><LuWallet /></div>
      <div className={`flex md:hidden  transition-all duration-300 ease-in-out rounded-r-sm-sm px-4 py-2  pb-4 text-lg sm:text-2xl`}> <GrPower /></div>
      </div>
      <div className='hidden md:flex md:pb-10 text-lg sm:text-2xl'>
        <GrPower style={{ fontSize: '24px' }}/>
      </div>
    </div>
  )
}

export default Sidebar