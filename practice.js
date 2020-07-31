function traverseBinaryTree(tree) {

    const treeStart = tree.root;
    const values = [];

    values.push(treeStart.value);

    if(treeStart.left) {
        traverseBinaryTree(treeStart.left);
    }

    if(treeStart.right) {
        traverseBinaryTree(treeStart.right);
    }

    return values;
}

// Test: 
// 	Create test BT
// 	Import function

// function call(25).toBE(true) test passes
// function call(26).toBE(false) test passes



function traverseLL (linkList) {
    
    let current = linkList.head;
    let values = [];

    while(current) {
        values.push(current.value);
        current = current.next;
    }
    
    return values;
}