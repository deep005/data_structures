( function(){

    var List = function(){
            this.head = null;
        },
        LinkedNode = function(data){
            this.data = data;
            this.next = null;
        };
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
    console.log(linked.remove('9'));
    console.log(linked.remove(4));
    console.log(linked.remove('a'));
    linked.print();
}());