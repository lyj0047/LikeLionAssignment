import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todosState } from "../atoms/todos";
import './TodoInsert.scss'
import GlobalStyle from './../styles/GlobalStyle';

let id = 0;
const getId = () => id++;

const TodoInsert = () => {
  const setTodo = useSetRecoilState(todosState);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const addTodo = () => {
    if (!text) {
      alert("정확한 값을 입력해주세요!");
      return;
    }

    setTodo(todos => todos.concat({ id: getId(), text, completed: false }));
    setText("");
  };

  const onKeyDown = e => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <input
      value={text}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder="할일을 입력해주세요."
      autoFocus
    />
  );
};

export default TodoInsert;