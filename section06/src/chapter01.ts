/**
 * 타입클래스의 클래스
 */

const employee = {
  name: 'Lee Maru',
  age: 26,
  position: 'developer',
  work(){
    console.log('일..함');
  }
}

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string){
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work(){
    console.log('일..함');
  }
}

class ExcutiveOfficer extends Employee{
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number){
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

const employeeB = new Employee('Jochung Kim', 30, 'Teacher');
console.log(employeeB);

/**
 * 타입스크립트에 클래스는 타입으로도 작용한다.
 */

const employeeC: Employee = {
  name: "",
  age: 1,
  position: "",
  work(){}
}

