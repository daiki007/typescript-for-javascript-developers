export {};

let name: any = 'Ham';

let length = (name as string).length;
//jsxと似ているためnameの前に<number>型記入は非推奨　　as strings で書くのがBetter

// length = 'foo';
