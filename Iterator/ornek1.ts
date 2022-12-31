// Iterator tasarım kalıbını Ağaç yapısında kullanarak bir örnek yapalım.

// Konumuz BST ağaç yapısı değil ama örnek yapmak için kullanacağız.
// Burayı detaylıca incelemenize gerek yok.
export class BinarySearchTreeNode<T> {
    data: T;
    leftNode?: BinarySearchTreeNode<T>;
    rightNode?: BinarySearchTreeNode<T>;
  
    constructor(data: T) {
      this.data = data;
    }
  }
  
export class BinarySearchTree<T> {
root?: BinarySearchTreeNode<T>;
comparator: (a: T, b: T) => number;

constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
}

insert(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) {
    this.root = new BinarySearchTreeNode(data);
    return this.root;
    }

    let current = this.root;

    while (true) {
    if (this.comparator(data, current.data) === 1) {
        if (current.rightNode) {
        current = current.rightNode;
        } else {
        current.rightNode = new BinarySearchTreeNode(data);
        return current.rightNode;
        }
    } else {
        if (current.leftNode) {
        current = current.leftNode;
        } else {
        current.leftNode = new BinarySearchTreeNode(data);
        return current.leftNode;
        }
    }
    }
}

search(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) return undefined;

    let current = this.root;

    while (this.comparator(data, current.data) !== 0) {
    if (this.comparator(data, current.data) === 1) {
        if (!current.rightNode) return;

        current = current.rightNode;
    } else {
        if (!current.leftNode) return;

        current = current.leftNode;
    }
    }

    return current;
}
}

function comparator(a: number, b: number) {
if (a < b) return -1;

if (a > b) return 1;

return 0;
}

// Ağaç yapısını kullanan bir sınıf oluşturalım.
class ClassHasTree {
    tree: BinarySearchTree<number>

    constructor() {
        this.tree = new BinarySearchTree(comparator);
    }

    add(data: number) {
        this.tree.insert(data);
    }

    search(data: number) {
        return this.tree.search(data);
    }
}

// Iterator sınıfımızı oluşturalım.
// Iterator sınıfı, ağaç yapısını dolaşmak için kullanılacak.
class TreeIterator{
    // In-Order dolaşımı için kullanılacak fonksiyon.
    inOrder(node: BinarySearchTreeNode<number> | undefined, callback: (data: number) => void) {
        if (node) {
            this.inOrder(node.leftNode, callback);
            callback(node.data);
            this.inOrder(node.rightNode, callback);
        }
    }

    // Pre-Order dolaşımı için kullanılacak fonksiyon.
    preOrder(node: BinarySearchTreeNode<number> | undefined, callback: (data: number) => void) {
        if (node) {
            callback(node.data);
            this.preOrder(node.leftNode, callback);
            this.preOrder(node.rightNode, callback);
        }
    }

    // Post-Order dolaşımı için kullanılacak fonksiyon.
    postOrder(node: BinarySearchTreeNode<number> | undefined, callback: (data: number) => void) {
        if (node) {
            this.postOrder(node.leftNode, callback);
            this.postOrder(node.rightNode, callback);
            callback(node.data);
        }
    }
}

function main(){

    const classHasTree = new ClassHasTree();

    classHasTree.add(5);
    classHasTree.add(3);
    classHasTree.add(7);
    classHasTree.add(1);
    classHasTree.add(4);
    classHasTree.add(6);
    classHasTree.add(8);

    // Oluşturduğumuz Binary Search Tree
    //    5
    //  3   7
    // 1 4 6 8

    
    const treeIterator = new TreeIterator();

    // In-Order dolaşımı
    console.log("In-Order Dolaşımı")
    treeIterator.inOrder(classHasTree.search(5), (data) => {
        console.log(data);
    });
    console.log('------------------')

    // Pre-Order dolaşımı
    console.log("Pre-Order Dolaşımı")
    treeIterator.preOrder(classHasTree.search(5), (data) => {
        console.log(data);
    });
    console.log('------------------')

    // Post-Order dolaşımı
    console.log("Post-Order Dolaşımı")
    treeIterator.postOrder(classHasTree.search(5), (data) => {
        console.log(data);
    });

}

main();