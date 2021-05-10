export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
  ): number => {
    const bmi: number = weight / (height * height);

    if (printable) {
      console.log({bmi});
    }
    return bmi;
  };

bmi(170,90);

// bmi(身長、体重、console.log で出力するかどうか？)
// bmi(1.70, 90, true);
// bmi(1.70, 90, false);
// bmi(1.70, 90);


