/**
 * 선언 합침
 * 
 * interface는 type 별칭과는 별개로 동일한 이름으로 중복 선언이 가능하다.
 * 그렇게 중복 선언을 할 시, 모든 선언이 합쳐지게 된다.
 * 이런 특징을 "선언 합침" 혹은 "선언 머징" 이라고 부른다. (declaration merging)
 * 
 * 혹시나 동일한 이름에 중복 선언된 interface에서 동일한 프로퍼티를 중복 정의하는데
 * 타입을 다르게 정의할 경우 충돌이라고 한다. (Conflict)
 * 
 * 선언 합침을 할 경우에는 동일한 타입으로 선언하여야 한다.
 */

interface Person {
  name: string
}

interface Person {
  age: number
}

const person:Person = {
  name: '',
  age: 26
}


/**
 * 모듈 보강
 */
interface Lib {
  a: number,
  b: number,
}

interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "hello"
}