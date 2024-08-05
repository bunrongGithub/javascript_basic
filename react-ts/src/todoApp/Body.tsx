import { FaTrash, FaCog, FaEdit, FaEye } from "react-icons/fa";
import { useToggle } from "./useToggle";
import TodoFormBody from "./TodoFormBody";
import TodoFormDesc from "./TodoFormDesc";
import React, { useState } from "react";
type FormBodyProps = {
  title?: string;
  descrition?: string;
};
type Level = {value: number | string , label: string}
type Status = {value: number | string , label: string}
const status:Status[]= [
  { value: 1, label: "Done" },
  { value: 2, label: "Progess" },
  { value: 3, label: "Pending" },
]
const level:Level[] = [
  { value: 1, label: "Hight" },
  { value: 2, label: "Weak" },
  { value: 3, label: "Low" },
]
const Body = () => {
  const [isToggle, setIsToggle]: any = useToggle();
  const [getStatus,setGetStatus] = useState<Status[]>(status);
  const [getLevel,setGetLevel] = useState<Level[]>(level);
  const [formData, setFormData] = useState<FormBodyProps>({
    title: "",
    descrition: "",
  });
  const onHandleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value }: any = e.target;
    console.log({[name]:value});
    setFormData({ [name]: value });
  };
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setIsToggle(isToggle);
    e.preventDefault();
  };
  return (
    <form
      action=""
      className="w-full h-fu flex justify-between p-2 border"
      onSubmit={onHandleSubmit}
    >
      <div className="w-full text-center h-auto p-1">
        {isToggle ? (
          <TodoFormBody
            title={formData.title}
            description={formData.descrition}
            status={getStatus}
            level={getLevel}
            onChange={(e) => onHandleChange(e)}
          />
        ) : (
          <TodoFormDesc />
        )}
      </div>
      <div className="w-full text-center p-2">
        <div className="w-full m-[3px] flex justify-between pt-0 transition-all cursor-pointer hover:p-1 hover:text-indigo-600">
          <table
            id="example"
            className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg overflow-hidden"
          >
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Level
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Create
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <FaCog />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr className={``}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  Tiger Nixon
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  System Architect
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Edinburgh
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  61
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  2011/04/25
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center justify-between ">
                  <FaEdit className=" text-blue-700 hover:text-blue-900 transition-all" />
                  <FaEye className="text-blue-500 transition-all hover:text-blue-700" />
                  <FaTrash className="hover:text-red-900 transition-all text-red-700" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default Body;
