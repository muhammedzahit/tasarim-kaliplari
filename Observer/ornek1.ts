// Observer tasarım kalıbını kullanarak Youtube abonelik sistemi oluşturalım.

// Kanalın aboneler ile ilişkilerini temsil eden arayüz(interface) sınıfı
interface IAbone{
    aboneID: number;
    videoBilgisiAl(videoAdi : string): void;
}

// Abone sınıfı
// Observer'ı temsil eder
class Abone implements IAbone{
    aboneID: number;
    
    constructor(aboneID: number){
        this.aboneID = aboneID;
    }

    videoBilgisiAl(videoAdi: string): void {
        console.log("Abone " + this.aboneID + " " + videoAdi + " isimli videonun yayınlandığı bildirimini aldı.");
    }

}

// Kanal sınıfı
// Subject'i ya da Publisher'ı temsil eder
class Kanal{
    aboneler: IAbone[] = [];

    aboneEkle(abone: IAbone){
        this.aboneler.push(abone);
    }

    aboneSil(abone: IAbone){
        let index = this.aboneler.indexOf(abone);
        this.aboneler.splice(index, 1);
    }

    // Bir video yayınlandığında tüm aboneleri bilgilendiren metot
    videoYayinla(videoAdi: string){
        this.aboneler.forEach(abone => {
            abone.videoBilgisiAl(videoAdi);
        });
    }
}

function main(){

    let abone1 = new Abone(1);
    let abone2 = new Abone(2);
    let abone3 = new Abone(3);

    let kanal = new Kanal();

    kanal.aboneEkle(abone1);
    kanal.aboneEkle(abone2);
    kanal.aboneEkle(abone3);

    kanal.videoYayinla("Video 1");
    console.log('-----------------')

    kanal.aboneSil(abone2);

    kanal.videoYayinla("Video 2");

}

main();
