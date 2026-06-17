/**
 * 분산적인 조건부 타입
 */


type StringNumberSwitch<T> = T extends string ? string : number;

let a: StringNumberSwitch<number>; // string
let b: StringNumberSwitch<string>; // number

let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<boolean | number | string>;
// 1단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

//결과
// number | string


/**
 * 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1
// Exclude<number, string> | 
// Exclude<string, string> | 
// Exclude<boolean, string>

// 2 
// number |
// never |
// boolean

// 결과
// number | never | boolean
// -> number | boolean
// never 타입은 공집합 타입이기 때문에 유니온 타입에 never가 있다면 사라지게 된다.
// U에 해당하는 타입만 제거하는 기능이다.

// 즉, 이러한 분산적인 조건부 타입으로 특정한 타입들만 얻을 수 있다.


type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// U에 해당하는 타입만 추출한다.


// 추가로 분산적인 조건부 타입에 분산식을 하지 않으려면 []를 씌워주면 된다.
type StringNumberSwitch2<T> = [T] extends [string] ? string : number;

type C = StringNumberSwitch2<boolean | number | string>;