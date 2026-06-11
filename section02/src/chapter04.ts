// 타입 별칭
// 타입 별칭은 스코프를 따름

type User = {
  id: number,
  name: string,
  nickname: string,
  birth: string,
  bio: string,
  location: string,
}

let user: User = {
  id: 1,
  name: "이마루",
  nickname: "maru",
  birth: "2001.03.30",
  bio:"hi",
  location: "seoul"
}
let user2: User = {
  id: 1,
  name: "이마루2",
  nickname: "maru",
  birth: "2001.03.30",
  bio:"hi",
  location: "seoul"
}

// 인덱스 시그니처
type countryCode = {
  [key: string]: string,
}
let countryCode: countryCode = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

type countryNumberCode = {
  [key: string]: (number | string),
  Korea: number,
  japan: string
}
let countryNumberCode:countryNumberCode = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
  japan: "420"
}
