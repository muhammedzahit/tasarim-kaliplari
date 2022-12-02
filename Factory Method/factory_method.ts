// Nakliye sınıfımızı abstract anahtar kelimesi ile oluşturduk böylece
// Nakliye operasyonlarımızı büyütmek istediğimizde bu sınıfı extend ederek
// yeni operasyonlarımızı ekleyebiliriz.
abstract class Nakliye {
    public abstract factoryMethod() : NakliyeAraci;

    public nakliyeYap(): string {
        const nakliyeAraci = this.factoryMethod();
        return nakliyeAraci.operasyon();
    }
}

class KaraYoluNakliye extends Nakliye {
    public factoryMethod() : NakliyeAraci {
        return new Kamyonet();
    }
}

class DenizYoluNakliye extends Nakliye {
    public factoryMethod() : NakliyeAraci {
        return new Gemi();
    }
}

// Nakliye araçlarımızı bir interface ile oluşturmamızın sebebi
// Nakliye sınıfında şu anda elimizde olan veya gelecekte ekleyeceğimiz
// tüm araçlarımızı ifade edecek bir interface oluşturmak.
interface NakliyeAraci {
    operasyon(): string;
}

class Gemi implements NakliyeAraci {
    operasyon(): string {
        return "Gemi ile teslim edildi.";
    }
}

class Kamyonet implements NakliyeAraci {
    operasyon(): string {
        return "Kamyonet ile teslim edildi.";
    }
}

console.log('Kara yolu nakliye:');
const karaYoluNakliye = new KaraYoluNakliye();
console.log(karaYoluNakliye.nakliyeYap());
console.log('');

console.log('Deniz Yolu Nakliye:');
const denizYoluNakliye = new DenizYoluNakliye();
console.log(denizYoluNakliye.nakliyeYap());
console.log()