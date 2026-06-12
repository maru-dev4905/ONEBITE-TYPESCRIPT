/**
 * 인터페이스와 클래스
 * 
 * implements : 구현하다.
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  //호출 시그니처
  move(): void;
}

/**
 * interface는 무조건 public 필드만 정의할 수 있다.
 * 만약에 private, protected로 정의 했을 경우 에러가 발생한다.
 * 만약에 private, protected로 정의해야할 필드가 있다면 interface에 정의하는게 아닌 class 내부 필드에 작성해야한다.
 */
class Character implements CharacterInterface {
  constructor(
    public name: string, 
    public moveSpeed: number, 
    private extra: string
  ){}

  move(): void{
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}