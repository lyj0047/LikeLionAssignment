//각 할 일 항목에 대한 정보를 보여주는 컴포넌트

import React from "react";

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => onRemove(id)}>다했당</button>
    </div>
  )
}

export default TodoListItem;