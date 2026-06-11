// 객체 Object
// id, name이 있어야 user 객체를 인식하기 때문에
// 구조 기준으로 만들어지는 객체 리터럴 방식을 
// 구조적 타입 시스템(Property Based System) 이라고 한다.

// property 가 있어도 되고 없어도 된다면 뒤에 ? 를 붙여야 한다.
// ?가 붙은 property는 optional property 라고 부른다.
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이마루"
}
user.id;

// property 앞에 readonly를 붙이면 읽기 전용 속성으로 값을 변경할 수 없다.
let config: {
  readonly apiKey: string;
} = {
  apiKey: "My Key"
}
// config.apiKey = '123123';