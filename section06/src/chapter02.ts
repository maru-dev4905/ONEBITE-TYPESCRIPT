/**
 * 접근 제어자 ( Access modifer )
 * => public private protected
 * 
 * public : 공공의 
 * name: string 에는 기본적으로 public 이 암묵적으로 입력되어 있다.
 * 즉, 자유롭게 인스턴스 프로퍼티의 접근 가능한 프로퍼티이다. 
 * 
 * private : 사적인
 * private age: number 에는 점 표기법으로 접근하는 방식이 완전히 제한된다. 읽을 수 조차 없다. (readonly와는 다른 개념)
 * 접근 하고 싶다면 메서드를 통해서 접근하여야 한다. (리터럴 방식)
 * private property 같은 경우 파생된 클래스에서도 사용하지 못한다.
 * 
 * protected : 보호됨
 * protected position: string 은 private과 동일하게 외부에서는 접근이 안되지만,
 * 파생된 클래스에서는 사용이 가능하다.
 * 
 * 또한 생성자에서도 public, private, protected를 추가할 수 있다.
 * 하지만 생성자에서 추가 시 필드 값을 입력하지 않아도 자동으로 할당이 된다.
 */

class Employee {
  public name: string;
  private age: number;
  protected position: string;

  constructor(name: string, age: number, position: string){
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(){
    console.log(`${this.age}나이인 사람이 일한다.`);
  }
}

class Employee2 {
  constructor(public name: string, private age: number, protected position: string){}

  work(){
    console.log(`${this.age}나이인 사람이 일한다.`);
  }
}

const employee = new Employee('Maru Lee', 26, 'developer');
employee.name = 'Jochung Kim';
// employee.age = 30;
// employee.position = "Teacher";
