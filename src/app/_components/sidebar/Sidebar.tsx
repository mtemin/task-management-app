import React from 'react'
import NotificationIcon from '../icons/NotificationIcon'
import ToggleProjects from '../ToggleProjects'

export default function Sidebar() {
  return (
    <nav className="z-[3] h-full w-20 bg-blue-900 py-6 px-2 flex flex-col justify-between ">
      <ul>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
      </ul>
      <ul>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
        <li className='px-2 py-4 hover:bg-base-100 transition-all duration-500 rounded flex justify-center'><NotificationIcon className='w-5 h-5 cursor-pointer' /> </li>
        <li className='mt-4 rounded flex justify-center'><img src="Ekran görüntüsü 2023-09-18 112301.png" className='rounded-full max-w-full' /> </li>
      </ul>
    </nav>
  )
}
