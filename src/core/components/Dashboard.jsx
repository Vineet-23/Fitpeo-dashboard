import React from 'react'
import DashCard from './DashCard'
import { FaRupeeSign } from 'react-icons/fa'
import { BsBoxFill } from 'react-icons/bs'
import { CiWallet } from 'react-icons/ci'
import { FcSalesPerformance } from 'react-icons/fc'
import Table from './Table'
import DashNavbar from './DashNavbar'
import ChartSection from './ChartSection'

const Dashboard = ({ isOpen, setIsOpen }) => {
  const cardList = [
    {
      label: 'Earning',
      icon: <FaRupeeSign />,
      color: 'bg-green-100 text-green-700',
      amount: 198,
      rate: 37.8
    },
    {
      label: 'Orders',
      icon: <BsBoxFill />,
      color: 'bg-violet-100 text-violet-700',
      number: 2024,
      rate: 3
    },
    {
      label: 'Balance',
      icon: <CiWallet />,
      color: 'bg-blue-100 text-blue-700',
      amount: 20.24,
      rate: 2
    },
    {
      label: 'Total Sales',
      icon: <FcSalesPerformance />,
      color: 'bg-pink-100 text-black-700',
      number: 9999,
      rate: 11
    }
  ]
  return (
    <section className='flex justify-start flex-col h-screen w-full overflow-scroll py-2 px-10'>
      <DashNavbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:flex-row flex-wrap'>
        {cardList.map((card, index) => (
          <div
            key={index}
            className='m-0.05 p-0.5 text-black rounded-sm transition-all duration-500 bg-to-br to-pink-200 via-black from-pink-100 bg-size-500 hover:bg-gradient-to-br hover:to-blue-500 hover:from-blue-100 hover:bg-size-500'
          >
            <DashCard card={card} />
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10'>
        <ChartSection />
      </div>
      <Table />
    </section>
  )
}

export default Dashboard
