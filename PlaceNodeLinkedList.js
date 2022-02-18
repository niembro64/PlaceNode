// Singly Linked List


class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}



class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);
        
        // Check to see if there is a head
        if(this.head == null) {
            this.head = newNode;

            return this;
        }

        // if there is a head
        newNode.next = this.head;
        this.head = newNode;

        return this;


    }

    addToBack(value) {
        if(this.head==null){
            return this.addToFront(value);
        }
        var newNode = new Node(value);
        var runner = this.head;
        while(runner.next!=null){
            runner=runner.next;
        }
        runner.next = newNode;
        return this;
    }

    removeFromFront() {
        var newHead = this.head.next;
        var oldHead = this.head;
        this.head = newHead;
        oldHead.next=null;
        return this;
    }

    removeFromBack() {
        if(this.head.next==null){
            var oldHead = this.head;
            this.head = null;
            return oldHead.value;
        }
        var runner = this.head;
        while(runner.next.next!=null){
            runner=runner.next;
        }
        var oldTail = runner.next;
        runner.next=null;
        return oldTail.value;
    }

    contains(val){
        var runner = this.head;
        while(runner.next!=null){
            if(runner.value==val){
                return true;
            }
            runner=runner.next;
        }
        if(runner.value==val){
            return true;
        }
        return false;
    }

    minToFront(){
        //variable to hold lowest value node
        var lowNode = this.head;

        //while loop to find lowest value node
        var runner = this.head;
        while(runner.next!=null){
            //comparing runner node to lowest node
            if(runner.value<lowNode.value){
                lowNode = runner;
            }
            runner=runner.next;
        }

        //if the last node is the lowest, remove it from back
        if(runner.value<lowNode.value){
            lowNode = runner;
            this.removeFromBack();
        }
        //if the first node is the lowest, remove it from front
        else if(lowNode==this.head){
            this.removeFromFront();
        }
        //otherwise navigate back to lowest node and remove it from middle
        else{
            var runner2 = this.head;
            while(runner2.next!=lowNode){
                runner2=runner2.next;
            }
            var after = runner2.next.next;
            runner2.next = after;
            lowNode.next=null;
        }

        //add lowest node to front
        console.log("LOWEST: "+lowNode.value);
        return this.addToFront(lowNode.value);
    }

    maxToBack(){
        //variable to hold highest value node
        var highNode = this.head;

        //while loop to find highest value node
        var runner = this.head;
        while(runner.next!=null){
            if(runner.value>highNode.value){
                highNode = runner;
            }
            runner=runner.next;
        }

        //if the last node is the highest, remove it from back
        if(runner.value>highNode.value){
            highNode = runner;
            this.removeFromBack();
        }
        //if the first node is the highest, remove it from front
        else if(highNode==this.head){
            this.removeFromFront();
        }
        //otherwise navigate back to highest node and remove it from middle
        else{
            var runner2 = this.head;
            while(runner2.next!=highNode){
                runner2=runner2.next;
            }
            var after = runner2.next.next;
            runner2.next = after;
            highNode.next=null;
        }

        //add highest node to back
        console.log("HIGHEST: "+highNode.value);
        return this.addToBack(highNode.value);
    }

   // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }
}

const sll = new SLList();

sll.addToFront(-3)
sll.addToFront(2)
sll.addToFront(-10)
sll.addToFront(76)
sll.addToFront(5)

console.log("BEFORE:")
sll.printValues();

sll.minToFront();
sll.maxToBack();

console.log("AFTER:")
sll.printValues();