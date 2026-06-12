/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = ()=>number;
type B = ()=>10;

let a:A = () => 10;
let b:B = () => 10;

// a = b;
// b = a;
// b = a는 b의 반환 값이 리터럴 넘버 타입이기 때문에 다운 캐스팅임으로 할당될 수 없다.

// 기준 2. 매개변수가 호환되는가
// 2-1. 매개변수의 갯수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c:C = (value) => {};
let d:D = (value) => {};

// c = d;
// d = c;
// 매개변수 타입을 기준으로 함수 타입을 호환성을 판단할 때는 업캐스팅일 때는 안되고 다운캐스팅일 때여야만 한다.

type Animal = {
  name: string,
}
type Dog = {
  name: string,
  color: string
}

let animalFunc = (animal:Animal) => {}
let dogFunc = (dog:Dog) => {
  console.log(dog.name)
  console.log(dog.color)
}
// animalFunc = dogFunc;


// 2-2. 매개변수의 갯수가 다를 때

type Func1 = (a:number, b:number) => void;
type Func2 = (a:number) => void;

let func1: Func1 = (a, b) => {}
let func2: Func2 = (a) => {}

func1 = func2;
// func2 = func1;
