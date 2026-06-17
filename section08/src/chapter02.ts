/**
 * 타입 조작하기
 * keyof 연산자 
 * - 객체 타입에 적용하는 연산자임
 * - 객체 안에 프로퍼티 안에 있는 타입들을 유니온 타입으로 추출한다.
 * 
 * typeof 연산자
 * - js에서와는 별개로 ts에서는 타입을 정의할 때 사용시 어떤 변수의 타입을 추출하는 용도로도 사용 가능하다.
 * 
 * key: keyof typeof person
 * - typeof로 추출한 person에 타입들을 객체 타입으로 변환한다.
 * - 그 후, 객체 타입으로부터 keyof로 추출한 유니온 타입들은 string | number 가 된다.
 */

// interface Person {
//   name: string,
//   age: number
// }

type Person = typeof person;

function getPropertyKey(person: Person, key: keyof Person){
  return person[key];
}

const person = {
  name: 'maru',
  age: 26
}

getPropertyKey(person, "name");
