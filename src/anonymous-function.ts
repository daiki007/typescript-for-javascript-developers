export {};

let bmi = function (height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(178, 88));
