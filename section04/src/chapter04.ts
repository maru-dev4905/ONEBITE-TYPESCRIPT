/**
 * 사용자 정의 타입 가드
 */

type Dog = {
  name: string;
  isBark: boolean;
}

type Cat = {
  name: string;
  isScratch: boolean;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}

// function warning(animal: Animal){
//     if(isDog(animal)){
//       animal;
//     }else if(isCat(animal)){
//       animal;
//     }
// }



///////// 연습1
/**
 * isCircle 타입 가드 함수를 작성해봐.

  Shape을 받아서 Circle인지 판별
  warning(shape: Shape) 함수 안에서 Circle이면 radius, Rectangle이면 width와 height 출력
 */
type Circle = {
  shape: string;
  radius: number;
}

type Rectangle = {
  shape: string;
  width: number;
  height: number;
}

type Shape = Circle | Rectangle;

function isCircle(shape: Shape): shape is Circle{
  return (shape as Circle).radius !== undefined;
}

function isRectangle(shape: Shape): shape is Rectangle{
  return (shape as Rectangle).width !== undefined;
}

function warning(shape: Shape){
  if(isCircle(shape)){
    console.log(
      `radius: ${shape.radius}`
    )
  }else if(isRectangle(shape)){
    console.log(
      `width: ${shape.width} | height: ${shape.height}`
    )
  }
}



///////// 연습2
/**
 * isAdmin 타입 가드 함수를 작성해봐.

  role 속성을 이용해서 판별해봐 (isBark처럼 undefined 체크 말고 다른 방법!)
  checkMember(member: Member) 함수 안에서 Admin이면 permissions 출력, User면 age 출력
 */

type Admin = {
  name: string;
  role: "admin";
  permissions: string[];
}

type User = {
  name: string;
  role: "user";
  age: number;
}

type Member = Admin | User;

function isAdmin(member: Member): member is Admin{
  return (member as Admin).role === 'admin';
}

function checkMember(member: Member){
  if(isAdmin(member)){
    member.permissions.forEach((a)=>{a});
  }else{
    member.age;
  }
}



///////// 연습3
/**
  isFish 타입 가드 함수를 작성해봐.

  속성이 아니라 메서드가 있는지로 판별해야 해
  move(pet: Pet) 함수 안에서 Fish면 swim(), Bird면 fly() 호출
 */
type Fish = {
  name: string;
  swim: () => void;
}

type Bird = {
  name: string;
  fly: () => void;
}

type Pet = Fish | Bird;

function isFish(pet: Pet): pet is Fish{
  return (typeof (pet as Fish).swim === 'function');
}
function move(pet: Pet){
  if(isFish(pet)){
    pet.swim();
  }else{
    pet.fly();
  }
}