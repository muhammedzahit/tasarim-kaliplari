// Template Method Design Pattern kullanarak bir oyun yapay zekası tasarlayalım.
// Oyunumuzda ana bir yapay zeka sınıfı olacak
// Ork, Elf ve Monster gibi NPC'ler bu ana sınıftan iskelet alacak ve kendilerine özgü davranışlar tanımlayacaklar.

function GetRandom(max){
    return Math.floor(Math.random() * Math.floor(max))
}

// GameAI sınıfı, NPC'lerin ortak davranışlarını tanımlar
abstract class GameAI {
    // Saldır fonksiyonu tüm NPC'lerin ortak davranışıdır.
    // Bu yüzden GameAI sınıfında tanımladık.
    protected saldir(): void{
        console.log('Belirli bir alan içerisinde düşman kontrol ediliyor')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Düşman bulundu, saldırı başlatılıyor')
        }
        else{
            console.log('Düşman bulunamadı')
        }
    }
    protected abstract kaynakTopla(): void;
    protected abstract yagmaYap(): void;
    protected abstract toplucaSaldir(): void;
}

// Ork sınıfı GameAI sınıfından kalıtım alır ve kendine özgü davranışlar tanımlar
class Ork extends GameAI {
    protected kaynakTopla(): void{
        console.log('Kaynak araştırılıyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Kaynak bulundu, toplanıyor')
        }
        else{
            console.log('Kaynak bulunamadı')
        }
    }
    protected yagmaYap(): void{
        console.log('Yağma yapılacak alan araştırılıyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Yemek bulundu, yemek yeme işlemi başlatılıyor')
        }
        else{
            console.log('Yemek bulunamadı')
        }
    }
    protected toplucaSaldir(): void{
        console.log('Düşman bulundu. Toplu saldırı için yeterli birim var mı kontrol ediliyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Birim sayısı 5ten fazla, toplu saldırı başlatılıyor')
        }
        else{
            console.log('Birim sayısı 5ten az, geri çekiliyor')
        }
    }
    public play(): void{
        this.saldir()
        console.log()
        this.kaynakTopla()
        console.log()
        this.yagmaYap()
        console.log()
        this.toplucaSaldir()
        console.log()
    }

}

// Elf sınıfı GameAI sınıfından kalıtım alır ve kendine özgü davranışlar tanımlar
class Elf extends GameAI {
    protected kaynakTopla(): void{
        console.log('Kaynak araştırılıyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Kaynak bulundu, toplanıyor')
        }
        else{
            console.log('Kaynak bulunamadı')
        }
    }
    protected yagmaYap(): void{
        console.log('Elf ırkı yağma yapmaz, barışcıl bir ırktır')
    }
    protected toplucaSaldir(): void{
        console.log('Düşman bulundu. Toplu saldırı için yeterli birim var mı kontrol ediliyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Birim sayısı 5ten fazla, toplu saldırı başlatılıyor')
        }
        else{
            console.log('Birim sayısı 5ten az, geri çekiliyor')
        }
    }
    public play(): void{
        this.saldir()
        console.log()
        this.kaynakTopla()
        console.log()
        this.yagmaYap()
        console.log()
        this.toplucaSaldir()
        console.log()
    }
}

// Monster sınıfı GameAI sınıfından kalıtım alır ve kendine özgü davranışlar tanımlar
class Monster extends GameAI {
    protected kaynakTopla(): void{
        console.log('Kaynak araştırılıyor ...')
        let a = GetRandom(10)
        if(a > 5){
            console.log('Kaynak bulundu, toplanıyor')
        }
        else{
            console.log('Kaynak bulunamadı')
        }
    }
    protected yagmaYap(): void{
        console.log('Monster, yağma yapmak için yeterince zeki değil')
    }
    protected toplucaSaldir(): void{
        console.log('Monster, topluca saldırı yapmak için yeterince zeki değil')
    }
    public play(): void{
        this.saldir()
        console.log()
        this.kaynakTopla()
        console.log()
        this.yagmaYap()
        console.log()
        this.toplucaSaldir()
        console.log()
    }
}

function main(){
    console.log('------------------------------------')
    console.log('   NPC : ORK   ')
    let ork = new Ork()
    ork.play()
    console.log('------------------------------------')
    console.log('  NPC : ELF   ')

    let elf = new Elf()
    elf.play()
    console.log('------------------------------------')
    console.log('  NPC : MONSTER   ')

    let monster = new Monster()
    monster.play()
}

main()