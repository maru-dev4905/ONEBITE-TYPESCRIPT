import {useRef, useEffect} from 'react';

export default function UseRefTest1() {
  /**
   * 문제 1 ⭐ DOM 접근
   * 
   * 요구사항

      페이지 로드되면 input에 자동 포커스
      버튼 클릭 시 input 값 초기화 + 다시 포커스
      useRef로 input에 직접 접근
   */
  
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    inputRef.current?.focus();
  },[])

  return (
    <div>
      <input type="text" ref={inputRef}/>
    </div>
  )
}