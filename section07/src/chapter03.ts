/**
 * 제네릭 인터페이스
 * 
 * 타입 변수
 * = 타입 파라메터
 * = 제네릭 타입 변수
 * = 제네릭 타입 파라메터
 * 
 * 
 */

interface KeyPair<K, V>{
  key: K,
  value: V,
}

let keyPair: KeyPair<string, number> = {
  key: 'fisrtKey',
  value: 0,
}

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ['a','b']
}

/**
 * 인덱스 시그니처
 */

interface NumberMap{
  [key: string]: number;
}

let numberMap: NumberMap ={
  key: -123,
  key2: 123123,
}

interface Map<V>{
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: '123',
}

let booleanMap: Map<boolean> = {
  key: true,
}


/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
}

let stringMap2: Map2<string> = {
  key: 'st12',
}


/**
 * 제네릭 인터페이스 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */
interface Student {
  type: 'student',
  school: string,
}

interface Developer {
  type: 'developer',
  skill: string,
}

interface User<T> {
  name: string,
  profile: T
}

function goToSchool(user: User<Student>){
  // if(user.profile.type !== 'student'){
  //   console.log('잘 못 오셨습니다.');
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developer:User<Developer> ={
  name: 'lee maru',
  profile: {
    type: 'developer',
    skill: 'TS'
  }
}

const student:User<Student> = {
  name: 'kim jochung',
  profile: {
    type: 'student',
    school: 'aaa',
  }
}