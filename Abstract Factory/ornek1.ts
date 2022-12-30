// Sandalye ve Koltuk sınıfları için bir interface oluşturduk.
// Bu interface sayesinde tüm sandalye ve koltuklarımızı
// kendiniBetimle() fonksiyonu ile ifade edebileceğiz.
interface sandalye {
    kendiniBetimle(): string;
}
class osmanli_stili_sandalye implements sandalye {
    kendiniBetimle(): string {
        return "Osmanlı stili sandalye";
    }
}
class viktorya_stili_sandalye implements sandalye {
    kendiniBetimle(): string {
        return "Viktorya stili sandalye";
    }
}

interface koltuk {
    kendiniBetimle(): string;
}
class osmanli_stili_koltuk implements koltuk {
    kendiniBetimle(): string {
        return "Osmanlı stili koltuk";
    }
}
class viktorya_stili_koltuk implements koltuk {
    kendiniBetimle(): string {
        return "Viktorya stili koltuk";
    }
}

// Mobilyalarımızı tek bir ortak sınıfta ifade edebilmek için
// mobilya_factory interface oluşturduk.
interface mobilya_factory {
    sandalye_olustur(): sandalye;
    koltuk_olustur(): koltuk;
}

// Osmanlı stili mobilyalara ait factory sınıfımızı oluşturduk.
class osmanli_stili_factory implements mobilya_factory {
    sandalye_olustur(): sandalye {
        return new osmanli_stili_sandalye();
    }
    koltuk_olustur(): koltuk {
        return new osmanli_stili_koltuk();
    }
}

// Viktorya stili mobilyalara ait factory sınıfımızı oluşturduk.
class viktorya_stili_factory implements mobilya_factory {
    sandalye_olustur(): sandalye {
        return new viktorya_stili_sandalye();
    }
    koltuk_olustur(): koltuk {
        return new viktorya_stili_koltuk();
    }
}

// Nakliye işleme için sipariş verilen mobilyaları tutacağımız dizi.
let mobilyalar : mobilya_factory[] = []

// Müşterinin istediği mobilya tipine göre sipariş vermesini sağlayan fonksiyon.
function musteri(mobilya_tipi : string){
    let factory : mobilya_factory | undefined;
    if(mobilya_tipi == 'osmanli'){
        factory = new osmanli_stili_factory();
    }else if(mobilya_tipi == 'viktorya'){
        factory = new viktorya_stili_factory();
    }
    if (factory) {
        mobilyalar.push(factory);
        let sandalye = factory.sandalye_olustur();
        let koltuk = factory.koltuk_olustur();
        console.log(sandalye.kendiniBetimle());
        console.log(koltuk.kendiniBetimle());
    }
    console.log('sipariş verildi')
    console.log()
    
}

// Sipariş verilen mobilyaları nakliye işleme gönderen fonksiyon.
// Burada nakliyeci mobilyaların hangi stile ait olduğu ile ilgilenmiyor.
// Sadece mobilya_factory interface sayesinde kendiniBetimle() fonksiyonunu çağırıyor.
function nakliyeci(){
    mobilyalar.forEach(mobilya => {
        let sandalye = mobilya.sandalye_olustur();
        let koltuk = mobilya.koltuk_olustur();
        console.log(sandalye.kendiniBetimle());
        console.log(koltuk.kendiniBetimle());
        console.log('teslim edildi')
        console.log()
    });
}

console.log('MUSTERİ')
musteri('osmanli');
musteri('viktorya');
musteri('osmanli');
console.log('-------------------------')
console.log('NAKLİYECİ')
nakliyeci();