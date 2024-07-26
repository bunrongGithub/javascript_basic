type headingType = {
    content?: string;
    task?: string;
    setTask?: (e: string) => void;
    onAdd?: () => void;
}
export const TodoListHeading: React.FC<headingType> = ({ content, task, setTask, onAdd }) => {
    
    return (
        <div className="mb-4">
            <h1 className="text-grey-darkest">{content}</h1>
            <div className="flex mt-4">
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                    placeholder="Add Todo"
                    value={task}
                    onChange={(e) => setTask && setTask(e.target.value)}
                />
                <button onClick={onAdd} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal">Add</button>
            </div>
        </div>
    );
}