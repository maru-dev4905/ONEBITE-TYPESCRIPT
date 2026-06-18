import {useRef, useState, useEffect} from 'react';

export default function UseRefTest3() {
  /**
   * 문제 3 ⭐⭐⭐ 이전 값 기억
   * 
   * 요구사항

      input에 타이핑하면 현재 값 표시
      "이전 값: N" 도 함께 표시
      이전 값은 useRef로 저장
      힌트: useEffect 같이 써야 해
   */
  
  useEffect(()=>{
    prevRef.current = input;
  });

  const prevRef = useRef('');

  const [input, setInput] = useState('');

  useEffect(()=>{
    prevRef.current = input;
  },[input]);

  return (
    <div>
      <p>이전 값: {prevRef.current}</p>
      <input type="text" onInput={(e)=>{setInput((e.target as HTMLInputElement).value)}}/>
      <p>현재 값: {input}</p>
    </div>
  )
}