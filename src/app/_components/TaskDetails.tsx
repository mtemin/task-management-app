import ToggleActivities from '@/app/_components/ToggleActivities'
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
import CloseModal from './CloseModal'

export default function TaskDetails({ task }: { task: Task | {} }) {

  return (<>
    <div className="z-[4] modal-background absolute top-0 left-0 w-[100vw] h-[100vh] bg-base-content opacity-90">
    </div>
    <div className="z-[5] absolute w-full top-0 left-0  overflow-y-scroll ">
      <section className="w-[80vw] m-auto my-[10vh] h-[80vh] flex flex-col justify-center items-center bg-base-200 overflow-y-scroll rounded-3xl">
        <header className='flex justify-between py-2 border-b border-base-content border-opacity-30 w-full'>
          <CloseModal />
        </header>
        <div className='flex flex-col rounded-lg w-full justify-center items-center overflow-y-scroll'>
          <div className='body flex justify-between h-full'>
            <div className='flex flex-col justify-between p-10'>
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
                    <div className='flex items-center justify-center mr-6 relative'>
                      <CircleFill className="w-4 h-4" />
                      <Circle className='w-6 h-6 absolute'></Circle>
                    </div>
                    {//@ts-ignore
                      <h1 className='text-2xl font-bold max-w-[calc(100%-12rem)]'>{task?.name}</h1>
                    }
                  </div>
                  <p className="uppercase opacity-50 text-sm mt-4">id: <span className='underline'>#435365</span> </p>
                </div>
              </div>
              <div className="flex  items-center my-10 ">
                <div className="w-full flex flex-col items-center justify-between">
                  <p className=''>Task Status</p>
                  <p className='font-bold'>Open</p>
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
                  {//@ts-ignore
                    <p className=''><FlagIcon color={task.flagId} className="w-5 h-5" /></p>
                  }
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
                <div id="attachment" className="flex flex-col items-center">
                  <ExclamationIcon className="w-10 h-10 my-4" />
                  <p><span className='text-primary mb-4 cursor-pointer'>Click to upload</span> or drag and drop.</p>
                  <p className=''>SVG,PNG,JPG or GIF (max.800x400px)</p>
                </div>
                {/* <div id="subTask" className="flex">
                  <div className="flex">
                    <div className='flex items-center justify-center mr-2 relative'>
                      <CircleFill className="w-2 h-2 " />
                      <Circle className='w-4 h-4 absolute'></Circle>
                    </div>
                    <h4 className='font-medium'>Task content</h4>

                  </div>

                </div> */}
                <div id="comment" className="flex">

                </div>
              </div>
            </div>
            <div id="activities" className="transition-all duration-300 bg-base-200 rounded ">
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
              <div className="flex flex-col h-full overflow-y-scroll">
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
                <div className="activity w-full flex bg-base-300 bg-opacity-50 p-2 pl-8">
                  <img className='rounded-full w-16 h-16 max-w-20 max-h-20' src="Ekran görüntüsü 2023-09-18 112301.png" alt="" />
                  <div className="user w-[75%] flex flex-col items-center ml-2  text-base-300">
                    <div className="text flex h-10 justify-between items-center w-full">
                      <p className="inline truncate text-base-content">
                        Lana Steiner
                      </p>
                      <span className='truncate text-base-content text-sm opacity-70'>2 mins ago</span>
                    </div>
                    <p className='text-sm text-base-content'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                  </div>
                </div>
              </div>
            </div>
            <nav className='flex flex-col bg-base-300 h-[100vh]'>
              <div className='cursor-pointer flex flex-col items-center bg-base-300 px-2 mt-12 py-4 hover:bg-base-200'>
                <ChatBubbleIcon className=" w-12  pl-2 pr-4" />
                <p className="text-sm ">Activities</p>
              </div>
              <div className='cursor-pointer flex flex-col items-center bg-base-300 px-2 py-4 hover:bg-base-200'>
                <ChatBubbleIcon className="cursor-pointer w-12 pl-2 pr-4 " />
                <p className="text-sm ">Activities</p>
              </div>

            </nav>
          </div>
        </div >
      </section>
    </div>
  </>
  )
}
