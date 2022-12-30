// Builder interface oluşturalım. Projemizin ilerleyen safhalarında bu interface'i uygulayacak
// birden çok sınıf olabilir. Mesela bir emlak şirketi ve bir inşaat şirketi aynı anda bu interface'i
// uygulayabilir. Emlak şirketi için odaUret() fonksiyonu sadece bir sayıyı ifade ederken, inşaat şirketi için
// odaUret() fonksiyonu sipariş verilecek çimento gibi inşaat malzemelerini ifade edebilir.
interface IEvBuilder {
    pencereUret(pencereSayisi : Number): void;
    kapiUret(kapiSayisi : Number): void;
    OdaUret(odaSayisi : Number): void;
    KatUret(katSayisi : Number): void;
    GarajUret(): void;
    HavuzUret(): void;
    DogalGazBaglantiUret(): void;
}

class EvProduct {
    public parts: string[] = [];

    public listParts(): void {
        console.log(`Evin Sahip Olduğu Özellikler: ${this.parts.join(', ')}\n`);
    }
}

// Concrete Builder
class EvBuilder implements IEvBuilder {

    private product: EvProduct;

    pencereUret(pencereSayisi: Number): void {
        this.product.parts.push(`Pencere Sayısı: ${pencereSayisi}`);
    }
    kapiUret(kapiSayisi: Number): void {
        this.product.parts.push(`Kapı Sayısı: ${kapiSayisi}`);
    }
    OdaUret(odaSayisi: Number): void {
        this.product.parts.push(`Oda Sayısı: ${odaSayisi}`);
    }
    KatUret(katSayisi: Number): void {
        this.product.parts.push(`Kat Sayısı: ${katSayisi}`);
    }
    GarajUret(): void {
        this.product.parts.push(`Garaj Var`);
    }
    HavuzUret(): void {
        this.product.parts.push(`Havuz Var`);
    }
    DogalGazBaglantiUret(): void {
        this.product.parts.push(`Doğal Gaz Bağlantısı Var`);
    }
   
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new EvProduct();
    }

    public getProduct(): EvProduct {
        const result = this.product;
        // bir sonraki üretme işlemi için product nesnesini sıfırlıyoruz.
        this.reset();
        return result;
    }

}

// Builder metodlarını kontrol eden Direktör sınıfı
class Director {
    private builder: IEvBuilder;

    public setBuilder(builder: IEvBuilder): void {
        this.builder = builder;
    }

    public garajVeHavuzluEv(): void {
        this.builder.OdaUret(4);
        this.builder.KatUret(1);
        this.builder.pencereUret(4);
        this.builder.DogalGazBaglantiUret();
        this.builder.GarajUret();
        this.builder.HavuzUret();
    }

    public normalEv(): void {
        this.builder.OdaUret(3);
        this.builder.KatUret(1);
        this.builder.pencereUret(3);
        this.builder.DogalGazBaglantiUret();
    }
}

function main(){
    const director = new Director();
    const builder = new EvBuilder();
    director.setBuilder(builder);

    console.log('Garaj ve Havuzlu Ev:');
    director.garajVeHavuzluEv();
    builder.getProduct().listParts();
    console.log('---------------------------------');

    console.log('Normal Ev:');
    director.normalEv();
    builder.getProduct().listParts();
    console.log('---------------------------------');

    console.log('Müşteri istediği özellikleri ekleyebilir:');
    builder.pencereUret(5);
    builder.OdaUret(5);
    builder.KatUret(2);
    builder.getProduct().listParts();

}

main();