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

    //finding the min node
    BinaryTree.prototype.findMinNode = function(node){
      if(node.left === null)
          return node;
      else
          return this.findMinNode(node.left);
    };
    //finding the max node
    BinaryTree.prototype.findMaxNode = function(node){
        if(node.right === null)
            return node;
        else
            return this.findMaxNode(node.right);
    };

    //finding the depth of the bst
    BinaryTree.prototype.depth = function(node) {
        let maxDepth = 0,
            traverse = function(node, depth){
                if(!node)
                    return null;
                maxDepth = depth > maxDepth ? depth : maxDepth;
                traverse(node.left, depth+1);
                traverse(node.right, depth+1);
            };
        traverse(this.root, 0);
        return maxDepth;
    };

    //counting leaf nodes
    BinaryTree.prototype.countLeaves = function(node) {
        let count = 0,
            traverse = function(node){
                if(!node)
                    return null;
                if(node.left === null && node.right === null){
                    count++;
                }
                else{
                    traverse(node.left);
                    traverse(node.right);
                }
            };
        traverse(this.root);
        return count;
    };


    //deleting a node
    BinaryTree.prototype.delete = function(key){
        if(this.root === null)
            return null;
        else {
            this.root = this.deleteNode(this.root, key);
            return this.root;
        }
    };
    BinaryTree.prototype.deleteNode = function(node, key){
        if(node === null)
            return null;
        else if(key < node.val){
            node.left = this.deleteNode(node.left, key);
            return node;
        }
        else if(key > node.val){
            node.right = this.deleteNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            if (node.right === null) {
                node = node.left;
                return node;
            }
            //finding the minimum val on the right subtree of the node to maintain bst
            let aux = this.findMinNode(node.right);
            node.val = aux.val;
            node.right = this.deleteNode(node.right, aux.val);
            return node;
        }
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
    console.log(tree.findMinNode(tree.root));
    console.log(tree.depth(tree.root));
    console.log(tree.countLeaves(tree.root));
    console.log(tree.delete(20));
    console.log(tree.delete(16));
    console.log(tree.BFSrtl());
    console.log(tree.depth(tree.root));
    console.log(tree.countLeaves(tree.root));

}());