/**
 * Exclude<T, U>
 * -> 제외하다 / 추방하다
 * -> T에서 U를 제거하다.
 */

type Exclude<T, U> = T extends U ? never : T;
// 1
// Exclude<string, boolean> | 
// Exclude<boolean, boolean>

// 2
// string |
// never 

// 결과
// string

type A = Exclude<string | boolean, boolean>



/**
 * Extract<T, U>
 * -> T에서 U를 추출
 */

type Extract<T, U> = T extends U ? T : never;

type B = Extract<string | boolean, boolean>


/**
 * ReturnType
 * -> 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...arg: any) => any> = T extends (...arg:any) => infer R ? R : never;

function funcA(){
  return 'hello'
}

function funcB(){
  return 123;
}

type ReturnA = ReturnType<typeof funcA>;
type ReturnB = ReturnType<typeof funcB>;