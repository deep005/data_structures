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

        this.items[0] = this.items[this.size];
        this.items.pop();
        this.size--;

        let current = this.items[0],
            currentPos=0,
            leftIndex, rightIndex, replaceIndex;

        while(current){

            leftIndex = (currentPos *2)+1;
            rightIndex = (currentPos *2)+2;
            if(this.items[leftIndex] > current && this.items[leftIndex] > this.items[rightIndex]){
                replaceIndex = leftIndex;
            }
            else if(this.items[rightIndex] > current && this.items[rightIndex] > this.items[leftIndex]){
                replaceIndex = rightIndex;
            }
            else{
                break;
            }

            this.items[currentPos] = this.items[replaceIndex];
            this.items[replaceIndex] = current;

            currentPos = replaceIndex;
            current = this.items[replaceIndex];
        }
    };

    let heap = new MaxHeap();
    heap.insert(20);
    heap.insert(13);
    heap.insert(9);
    heap.insert(8);
    heap.insert(5);
    heap.insert(3);
    heap.insert(7);
    heap.insert(6);
    heap.insert(2);
    heap.insert(1);
    heap.insert(19);
    heap.insert(25);

    heap.delete();
    console.log(heap.items);
    heap.delete();
    console.log(heap.items);


}());
