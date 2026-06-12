/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 이야기함.
 */

type Person = {
  name : string;
  age : number;
}

// 매개변수 value에 따라서 
// value => number : toFixed
// value => string : toUppercase
// value => Date : getTime
// value => Person : name은 age살입니다.
function func1(value: string | number | Date | null | Person){
  if(typeof value === 'number'){
    console.log(value.toFixed());
  }else if(typeof value === 'string'){
    console.log(value.toUpperCase());
  }else if(value instanceof Date){
    console.log(value.getTime());
  }else if(value && "age" in value){ // value 안에 age 프로퍼티 값이 있고 value가 null이 아닐 시 true
    console.log(`${value.name}은 ${value.age}입니다`);
  }
}