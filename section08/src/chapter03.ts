/**
 * 타입 조작하기
 * 맵드 타입
 * 
 * 맵드 타입은 인터페이스에서 사용이 불가하다.
*/

interface User {
  id: number,
  name: string,
  age: number
};

type PartialUser = {
  [key in 'id' | 'name' | 'age']?: User[key];
};

type BooleanUser = {
  [key in 'id' | 'name' | 'age']: boolean;
};

type BooleanUser2 = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
}


// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser{
  /// 기능

  return {
    id: 1,
    name: 'LeeMaru',
    age: 26
  }
};

//한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser){
  // 수정하는 기능
};

updateUser({
  // id: 1,
  // name: 'LeeMaru',
  age: 28
});

const user = fetchUser();
// user.id = 1; // ERROR