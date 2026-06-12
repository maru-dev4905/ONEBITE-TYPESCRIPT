/**
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
  id : 1,
  name : '이마루',
  profile: {
    nickname : 'hodumaru',
  },
  urls: ["htts://iseung10e.co.kr"]
}

let {id, name, profile } = c;

let [one, two, three] = [1,'이마루', true];

function func(message = 'hellooooo'){
  return 'hello';
}

let d;
// 아무 값을 넣지 않을 경우 초기 타입으로 any 타입으로 추론이 된다.
d = 10;
d.toFixed();
// d.toUpperCase();

d = 'hello';
d.toUpperCase();
// d.toFixed();

const num = 10;
const str = 'string';

let arr = [1, 'hello'];