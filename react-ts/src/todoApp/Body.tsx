import { FaTrash } from "react-icons/fa";

const Body = () => {
  return (
    <form
      action=""
      className="w-full h-fu flex justify-between p-2 bg-slate-50"
    >
      <div className="w-full text-center border h-[500px] p-1">
        <h1 className=" font-medium text-slate-600 text-[20px] hidden ">
          Do Somthing...
        </h1>
        <input
          type="text"
          className="w-full mb-2 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="description..."
        />
        <select
         
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          
        ></select>
      </div>
      <div className="w-full text-center p-2 border">
        <div className="w-full m-[3px] flex justify-between bg-slate-50 shadow p-2 transition-all cursor-pointer hover:p-3 hover:bg-slate-50 hover:text-indigo-600">
          <p>Todo Data</p>
          <button className="hover:text-red-700">
            <FaTrash />
          </button>
        </div>
        <div className="w-full m-[3px] flex justify-between bg-slate-50 shadow p-2 transition-all cursor-pointer hover:p-3 hover:bg-slate-50 hover:text-indigo-600">
          <p>Todo Data</p>
          <button className="hover:text-red-700">
            <FaTrash />
          </button>
        </div>
        <div className="w-full m-[3px] flex justify-between bg-slate-50 shadow p-2 transition-all cursor-pointer hover:p-3 hover:bg-slate-50 hover:text-indigo-600">
          <p>Todo Data</p>
          <button className="hover:text-red-700">
            <FaTrash />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Body;
