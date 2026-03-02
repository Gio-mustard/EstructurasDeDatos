// import readline from 'readline';
// single_linked_list.ts
const readline = require('readline'); // en vez de: import readline from 'readline';

class MyNode{
    constructor(public value:number, public next:MyNode | null = null){}
}



class MySingleLinkedList{
    public head:MyNode|null
    private length:number
    public tail:MyNode|null
    

    constructor(public value:number|null){
        this.head = value!==null? new MyNode(value) :null
        console.log(this.head)
        this.tail = this.head
        this.length = this.head !== null ? 1 : 0
    }

    public append(value:number):void{
        if (this.length == 0) {
            this.prepend(value)
            return;
        }
        const newNode = new MyNode(value)
        this.tail = this.tail as MyNode
        this.tail.next = newNode
        this.tail = newNode
        this.length++
        
    }

    public prepend(value:number):void{
        const newNode = new MyNode(value);
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    public insert(index:number,value:number):void{
        if (index < 0) {
            throw new Error("Index must be a non-negative integer in SinglyLinkedList")
        }
        if (index === 0) {
            this.prepend(value)
            return
        }
        if (index >= this.length) {
            this.append(value)
            return
        }

        const newNode = new MyNode(value)
        
        let previousNode = this.findByIndex(index-1) as MyNode

        newNode.next = previousNode.next
        previousNode.next = newNode
        this.length++
    


    }

    public remove(index:number):void|boolean{
        
        const nodePrevToDelete = this.findByIndex(index-1) as MyNode ;
        if ( nodePrevToDelete.next === null)return false;
        if (nodePrevToDelete.next.next ===null) {
            nodePrevToDelete.next = null;
            return
        }

        const nodeNextToDelete = this.findByIndex(index+1) as MyNode;
        nodePrevToDelete.next = nodeNextToDelete;

        
    }

    private findByIndex(index:number):MyNode|boolean{
        if (index >= this.length) return false;
        let counter = 0;
        let currentNode = this.head as MyNode
        while(counter !== index) {
            currentNode = currentNode.next as MyNode
            counter++
        }
        return currentNode
    }

    public search(value:number):MyNode|boolean{
        /**
        Busca y devuelve el nodo cuyo value coincide con value.
        @param {number} value - Valor a buscar.
        @returns {MyNode | null} El nodo encontrado o null si no existe.
        */

        
        let nodeSearching = this.head as MyNode 
        while (true){
            
            if (nodeSearching.value === value) return nodeSearching;

            nodeSearching = nodeSearching.next as MyNode

            if (nodeSearching.next === null) return false;
        }
    }

    public traverse():string{

        let currentNode = this.head as MyNode
        
        let linkedList:string = '';

        for(let i = 0;i<this.length;i++){

            linkedList += currentNode.value + ' -> '
            currentNode = currentNode.next as MyNode
        }
        linkedList += 'null' 
        return linkedList
    }
}

// -------- A PARTIR DE AQUI ESTA EL CODIGO SOLO PARA MOSTRAR EN LA INTERFAZ DE CONSOLA
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mySingleLinkedList = new MySingleLinkedList(null);

function showMenu() {
    console.log('============================');
    console.log('       SINGLE LINKED LIST   ');
    console.log('============================');
    console.log('1. Prepend (insertar al inicio)');
    console.log('2. Append (insertar al final)');
    console.log('3. Insert (insertar por índice)');
    console.log('4. Remove (eliminar por índice)');
    console.log('5. Search (buscar por valor)');
    console.log('6. Traverse (imprimir lista)');
    console.log('0. Salir');
    console.log('============================');
}

function requestListOption() {
    rl.question('Elige una opción: ', (answer:string) => {
        const option = Number(answer);

        switch(option) {
            case 1:
                rl.question('Valor a insertar al inicio: ', (val:string) => {
                    const num = Number(val);
                    mySingleLinkedList.prepend(num);
                    console.clear();
                    console.log('Elemento agregado al inicio.\n');
                    console.log('Lista actual:', mySingleLinkedList.traverse());
                    console.log();
                    showMenu();
                    requestListOption();
                });
                break;

            case 2:
                rl.question('Valor a insertar al final: ', (val:string) => {
                    const num = Number(val);
                    mySingleLinkedList.append(num);
                    console.clear();
                    console.log('Elemento agregado al final.\n');
                    console.log('Lista actual:', mySingleLinkedList.traverse());
                    console.log();
                    showMenu();
                    requestListOption();
                });
                break;

            case 3:
                rl.question('Índice donde insertar: ', (idxStr:string) => {
                    rl.question('Valor a insertar: ', (valStr:string) => {
                        const idx = Number(idxStr);
                        const num = Number(valStr);
                        try {
                            mySingleLinkedList.insert(idx, num);
                            console.clear();
                            console.log(`Elemento insertado en el índice ${idx}.\n`);
                        } catch (e:any) {
                            console.clear();
                            console.log('Error al insertar:', e.message);
                        }
                        console.log('Lista actual:', mySingleLinkedList.traverse());
                        console.log();
                        showMenu();
                        requestListOption();
                    });
                });
                break;

            case 4:
                rl.question('Índice a eliminar: ', (idxStr:string) => {
                    const idx = Number(idxStr);
                    const result = mySingleLinkedList.remove(idx);
                    console.clear();
                    if (result === false) {
                        console.log('No se pudo eliminar: índice inválido.');
                    } else {
                        console.log(`Elemento eliminado en el índice ${idx}.`);
                    }
                    console.log();
                    console.log('Lista actual:', mySingleLinkedList.traverse());
                    console.log();
                    showMenu();
                    requestListOption();
                });
                break;

            case 5:
                rl.question('Valor a buscar: ', (valStr:string) => {
                    const num = Number(valStr);
                    const node = mySingleLinkedList.search(num);
                    console.clear();
                    if (node === false) {
                        console.log(`Valor ${num} no encontrado en la lista.`);
                    } else {
                        console.log(`Valor ${num} encontrado:`, node);
                    }
                    console.log();
                    showMenu();
                    requestListOption();
                });
                break;

            case 6:
                console.clear();
                console.log('Lista actual:');
                console.log(mySingleLinkedList.traverse());
                console.log();
                showMenu();
                requestListOption();
                break;

            case 0:
                console.log('Saliendo...');
                rl.close();
                break;

            default:
                console.clear();
                console.log('Opción no válida.\n');
                showMenu();
                requestListOption();
        }
    });
}

// "main"
function main() {
    console.clear();
    showMenu();
    requestListOption();
}

main();
