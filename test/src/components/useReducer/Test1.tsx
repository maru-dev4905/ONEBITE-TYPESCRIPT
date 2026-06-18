import React, { useReducer } from 'react';

export default function UseReducerTest1(){
  // 문제 1 ⭐ 카운터
  /**
   * 
   * 요구사항

    reducer 함수 작성
    useReducer 로 연결
    버튼 3개 렌더링: +1 / -1 / 초기화
    현재 count 화면에 표시
   * 
   * 
   */
  type State = {
    count: number;
  }

  type Action = 
    | { type: 'INCREMENT' }
    | { type: 'DECREMENT' }
    | { type: 'RESET' }

  const initialState: State = { count: 0 };

  function reducer(state: State, action: Action){
    switch(action.type){
      case "INCREMENT" : 
        return { count: state.count + 1 };
      case "DECREMENT" :
        return { count: state.count - 1 };
      case "RESET" :
        return { count: 0 };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch({type: 'INCREMENT'})}>+1</button>
      <button onClick={()=>dispatch({type: 'DECREMENT'})}>-1</button>
      <button onClick={()=>dispatch({type: 'RESET'})}>Reset</button>
    </div>
  )
}