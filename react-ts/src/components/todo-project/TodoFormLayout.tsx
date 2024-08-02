import { useRef, useState } from "react";
import useTodo from "./useTodo"; // Adjust the import path
import { TodoListHeading } from "./TodoListHeading";
import { TodoContent } from "./TodoContent";
import { todosForm } from "./todoFormTypes";
export const TodoFormLayout = () => {
  const { todos, addTodo, removeTodo, toggleTodo,editeTodo } = useTodo();
  const [task, setTask] = useState<string>("");
  const [isLoading,setIsLoading] = useState<boolean>(false);
  const focuse = useRef<HTMLInputElement>(null);
  const onCompleted = (id: number) => {
    toggleTodo(id);
  };
  const onHandleEdit = (id:number)=>{
    //editeTodo(id)
  }
  const onRemove = (id: number) => {
    removeTodo(id);
  };

  const onAdd = () => {
  const insertId = Number(todos[todos.length - 1].id) + 1
    if (task.trim() === "") return;
    const newTodo: todosForm = {id:insertId ,  title: task, isComplete: false };
    setIsLoading(true)
    addTodo(newTodo);
    setIsLoading(false)
    setTask("");
    focuse.current?.focus();
  };
  if(isLoading) return <p>Loading</p>
  return (
    <div className="flex items-center justify-center bg-teal-lightest font-sans relative top-20">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <TodoListHeading
          reference={focuse}
          task={task}
          setTask={setTask}
          onAdd={onAdd}
          content="Todo List"
        />
        <div>
          
          {isLoading ? <p>loading</p> : 
          todos.map((todo, index) => (
            <TodoContent
              key={index}
              text={todo.title}
              isComplete={todo.isComplete}
              onComplete={() => onCompleted(todo.id)}
              onRemove={() => onRemove(todo.id)}
              onEdite={()=> onHandleEdit(todo.id)}
              onHandleChange={(e) =>console.log( e.target.value)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
