import { FaSearch, FaPlus, FaFilter } from "react-icons/fa";
import { useRef } from "react";
import { useToggle } from "./useToggle";
const Header = () => {
  const [isToggle,setIsToggle]: any = useToggle();
  const focus = useRef<HTMLInputElement>(null);
  return (
    <div className="w-full m-auto text-center mb-[10px] flex justify-between align-middle mt-2 ">
    <div className="w-1/3 flex justify-between ">
      <div className="border w-full flex items-center rounded bg-slate-50 shadow">
        <FaSearch
          onClick={() => focus.current?.focus()}
          className="text-2xl cursor-pointer size-8 p-2 text-slate-700"
        />
        <input
          ref={focus}
          type="search"
          className=" w-full p-3"
          placeholder="search..."
        />
      </div>
      <div className="border mx-2 flex justify-center align-middle p-1 bg-slate rounded-[5px] ">
        <FaFilter className="text-2xl cursor-pointer size-8 p-1 pt-3 text-slate-700" />
      </div>
    </div>
    <div className="border flex justify-center align-middle p-1 bg-slate-50 rounded-[5px]">
      <FaPlus onClick={()=>setIsToggle(!isToggle)} className="text-2xl cursor-pointer size-8 p-1 pt-3 text-slate-700" />
    </div>
  </div>
  )
}

export default Header