/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새로운 타입을 만들어낸 타입
 * -> 합집합 타입과 교집합 타입이 존재한다.
 */

/**
 * 1. 합집합 - Union 타입
 */

let a: string | number | boolean | undefined | null | {};
a = 1;
a = "hello";
a = true;

let arr:(number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
}

type Person = {
  name: string;
  language: string
}

type Union1 = Dog | Person;

let union1: Union1 = {
  name: '',
  color: '',
}
let union2: Union1 = {
  name: '',
  language: '',
}
let union3: Union1 = {
  name: '',
  color: '',
  language: '',
}
// let union4: Union1 = {
//   name: '',
// }


/**
 * 2. 교집합 타입 - Intersection Type
 */

let variable: number & string;

type Intersection = Dog & Person;

let intersection1: Intersection = {
  name: '',
  color: '',
  language: '',
}

/**
 * 타입을 지정할 시 | 를 넣을 시 합집합으로 만들 수 있지만
 * & 를 사용 시 교집합 타입으로 만들 수 있다.
 */
