import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoListItem";
import { useRecoilValue } from "recoil";
import { todosState } from "../atoms/todos";

const TodoList = () => {
  const todos = useRecoilValue(todosState);

  return (
    <>
      <div>
        {todos.map(todo => (
          <TodoItem key={todo.id} data={todo} />
        ))}
      </div>
    </>
  );
};

export default TodoList;