export interface IBlock {

}

export class Node {
    data: any;
    leafs: any[]
    constructor(data: any) { 
        this.data = data; 
        this.leafs = []; 
    }
}
export class BlockTree {
    private root: any;
    constructor() { 
        this.root = null; 
    }
    insert(data: any) { 
        var newNode = new Node(data); 
        if(this.root === null) {
            this.root = newNode; 
        } else {
            this.insertNode(newNode, this.root);
        }
    } 
    private insertNode(newNode: any, rootNode: any) {
        // if(newNode.data < rootNode.data ) {
        //     if(rootNode.left === null)  {
        //         rootNode.left = newNode; 
        //     } else {
        //         this.insertNode(rootNode.left, newNode);  
        //     }
        // } else { 
        //     if(rootNode.right === null) {
        //         rootNode.right = newNode; 
        //     } else {
        //         this.insertNode(rootNode.right,newNode); 
        //     }
        // } 
    }
    getRootNode() { 
        return this.root; 
    }
}
export class Scaner {
    s: string
    stack: number[] = []
    tree: BlockTree;
    constructor(s: string) {
        this.s = s;
        this.tree = new BlockTree();
    }
    run() {
        const l = this.s.length;
        for (let x = 0; x < l; x++) {
            let char = this.s.charAt(x);
            if (char === "{") {
                this.stack.push(x)
            }
            if (char === "}") {
                let tmp  = this.stack.pop()
                console.log(`pair ${tmp} - ${x} -> add to node`)
            }
        }
    }
    private addToTree() {
        
    }

}