
class MyNode{
    constructor(public value:number, public next:MyNode | null = null){}
}

class MySingleLinkedList{
    public head:MyNode
    private length:number
    public tail:MyNode

    constructor(public value:number){
        this.head = new MyNode(value) 
        this.tail = this.head
        this.length = 1
    }

    public append(value:number):void{
        const newNode = new MyNode(value)
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
        let currentNode = this.head
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


        let nodeSearching = this.head
        while (true){
            
            if (nodeSearching.value === value) return nodeSearching;

            nodeSearching = nodeSearching.next as MyNode

            if (nodeSearching.next === null) return false;
        }
    }

    public traverse():string{

        let currentNode = this.head
        
        let linkedList:string = '';

        for(let i = 0;i<this.length;i++){

            linkedList += currentNode.value + ' -> '
            currentNode = currentNode.next as MyNode
        }
        linkedList += 'null' // In the next of tail exists a null value.
        return linkedList
    }
}

const mySingleLinkedList = new MySingleLinkedList(1)
mySingleLinkedList.append(2)
mySingleLinkedList.prepend(0)
mySingleLinkedList.insert(1, .5)

console.log(mySingleLinkedList.traverse())
// COMMAND : npx ts-node singly_linked_list.ts