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
    linked.print();
}());