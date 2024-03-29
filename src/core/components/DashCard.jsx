import React from 'react';
import { useId } from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const DashCard = ({ card }) => {
  const { color, label, rate, amount,number, icon } = card;
  const uid = useId();

  return (
    <div className='flex justify-evenly items-center px-2 py-4 rounded-md bg-white w-full' key={uid}>
      <div className={`grid place-items-center rounded-full h-[120px] w-[120px] text-6xl ${color}`}>
        {icon}
      </div>
      <div className='pl-2'>
         <p className='text-black-900 text-sm text-left'>{label}</p>
        <p className='text-black-800 text-m text-left font-semibold'>
          {amount ? `₹${amount}K` : ''}
        </p>
        <p className='text-gray-800 text-m text-left font-semibold'>
          {number}
        </p>
        <p className='flex justify-start items-center text-xm text-left'>
          <span className={`font-bold text-${rate > 10 ? 'green' : 'red'}-700`}>
            {rate > 10 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
          </span>
          <span className={`font-bold text-${rate < 10 ? 'green' : 'red'}-700`}>{rate}%</span>
          <span className="text-xs">this month</span>
        </p>
      </div>
    </div>
  );
};

export default DashCard;
