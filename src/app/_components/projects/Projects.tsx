"use client"
import React from 'react'
import ChevronDownIcon from '../icons/ChevronDown'
import ArrowLeft from '../icons/ArrowLeft'
import ToggleProjects from '../ToggleProjects'

export default function Projects() {
  return (
    <section id="projects" className='z-[2] flex flex-row  justify-between px-2 py-6 w-64 max-sm:w-[100%] h-[100vh] bg-base-200 transition-all duration-300'>

      <div className='flex flex-col justify-between '>
        <ul className='mt-10'>
          <li className='flex justify-between text-[0.9rem] hover:bg-base-300 px-2 py-1 rounded cursor-pointer mb-2'>
            <div><p className='w-2 h-2 inline-block mr-2 rounded bg-red-600'></p>Proje isim 1</div>
            <ChevronDownIcon className="w-4 h-4" />
          </li>
          <li className='flex justify-between text-[0.9rem] hover:bg-base-300 px-2 py-1 rounded cursor-pointer mb-2'>
            <div><p className='w-2 h-2 inline-block mr-2 rounded bg-red-600'></p>Proje isim 1</div>
            <ChevronDownIcon className="w-4 h-4" />
          </li>
        </ul>
        <div className="flex justify-between text-[0.9rem]">
          <div className='flex flex-col justify-end px-2'>
            <p className='font-bold'>Mehmet Emin Büyükşar</p>
            <p>eminbuyuksar@gmail.com</p>
          </div>
          <div className="inline tooltip" data-tip="Collapse sidebar">
            {/* <ExpandIcon className='w-8 h-8' /> */}
          </div>
        </div>
      </div>
      <div className='inline-block'>
        <ToggleProjects />
      </div>
      {/* <ul>
      
      
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-medium">
          Proje isim 1
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-medium">
          Proje isim 1
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-200">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-medium">
          Proje isim 1
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
      </ul> */}

    </section>
  )
}
