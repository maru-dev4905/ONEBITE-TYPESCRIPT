/**
 * 타입 조작하기
 * 템플릿 리터럴 타입
 * 
 * 스트링 리터럴 타입들을 기반으로 특정한 패턴을 가진 문자열 타입을 만드는 기능.
*/

type Color = 'red' | 'black' | 'green';

type Animal = 'dog' | 'cat' | 'chicken';

// type ColorAnimal = 'red-dog' | 'black-cat' | 'green-chicken' | 'black-dog';

type ColorAnimal = `${Color}-${Animal}`;
// type ColorAnimal = "red-dog" | "red-cat" | "red-chicken" | "black-dog" | "black-cat" | "black-chicken" | "green-dog" | "green-cat" | "green-chicken"
/**
 * 모든 타입들이 조합된 유니온 타입으로 치환 가능.
 */

const colorAnimal: ColorAnimal = 'green-cat';