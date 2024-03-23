"use client"
import { useZustand } from '../_providers/Store';
import CloseIcon from './icons/Close'

export default function CloseModal() {
  const { toggleIsDetailsModalVisible, setSelectedTask } = useZustand();

  function closeDetailsModal() {
    toggleIsDetailsModalVisible();
    //@ts-ignore
    setSelectedTask(null);
  };

  return (
    <div onClick={closeDetailsModal} className="ml-auto mr-4 ">
      <CloseIcon className="w-6 h-6 cursor-pointer " />
    </div>

  )
}
