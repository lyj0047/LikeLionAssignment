//화면을 가운데 정렬시켜 주는 역할

import React from "react";
import './TodoTemplate.scss'

const TodoTemplate = ({children}) => {
  return (
    <div className="TodoTemplate">
      <div className="app-title">갓생살기</div>
      <div>{children}</div>
    </div>
  )
}

export default TodoTemplate;