"use client"

import { useZustand } from "../_providers/Store";
import ArrowLeft from "./icons/ArrowLeft"

export default function ToggleProjects() {
  const { isProjectsVisible, setIsProjectsVisible } = useZustand();
  let arrowStyle = isProjectsVisible ? "cursor-pointer w-4 h-4 transition-all duration-300 " : "cursor-pointer w-4 h-4 transition-all duration-300 rotate-180";
  function toggleProjects() {
    document.querySelector('#projects')?.classList.toggle('projects-hidden');
    console.log(document.querySelector('#projects'));
    setIsProjectsVisible();
  }
  return (
    <span onClick={toggleProjects} className="block rounded-full border border-base-content p-1 ml-auto">
      <ArrowLeft className={arrowStyle} />
    </span>
  )
}