// Türettiğimiz Buton sınıflarının klonlarını alabilmemizi sağlana 
// interface sınıfımız
interface ButtonPrototype {
    clone(): ButtonPrototype;
    kendiniTanimla(): void;
    fiyatDon(): number;
    
    fiyat: number;
    en: number;
    boy: number;
    renk: string;
}

// Buton sınıfımız
class Button implements ButtonPrototype {
    fiyat: number;
    en: number;
    boy: number;
    renk: string;
 
    
    setFiyat(fiyat_: number): void {
        this.fiyat = fiyat_;
    }

    setBoyut(en_: number, boy_: number): void {
        this.en = en_;
        this.boy = boy_;
    }

    setRenk(renk_: string): void {
        this.renk = renk_;
    }

    clone(): ButtonPrototype {
        let a = new Button();
        a.setFiyat(this.fiyat);
        a.setBoyut(this.en, this.boy);
        a.setRenk(this.renk);
        return a;
    }
    
    kendiniTanimla(): void {
        console.log('Ben ' + this.en + 'x' + this.boy + ' boyutlarında ' + this.renk + ' renkli bir butonum.' + 
        ' Fiyatım: ' + this.fiyat + ' TL');
    }
    
    fiyatDon(): number {
        return this.fiyat;
    }
}

// Buton sınıfımızın klonlarını tutacağımız sınıfımız
class ButonKatalog{
    private butonlar: ButtonPrototype[] = [];
    
    butonEkle(buton: ButtonPrototype): void {
        this.butonlar.push(buton);
    }
    
    butonListesiDon(): ButtonPrototype[] {
        return this.butonlar;
    }
}

function main(){
    let butonKatalog = new ButonKatalog();

    let kirmiziKareButon = new Button();
    kirmiziKareButon.setFiyat(10);
    kirmiziKareButon.setBoyut(10, 10);
    kirmiziKareButon.setRenk('Kırmızı');
    butonKatalog.butonEkle(kirmiziKareButon);

    // kırmızı butonla aynı ebatlarda bir buton oluştururacağız.
    // sadece renk değişkeni farklı olacak.
    // bunun için kırmızı butonun klonunu alıp renk değişkenini değiştiriyoruz.
    let maviKareButon = kirmiziKareButon.clone();

    // setRenk() metodu Button sınıfında tanımlı olduğu için
    // maviKareButton değişkeni ButonPrototype tipinde olduğu için
    // setRenk() metodu çağrılamaz.
    maviKareButon.renk = 'Mavi';
    butonKatalog.butonEkle(maviKareButon);

    // client tarafında butonların kendini tanımlamasını istiyoruz.
    for(let buton of butonKatalog.butonListesiDon()){
        buton.kendiniTanimla();
    }

}  

main();