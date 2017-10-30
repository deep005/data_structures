(function(){
    let BinaryTree = function(){
        this.root = null;
    };
    let BinaryNode = function(val){
        this.val = val;
        this.left = null;
        this.right = null;
    };

    BinaryTree.prototype.insert = function(val) {

        let node = new BinaryNode(val);
        if (this.root === null) {
            this.root = node;
        }
        else {
            this.insertNode(node, this.root);
        }

    };

    BinaryTree.prototype.insertNode = function(node, subtree){

        if(node.val < subtree.val)
        {
            if(subtree.left === null)
                subtree.left = node;
            else
                this.insertNode(node, subtree.left);
        }
        else
        {
            if(subtree.right === null)
                subtree.right = node;
            else
                this.insertNode(node, subtree.right);
        }
    };

    BinaryTree.prototype.locate = function(val){
        if(this.root.val === val)
            return this.root;
        else
            return this.locateNode(val, this.root);
    };

    BinaryTree.prototype.locateNode = function(find, subtree){

        if (!subtree) {
            return null;
        }
        else {
            // found the matching node
            if (find === subtree.val) {
                return subtree;
            }
            else if (find < subtree.val) {
                return this.locateNode(find, subtree.left);
            }
            else if (find > subtree.val) {
                return this.locateNode(find, subtree.right);
            }
        }
    };

    //Depth first traversal of BST's
    BinaryTree.prototype.printPreOrder = function(subtree) {

        if(subtree !== null)
        {
            console.log(subtree.val);
            this.printPreOrder(subtree.left);
            this.printPreOrder(subtree.right);
        }
    };

    BinaryTree.prototype.printInOrder = function(subtree) {

        if(subtree !== null)
        {
            this.printInOrder(subtree.left);
            console.log(subtree.val);
            this.printInOrder(subtree.right);
        }
    };

    BinaryTree.prototype.printPostOrder = function(subtree) {

        if(subtree !== null)
        {
            this.printPostOrder(subtree.left);
            this.printPostOrder(subtree.right);
            console.log(subtree.val);
        }

    };

    //Breadth first traversal for BST's
    BinaryTree.prototype.BFSltr = function(){

        let node = this.root,
            queue = [node],
            result = [];

        while(node = queue.shift()){
            result.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        return result;
    };

    BinaryTree.prototype.BFSrtl = function(){

        let node = this.root,
            queue = [node],
            result = [];

        while(node = queue.shift()){
            result.push(node.val);
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
        return result;
    };



    let tree = new BinaryTree();
    tree.insert(20);
    tree.insert(10);
    tree.insert(15);
    tree.insert(16);
    tree.insert(5);
    tree.insert(8);
    tree.insert(25);

    console.log(tree.locate(15));

    tree.printPreOrder(tree.root);
    console.log('\n\n');
    tree.printInOrder(tree.root);
    console.log('\n\n');
    tree.printPostOrder(tree.root);
    console.log('\n\n');
    console.log(tree.BFSltr());
    console.log(tree.BFSrtl());
}());