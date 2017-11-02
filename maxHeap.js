(function (){

    let MaxHeap = function() {
        this.items = [];
        this.size = -1;

    };
    MaxHeap.prototype.findParent = function(index){
        return Math.floor((index-1)/2);
    };
    MaxHeap.prototype.insert = function(val){
        let currpos = ++this.size,
            parentIndex = this.findParent(currpos);

        this.items[currpos] = val;

        if(currpos > 0){
            while(this.items[currpos] > this.items[parentIndex] ){
                this.items[currpos] = this.items[parentIndex];
                this.items[parentIndex] = val;

                currpos = parentIndex;
                parentIndex = this.findParent(currpos);

            }
        }
        return currpos;
    };
    MaxHeap.prototype.delete = function(){

    };
}());
