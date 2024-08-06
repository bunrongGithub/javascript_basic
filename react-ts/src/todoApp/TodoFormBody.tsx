import React from "react";
import { FaSave } from "react-icons/fa";

interface TodoFormProps {
  title?: string;
  description?: string; // Fixed typo here
  status?: { value: number; label: string }[] | any;
  level?: { value: number; label: string }[] | any;
  selectStatus?:string
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>| any) => void;
}

const TodoFormBody: React.FC<TodoFormProps> = ({
  title = "",
  description,
  status = [],
  level = [],
  selectStatus,
  onChange
}) => {
  return (
    <>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChange}
        className="w-full mb-2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Title..."
      />
      <textarea
        value={description}
        name="description"
        onChange={onChange}
        rows={8}
        className="w-full mb-2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Description..."
      />
      <select
        name="status"
        value={selectStatus}
        onChange={onChange}
        className="w-full p-2 mb-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Status</option>
        {status&&status?.map((item:any , idex:any) => (
          <option key={idex} value={item?.value}>{item?.label}</option>
        ))}
        
      </select>
      <select
        name="level"
        onChange={onChange}
        className="w-full p-2 mb-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Level</option>
        {level&&level.map(({ value, label }: any) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="shadow-sm rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-all w-full border-gray-300 p-2 px-4 flex justify-center items-center"
      >
        <FaSave /> Save
      </button>
    </>
  );
};

export default TodoFormBody;
