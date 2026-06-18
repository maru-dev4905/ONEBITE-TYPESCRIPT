import {useState, useEffect} from 'react';

export default function UseEffectTest1() {
  /**
   * 문제 1 ⭐ 타이틀 업데이트
   * 
   * 요구사항

      count가 바뀔 때마다 브라우저 탭 타이틀을 카운터: {count} 로 업데이트
      document.title 사용
   */

  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `카운터: ${count}`;
  }, [count])

  return (
    <div>
      <h1>useEffect TEST1</h1>
      <h2>{count}</h2>
      <button onClick={()=> setCount(count + 1)}>카운터 증가</button>
    </div>
  )
}