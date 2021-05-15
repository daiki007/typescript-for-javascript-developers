export {};

class Mahotukai {}
class Souryo {}

class Taro extends Mahotukai {}

//interfaceによる多重継承
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//上記の:voidのやつをシグネチャーという

class Jiro implements Kenja, Senshi {
  ionazun(): void{
    console.log('ionazun');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();