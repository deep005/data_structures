( function(){

    var Queue = function(){
        this.tail = -1;
        this._queue = [];
    };

    Queue.prototype.enqueue = function(ele) {
        this.tail++;
        this._queue.splice(this.tail, 1, ele);
    };

    Queue.prototype.dequeue = function(){
        this._queue.shift();
        this.tail--;
        return 'removed';
    };

    Queue.prototype.size = function(){
        return this.tail + 1;
    };
    Queue.prototype.isEmpty = function(){
        return (this.tail === -1);
    };

    var queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.dequeue();
    queue.dequeue();
}());