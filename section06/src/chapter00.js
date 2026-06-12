/**
 * 클래스
 */

let studentA = {
  name: 'Lee maru',
  grade: 'A+',
  age: 26,
  study(){
    console.log('공부중')
  },
  introduce(){
    console.log('hello')
  }
}

// class는 보통 파스칼 표기법을 사용한다.
class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  // this는 현재 만들고 있는 객체를 말함
  constructor(name, grade, age){
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study(){
    console.log('공부중')
  }
  introduce(){
    console.log(`안녕하세용 ${this.name} 입니당`);
  }
}

class StudentDeveloper extends Student{
  fevoriteSkill;

  constructor(name, grade, age, fevoriteSkill){  
    super(name, grade, age);
    this.fevoriteSkill = fevoriteSkill;
  }
  
  programming(){
    console.log(`${this.fevoriteSkill}로 프로그래밍함`);
  }
}

// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스 ( Student Instance )
let studentB = new Student('Jochung Kim','S+', 30);
console.log(studentB)
studentB.study()
studentB.introduce()

let studentC = new StudentDeveloper('Maru Lee', 'C', 26, 'TypeScript');
console.log(studentC);
studentC.programming();