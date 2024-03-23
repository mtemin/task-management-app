"use client"
import React from 'react'
import EllipsisDots from './icons/EllipsisDots'
import CalendarIcon from './icons/Calendar'
import FlagIcon from './icons/Flag'
import PlusIcon from './icons/Plus'
import SquareIcon from './icons/Square'
import useBoardsQuery from '../_hooks/useBoardsQuery'
import TaskDetails from './TaskDetails'
import { useZustand } from '../_providers/Store'

export default function Boards() {
  const { data: boardsData, isLoading: isBoardsLoading, isError: isBoardsError } = useBoardsQuery("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM3LCJpYXQiOjE3MTExMDkyMzV9.82P4bhpWs3mo8oHZUwcIuouL2gZ7c3FH5GIFzXvqiao");
  const { toggleIsDetailsModalVisible: setIsDetailsModalVisible, selectedTask, setSelectedTask } = useZustand();
  console.log("🚀 ~ Boards ~ boardsData:", boardsData);

  function convertDate(date: Date) {
    return date.toString().split("T")[0];
  }

  if (isBoardsLoading) return (
    <div className='flex h-full w-full overflow-x-scroll '>
      <div className="skeleton w-72 mr-6 h-full"></div>
      <div className="skeleton w-72 mr-6 h-full"></div>
      <div className="skeleton w-72 mr-6 h-full"></div>
      <div className="skeleton w-72 mr-6 h-full"></div>
    </div>
  )

  if (isBoardsError) return (
    <div className='flex h-full w-full overflow-x-scroll '>
      <h1 className='text-error text-2xl'>Boards could not be fetched, please refresh.</h1>
    </div>
  )
  const openBoards = boardsData.filter((board: Board) => {
    return board.openAction === true;
  });
  const sortedBoards = openBoards.map((board: Board) => ({
    ...board,
    tasks: board.tasks.sort((a, b) => a.order - b.order)
  }));
  return (
    <div id="boards" className='flex h-full w-full overflow-x-auto '>
      {sortedBoards.map((board: any) => {
        return (
          <article key={board.id} className="board w-80 h-full bg-base-200 mr-6 rounded-lg">
            <div className="flex justify-between items-center border-b-2 border-b-base-300 ">
              <h3 className='px-3 flex items-center py-4 text-primary uppercase'>{board.name}
                <div className='ml-3 bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full border border-blue-400 text-base-100 text-sm font-medium'>3</div>
              </h3>
              <div className='flex'>
                <PlusIcon className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
                <EllipsisDots className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
              </div>
            </div>
            <div className='p-1'>
              {board.tasks.map((task: Task) => {
                return (
                  <div key={task.id} onClick={() => setSelectedTask(task)} className="task cursor-pointer py-4 px-2 border-2 border-base-300 shadow-lg rounded">
                    <h4 className='mb-1 font-bold'>{task.name}</h4>
                    <div>
                      <p className="text-sm max-h-20 overflow-y-scroll pr-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo molestiae, excepturi quod consequatur quasi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, temporibus?
                      </p>
                      <div className="flex mt-3">
                        <CalendarIcon className="w-4 h-4 mr-2 opacity-60" />
                        <p className='text-xs opacity-60'>
                          {convertDate(task.createdAt)} - {convertDate(task.updatedAt)}
                        </p>
                      </div>
                      <div className="flex mt-3">
                        <SquareIcon className="w-4 h-4 mr-2 rotate-45 opacity-60" />
                        <p className='text-xs mr-2 opacity-60'>Milestone name</p>
                        <FlagIcon color={task.flagId} className="w-4 h-4 " />
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
          </article>
        )
      })}
      {selectedTask &&
        <TaskDetails task={selectedTask} />
      }

      <article className="group board w-72 h-full bg-base-200 mr-6 rounded-lg opacity-70 hover:opacity-100 transition-all duration-200 showAddTaskBtn">
        <div className="flex justify-between items-center border-b-2 border-b-base-300 ">
          <h3 className='px-3 flex items-center py-4 text-primary uppercase'>New Task
            <div className='ml-3 bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full border border-blue-400 text-base-100 text-sm font-medium'>x</div>
          </h3>
          <div className='flex'>
            <PlusIcon className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
            <EllipsisDots className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
          </div>
        </div>
        <div className='new-task cursor-pointer p-1 h-auto mt-[50%] flex flex-col items-center justify-center'>
          <img className='z-[2]' src="addNewBoard.png" alt="board " />
          <div className='flex justify-center items-center mt-[-3rem] transition-all duration-300 group-hover:mt-6 group-hover:opacity-100 opacity-0 '>
            <PlusIcon className='w-7 h-7 mr-2' />
            <p className='text-xl'>
              New Task
            </p>
          </div>
        </div>
      </article>
      <article className="group board w-72 h-full bg-base-200 mr-6 rounded-lg opacity-70 hover:opacity-100 transition-all duration-200 showAddTaskBtn">
        <div className="flex justify-between items-center border-b-2 border-b-base-300 ">
          <h3 className='px-3 flex items-center py-4 text-primary uppercase'>New Task
            <div className='ml-3 bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full border border-blue-400 text-base-100 text-sm font-medium'>x</div>
          </h3>
          <div className='flex'>
            <PlusIcon className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
            <EllipsisDots className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
          </div>
        </div>
        <div className='new-task cursor-pointer p-1 h-auto mt-[50%] flex flex-col items-center justify-center'>
          <img className='z-[2]' src="addNewBoard.png" alt="board " />
          <div className='flex justify-center items-center mt-[-3rem] transition-all duration-300 group-hover:mt-6 group-hover:opacity-100 opacity-0 '>
            <PlusIcon className='w-7 h-7 mr-2' />
            <p className='text-xl'>
              New Task
            </p>
          </div>
        </div>
      </article>
      <article className="group board w-72 h-full bg-base-200 mr-6 rounded-lg opacity-70 hover:opacity-100 transition-all duration-200 showAddTaskBtn">
        <div className="flex justify-between items-center border-b-2 border-b-base-300 ">
          <h3 className='px-3 flex items-center py-4 text-primary uppercase'>New Task
            <div className='ml-3 bg-blue-300 w-5 h-5 flex justify-center items-center rounded-full border border-blue-400 text-base-100 text-sm font-medium'>x</div>
          </h3>
          <div className='flex'>
            <PlusIcon className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
            <EllipsisDots className='w-6 h-6 cursor-pointer opacity-70 hover:opacity-100 mr-3' />
          </div>
        </div>
        <div className='new-task cursor-pointer p-1 h-auto mt-[50%] flex flex-col items-center justify-center'>
          <img className='z-[2]' src="addNewBoard.png" alt="board " />
          <div className='flex justify-center items-center mt-[-3rem] transition-all duration-300 group-hover:mt-6 group-hover:opacity-100 opacity-0 '>
            <PlusIcon className='w-7 h-7 mr-2' />
            <p className='text-xl'>
              New Task
            </p>
          </div>
        </div>
      </article>


    </div>
  )
}
