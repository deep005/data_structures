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

        this.items[0] = this.items[size];
        this.items.pop();
        this.size--;

        let current = this.items[0],
            currentPos=0,
            leftIndex, rightIndex, replaceIndex;

        while(current){

            leftIndex = (currentPos *2)+1;
            rightIndex = (currentPos *2)+2;
            if(this.items[left] > current && this.items[left] > this.items[right]){
                replaceIndex = leftIndex;
            }
            else if(this.items[right] > current && this.items[right] > this.items[left]){
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

    
}());
