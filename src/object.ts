export {};

let profile1: object = { name: 'Daiki' };
profile1 = { brithYear:1998 };

let profile2: {
  name: string;
} = { name:'Daiki' };
profile2 = profile1 = { name:'Nimo' };
