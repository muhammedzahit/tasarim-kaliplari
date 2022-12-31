// Decorator tasarım kalıbı kullanarak bir notifikasyon uygulaması oluşturacağız.

// Notifikasyon arayüzümüzü oluşturalım.
interface INotification{
    send():void;
}

// Base Decorator sınıfımızı oluşturalım.
class NotificationDecorator implements INotification{
    // protected : sadece bu sınıf ve alt sınıflar erişebilir.
    protected notification:INotification;

    constructor(notification:INotification){
        this.notification = notification;
    }

    send():void{
        this.notification.send();
    }
}

class EmailNotification implements INotification{
    send():void{
        console.log('Email gönderildi.')
    }
}

// Alt Decorator sınıflarımızı oluşturalım.
class SmsDecorator extends NotificationDecorator{
    send():void{
        console.log('Sms gönderildi.')
        this.notification.send();
    }
}

class FacebookDecorator extends NotificationDecorator{
    send():void{
        console.log('Facebook gönderildi.')
        this.notification.send();
    }
}

class SlackDecorator extends NotificationDecorator{
    send():void{
        console.log('Slack gönderildi.')
        this.notification.send();
    }
}

function main(){

    // Kullanıcıya tüm platformlardan mesaj göndermek istiyoruz.
    let notification = new NotificationDecorator(new EmailNotification());
    notification = new SmsDecorator(notification);
    notification = new FacebookDecorator(notification);
    notification = new SlackDecorator(notification);
    // Decorator sınıflar, matruşka bebekler gibi dıştan açılmaya başladığı için
    // mesajların şu sırayla gönderilmesini bekleriz. Slack -> Facebook -> Sms -> Email
    notification.send();

    console.log('-----------------------------')

    // Kullanıcıya sadece email ve Facebook'tan mesaj göndermek istiyoruz.
    notification = new NotificationDecorator(new EmailNotification());
    notification = new FacebookDecorator(notification);

    // Mesajların şu sırayla gönderilmesini bekleriz. Facebook -> Email
    notification.send();

}

main();