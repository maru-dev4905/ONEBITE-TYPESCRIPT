import React, { useReducer, useState } from 'react';

export default function UseReducerTest3(){
  // 문제 3 ⭐⭐⭐ 다단계 폼
  /**
   * 
요구사항

step 1: 이름 입력
step 2: 이메일 입력
step 3: 비밀번호 입력
다음 / 이전 버튼으로 step 이동
step 3에서 제출 시 console.log로 전체 데이터 출력
   * 
   * 
   * 
   */
  type FormState = {
    step: 1 | 2 | 3;
    name: string;
    email: string;
    password: string;
  }

  type Action =
    | { type: 'SET_NAME'; payload: string }
    | { type: 'SET_EMAIL'; payload: string }
    | { type: 'SET_PASSWORD'; payload: string }
    | { type: 'NEXT_STEP' }
    | { type: 'PREV_STEP' }
    | { type: 'SUBMIT' }

  const initialState: FormState = {
    step: 1,
    name: '',
    email: '',
    password: '',
  }

  function reducer(state:FormState, action: Action){
    switch(action.type){
      case 'SET_NAME' : 
        return {
            ...state,
            name: action.payload}
      case 'SET_EMAIL' : 
        return {
            ...state,
            email: action.payload}
      case 'SET_PASSWORD' : 
        return {
            ...state,
            password: action.payload}
      case 'NEXT_STEP' : 
        return {
          ...state,
          step: (state.step < 3 ? state.step + 1 : state.step) as 1 | 2 | 3
        };
      case 'PREV_STEP' :
        return {
          ...state,
          step: (state.step > 1 ? state.step - 1 : state.step) as 1 | 2 | 3
        };
      case 'SUBMIT' :
        console.log(
          `이름 : ${state.name}`,
          `이메일 : ${state.email}`,
          `비밀번호 : ${state.password}`,
        )
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <button onClick={()=>dispatch({type: 'PREV_STEP'})}>PREV</button>
      <div style={{
        display: state.step === 1 ? 'block' : 'none'
      }}>
        <input type="text" placeholder="이름을 입력하세요" onInput={(e)=>dispatch({ type: 'SET_NAME', payload: (e.target as HTMLInputElement).value})}/>
      </div>
      <div style={{
        display: state.step === 2 ? 'block' : 'none'
      }}>
        <input type="email" placeholder="이메일을 입력하세요" onInput={(e)=>dispatch({ type: 'SET_EMAIL', payload: (e.target as HTMLInputElement).value})}/>
      </div>
      <div style={{
        display: state.step === 3 ? 'block' : 'none'
      }}>
        <input type="password" placeholder="비밀번호를 입력하세요" onInput={(e)=>dispatch({ type: 'SET_PASSWORD', payload: (e.target as HTMLInputElement).value})}/>
        <button onClick={()=>dispatch({type: 'SUBMIT'})}>SUBMIT</button>
      </div>
      <button onClick={()=>dispatch({type: 'NEXT_STEP'})}>NEXT</button>
    </div>
  )
}