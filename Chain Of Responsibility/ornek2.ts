// Chain of Responsibility tasarım kalıbı kullanılarak bir süperkahraman takımı yönetim sistemi oluşturalım

abstract class HeroHandler {
    nextHero: HeroHandler;
    heroAbility: string;
    heroName: string;
    setNext(hero: HeroHandler) {
        this.nextHero = hero;
    }

    // Eğer komut kahramanın yeteneği ile eşleşiyorsa kahramanın yeteneği kullanılır.
    // Eğer eşleşmiyorsa bir sonraki kahraman komutu uygulamaya çalışılır.
    handle(command: string){
        if(this.heroAbility === command){
            console.log(this.heroName + ' , ' + this.heroAbility + " yeteneği kullanıldı.");
        }
        else{
            console.log(this.heroName + ' , ' + 'komutu uygulayamadı.')
            if(this.nextHero){
                console.log('')
                this.nextHero.handle(command);
            }
        }
    }
}

class Batman extends HeroHandler {
    heroAbility = "Batarang Fırlat";
    heroName = "Batman";
}

class Superman extends HeroHandler {
    heroAbility = "Uç";
    heroName = "Superman";
}

class SpiderMan extends HeroHandler {
    heroAbility = "Ağ At";
    heroName = "SpiderMan";
}

function heroMain(){
    let batman = new Batman();
    let superman = new Superman();
    let spiderman = new SpiderMan();

    // Kahraman yeteneklerini ayırdık ve zincir yapısı ile birbirine bağladık.

    batman.setNext(superman);
    superman.setNext(spiderman);

    batman.handle("Uç");
    console.log('----------------------------')

    batman.handle("Batarang Fırlat");
    console.log('----------------------------')

    batman.handle("Ağ At");
    console.log('----------------------------')

}

heroMain();