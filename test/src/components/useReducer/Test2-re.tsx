import React, { useReducer, useState } from 'react';

export default function UseReducerTest2RE(){
  // 문제 2 ⭐⭐ 투두리스트 재도전
  /**
   * 
요구사항

reducer 함수 작성
텍스트 입력 후 추가 버튼으로 todo 추가
항목 클릭 시 done 토글 (완료 시 취소선)
삭제 버튼으로 항목 제거
   * 
   * 
   * 
   */
  type Todo = {
    id: number;
    text: string;
    done: boolean;
  }

  type State = {
    todos: Todo[];
  }
  type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'TOGGLE'; payload: number }
    | { type: 'DELETE'; payload: number }

  function reducer(state: State, action: Action){
    switch(action.type){
      case 'ADD' : 
        return {
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload,
              done: false,
            }
          ]
        }
      case 'TOGGLE' :
        return {
          todos: 
            state.todos.map((todo) => {
              return todo.id === action.payload ? {
                ...todo,
                done: !todo.done
              } : {...todo}
            })
        }
      case 'DELETE' : 
        return {
          todos: state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
  }
  const [text, setText] = useState<string>('');
  const [state, dispatch] = useReducer(reducer, {todos: []});

  return (
    <div>
      <input type="text" onChange={(e)=>setText(e.target.value)}/>
      <button onClick={()=>{dispatch({type: 'ADD', payload: text})}}></button>
      <ul>
        {
          state.todos.map((todo)=>{
            return <li key={todo.id}>
              <p>{todo.id} 번</p>
              <p>내용: {todo.text}</p>
              <span
                onClick={()=>{
                  dispatch({type: 'TOGGLE', payload:todo.id});
                }}
                >
                Done
              </span>
              <button onClick={()=>{
                dispatch({type: 'DELETE', payload:todo.id})
              }}>
                Delete
              </button>
            </li>
          })
        }
      </ul>
    </div>
  )
}