//새로운 항목을 입력하고 추가할 수 있게 해주는 컴포넌트

import React, { useState, useCallback } from "react";
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
  //input 태그 안에서 값을 입력할 때마다 컴포넌트 state인 value에 값이 들어가게 정의
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, [])

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');

      e.preventDefault();
    },
    [onInsert, value]
  )

  return (
    <form onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
      <button type="submit" onSubmit={onSubmit}>+</button>
    </form>
  )
}

export default TodoInsert;