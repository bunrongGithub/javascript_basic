import { useEffect, useState } from "react";
import axios from "axios";
import { todosForm } from "./todoFormTypes";

const BASE_URL = `http://localhost:9000`;

// Fetch a todo by ID
const getTodoById = async (id: string | number): Promise<todosForm> => {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch todo: ${error}`);
  }
};
const updateTodoById = async (todo: todosForm): Promise<void> => {
  try {
    await axios.put(`${BASE_URL}/todos/${todo.id}`, todo);
  } catch (error) {
    console.error(`Failed to update todo: ${error}`);
  }
};

const useTodo = () => {
  const [todos, setTodos] = useState<todosForm[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/todos`);
      setTodos(response.data);
    } catch (error) {
      console.error("Failed to fetch todos:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (todo: todosForm) => {
    try {
      await axios.post(`${BASE_URL}/todos`, todo);
      setTodos((prevTodos) => [...prevTodos, todo]);
    } catch (error) {
      console.error("Failed to add todo:", error);
    }
  };

  const removeTodo = async (id: number): Promise<void> => {
    try {
      const response = await axios.delete(`${BASE_URL}/todos/${id}`);
      if (response.status === 200) {
        setTodos((prev) => prev.filter((item) => item.id !== id));
      } else {
        console.error("Failed to remove todo:", response.statusText);
      }
    } catch (error) {
      console.error("Failed to remove todo:", error);
    }
  };

  const toggleTodo = async (id: number): Promise<void> => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      );
      const updatedTodo = updatedTodos.find((todo) => todo.id === id);

      if (updatedTodo) {
        updateTodoById(updatedTodo);
      }
      return updatedTodos;
    });
  };
const editeTodo = async (id: number, newTitle:string) => {

}
  return {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
    editeTodo
  };
};

export default useTodo;
