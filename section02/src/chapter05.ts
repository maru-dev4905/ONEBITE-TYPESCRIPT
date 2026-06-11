// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// enum은 가장 첫번째 인덱스 값에 10을 할당 시 두번째 인덱스 값은 +1 값으로 할당된다.
// 즉, 시작 값을 지정해줄 수 있다.

// enum 타입은 js로 컴파일 시 사라지지 않고 js 객체 타입으로 컴파일되어 값을 열거하듯이 사용하도록 바뀐다.
enum Role {
  Admin,
  User = 10,
  Guest,
}

enum Language {
  Korean = 'ko',
  English = 'en',
}

const user1 = {
  name: 'Lee',
  role: Role.Admin,
  language: Language.Korean
}
const user2 = {
  name: 'Kim',
  role: Role.User,
  language: Language.English
}
const user3 = {
  name: 'Park',
  role: Role.Guest,
}