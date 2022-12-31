// Command Tasarım Kalıbı kullanılarak bir metin editörü tasarlayalım.

// Uygulama sınıfı
class Uygulama {
    //komutlar : Komut[] = [];
    butonlar : Buton[] = []; 
    secilmisMetin : string = "";
    cahce : string = "";

    // fare ile seçilen metini döndürür
    getSecilmisMetin() : string {
        return this.secilmisMetin;
    }

    // fare ile seçilen metni ayarlar
    setSecilmisMetin(secilmisMetin : string) : void {
        this.secilmisMetin = secilmisMetin;
    }

    // cache'deki metni döndürür
    getCache() : string {
        return this.cahce;
    }

    // cache'deki metni ayarlar
    setCahce(cahce : string) : void {
        this.cahce = cahce;
    }

    arayuzCiz() : void {
        console.log("Arayüz çizildi.");
    }
}

// Uygulama sınıfının komutlar ile haberleşeceği arayüz sınıfı
abstract class Buton {
    isim : string;
    icon : string;
    komut : Komut;
    setKomut(komut : Komut) : void {
        this.komut = komut;
    }
} 

// Kopyala butonu
class KopyalaButon extends Buton {
    constructor() {
        super();
        this.isim = "Kopyala";
        this.icon = "kopyala.png";
    }
}

// Kes butonu
class KesButon extends Buton {
    constructor() {
        super();
        this.isim = "Kes";
        this.icon = "kes.png";
    }
}

// Yapıştır butonu
class YapistirButon extends Buton {
    constructor() {
        super();
        this.isim = "Yapıştır";
        this.icon = "yapistir.png";
    }
}

// Geri al butonu
class GeriAlButon extends Buton {
    constructor() {
        super();
        this.isim = "Geri Al";
        this.icon = "geri-al.png";
    }
}


// Uygulama sınıfının komutlar ile haberleşeceği arayüz sınıfı
abstract class Komut {
    uygulama : Uygulama;
    constructor(uygulama : Uygulama) {
        this.uygulama = uygulama;
    }
    abstract calistir() : void;
}

// Kopyala komutu
class KopyalaKomut extends Komut {
    constructor(uygulama : Uygulama) {
        super(uygulama);
    }
    calistir() : void {
        // seçilmiş kısmı koyala ve cache'e at
        this.uygulama.setCahce(this.uygulama.getSecilmisMetin());
        console.log("Metin kopyalandı.");
    }
}

// Kes komutu
class KesKomut extends Komut {
    constructor(uygulama : Uygulama) {
        super(uygulama);
    }
    calistir() : void {
        // seçilmiş kısmı kes ve cache'e at
        // seçilmiş kısmı '' yap
        this.uygulama.setCahce(this.uygulama.getSecilmisMetin());
        this.uygulama.setSecilmisMetin("");
        console.log("Metin kesildi.");
    }
}

// Yapıştır komutu
class YapistirKomut extends Komut {
    constructor(uygulama : Uygulama) {
        super(uygulama);
    }
    calistir() : void {
        // cache'deki metni seçilmiş kısım ile değiştir
        this.uygulama.setSecilmisMetin(this.uygulama.getCache())
        console.log("Metin yapıştırıldı.");
    }
}

// Geri al komutu
class GeriAlKomut extends Komut {
    constructor(uygulama : Uygulama) {
        super(uygulama);
    }
    calistir() : void {
        // seçilmiş kısmı bir önceki metin ile yani cache ile değiştir.
        this.uygulama.setSecilmisMetin(this.uygulama.getCache())
        console.log("Geri alındı.");
    }
}

function main(){
    let uygulama : Uygulama = new Uygulama();


    let kopyalaButon : KopyalaButon = new KopyalaButon();
    let kesButon : KesButon = new KesButon();
    let yapistirButon : YapistirButon = new YapistirButon();
    let geriAlButon : GeriAlButon = new GeriAlButon();

    let kopyalaKomut : KopyalaKomut = new KopyalaKomut(uygulama);
    let kesKomut : KesKomut = new KesKomut(uygulama);
    let yapistirKomut : YapistirKomut = new YapistirKomut(uygulama);
    let geriAlKomut : GeriAlKomut = new GeriAlKomut(uygulama);


    // Butonlar ve komutları birbirinden ayırdık ve bağımsızlığı sağladık.
    kopyalaButon.setKomut(kopyalaKomut);
    kesButon.setKomut(kesKomut);
    yapistirButon.setKomut(yapistirKomut);
    geriAlButon.setKomut(geriAlKomut);

    uygulama.butonlar.push(kopyalaButon);
    uygulama.butonlar.push(kesButon);
    uygulama.butonlar.push(yapistirButon);
    uygulama.butonlar.push(geriAlButon);

    uygulama.arayuzCiz();

    // Kopyala butonuna basıldı
    kopyalaButon.komut.calistir();

    // Kes butonuna basıldı
    kesButon.komut.calistir();

    // Yapıştır butonuna basıldı
    yapistirButon.komut.calistir();

    // Geri al butonuna basıldı
    geriAlButon.komut.calistir();
}

main();