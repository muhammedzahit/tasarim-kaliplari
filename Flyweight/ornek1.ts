// Flyweight tasarım kalıbını kullanarak 3d oyun için ağaç sınıfı oluşturan bir örnek yapalım.
// Ağaç sınıfı içerisindeki ağaç türü,ağaç rengi,texture bilgileri aynı anda birden fazla ağaç nesnesi tarafından kullanılabilmektedir.
// Bu durumda ağaç nesneleri içerisindeki ağaç türü,ağaç rengi,texture bilgileri için ayrı ayrı nesne oluşturmak yerine
// aynı anda birden fazla ağaç nesnesi tarafından kullanılabilecek şekilde tek bir nesne oluşturulabilir.
// Bu nesne ağaç nesneleri tarafından paylaşılabileceği için bellek kullanımı azaltılabilir.

// Ağaç sınıfı
// Benzersiz(Unique) özellikleri içerir.
class Tree{
    private treeType : TreeType;
    private x : number;
    private y : number;
    private name : string;
    constructor(treeType : TreeType, x : number, y : number){
        this.treeType = treeType;
        this.x = x;
        this.y = y;
    }
    public grafikMotorundaGoster(){
        this.treeType.grafikMotorundaGoster(this.x, this.y, this.name);
    }
}

// Ağaç türü sınıfı (Flyweight)
// Ortak kullanılan özellikleri içerir.
class TreeType{
    private color : string;
    private texture : string;
    constructor(color : string, texture : string){
        this.color = color;
        this.texture = texture;
    }
    public grafikMotorundaGoster(x : number, y : number, name : string){
        console.log('Ağaç çiziliyor/ ' + 'İsim: ' + name + '/ Koordinatlar: (' + x + ',' + y + ') / Renk: ' + 
        this.color + '/ Texture:' + this.texture);
    }
}

// Ağaç fabrikası sınıfı
class TreeFactory{
    private treeTypes : TreeType[] = [];
    public getTreeType(color : string, texture : string) : TreeType{
        // Aynı ağaç türü varsa onu döndür
        // Aynı ağaç türü yoksa yeni bir ağaç türü oluştur ve onu döndür
        for(let treeType of this.treeTypes){
            if(treeType['color'] == color && treeType['texture'] == texture){
                return treeType;
            }
        }
        let treeType = new TreeType(color, texture);
        this.treeTypes.push(treeType);
        return treeType;
    }
    public getTreeTypes(){
        return this.treeTypes;
    }
}

// Orman sınıfı
class Forest{

    private trees : Tree[] = [];
    private treeFactory : TreeFactory;
    constructor(treeFactory : TreeFactory){
        this.treeFactory = treeFactory;
    }
    public plantTree(x : number, y : number, color : string, texture : string, name : string){
        let treeType = this.treeFactory.getTreeType(color, texture);
        let tree = new Tree(treeType, x, y);
        tree['name'] = name;
        this.trees.push(tree);
    }
    public grafikMotorundaGoster(){
        for(let tree of this.trees){
            tree.grafikMotorundaGoster();
        }
    }
}

let forest = new Forest(new TreeFactory());
forest.plantTree(1, 1, 'Kahverengi', 'Kuru', 'Ağaç1');
forest.plantTree(2, 2, 'Yeşil', 'Nem', 'Ağaç2');
forest.plantTree(3, 3, 'Kahverengi', 'Kuru', 'Ağaç3');
forest.plantTree(4, 4, 'Yeşil', 'Nem', 'Ağaç4');
forest.plantTree(5, 5, 'Kahverengi', 'Kuru', 'Ağaç5');
forest.plantTree(6, 6, 'Yeşil', 'Nem', 'Ağaç6');
forest.plantTree(7, 7, 'Kahverengi', 'Kuru', 'Ağaç7');
forest.plantTree(8, 8, 'Yeşil', 'Nem', 'Ağaç8');
forest.plantTree(9, 9, 'Kahverengi', 'Kuru', 'Ağaç9');
forest.plantTree(10, 10, 'Yeşil', 'Nem', 'Ağaç10');
forest.grafikMotorundaGoster();
console.log()
console.log('Ağaç türleri sayısı: ' + forest['treeFactory'].getTreeTypes().length
+ ' Ağaç nesneleri sayısı: ' + forest['trees'].length);

