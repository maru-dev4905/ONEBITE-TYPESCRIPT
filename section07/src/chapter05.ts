/**
 * 프로미스
 * 
 * Promise 클래스는 타입변수를 넣지 않으면 자동으로 unknown 타입으로 추론된다.
 */
const promise = new Promise<number>((resolve, reject)=>{
  setTimeout(()=>{
    resolve(20);
    reject("~~ 때문에에ㅔ");
  }, 3000)
});

promise.then((response)=>{
  console.log(response);
})

promise.catch((err)=>{
  if(typeof err === 'string'){
    console.log(err);
  }
})

/**
 * 프로미스를 반환하는 함수의 타입 정의
 */
interface Post {
  id : number,
  title : string,
  content : string,
}

function fetchPost(): Promise<Post>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve({
        id: 1,
        title: '게시글 제목',
        content: '콘텐츠',
      });
    },3000);
  })
}

const postRequest = fetchPost();
postRequest.then((post)=>{
  post.id;
})