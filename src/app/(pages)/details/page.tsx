import ToggleActivities from '@/app/_components/ToggleActivities'
import ToggleActivitiesBar from '@/app/_components/ToggleActivities'
import ToggleProjectsBar from '@/app/_components/ToggleActivities'
import ArrowLeft from '@/app/_components/icons/ArrowLeft'
import AttachmentIcon from '@/app/_components/icons/Attachment'
import Bars3 from '@/app/_components/icons/Bars-3'
import ChatBubbleIcon from '@/app/_components/icons/ChatBubble'
import Circle from '@/app/_components/icons/Circle'
import CircleFill from '@/app/_components/icons/CircleFill'
import EllipsisDotsIcon from '@/app/_components/icons/EllipsisDots'
import ExclamationIcon from '@/app/_components/icons/Exclamation'
import FlagIcon from '@/app/_components/icons/Flag'
import SearchIcon from '@/app/_components/icons/Search'
import React from 'react'

export default function Details() {
  return (
    <div className='flex flex-col rounded-lg  w-full h-100vh p-10'>
      <div className="header flex h-[10%] justify-between">
        <ArrowLeft className='w-5 h-5 rotate-90' />
        <ArrowLeft className='w-5 h-5' />
      </div>
      <div className='body flex justify-between h-[90%]'>
        <div className='flex flex-col justify-between p-1'>
          <div className="content  flex flex-col">
            <button className='flex px-4 py-2 ml-auto justify-center items-center shadow border border-base-300 rounded'>
              <p className='mr-2 text-2xl'>
                <Circle className='w-4 h-4 ml-2' />
              </p>
              <p className='font-light w-48 max-lg:w-28'>
                02.2024 - 20.04.2024
              </p>
            </button>
            <div className="left mt-16 flex flex-col justify-center">
              <div className="flex items-center">
                <div className='flex items-center justify-center mr-6'>
                  <CircleFill className="w-4 h-4" />
                  <Circle className='w-6 h-6 absolute'></Circle>
                </div>
                <h1 className='text-2xl font-bold max-w-[calc(100%-12rem)]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, eligendi.</h1>
              </div>
              <p className="uppercase opacity-50 text-sm mt-4">id: <span className='underline'>#435365</span> </p>
            </div>
          </div>
          <div className="flex  items-center my-10 ">
            <div className="w-full flex flex-col items-center justify-between">
              <p className=''>Task Status</p>
              <p className=''>Open</p>
            </div>
            <div className="w-full flex flex-col items-center justify-between">
              <p className=''>Assignment</p>
              <div className="flex max-w-48 overflow-scroll">
                <img src="Ekran görüntüsü 2023-09-18 112301.png" className='w-10 h-10 border border-base-content rounded-full' alt="" />
                <img src="Ekran görüntüsü 2023-09-18 112301.png" className='w-10 h-10 border border-base-content rounded-full ml-[-0.75rem]' alt="" />
                <img src="Ekran görüntüsü 2023-09-18 112301.png" className='w-10 h-10 border border-base-content rounded-full ml-[-0.75rem]' alt="" />
                <div className="w-10 h-10 cursor-pointer rounded-full ml-[-0.75rem] bg-base-content text-base-300 border border-base-content flex items-center justify-center text-3xl font-light">+</div>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-between">
              <p className=''>Priority</p>
              <p className=''><FlagIcon color={3} className="w-5 h-5" /></p>
            </div>
          </div>
          <div className=''>
            <h4 className='font-semibold mb-2'>Description</h4>
            <p className='w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aut, repellendus molestiae mollitia sit, ut est ad omnis, labore minus ea fuga perferendis tempore numquam!</p>
          </div>
          <div className='flex flex-col w-full bg-base-200  rounded h-48'>
            <div className="header flex justify-around w-full bg-base-300">
              <h4 className='flex cursor-pointer text-sm font-semibold hover:bg-base-100 py-3 px-6'><AttachmentIcon className='w-5 h-5 mr-3' /> Attachment</h4>
              <h4 className='flex cursor-pointer text-sm font-semibold hover:bg-base-100 py-3 px-6'><EllipsisDotsIcon className='w-5 h-5 mr-3' />Sub Task</h4>
              <h4 className='flex cursor-pointer text-sm font-semibold hover:bg-base-100 py-3 px-6'><ChatBubbleIcon className='w-5 h-5 mr-3' />Comment</h4>
            </div>
            {/* <div id="attachment" className="flex flex-col">
              <ExclamationIcon className="w-5 h-5 " />
              <p><span className='text-primary'>Click to upload</span> or drag and drop.</p>
              <p>SVG,PNG,JPG or GIF (max.800x400px)</p>
            </div> */}
            <div id="subTask" className="flex">
              <div className="flex">
                <div className='flex items-center justify-center mr-2'>
                  <CircleFill className="w-2 h-2" />
                  <Circle className='w-4 h-4 absolute'></Circle>
                </div>
                <h4 className='font-medium'>Task content</h4>

              </div>
              {/* <div className="right">

              </div> */}
            </div>
            <div id="comment" className="flex">

            </div>
          </div>
        </div>
        <div id="activities" className="transition-all duration-300 bg-base-200 w-[30%] rounded">
          <div className="h-12 w-full flex items-center justify-between">
            <div className="flex">
              <ToggleActivities />
              <h4 className='text-primary font-bold ml-2'>Activity</h4>
            </div>
            <div className="flex">
              <SearchIcon className="w-6 h-6 mr-3 cursor-pointer" />
              <Bars3 className='w-6 h-6 mr-3 cursor-pointer' />
            </div>
          </div>
          <div className="activity h-24 w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
            <img className='rounded-full' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
            <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
              <div className="text flex h-10 justify-between w-full">
                <p className="inline truncate text-base-content">
                  Lana Steiner
                </p>
                <span className='truncate text-base-content'>2 mins ago</span>
              </div>
              <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>
        <nav className='flex px-2 py-6 flex-col bg-base-300 h-[100vh]'>
          <ChatBubbleIcon className="cursor-pointer w-6 bg-base-300 hover:bg-base-200" />
        </nav>
      </div>
    </div >
  )
}
