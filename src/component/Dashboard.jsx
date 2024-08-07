import React from 'react'
import { LuWallet } from "react-icons/lu";
import { basicInfo } from './data'
import { Flex, Progress } from 'antd';
import { FaSortUp } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecentOrders from './Recentorders'
import CustomerFeedback from './customerFeedback'
import ActivityChart from './chart'
import GoalsSection from './GoalSection'


const Dashboard = () => {
  return (
    <div className='w-full pb-72 overflow-y-auto custom-scrollbar px-4 bg-[#141416] text-white  flex flex-col gap-4'>
      <span className='font-extrabold text-lg pt-8'>Dashboard</span>
      <div className='w-full flex flex-col lg:flex-row  justify-center text-white gap-8  py-4'>
        <div className='md:w-full lg:w-[60%] flex justify-center flex-col md:flex-row gap-2  '>
          {basicInfo.map((item, index) => {
            return (
              <div className='w-full md:w-[30%] flex flex-col justify-center p-4 bg-light_black  text-white gap-4 ' key={index}>
                {/* <LuWallet/> */}
                <span className={`bg-${item.color} px-4`}>
                  <FontAwesomeIcon icon={item.icon} className={`w-10 h-10 text-${item.color}`} />
                </span>
                <span className='text-xs font-thin'>{item.text}</span>
                <div className='flex justify-between items-center'>
                  <span className='text-3xl font-bold'>{item.count}</span>

                  <div className='flex justify-center items-center '>
                    <span className={item.profit ? 'text-green-600' : 'text-red-600'}>
                      {item.profit ? <FaSortUp /> : <FaCaretDown />}
                    </span>
                    <span className={item.profit ? 'text-green-600' : 'text-red-600'}>{` ${item.percentage}%`}</span></div>

                </div>
              </div>
            );
          })}
        </div>

        <div className='md:w-full lg:w-[40%] text-white flex gap-4 bg-light_black p-6 rounded-md'>

          <div className='flex flex-col gap-4'>
            <span className='text-sm'>Net Profit</span>
            <span className='text-2xl md:text-5xl font-bold'>$6759.25</span>
            <span>3</span>
          </div>

          <div>
            <Progress strokeLinecap="butt" type="circle" percent={75}
              strokeColor={{
                '0%': '#7393FE', 
                '100%': '#7393FE', 
              }}
              style={{
                borderRadius: '10%', 
                
              }}
            />
          </div>

        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8 '>
  <div className='w-full lg:w-[60%]  flex flex-col'>
    <ActivityChart className='flex-1' />
  </div>
  <div className='w-full lg:w-[40%] flex flex-col'>
    <GoalsSection className='flex-1' />
  </div>
</div>

      <div className=' w-full justify-center flex gap-8 h-[50%]  flex-col lg:flex-row '>
        <div className='w-full  md:w-full lg:w-[60%]  flex justify-center'>
          <RecentOrders />
        </div>
        <div className='w-full  md:w-full lg:w-[40%]   '>
          <CustomerFeedback />
        </div>
      </div>
    </div>
  )
}

export default Dashboard