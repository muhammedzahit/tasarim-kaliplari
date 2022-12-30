// Verdiğimiz örnek Şekil ve Renklerini içeren sınıfların birbirlerini Bridge tasarım deseni ile bağlamasıdır.

interface Renk {
    value: string;
}

class Kirmizi implements Renk {
    value: string;
    constructor() {
        this.value = "Kirmizi";
    }
}

class Mavi implements Renk {
    value: string;
    constructor() {
        this.value = "Mavi";
    }
}

// Şekilleri tanımladığımız interface'de Renk özelliğini de tanımladık.
// Bu sayede şekil ve renk sınıfları arasında bir köprü oluşturmuş olduk.
// Şekil sınıfları bu köprüyü kullanarak renk sınıflarına erişebilecekler.
// Birbirlerinden bağımsız şekilde çalışacaklar. Yani bir renk eklenirse veya değiştirilirse
// şekil sınıflarında bir değişiklik yapmaya gerek kalmayacak.
interface Sekil {
    sekil: string;
    renk: Renk;
}

class Kare implements Sekil {
    renk: Renk;
    sekil: string;
    constructor() {
        this.sekil = "Kare";
    }
    setRenk(renk: Renk) {
        this.renk = renk;
    }
    kendiniTanit() {
        console.log(`Ben ${this.sekil} ve ${this.renk.value} renkliyim.`);
    }
}

class Daire implements Sekil {
    renk: Renk;
    sekil: string;
    constructor() {
        this.sekil = "Daire";
    }
    setRenk(renk: Renk) {
        this.renk = renk;
    }
    kendiniTanit() {
        console.log(`Ben ${this.sekil} ve ${this.renk.value} renkliyim.`);
    }
}


let kare = new Kare();
kare.renk = new Kirmizi();
kare.kendiniTanit();

let daire = new Daire();
daire.renk = new Mavi();
daire.kendiniTanit();



