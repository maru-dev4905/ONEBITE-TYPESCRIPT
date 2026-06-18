import React, { useReducer, useState } from 'react';

export default function UseReducerTest2(){
  // 문제 2 ⭐⭐ 투두리스트
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
  /*
    todos: [
      id: number;
      text: string;
      done: boolean;
    ]
  */
  type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'TOGGLE'; payload: number }
    | { type: 'DELETE'; payload: number }


  function reducer(state:State, action: Action){
    switch(action.type){
      case 'ADD' : 
        return { 
          todos: [
            ...state.todos,
            {
              id: Date.now(),
              text: action.payload,
              done: false,
            }
          ]
         }
      case 'TOGGLE' : 
        return {
          todos: state.todos.map((todo) =>
            todo.id === action.payload
            ? {...todo, done: !todo.done}
            : todo
          )
        }
      case 'DELETE' : 
        return {
          todos: state.todos.filter((todo) => 
            todo.id !== action.payload
          )
        }
    }
  }

  const [text, setText] = useState<string>('');

  const [state, dispatch] = useReducer(reducer, {todos:[]});

  return (
    <div>
      <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
      <button type='button' onClick={()=>{dispatch({type:'ADD', payload: text})}}>ADD</button>

      <ul>
        {state.todos.map((todo)=>{
          return (
            <li key={todo.id}>
              <p>{todo.id}번</p>
              <p>{todo.text}</p>
              <p>{todo.done}</p>
              <span
                onClick={()=>{
                  dispatch({
                    type:'TOGGLE',
                    payload: todo.id
                  });
                }}
                style={{
                  textDecoration: todo.done ? 'line-through' : 'none',
                }}
              >Toggle</span>
              <button type='button' onClick={(e)=>{
                dispatch({
                  type:'DELETE',
                  payload: todo.id
                })
              }}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}