import {useState, useEffect} from 'react';

export default function UseEffectTest2() {
  /**
   * 문제 2 ⭐⭐ 디바운스 검색
   * 
      요구사항

      input에 타이핑 후 0.5초 동안 입력이 없으면 result에 "${keyword} 검색중..." 세팅
      타이핑 중엔 실행 안 됨
      힌트: setTimeout + clearTimeout
   */

  const [keyword, setKeyword] = useState<string>('');
  const [result, setResult] = useState<string>('');

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(keyword){
        setResult(`${keyword} 검색중...`);
      }
    },500);

    return () => {
      clearTimeout(timer)
    }
  }, [keyword]);

  return (
    <div>
      <input type="text" placeholder="디바운스 디바운스" onChange={(e)=>{setKeyword(e.target.value)}}/>
      <p>{result}</p>
    </div>
  )
}