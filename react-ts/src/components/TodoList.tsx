// TodoList.tsx

import React, { useState } from 'react';
import { FaPlusSquare } from 'react-icons/fa';

interface TodoListProps {
  handleAddTask: (task: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ handleAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      handleAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex items-center border-b border-gray-200 pb-2'>
        <input
          type='text'
          className='flex-grow bg-transparent outline-none text-xl'
          placeholder='Add a new task...'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className='bg-lime-600 text-white px-2 py-2 rounded-md'
          type='submit'
        >
          <FaPlusSquare className='size-5' />
        </button>
      </div>
    </form>
  );
};

export default TodoList;
