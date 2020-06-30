export interface IBranch {

}
export class ListBranch implements IBranch {

}
export class DictBranch implements IBranch {

}
export class Node {
    data: IBranch;
    left:any;
    right:any;
    constructor(data: IBranch) { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}
export class BinarySearchTree { 
    root: any;
    constructor() { 
        this.root = null; 
    }
    insert(data: IBranch) { 
        var newNode = new Node(data); 
        if(this.root === null) {
            this.root = newNode; 
        }
        else {
            this.insertNode(this.root, newNode); 
        }
    } 
    insertNode(node, newNode) { 
        if(newNode.data < node.data ) {
            if(node.left === null)  {
                node.left = newNode; 
            }else {
                this.insertNode(node.left, newNode);  
            }
        } else { 
            if(node.right === null) {
                node.right = newNode; 
            } else {
                this.insertNode(node.right,newNode); 
            }
        } 
    }   
    preorder(node) { 
        if(node != null) { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    }
    inorder(node) { 
        if(node !== null) { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    }
    postorder(node) { 
        if(node != null) { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    }
    getRootNode() { 
        return this.root; 
    }
    search(node, data) { 
         if(node === null)  {
             return null; 
         } else if(data < node.data) {
             return this.search(node.left, data); 
         } else if(data > node.data) {
             return this.search(node.right, data); 
         } else {
             return node;
         }
    }
}
