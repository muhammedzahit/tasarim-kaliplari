// Strategy tasarım kalıbı kullanarak sıralama algoritması gerçekleştiren bir sınıf yazalım.

// Sorter sınıfı SortStrategy arayüzü aracılığıyla sıralama algoritmaları ile iletişim kurar.
interface SortStrategy {
    sort(list: number[]): number[];
}

class InsertionSortStrategy implements SortStrategy {
    sort(list: number[]): number[] {
        console.log("Insertion sort");
        return list;
    }
}

class QuickSortStrategy implements SortStrategy {
    sort(list: number[]): number[] {
        console.log("Quick sort");
        return list;
    }
}

class Sorter {
    private strategy: SortStrategy;

    constructor(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    sort(list: number[]): number[] {
        return this.strategy.sort(list);
    }

    setStrategy(strategy: SortStrategy) {
        this.strategy = strategy;
    }

    // Elimize gelen verilerin sıralanmaya ne kadar yakın olup olmadığını hesaplayan bir metot yazalım.
    getSortScore(list : number[]): number {
        let a = 0;
        for(let i = 1; i < list.length; i++) {
            a += list[i] - list[i-1];
        }
        return a / list.length;
    }
}

function main(){
    let sorter = new Sorter(new QuickSortStrategy());
    let list = [1, 31, 6, 77, 2, 90];
    console.log('Sort Score : ' + sorter.getSortScore(list));
    sorter.sort(list);

    // Neredeyse sıralı bir liste geldiğinde Insertion sort algoritması daha hızlı çalışır.
    let list2 = [1, 2, 4, 3, 7, 6];
    console.log('Sort Score : ' + sorter.getSortScore(list2));
    sorter.setStrategy(new InsertionSortStrategy());
    sorter.sort(list);
}

main();