( function(){

    var List = function(){
            this.head = null;
        },
        LinkedNode = function(data){
            this.data = data;
            this.next = null;
        };

    // Inserting nodes one at a time into the list
    List.prototype.insert = function(val){

        var node = new LinkedNode(val);
        if(this.head === null){
            this.head = node;
        }
        else {
            var curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
        }
    };

    //removing nodes one at a time
    List.prototype.remove = function(data){

        var curr;
        if(this.head === null){
            return 'List is empty';
        }
        else if(this.head.data === data){
            curr = this.head;
            this.head = this.head.next || null;
            curr = null;
            return 'head removed';
        }
        else {
            curr = this.head.next;
            var prev = this.head;
            while(curr){
                if(curr.data === data){
                    prev.next = curr.next;
                    curr = null;
                    return 'data removed';
                }
                else {
                    prev = curr;
                    curr = curr.next;
                }
            }
            return 'data not found';
        }
    };

    //finding and returning the node whose data matches the value passed to the function
    List.prototype.find = function(data){
        var curr;
        if(this.head === data)
            return this.head;
        else{
            curr = this.head.next;
            while(curr){
                if(curr.data=== data)
                    return curr;
                curr = curr.next;
            }
            return 'data not found';
        }
    };

    //printing the kth node to the last
    List.prototype.nToLast = function(k){
        var p1 = this.head,
            p2= this.head,
            i=0,
            count=0,
            curr= this.head;
        while(curr){
            count++;
            curr = curr.next;
        }
        if(k<=count) {
            for (i = 0; i < (k - 1); i++) {
                p2 = p2.next;
            }

            while(p2.next){
                p1= p1.next;
                p2 = p2.next;
            }
            return p1;
        }
        else return 'Please enter a number less than or equal to count';
    };

    //reversing the linked list
    List.prototype.reverse = function(){

        var curr = this.head,
            prev = null,
            next = null;

        while(curr){

            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        this.head = prev;
    };


    //deleting the nth node
    List.prototype.delete = function(n){

        if(n===1){
            var first = this.head;
            this.head = this.head.next;
            first = null;
            return 'head deleted';
        }
        else {
            var count = 1,
                node=this.head.next,
                prev=this.head;
            while(node){
                count++;
                if(count === n)
                    break;
                prev = node;
                node = node.next;
            }
            if(count === n) {
                prev.next = node.next;
                node = null;
                return 'node deleted successfully;'
            }
            else{
                return 'Please enter a number less than or equal to ' + count;
            }
        }

    };

    //traversing the list and printing it
    List.prototype.print = function(){
        if(this.head === null)
          console.log('list is empty');
        else{
            var curr = this.head;
            while(curr){
                console.log(curr.data);
                curr = curr.next;
            }
        }
    };
    var linked = new List();
    linked.insert('a');
    linked.insert('b');
    linked.insert('c');
    linked.insert(2);
    linked.insert(4);
    linked.insert(1);
    linked.insert(7);
    linked.insert(6);
    linked.insert('deep');
    linked.insert('shanker');
    linked.insert('9');
    linked.print();
    console.log('\n\n');
    console.log(linked.remove('9'));
    console.log(linked.remove(4));
    console.log(linked.remove('a'));
    console.log('\n\n');
    console.log(linked.find(1));
    console.log(linked.nToLast(9));
    console.log(linked.nToLast(5));
    linked.print();
    console.log('\n\n');
    linked.reverse();
    linked.reverse();
    linked.print();
    console.log(linked.delete(1));
    console.log(linked.delete(9));
    console.log(linked.delete(6));

}());