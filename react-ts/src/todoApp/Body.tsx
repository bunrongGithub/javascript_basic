import { FaTrash, FaCog, FaEdit, FaEye } from "react-icons/fa";
import { useToggle } from "./useToggle";
import TodoFormBody from "./TodoFormBody";
import TodoFormDesc from "./TodoFormDesc";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { data } from "./data";
type Level = { value: number | string; label: string };
type Status = { value: number | string; label: string };
type FormBodyProps = {
  title?: string;
  description?: string;
  status?: Status | null;
  level?: Level | null;
};
const BaseURL = `http://localhost:9000/`;

async function getTodo(uri:string){
  const response = (await axios.get(`${uri}/todo`)).data;
  return response;
}
const statusOptions: Status[] = [
  { value: 1, label: "Done" },
  { value: 2, label: "In Progress" },
  { value: 3, label: "Pending" },
];

const levelOptions: Level[] = [
  { value: 1, label: "High" },
  { value: 2, label: "Medium" },
  { value: 3, label: "Low" },
];

const Body = () => {
  const [isToggle, setIsToggle] = useToggle();
  const [getStatus, setGetStatus] = useState<Status[]>(statusOptions);
  const [getLevel, setGetLevel] = useState<Level[]>(levelOptions);
  const [formData, setFormData] = useState<FormBodyProps>({
    title: "",
    description: "",
    status: null,
    level: null,
  });
  const [datas,setDatas] = useState(null);
  useEffect(()=>{
    getTodo(`${BaseURL}`)
      .then(res => setDatas(res))
      .catch(er => console.log(er))
  },[])
  const onHandleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type, selectedIndex } = e.target;
    if (type === 'select-one') {
      const selectedOption = (e.target as HTMLSelectElement).options[selectedIndex];
      const newValue = {
        value: selectedOption.value,
        label: selectedOption.text,
      };
      setFormData(prev => ({
        ...prev,
        [name]: newValue,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDatas(prev => ({
      ...prev , title: formData.title,
      description:formData.description,
      status:formData.status?.value,
      level: formData.level?.label
    }))
    // Handle form submission logic here
  };

  return (
    <form
      className="w-full h-full flex justify-between p-2 border"
      onSubmit={onHandleSubmit}
    >
      <div className="w-full text-center h-auto p-1">
        {isToggle ? (
          <TodoFormBody
            title={formData.title}
            description={formData.description}
            status={getStatus}
            level={getLevel}
            onChange={onHandleChange}
          />
        ) : (
          <TodoFormDesc desc="Do something yourself" />
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
                  <FaCog />
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {
                datas.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {item?.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                     {item?.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item?.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {item?.level}
                    </td>
                   
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center justify-between">
                      <FaEdit className="text-blue-700 hover:text-blue-900 transition-all" />
                      <FaEye className="text-blue-500 transition-all hover:text-blue-700" />
                      <FaTrash className="hover:text-red-900 transition-all text-red-700" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </form>
  );
};

export default Body;
