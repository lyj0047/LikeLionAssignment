import React from "react";
import './TodoListItem.scss'
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms/todos";

const TodoItem = ({ data }) => {
  const setTodos = useSetRecoilState(todosState);

  const toggleTodo = () => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === data.id ? { ...data, completed: !data.completed } : todo
      )
    );
  };

  const removeTodo = () => {
    setTodos(todos => todos.filter(todo => todo.id !== data.id));
  };

  return (
    <div className="databox" completed={data.completed}>
      <div className="toggle" type="checkbox" onClick={toggleTodo} />
      <text className="content">{data.text}</text>
      <button className="delete" onClick={removeTodo}>다했당</button>
    </div>
  );
};

export default TodoItem;