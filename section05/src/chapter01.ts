/**
 * 인터페이스 확장
 * 
 * 객체를 활용할 때 유용
 */

interface Animal {
  name: string;
  color: string;
}

/**
 * 확장된 인터페이스의 프로퍼티 타입을 바꿀 수 있지만
 * 바꾸는 조건은 하위 타입이여야 한다.
 * 즉, 문자열이라면 리터럴 문자열 타입 같은 하위 타입이여야 한다.
 * 
 * 추가로 interface Animal이 아닌 type Animal 이여도 확장이 가능하다.
 * 즉, interface는 객체 타입이라면 확장이 가능하다.
 */
interface Dog extends Animal{
  isBark: boolean;
}

interface Cat extends Animal{
  isScratch: boolean;
}

interface Chicken extends Animal{
  isFly: boolean;
}

const dog: Dog = {
  name: '',
  color: '',
  isBark: true,
}



/**
 * interface는 여러 interface를 확장할 수 있는 다중 확장이 가능하다.
 */
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: false,
}