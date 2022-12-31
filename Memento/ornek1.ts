// Memento tasarım kalıbı kullanarak basit bir not defteri tasarlayalım.

class Editor{
    content: string;
    caretaker: Caretaker;
    constructor(content: string){
        this.content = content;
        this.caretaker = new Caretaker();
    }
    setContent(content: string){
        this.addHistory();
        this.content = content;
    }
    getContent(): string{
        return this.content;
    }
    addHistory(){
        this.caretaker.addHistory(new EditorMemento(this.content));
    }
    undo(){
        let memento = this.caretaker.popStack();
        if(memento != undefined){
            this.content = memento.getContent();
        }
    }
}

// Memento sınıfı
class EditorMemento{
    content: string;
    constructor(content: string){
        this.content = content;
    }
    getContent(): string{
        return this.content;
    }
}

// Caretaker sınıfı ile Memento sınıfı arasında bağlantı kurulur.
// Editor sınıfı bu sınıfı kullanarak metnin geçmiş formlarına ulaşır.
class Caretaker{
    history: EditorMemento[] = [];
    addHistory(memento: EditorMemento){
        this.history.push(memento);
    }
    popStack(): EditorMemento | undefined{
        if(this.history.length == 0){
            throw new Error("History is empty");
        }
        else
            return this.history.pop();
    }
}

function main(){

    let editor = new Editor("Yazinin ilk hali");

    console.log(editor.getContent());
    console.log()
    editor.setContent("Yazinin ikinci hali");
    console.log(editor.getContent());
    console.log()

    editor.setContent("Yazinin son hali");
    console.log(editor.getContent());
    console.log()

    editor.undo();
    console.log(editor.getContent());
    console.log()

    editor.undo();
    console.log(editor.getContent());
    console.log()

}

main();