//각 할 일 항목에 대한 정보를 보여주는 컴포넌트

import React from "react";
import * as Styles from "../StyledStyles"; // StyledStyles.js의 모든 변수들을 import

const TodoListItem = ({ todo, onRemove }) => {
  const { id, text, checked } = todo;
  return (
    <div>
      <div>{text}</div>
      <Styles.Button className="finish" onClick={() => onRemove(id)}>다했당</Styles.Button>
    </div>
  )
}

export default TodoListItem;