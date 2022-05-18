import React, { useState, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert'
import TodoList from './components/TodoList'
import { useCallback } from 'react';

function App(){
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '멋사 과제',
      checked: true,
    },
    {
      id: 2,
      text: '네트워크 과제',
      checked: true,
    },
    {
      id: 3,
      text: '시클보 과제',
      checked: true,
    },
  ])

  //useRef 함수를 이용해 nextId 라는 변수에 4를 초기화 시키고 이를 새로 등록된 할 일 객체의 id로 활용
  const nextId = useRef(4);

  //등록버튼을 눌렀을 때 호출되는 함수
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  )

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  )
}

export default App;