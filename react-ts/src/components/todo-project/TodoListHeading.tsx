import { FaPlusSquare } from "react-icons/fa";

type headingType = {
    content?: string;
    task?: string;
    setTask?: (e: string) => void;
    onAdd?: () => void;
    reference?:React.RefObject<HTMLInputElement>
}

export const TodoListHeading: React.FC<headingType> = ({ content, task,reference, setTask, onAdd }) => {
    return (
        <div className="mb-4">
            <h1 className="text-grey-darkest">{content}</h1>
            <div className="flex mt-4">
                <input
                    /// <reference path="" />
                    ref={reference}
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    value={task}
                    onChange={(e) => setTask && setTask(e.target.value)}
                />
                <button onClick={onAdd} className="flex-no-shrink p-1 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"><FaPlusSquare className="text-blue-600 size-7 "/></button>
            </div>
        </div>
    );
}