//todos라는 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용하여 TodoListItem 컴포넌트로 변환하여 보여주는 컴포넌트

import React from "react";
import styled from 'styled-components'
import TodoListItem from "./TodoListItem";
import { useRecoilValue } from "recoil";
import { todosState } from "../atoms/todos";

const TodoList = () => {
  const todos = useRecoilValue(todosState)

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem data={todo} key={todo.id}/>
      ))}
    </div>
  )
}

export default TodoList;