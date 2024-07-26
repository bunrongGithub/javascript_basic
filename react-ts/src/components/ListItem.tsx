import { FC } from "react";
import { FaTrash } from "react-icons/fa"
interface ListItemProps {
  task: string;
  onDelete: () => void;
}
const ListItem: FC<ListItemProps> = ({ task, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center py-2 border-b border-gray-200`}
    >
      <p>{task}</p>
      <button
        className='text-red-400 hover:text-red-800'
        onClick={onDelete}
      >
        <FaTrash />
      </button>
    </li>
  )
}

export default ListItem