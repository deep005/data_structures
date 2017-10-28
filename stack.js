( function(){

    let Stack = function(){
        this.top = -1;
        this._stack = [];
    };

    Stack.prototype.push = function(ele) {
        this.top++;
        this._stack.splice(this.top, 1, ele);
    };

    Stack.prototype.pop = function(){
        this._stack.splice(this.top, 1);
        this.top--;
    };

    let stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.pop();
    stack.pop();
}());