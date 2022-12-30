// Bu örneğimizde Bridge tasarım kalıbını kumanda-tv örneği ile açıklamaya çalışacağız.
// Kumanda ve tv arasında bir köprü oluşturacağız. Bu köprü sayesinde kumanda ve tv arasında bağımsızlık sağlayacağız.
// Kumanda Bridge yapısının 'Absraction', Tv 'Implementation' tarafını temsil edecek.

interface Device{
    baglan();
    baglantiyiKes();
    getSes() : number;
    setSes(ses: number);
    getKanal();
    setKanal(kanal: number);
}

class TV implements Device{
    ses: number = 0;
    kanal: number = 0;
    baglan(){
        console.log("TV bağlandı.");
    }
    baglantiyiKes(){
        console.log("TV bağlantısı kesildi.");
    }
    getSes() : number{
        return this.ses;
    }
    setSes(ses: number){
        this.ses = ses;
    }
    getKanal(){
        return this.kanal;
    }
    setKanal(kanal: number){
        this.kanal = kanal;
    }
}

class Radyo implements Device{
    ses: number = 0;
    kanal: number = 0;
    baglan(){
        console.log("Radyo bağlandı.");
    }
    baglantiyiKes(){
        console.log("Radyo bağlantısı kesildi.");
    }
    getSes() : number{
        return this.ses;
    }
    setSes(ses: number){
        this.ses = ses;
    }
    getKanal(){
        return this.kanal;
    }
    setKanal(kanal: number){
        this.kanal = kanal;
    }
}

// Kumanda içerisinde Device interface tanımlayarak kumanda ve tv arasında bir köprü oluşturmuş olduk.
class Kumanda{
    device: Device;
    constructor(device: Device){
        this.device = device;
    }
    sesArttir(){
        this.device.setSes(this.device.getSes() + 1);
    }
    sesAzalt(){
        this.device.setSes(this.device.getSes() - 1);
    }
    kanalDegistir(kanal: number){
        this.device.setKanal(kanal);
    }
    cihaziAc(){
        this.device.baglan();
    }
    cihaziKapa(){
        this.device.baglantiyiKes();
    }
}

let tv = new TV();
let radyo = new Radyo();
let kumanda = new Kumanda(tv);
kumanda.cihaziAc();
kumanda.sesArttir();
kumanda.sesArttir();
kumanda.sesArttir();
kumanda.sesArttir();
console.log("Ses: " + kumanda.device.getSes());

kumanda.kanalDegistir(5);
kumanda.cihaziKapa();
console.log('---------------------------------');

kumanda = new Kumanda(radyo);
kumanda.cihaziAc();
kumanda.sesArttir();
kumanda.sesArttir();
kumanda.sesArttir();
console.log("Ses: " + kumanda.device.getSes());

kumanda.kanalDegistir(5);
kumanda.cihaziKapa();