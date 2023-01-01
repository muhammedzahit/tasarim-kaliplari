// State tasarım kalıbı kullanarak telefon tuşlarının basılma durumlarını kontrol eden bir uygulama tasarlayalım.

// Durumları temsil edecek olan sınıfımızı oluşturalım.
interface IDurum{
    telefon : Telefon;
    powerTusunaBasildi();
    sesArttirTusunaBasildi();
    sesAzaltTusunaBasildi();
}

// Telefon kapalı durumunu temsil edecek olan sınıfımızı oluşturalım.
class TelefonKapali implements IDurum{
    telefon: Telefon;
    constructor(telefon : Telefon){
        this.telefon = telefon;
    }
    powerTusunaBasildi(){
        console.log("Power Tuşuna basıldı. Telefon açılıyor...");
        return new TelefonAcik(this.telefon);
    }
    sesArttirTusunaBasildi(){
        console.log("Ses Arttır Tuşu herhangi bir işlem yapmadı!");
    }
    sesAzaltTusunaBasildi(){
        console.log("Ses Azalt Tuşu herhangi bir işlem yapmadı!");
    }
}

class TelefonAcik implements IDurum{
    telefon: Telefon;
    constructor(telefon : Telefon){
        this.telefon = telefon;
    }
    powerTusunaBasildi(){
        console.log("Power tuşuna basıldı. Telefon kapanıyor...");
        return new TelefonKapali(this.telefon);
    }
    sesArttirTusunaBasildi(){
        console.log("Ses Arttır tuşuna basıldı. Ses arttırılıyor...");
    }
    sesAzaltTusunaBasildi(){
        console.log("Ses Azalt tuşuna basıldı. Ses azaltılıyor...");
    }
}

// Telefon sınıfımızı oluşturalım.
class Telefon{
    durum : IDurum;
    constructor(){
        this.durum = new TelefonKapali(this);
    }
    powerTusunaBas(){
        this.durum = this.durum.powerTusunaBasildi();
    }
    sesArttirTusunaBas(){
        this.durum.sesArttirTusunaBasildi();
    }
    sesAzaltTusunaBas(){
        this.durum.sesAzaltTusunaBasildi();
    }
}

function main(){

    let telefon = new Telefon();
    console.log('Telefon kapalı durumda...');
    telefon.powerTusunaBas();
    telefon.sesArttirTusunaBas();
    telefon.sesAzaltTusunaBas();
    telefon.powerTusunaBas();
    telefon.sesArttirTusunaBas();
    telefon.sesAzaltTusunaBas();
    telefon.powerTusunaBas();
}

main();