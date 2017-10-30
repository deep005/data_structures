(function(){
    let BinaryTree = function(){
        this.root = null;
    };
    let BinaryNode = function(val){
        this.val = val;
        this.left = null;
        this.right = null;
    };

    BinaryTree.prototype.insert = function(val){

        let node  = new BinaryNode(val);
        if(this.root === null)
            this.root = node;
        else
            this.insertNode(node, this.root);
    };
    BinaryTree.prototype.insertNode = function(node, subtree){
        if(!subtree)
            subtree = node;
        if(node.val <= subtree.val)
            subtree.left = this.insertNode(node, subtree.left);
        if(node.val > subtree.val)
            subtree.right = this.insertNode(node, subtree.right);
        return subtree;
    };
    
}());