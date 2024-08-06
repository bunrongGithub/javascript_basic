import React from "react";

interface TodoFormDescProps{
  desc?: string
}
const TodoFormDesc:React.FC<TodoFormDescProps> = ({desc}) => {
  return (
    <>
      <h1 className={` font-medium text-slate-600 text-[20px] `}>
        {desc}
      </h1>
    </>
  );
};

export default TodoFormDesc;
