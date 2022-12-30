class ATipiVeri{
    veri : string
    constructor(veri : string){
        this.veri = veri
    }

    parse(){
        console.log(this.veri.split(','));
    }

    getVeri(){
        return this.veri
    }
}

class BTipiVeri{
    veri : string
    constructor(veri : string){
        this.veri = veri
    }

    parse(){
        console.log(this.veri.split('.'));
    }

    getVeri(){
        return this.veri
    }
}

class AtoBAdapter implements BTipiVeri{
    veri: string;
    AtipiVeri : ATipiVeri

    constructor(veri : ATipiVeri){
        this.AtipiVeri = veri
    }

    // Adapter sınıfımızda BTipiVeri sınıfından parse() ve getVeri() metodlarını override ediyoruz.
    // Bu metodları ATipiVeri sınıfı ile uyumlu hale getiriyoruz.
    parse(): void {
        console.log(this.AtipiVeri.veri.split(','))
    }
    getVeri(): string {
        let a = this.AtipiVeri.veri.split(',')
        return a.join('.')
    }
}

let a = new ATipiVeri('1,2,3,4,5')
console.log('A tipi Veri')
a.parse()
console.log(a.getVeri());
console.log('------------------')

// A tipi veriyi Adapter sınıfı aracılığıyla B tipi veriye uyumlu hale getiriyoruz.
let b = new AtoBAdapter(a)
console.log('B tipi Veri')
b.parse()
console.log(b.getVeri());
