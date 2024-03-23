import Boards from '@/app/_components/Boards';
import Projects from '@/app/_components/projects/Projects';
import Sidebar from '@/app/_components/sidebar/Sidebar';
import React from 'react'

export default function Dashboard() {
  return (
    <div className='flex w-full h-[100vh] bg-base-100 overflow-x-scroll'>

      <Sidebar />
      <Projects />
      <main className="flex flex-col h-[100vh] p-6">
        <h1 className='text-primary font-bold text-xl mb-6'>
          Frontend Case
        </h1>
        <ul className="join mb-6">
          <li className="btn join-item border-r-2 border-base-300">Boards</li>
          <li className="btn join-item border-r-2 border-l-2 border-base-300">List</li>
          <li className="btn join-item border-r-2 border-l-2 border-base-300">Other</li>
          <li className="btn join-item border-r-2 border-l-2 border-base-300">Other</li>
          <li className="btn join-item d border-l-2 border-base-300">Other</li>
        </ul>
        <Boards />
      </main>


    </div>
  )
}
