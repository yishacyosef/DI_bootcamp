import React from 'react';

export function TodoItem({todo, toggleTodo}) {
    const{ id, task, completed } =todo;
    const handleTodoclick = () => {
      toggleTodo(id);
    };
  return <li>
    <input type="checkbox" onChange={handleTodoclick}/>
    {task}
    </li>;
}
