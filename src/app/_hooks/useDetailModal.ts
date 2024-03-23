import { useZustand } from "../_providers/Store";

export default function useDetailModal(task: Task) {
  const { isDetailsModalVisible, toggleIsDetailsModalVisible: setIsDetailsModalVisible } = useZustand();
  setIsDetailsModalVisible()
  return null;
}