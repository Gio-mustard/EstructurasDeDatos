
class Node{
    public Integer value;
    public Node next = null;
    public Node prev = null;

    Node(Integer value){
        this.value = value;
    }

    @Override
    public String toString() {
        String rep_obj = "";
        if (this.prev == null) {
            rep_obj += "null <- ";
        }
        else{
            rep_obj += this.prev.value + " <- ";
        }
        rep_obj += this.value;
        if (this.next == null) {
            rep_obj += " -> null";
        }
        else{
            rep_obj += " -> "+this.next.value;
        }
        return rep_obj;
    }
}

public class DoubleLinkedList {
    public Node head;
    public Node tail;
    public int length;

    public DoubleLinkedList(Integer value) {
        if (value != null) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        } else {
            this.head = null;
            this.tail = null;
            this.length = 0;
        }
        
    }

    public void append(int value) {
        if (this.length == 0) {
            this.prepend(value);
            return;
        }
        Node newNode = new Node(value);
        
        newNode.prev = this.tail; // new

        this.tail.next = newNode;
        
        this.tail = newNode;
        this.length++;
    }

    public void prepend(int value) {
        Node newNode = new Node(value);
        if (this.length == 0){
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }

        this.head.prev = newNode; // New

        newNode.next = this.head;

        this.head = newNode;
        
        if (this.length == 0) {
            this.tail = this.head;
        }
        this.length++;
        
    }

    public void insert(int index, int value) {
        if (index < 0) {
            throw new IndexOutOfBoundsException("Index must be non-negative");
        }
        if (index == 0) {
            this.prepend(value);
            return;
        }
        if (index >= this.length) {
            this.append(value);
            return;
        }

        Node newNode = new Node(value);
// --
        Node previousNode = findByIndex(index - 1);

        newNode.prev = previousNode; // new

        newNode.next = previousNode.next;
        previousNode.next = newNode;
// --   
        
        this.length++;
    }

    public boolean remove(int value) {
        if (this.length == 0) return false;

        Node prevCurrentNode = this.head.prev;
        Node currentNode = this.head;
        Node nextCurrentNode = this.head.next;
        
        while (currentNode.value != value) {
            prevCurrentNode = currentNode;
            
            currentNode = currentNode.next;
            if (currentNode.next == null ){
                nextCurrentNode = null;
                continue;
            }

            nextCurrentNode = currentNode.next;
        }
        
        if (prevCurrentNode!=null) prevCurrentNode.next = nextCurrentNode;

        if (nextCurrentNode != null) nextCurrentNode.prev = prevCurrentNode;
        
        if (currentNode == this.head) this.head = nextCurrentNode;
        if (currentNode == this.tail) {
            this.tail = prevCurrentNode;
            this.tail.next = null;
        }

        
        this.length--;
        return true;
    }

    private Node findByIndex(int index) {
        if (index < 0 || index >= this.length) return null;
        int counter = 0;
        Node currentNode = this.head;
        while (counter != index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    public Node search(int value) {
        Node nodeSearching = this.head;
        while (nodeSearching != null) {
            if (nodeSearching.value == value) return nodeSearching;
            nodeSearching = nodeSearching.next;
        }
        return null;
    }

    public String traverse() {
        Node currentNode = this.head;
        String linkedList = "";
        
        for (int i = 0; i < this.length; i++) {
            linkedList += currentNode +"\n";
            
            if (currentNode.next!=null)currentNode = currentNode.next;
        }
        
        return linkedList;
    }
}
