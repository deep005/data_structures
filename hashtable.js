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
    Hashtable.add = function(val){

        // not overwriting the already existing keys
        if(this.lookup(val) === null){
           let node = this.HashStruc(val),
               hash = this.hash(val);

            node.val = val;
            node.next = this.items[hash];
            this.items[hash] = node;
        }
    };

    Hashtable.prototype.remove = function(){

    };
    Hashtable.prototype.lookup = function(val){


    };

}());