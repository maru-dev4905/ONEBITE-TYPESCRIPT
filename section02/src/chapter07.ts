// Void
// void -> 아무것도 없음을 나타내는 타입

function func1(): string {
  return "hello";
}

// return을 사용하고 싶지 않은 함수에서는 void 타입을 사용한다.
function func2(): void{
  console.log('hello');
}

// void 타입은 undefined 값을 제외한 다른 타입에 값은 할당할 수 없다.
let a: void;
// a = 1;
// a = '1';
// a = {};
a = undefined;


// never
// 불가능한 타입