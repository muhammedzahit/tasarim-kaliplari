class Database {
    // Her yerden erişilebilir olmasını istemediğimiz için static yaptık.
    private static instance: Database;
    
    private sayiDizisi: number[] = [];

    sayiEkle(sayi: number) {
        this.sayiDizisi.push(sayi);
    }

    getSayiDizisi(): number[] {
        return this.sayiDizisi;
    }

    // getInstance sınıfımızın static objemizi kullanmasını sağlayarak Singleton Pattern uyguladık.
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const db = Database.getInstance();

db.sayiEkle(1);
db.sayiEkle(2);
db.sayiEkle(3);

console.log(db.getSayiDizisi());

