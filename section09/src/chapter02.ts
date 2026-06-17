/**
 * infer
 * - inference : 추론하다
 * -> 조건부 타입 내에서 특정 타입만 추론해올 수 있는 기능
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;


/**
 * 예제
 */
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T 는 Promise 타입이어야 한다.
// 2. 1. 만족할 경우 프로미스 타입의 결과값을 반환하여야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string