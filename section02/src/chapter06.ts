// any
// 특정 변수에 타입을 확실히 모를때 사용
// any 타입을 사용 시 어떤 타입이든지 넣을 수 있다.
let anyVar:any = 10;
anyVar = 'hello';

let num:number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if(typeof unknownVar === 'number'){
  // 타입 정제
  num = unknownVar;
}

// 어떤 타입이든지 넣을지 모른다면 런타임 에러를 발생 시킬 수 있는 any타입 보다는 unknown타입을 사용하는걸 권장.