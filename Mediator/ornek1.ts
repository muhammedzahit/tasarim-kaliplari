// Mediator tasarım kalıbını kullanarak kullanıcı mesajlarını yöneten bir sınıf yazalım.

interface IKullanici {
    id: number;
    ad: string;
}

class Kullanici implements IKullanici {
    id: number;
    ad: string;
    constructor(id: number, ad: string) {
        this.id = id;
        this.ad = ad;
    }
    mesajGonder(mesaj: string) {
        console.log('Bu mesajı gönderen: ' + this.ad + ' --- Mesaj: ' + mesaj);
    }
    mesajAl(mesaj: string) {
        console.log('Bu mesajı alan: ' + this.ad + ' --- Mesaj: ' + mesaj);
    }
}

// İki kullanıcı arasındaki bağlantıyı yönetecek arabulucu sınıfımızı yazalım.
class Mediator {
    kullanicilar: Kullanici[] = [];
    mesajGonder(gonderen: Kullanici,mesaj: string) {
        gonderen.mesajGonder(mesaj);
        this.kullanicilar.forEach(kullanici => {
            if (kullanici.id !== gonderen.id) {
                kullanici.mesajAl(mesaj);
            }
        });
        console.log('-----------------')
    }
}

function main(){    
    let mediator = new Mediator();
    let kullanici1 = new Kullanici(1, 'Ahmet');
    let kullanici2 = new Kullanici(2, 'Mehmet');
    mediator.kullanicilar.push(kullanici1);
    mediator.kullanicilar.push(kullanici2);

    mediator.mesajGonder(kullanici1, 'Merhaba');
    mediator.mesajGonder(kullanici2, 'Selam');
    mediator.mesajGonder(kullanici1, 'Naber?');
    mediator.mesajGonder(kullanici2, 'İyiyim sen?');
}

main();