//todos라는 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용하여 TodoListItem 컴포넌트로 변환하여 보여주는 컴포넌트

import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove}/>
      ))}
    </div>
  )
}

export default TodoList;