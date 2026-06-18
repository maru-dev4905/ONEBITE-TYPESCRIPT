import {useState, useEffect} from 'react';

export default function UseEffectTest3() {
  /**
   * 문제 3 ⭐⭐⭐ 포모도로 타이머
   * 
    요구사항

    시작 버튼 누르면 1초마다 time 감소
    정지 버튼 누르면 멈춤
    time이 0이 되면 alert('타이머 종료!') 출력
    MM:SS 형식으로 화면에 표시
    힌트: setInterval + clearInterval
   */

  const [time, setTime] = useState(25 * 60); // 25분
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    if(!isRunning) return;

    let pomodoroTimer = setInterval(()=>{
      setTime((prev)=>{
        if(prev <= 1){
          clearInterval(pomodoroTimer);
          alert('타이머 종료');
          return 0;
        }
        return prev - 1;
      })
    },1000);

    return ()=>{
      clearInterval(pomodoroTimer);
    }
  },[isRunning])
  
  const mm = String(Math.floor(time / 60)).padStart(2, '0');
  const ss = String(time % 60).padStart(2, '0');

// 화면에
  
  return (
    <div>
      <h1>{mm}:{ss}</h1>
      <button onClick={()=>(setIsRunning(true))}>START</button>
      <button onClick={()=>(setIsRunning(false))}>STOP</button>
    </div>
  )
}