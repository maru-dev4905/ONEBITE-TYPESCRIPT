/**
 * Partial<T>
 * -> 부분적인 / 일부분의
 * -> 특정 객체 타입에 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
  title: string,
  tags: string[],
  content: string,
  thumbnailURL?: string
};

type Partial<T> = {
  [key in keyof T]?: T[key]
};

const draft: Partial<Post> = {
  title: '제목은 나중에',
  content: '초안..',
};


/**
 * Required<T>
 * -> 필수적인 / 필수의
 * -> 특정 객체 타입에 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 * 
 * Required 타입은 ? 가 아닌 -?
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
}

const withThumbnailPost: Required<Post> = {
  title: '한입 TS 후기',
  tags: ['ts'],
  content: '히히',
  thumbnailURL: 'https://....'
}


/**
 * Readonly<T>
 * -> 읽기전용 / 수정불가
 * -> 특정 객체 타입에 모든 프로퍼티를 읽기전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key]
}

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글',
  tags: [],
  content: ""
}

// readonlyPost.title = '응애';