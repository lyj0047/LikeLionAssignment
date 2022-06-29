//새로운 항목을 입력하고 추가할 수 있게 해주는 컴포넌트

import React, { useState, useCallback } from "react";
import './TodoInsert.scss'
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms/todos";

let id = 0
const getId = () => id++

const TodoInput = () => {
  const setTodo = useSetRecoilState(todosState)
  const [text, setText] = useState('')

  const onChange = e => {
    setText(e.target.value)
  }

  const addTodo = () => {
    if (!text) {
      alert('정확한 값을 입력해주세요!')
      return
    }

    setTodo(todos => todos.concat({ id: getId(), text, completed: false }))
    setText('')
  }

  const onKeyDown = e => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <Input
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="할일을 입력해주세요."
      autoFocus
    />
  )
}

export default TodoInsert;