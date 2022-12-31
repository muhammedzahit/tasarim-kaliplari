// Composite tasarım kalıbı kullanarak bir ordu sistemi tasarlayalım.

interface IAsker{
    emir(emir:string):void;
}

class Er implements IAsker{
    emir(emir:string):void{
        console.log("Er "+emir+" emrini yerine getirdi.");
    }
}

// Onbaşılar erleri yönetirler. Onbaşılar bir emir aldığında erlerine iletirler.
class OnBasi implements IAsker{
    erler : IAsker[] = [];
    emir(emir:string):void{
        console.log("Onbaşı "+emir+" emrini yerine getirdi. Erlerine iletildi.");
        console.log('------------------------------------')
        this.erler.forEach(er => {
            er.emir(emir);
        });
        console.log()
    }
}

// Yüzbaşının şu an sahada en yüksek rütbeli asker olduğunu varsayalım.
// Yüzbaşının verdiği emiler tüm askerlere ulaşır.
class Yuzbasi implements IAsker{
    onbasilar : IAsker[] = [];
    emir(emir:string):void{
        console.log("Yüzbaşı "+emir+" emrini verdi.");
        console.log('------------------------------------')
        this.onbasilar.forEach(onbasi => {
            onbasi.emir(emir);
        });
    }
}

// hiyerarşik yapıyı oluşturalım.
let yuzbasi = new Yuzbasi();
let onbasi1 = new OnBasi();
let onbasi2 = new OnBasi();
yuzbasi.onbasilar.push(onbasi1);
yuzbasi.onbasilar.push(onbasi2);
let er1 = new Er();
let er2 = new Er();
let er3 = new Er();
let er4 = new Er();
let er5 = new Er();
let er6 = new Er();
onbasi1.erler.push(er1);
onbasi1.erler.push(er2);
onbasi1.erler.push(er3);
onbasi2.erler.push(er4);
onbasi2.erler.push(er5);
onbasi2.erler.push(er6);

// Yüzbaşı bir emir verdiğini düşünelim. Onbaşılar bu emiri alır ve erlere iletir.
yuzbasi.emir("Saldırı");
