export {};

let name = 'Atsushi';

name = 'Ham';

let nickname = 'Ham' as const;

// nickname = 'Hamutaro'; この場合エラーになり事実上定数になる

let profile = {
  name: 'Atsushi',
  height: 178
} as const ;

// profile.name = 'Ham';
// profile.height = 180;