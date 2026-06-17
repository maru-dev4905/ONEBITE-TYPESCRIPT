/**
 * 타입 조작하기
 * 인덱스드 엑세스 타입
 * - 객체의 특정 프로퍼티에 타입을 추출하는 방법
 */

// interface Post {
//   title: string,
//   content: string,
//   author: {
//     id: number,
//     name: string,
//     age: number
//   }
// };

type PostList = {
  title: string,
  content: string,
  author: {
    id: number,
    name: string,
    age: number
  }
}[];

// function printAuthorInfo(author: Post["author"]){
//   console.log(`${author.name}-${author.id}`);
// }

function printAuthorInfo(author: PostList[number]["author"]){
  console.log(`${author.name}-${author.id}`);
}

// const post:Post = {
//   title: '새 게시글',
//   content: '게시글 본문',
//   author: {
//     id: 1,
//     name: 'maru',
//     age: 26
//   }
// };

const post:PostList[0] = {
  title: '새 게시글',
  content: '게시글 본문',
  author: {
    id: 1,
    name: 'maru',
    age: 26
  }
};

printAuthorInfo(post.author);


// 튜플 타입의 인덱스드 엑세스 타입
// 튜플 타입에 number를 넣을 시 가장 최적의 공통 타입을 유니온 타입으로 추출한다.
type Tup = [number, string, boolean];

type Tup1 = Tup[0];
type Tup2 = Tup[1];
type Tup3 = Tup[2];

type TupNum = Tup[number];