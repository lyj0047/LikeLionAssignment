//각 할 일 항목에 대한 정보를 보여주는 컴포넌트

import React from "react";
import styled, { css } from 'styled-components'
import * as Styles from "../StyledStyles"; // StyledStyles.js의 모든 변수들을 import
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms/todos";

const TodoItem = ({ data }) => {
  const setTodos = useSetRecoilState(todosState)

  const toggleTodo = () => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === data.id ? { ...data, completed: !data.completed } : todo
      )
    )
  }

  const removeTodo = () => {
    setTodos(todos => todos.filter(todo => todo.id !== data.id))
  }
  
  return (
    <Container completed={data.completed}>
      <ToggleButton type="checkbox" onClick={toggleTodo} />
      <Text>{data.text}</Text>
      <DestroyButton onClick={removeTodo}>X</DestroyButton>
    </Container>
  )
}

export default TodoListItem;