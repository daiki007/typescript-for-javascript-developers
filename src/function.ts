export {};

function bmi (height: number, weght: number): number {
  return weght / (height * height);
}

console.log(bmi(1.78, 88));

