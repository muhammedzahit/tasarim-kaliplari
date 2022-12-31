// Visitor tasarım kalıbı kullanarak hacim hesaplama işlemini gerçekleştirelim.

// Şekillerimizi türeteceğimiz ortak arayüz(interface) sınıfımız.
interface Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    accept(visitor : VolumeVisitor) : void;
}

// Küp sınıfımız.
class Kup implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(tabanKenar1 : number, tabanKenar2 : number, yukseklik : number){
        this.tabanKenar1 = tabanKenar1;
        this.tabanKenar2 = tabanKenar2;
        this.yukseklik = yukseklik;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitKup(this);
    }
}

// Dikdörtgenler Prizması Sınıfımız
class DikdortgenPrizma implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(tabanKenar1 : number, tabanKenar2 : number, yukseklik : number){
        this.tabanKenar1 = tabanKenar1;
        this.tabanKenar2 = tabanKenar2;
        this.yukseklik = yukseklik;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitDikdortgenPrizma(this);
    }
}

// Silindir Sınıfımız
class Silindir implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(yaricap : number, yukseklik : number){
        this.yaricap = yaricap;
        this.yukseklik = yukseklik;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitSilindir(this);
    }
}

// Koni Sınıfımız
class Koni implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(yaricap : number, yukseklik : number){
        this.yaricap = yaricap;
        this.yukseklik = yukseklik;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitKoni(this);
    }
}

// Kare Piramit Sınıfımız
class KarePiramit implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(tabanKenar1 : number, yukseklik : number){
        this.tabanKenar1 = tabanKenar1;
        this.yukseklik = yukseklik;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitKarePiramit(this);
    }
}

// Küre Sınıfımız
class Kure implements Sekil{
    tabanKenar1 : number;
    tabanKenar2 : number;
    yukseklik : number;
    yaricap : number;
    constructor(yaricap : number){
        this.yaricap = yaricap;
    }

    accept(visitor : VolumeVisitor) : void{
        visitor.visitKure(this);
    }
}

// Visitor sınıfımız.
class VolumeVisitor{
    visitKup(kup : Kup) : void{
        console.log("Küpün hacmi: " + kup.tabanKenar1 * kup.tabanKenar2 * kup.yukseklik);
    }

    visitDikdortgenPrizma(dikdortgenPrizma : DikdortgenPrizma) : void{
        console.log("Dikdörtgen Prizmanın hacmi: " + dikdortgenPrizma.tabanKenar1 * dikdortgenPrizma.tabanKenar2 * dikdortgenPrizma.yukseklik);
    }

    visitSilindir(silindir : Silindir) : void{
        console.log("Silindirin hacmi: " + Math.PI * silindir.yaricap * silindir.yaricap * silindir.yukseklik);
    }

    visitKoni(koni : Koni) : void{
        console.log("Koninin hacmi: " + (Math.PI * koni.yaricap * koni.yaricap * koni.yukseklik) / 3);
    }

    visitKarePiramit(karePiramit : KarePiramit) : void{
        console.log("Kare Piramitin hacmi: " + (karePiramit.tabanKenar1 * karePiramit.tabanKenar1 * karePiramit.yukseklik) / 3);
    }

    visitKure(kure : Kure) : void{
        console.log("Kürenin hacmi: " + (4 * Math.PI * kure.yaricap * kure.yaricap * kure.yaricap) / 3);
    }
}

function main(){
    let visitor = new VolumeVisitor();
    let kup = new Kup(5, 5, 5);
    let dikdortgenPrizma = new DikdortgenPrizma(5, 5, 5);
    let silindir = new Silindir(5, 5);
    let koni = new Koni(5, 5);
    let karePiramit = new KarePiramit(5, 5);
    let kure = new Kure(5);

    // VolumeVisitor sınıfı tüm sınıflar için farklı işlemler uygular.
    // Ama sınıflar tarafından aynı method ile çağrılır.
    kup.accept(visitor);
    dikdortgenPrizma.accept(visitor);
    silindir.accept(visitor);
    koni.accept(visitor);
    karePiramit.accept(visitor);
    kure.accept(visitor);
}

main();