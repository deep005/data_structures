(function (){

    let HashTable = function(){
        this.items = [];
        this.items.length = 100;
    };
    let HashStruc = function(val){
        this.val = val;
        this.next = null;
    };

    HashTable.prototype.hash = function(val){
        let hashIndex = 0;

        for(let i =0, len = val.length; i< len; i++){
           hashIndex  = i + (hashIndex << 5) - hashIndex;
        }
        return hashIndex % this.items.length;
    };

    HashTable.prototype.add = function(val){

        // not overwriting the already existing keys
        if(this.lookup(val) === null){
           let node = new HashStruc(val),
               hash = this.hash(val);

            node.val = val;
            node.next = this.items[hash];
            this.items[hash] = node;
            return 'node added successfully';
        }
        else{
            return 'node with the given value is already there in the table';
        }
    };

    HashTable.prototype.remove = function(val){

        let node = this.lookup(val);

        if(node){
            let hash = this.hash(val),
                curr = this.items[hash],
                prev = {};
            while(curr){
                //if the value is stored in the first node of the list
                if(this.items[hash].val === val){
                    this.items[hash] = this.items[hash].next;
                    curr = null;
                    return 'node removed successfully';
                }
                if(curr.val === val){
                    prev.next = curr.next;
                    curr = null;
                    return 'node removed successfully';
                }
                prev = curr;
                curr = curr.next;
            }
        }
        return 'node with the given value is not present in the table';
    };

    HashTable.prototype.lookup = function(val){

        let hash = this.hash(val),
            node= this.items[hash];

        while(node){
            if(node.val === val)
                return node;
            node = node.next;
        }
        return null;
    };

    let table = new HashTable();

    // insert single node
    console.log(table.add('dddddddddd'));

    // create a collision based on the hash function
    console.log(table.add('aaa'));
    console.log(table.add('bbb'));
    console.log(table.add('ccc'));
    console.log(table.add('ccc'));
    console.log(table.remove('bbb'));
    console.log(table.remove('bbb'));
}());