(function (){

    let MaxHeap = function() {
        this.items = [];
        this.size = -1;

    };
    MaxHeap.prototype.findParent = function(index){
        return Math.floor((index-1)/2);
    };
    MaxHeap.prototype.insert = function(){

    };
}());
