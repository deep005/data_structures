(function (){

    let doubleList = function(){
        this.head = null;
        this.tail = null;
    };
    let doubleNode = function(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    };
    doubleList.prototype.insert = function(data){

        let node = new doubleNode(data);

        if(!this.head){
            this.head = this.tail = node;
        }
        else{
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    };
    doubleList.prototype.remove = function(data){

        if(!this.head.next && this.head.data === data) {
            this.head = this.tail = null;
            return 'Doubly linked list deleted';
        }
        else if(this.head.next && this.head.data === data){
            this.head.next.prev = null;
            this.head = this.head.next;
            return 'head removed';
        }
        else if(this.tail.data === data){
            this.tail.prev = null;
            this.tail = this.tail.prev;
        }
        else {
            let curr = this.head.next;
            while(curr != this.tail){
                if(curr.data === data){
                    curr.prev.next = curr.next;
                    curr.next.prev = curr.prev;
                    curr = null;
                    return 'node removed successfully';
                }
                curr = curr.next;
            }
            return 'data not found';
        }
    };
    doubleList.prototype.print = function(data){
        let curr = this.head;
        while(curr){
            console.log(curr.data);
            curr = curr.next;
        }
    };
    doubleList.prototype.find = function(data) {

        var curr = this.head;

        while (curr) {
            if (curr.data === data) {
                return curr;
            }
            curr = curr.next;
        }
        return 'data not found in the list';

    };
    
    let double = new doubleList();
    let arr = ['a', 'b', 'c', 'd', 1, 2, 3, 'deep', 'shanker', '9'],
        len = arr.length,
        ele, i =0;

    while(i < len){
        ele = arr.shift();
        double.insert(ele);
        i++;
    }

    double.print();
    console.log('\n\n');
    console.log(double.find(2));
    console.log(double.find(89));
    console.log(double.remove('deep'));
    double.print();
    console.log(double.remove('a'));
    double.print();
    console.log(double.remove('ddfvev'));
    double.print();

}());