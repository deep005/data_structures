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

    BinaryTree.prototype.locate = function(val){
        if(this.root.val === val)
            return this.root;
        else
            return this.locateNode(val, this.root);
    };

    BinaryTree.prototype.locateNode = function(val, root){

        if(val === root.val)
            return this.root;
        else if(val <= root.val)
            return this.locateNode(val, root.left);
        else
            return this.locateNode(val, root.right);
    }
}());