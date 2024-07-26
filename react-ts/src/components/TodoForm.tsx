import { FC } from "react";

interface TodoFormProps{
    [x: string]: any;
    heading?: string;
    title?:string;
}
const TodoForm:FC<TodoFormProps> = (props) => {
    return  (
       <div className="container max-w-screen-sm m-auto mt-24 bg-blue-500 p-4 text-white rounded-sm shadow-lg">
        <h1 className='text-2xl font-bold mb-4'>{props.heading}</h1>
        {props.children}
       </div>
    )
}
export default TodoForm;