export {};
//先頭は必ず大文字で記載
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretu: Mojiretsu ='Hello';

const example1 = {
  name:'Daiki',
  age: 23,
  test: false
};

type Profile ={
  name: string;
  age: number;
};

const example2: Profile = {
  name:'Daiki',
  age: 23
};

type Profile2 = typeof example1;
