import { useRef, useState } from "react";
import { TodoListHeading } from "./TodoListHeading";
import { TodoContent } from "./TodoContent";
import { todosForm } from "./todoFormTypes";

export const TodoFormLayout = () => {
  const [todos, setTodos] = useState<todosForm[]>([]);
  const [task, setTask] = useState<string>("");
  const focuse = useRef<HTMLInputElement>(null);
  const onCompleted = (index: number) => {
    const updateTodos = todos.map((todo, i) =>
      i === index ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updateTodos);
  };
  const onRemove = (index: number) => {
    const filterTodos = todos.filter((_, i) => i !== index);
    setTodos(filterTodos);
  };
  const onAdd = () => {
    focuse.current?.focus()
    if (task.trim() === "") return;
    setTodos([...todos, { text: task, isComplete: false }]);
    setTask("");
  };
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
          {todos.map((todo, index) => (
            <TodoContent
              key={index}
              text={todo.text}
              isComplete={todo.isComplete}
              onComplete={() => onCompleted(index)}
              onRemove={() => onRemove(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
