/**
 * 인터페이스
 */

// 자주 나오는 interface 이름을 I 를 앞에 붙여서 IPerson 이라고 붙이는 방법을 헝가리안 표기법이라고 하는데,
// 이런 표기법을 JS 중에는 잘 사용하지 않는다.
// 보통 JS 문법에서는 스네이크 케이스를 사용하거나, 카멜 케이스를 사용하거나, 파스칼 케이스를 사용하는데
// 인터페이스를 사용할 때는 헝가리안 표기법을 사용하느냐 하는 불만 사항도 있기에 회사, 팀, 프로젝트 컨벤션에 따라 사용하는걸 권장한다.

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a:number, b:number):void;
}
// 단일 함수를 만들 시 sayHi: () => void; 식으로
// 함수 오버라이드를 함수 시그니처로 만들어야 함. -> 식별자가 중복되었다고 나옴.

type Type1 = number | string;
type Type2 = number & string;

// interface 같은 경우 기존 type 처럼 |, &를 사용할 수 없기에 type 별칭에 interface를 같이 써주거나
// ex) type Type1 = number | string | Person;
// 혹은 타입 주석에 같이 작성하여 활용하여야 한다.
// ex) cons tperson: Person | number = {}

const person:Person = {
  name: '이마루',
  age: 26,
  sayHi: function(){
    console.log('hi');
  }
}