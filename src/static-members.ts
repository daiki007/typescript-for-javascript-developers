export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Daiki';
  static lastName: string = 'Tajiri';

  static work() {
    // return "Hey! guys! This is Daiki. Are you interrested in Typescript? let's dive into Typescript!"
    return `Hey! guys! This is ${this.firstName}. Are you interrested in Typescript? let's dive into Typescript!`
  }
}

// let me = new Me ();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());


