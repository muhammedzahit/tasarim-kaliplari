// Composite tasarım kalıbı kullanarak bir dosya yönetim sistemi tasarlayalım.
interface IDosya{
    adiniGoster():void;
}

class Dosya implements IDosya{
    ad:string;
    constructor(ad:string){
        this.ad = ad;
    }
    adiniGoster():void{
        console.log(this.ad);
    }
}

// Klasörler birbirleri içinde olabilir. Klasörler içinde tek bir dosya da olabilir.
class Klasor implements IDosya{
    ad:string;
    dosyalar : IDosya[] = [];
    constructor(ad:string){
        this.ad = ad;
    }
    adiniGoster():void{
        console.log(this.ad);
        console.log('------------------------------------')
        this.dosyalar.forEach(dosya => {
            dosya.adiniGoster();
        });
        console.log()
    }
}

// hiyerarşik yapıyı oluşturalım.
let klasor1 = new Klasor("Klasör 1");
let klasor2 = new Klasor("Klasör 2");
let klasor3 = new Klasor("Klasör 3");

let dosya1 = new Dosya("Dosya 1");
let dosya2 = new Dosya("Dosya 2");
let dosya3 = new Dosya("Dosya 3");
let dosya4 = new Dosya("Dosya 4");
let dosya5 = new Dosya("Dosya 5");
let dosya6 = new Dosya("Dosya 6");

klasor1.dosyalar.push(dosya1);
klasor1.dosyalar.push(dosya2);
klasor1.dosyalar.push(dosya3);
klasor2.dosyalar.push(dosya4);
klasor2.dosyalar.push(dosya5);
klasor2.dosyalar.push(dosya6);

klasor3.dosyalar.push(klasor1);
klasor3.dosyalar.push(klasor2);

// Klasör 3 içindeki tüm dosyaları gösterelim.
klasor3.adiniGoster();