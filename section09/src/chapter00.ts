/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

type ObjectA = {
  a: number,
};

type ObjectB = {
  a: number,
  b: number,
};

type B = ObjectB extends ObjectA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>; // string
let varB: StringNumberSwitch<string>; // number

function removeSpaces<T>(text: T): T extends string ? string : undefined
function removeSpaces<T>(text: any){
  if(typeof text === 'string'){
    return text.replaceAll(' ', '');
  }else{
    return undefined;
  }
}

let result = removeSpaces('hi im maru');
result.toUpperCase();

let result2 = removeSpaces(undefined);