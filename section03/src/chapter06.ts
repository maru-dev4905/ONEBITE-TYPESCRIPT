/**
 * 타입 단언 - Type Assertion
 */

type Person = {
  name: string;
  age: number;
}
let person = {} as Person;
person.name = "이마루";
person.age = 26;

type Dog = {
  name : string;
  color : string;
}

let dog = {
  name : '김마루',
  color : 'brown',
  breed : '말티즈',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B 
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 * as const 를 사용 시 변수 const 로 만든 것과 동일하게 바뀐다.
 */

let num4 = 10 as const;

let cat = {
  name : 'mew',
  color : 'yellow',
} as const;

// cat.name = '';

/**
 * Non Null 단언
 */

type Post = {
  title: string;
  author?: string;
}

let post: Post = {
  title: '게시글',
  author: '이마루',
}

const len: number = post.author!.length;