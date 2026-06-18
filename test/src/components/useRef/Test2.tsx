import {useRef, useState, useEffect} from 'react';

export default function UseRefTest2() {
  /**
   * 문제 2 ⭐⭐ 렌더링 카운트
   * 
   * 요구사항

    +1 버튼 누르면 count 증가
    화면에 "렌더링 횟수: N" 표시
    렌더링 횟수는 useRef로 관리 (useState 쓰면 무한루프!)
   */
  

  const [count, setCount] = useState(0);

  const renderRef = useRef(0);

  useEffect(()=>{
    renderRef.current = renderRef.current + 1;
  });

  return (
    <div>
      <button onClick={()=>{setCount(count + 1)}}>+1</button>
      <p>렌더링 횟수: {count}</p>
    </div>
  )
}