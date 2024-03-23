"use client"

import { useZustand } from "../_providers/Store";
import ArrowLeft from "./icons/ArrowLeft"

export default function ToggleActivities() {
  const { isActivitiesVisible, setIsActivitiesVisible } = useZustand();
  let arrowStyle = isActivitiesVisible ? "cursor-pointer w-4 h-4 transition-all duration-300 rotate-180" : "cursor-pointer w-4 h-4 transition-all duration-300";
  function toggleActivities() {
    document.querySelector('#activities')?.classList.toggle('activities-hidden');
    console.log(document.querySelector('#activities'));
    setIsActivitiesVisible();
  }
  return (
    <span onClick={toggleActivities} className="rounded-full border border-base-content p-1 ml-1">
      <ArrowLeft className={arrowStyle} />
    </span>
  )
}