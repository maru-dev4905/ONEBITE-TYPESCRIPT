/**
 * 첫번째 사례 
 * 
 * 타입을 여러개의 변수로 선언이 가능하다. <T,U>
 */
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap('1',2);


/**
 * 두번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]){
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, 'hello', 'myname']);
// hello


/**
 * 세번째 사례
 */
function getLength<T extends { length: number }>(data: T){
  return data.length;
}

let var1 = getLength([1,2,3]);
let var2 = getLength(['12345']);
let var3 = getLength({length: 10});
// let var4 = getLength(10);

