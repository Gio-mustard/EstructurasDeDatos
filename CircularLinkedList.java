public class CircularLinkedList extends DoubleLinkedList {

    CircularLinkedList(Integer value){
        super(value);
    }


    @Override
    public void prepend(int value){
        super.prepend(value);
        if (this.head.value == value && this.head.prev != this.tail){
            this.head.prev = this.tail;
        }
    }

    @Override
    public void append(int value){
        super.append(value);
        if (this.tail.value == value && this.tail.next != this.head){
            this.tail.next = this.head;
        }
    }
}
