// 배열
let numArr: number[] = [1,2,3];

let strArr: string[] = ['hello', 'i am', 'maru'];

let boolArr:Array<boolean> = [true, false, true];
// TS에서 <> 를 사용해 타입을 명시하는 문법을 제네릭 문법이라고 부른다.

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr:(string | number)[] = [1, "Hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1,2,3],
  [4,5]
]

// 튜플
// 길이와 타입이 고정된 배열

// 튜플은 순서도 길이도 맞지 않으면 경고.
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

const users: [string, number][] = [
  ["용쿠", 1],
  ["딸쿠", 2],
  ["마쿠", 3],
  ["좀쿠", 4],
  // [5, "근쿠"],
];
