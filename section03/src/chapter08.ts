/**
 * 서로소 유니온 타입 
 * 교집합이 없는 타입들로만 만든 유니온 타입
 */

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
}

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
}

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
}

type User = Admin | Member | Guest;

// Admin => {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member => {name}님 현재까지 {point}P 모았습니다.
// Guest => {name}님 현재까지 {visitCount}번 방문했습니다.

function login(user: User){
  switch(user.tag){
    case "ADMIN": {
      console.log(`${name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
      break;
    }
    case "MEMBER": {
      console.log(`${name}님 현재까지 ${user.point}P 모았습니다.`);
      break;
    }
    case "GUEST": {
      console.log(`${name}님 현재까지 ${user.visitCount}번 방문했습니다.`);
      break;
    }
  }

  // if(user.tag === 'ADMIN'){
  //   //Admin type
  //   console.log(`${name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`)
  // }else if(user.tag === 'MEMBER'){
  //   //Member type
  //   console.log(`${name}님 현재까지 ${user.point}P 모았습니다.`)
  // }else if(user.tag === 'GUEST'){
  //   //Guest type
  //   console.log(`${name}님 현재까지 ${user.visitCount}번 방문했습니다.`)
  // }
}


/**
 * 복습겸 한가지 더 사례
 */

// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING'
}

type FailedTask = {
  state: 'FAILED',
  error: {
    message: string
  }
}

type SuccessTask = {
  state: 'SUCCESS',
  response: {
    data: string
  }
}

// type AsyncTask = {
//   state: 'LOADING' | 'FAILED' | 'SUCCESS',
//   error?: {
//     message: string,
//   },
//   response?: {
//     data: string,
//   }
// }
type AsyncTask = LoadingTask | FailedTask | SuccessTask;


// 로딩중 -> 콘솔에 로딩중 출력
// 실패 -> 실패: 에러메시지 출력
// 성공 -> 성공: 데이터 출력
function processResult(task: AsyncTask){
  switch(task.state){
    case 'LOADING':{
      console.log(`로딩중`);
      break;
    }
    case 'FAILED':{
      console.log(`에러 발생: ${task.error.message}`);
      break;
    }
    case 'SUCCESS':{
      console.log(`성공: ${task.response.data}`);
      break;
    }
  }
}
const loading: AsyncTask = {
  state: 'LOADING',
}
const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: '404 ~~~'
  }
}
const success: AsyncTask = {
  state: 'SUCCESS',
  response:{
    data: 'data ~~~'
  }
}