// Unknown 타입
function unknownExam(){
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;
  let f: unknown = ()=>{};

  let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}
// unknown 타입으로 만든 변수의 값을 이외에 타입에 변수에 unknown타입의 변수는 어떠한 변수에도 할당될 수 없다.
// 즉 업캐스팅은 가능하나, 다운캐스팅은 불가능하다는 것이다.

// Never 타입
function neverExam(){
  function neverFunc(): never{
    while(true){
      // 반환하는 값이 아무것도 없다는 뜻
    }
  }
  
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // let never1: never = 10;
  // let never2: never = "hello";
  // let never3: never = true;
}
// never 타입은 어떠한 값도 저장되어선 안되는 변수에 적합하다.
// 그 어떠한 값도 never 타입에는 다운캐스팅이 되기 때문이다.

// Void 타입
function voidExam(){
  function voidFunc(): void{
    console.log('hi');

    return undefined;
  }

  let voidVar: void = undefined;
}
// void 타입은 undefined 타입에 수퍼 타입이다.

// Any 타입
function anyExam(){
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;
}
// any 타입에서는 unknown 타입이라도 다운 캐스팅이 허용된다.
// any 타입에서는 undefined 타입에 변수에 any 타입 변수를 할당 시켜도 허용된다.
// 즉, any 타입은 타입 계층도를 완전히 무시하는 타입이기 때문에 조심하는 것이 좋다.

// 단 한가지 타입에서만 다운캐스팅이 불가능한데 바로 never 타입이다. never 타입 같은 경우 모든 타입에 공집합이기 때문에
// 아무리 any 타입이더라도 never 타입에 할당할 수는 없다.
