// Butonları temsil eden bir interface oluşturduk.
interface buton{
    kendiniBetimle(): string;
}

class windows_buton implements buton {
    kendiniBetimle(): string {
        return "Windows butonu";
    }
}

class mac_buton implements buton {
    kendiniBetimle(): string {
        return "Mac butonu";
    }
}

// Arayüzleri temsil eden ortak bir interface oluşturduk.
interface arayuz_factory {
    buton_olustur(): buton;
}

class windows_factory implements arayuz_factory {
    buton_olustur(): buton {
        return new windows_buton();
    }
}

class mac_factory implements arayuz_factory {
    buton_olustur(): buton {
        return new mac_buton();
    }
}

// Arayüzü gösteren temel sınıfımızı oluşturduk.
// Butonu_goster fonksiyonu butonların hangi platformlarla çalıştığıyla ilgilenmez sadece onları arayüzde gösterir.
// yani abstract factory methodumuzu kullanır.
class arayuz {
    buton : buton;
    constructor(factory : arayuz_factory){
        this.buton = factory.buton_olustur();
    }
    butonu_goster(){
        console.log(this.buton.kendiniBetimle());
    }
}

let windows = new arayuz(new windows_factory());
windows.butonu_goster();
let mac = new arayuz(new mac_factory());
mac.butonu_goster();