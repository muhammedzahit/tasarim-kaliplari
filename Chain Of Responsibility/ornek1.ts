// Chain of responsibility tasarım kalıbı kullanılarak sipariş verme sistemi uygulaması oluşturma

// Handler sınıfı
// Bu sınıf zincir yapısında kullanılacak ortak bir arayüz(interface) sağlar.
abstract class Handler {
    nextHandler: Handler;
    setNext(handler: Handler) {
        this.nextHandler = handler;
    }
    handle(){
        if(this.nextHandler){
            this.nextHandler.handle();
        }
    }
}

// Sanitization Sınıfı
class Sanitization extends Handler {
    handle(){
        console.log("Sanitization işlemi yapılıyor...");
        super.handle();
    }
}

// Ip Kontrol Sınıfı
class IpControl extends Handler {
    handle(){
        console.log("Ip kontrolü yapılıyor...");
        super.handle();
    }
}

// Yetkilendirme Sınıfı
class Authorization extends Handler {
    handle(){
        console.log("Yetkilendirme işlemi yapılıyor...");
        super.handle();
    }
}

// Sipariş Sınıfı
class Order extends Handler {
    handle(){
        console.log("Sipariş Arayüzüne erişildi...");
        console.log('')
        console.log('Lütfen vermek istediğiniz siparişi seçiniz...')
        super.handle();
    }
}

function main(){
    let order = new Order();
    let authorization = new Authorization();
    let ipControl = new IpControl();
    let sanitization = new Sanitization();

    // Sipariş aşamalarını ayırdık ve zincir yapısı ile birbirine bağladık.

    sanitization.setNext(ipControl);
    ipControl.setNext(authorization);
    authorization.setNext(order);

    sanitization.handle();
}

main();

