import { SpliterStrategy, ISplitble, TSpliterData } from "./spliter";
import { Graph, Node, IGraphable } from "./graph";
import { randomString } from "../utils/random-string";
import { Block, IBlock } from "../generator/block";
export class StackInfo {
	id: string;
	left: number;
	right: number;
	constructor(id: string, left: number) {
		this.id = id;
		this.left = left;
		this.right = null;
	}
}
export class Reader implements ISplitble {
	private _pattern: string;
	public set pattern(value: string) {
		this._pattern = value;
	}
	private graph: Graph;
	private spliter: SpliterStrategy;
	private stack: StackInfo[] = [];
	private splitsDone = false;
	constructor(pattern: string) {
		this._pattern = pattern;
		this.graph = new Graph();
		this.spliter = new SpliterStrategy();
		this.spliter.client = this;
		this.spliter.pattern = pattern;
	}
	private unitqueId(): string {
		return randomString();
	}
	private lastItemFromStack(): any {
		return this.stack[this.stack.length - 1];
	}
	private createOneStack(left: number): StackInfo {
		const stackInfo = new StackInfo(this.unitqueId(), left);
		this.stack.push(stackInfo);
		return stackInfo;
	}
	private createBlock(stackInfo: StackInfo): Block {
		const subPattern = this._pattern.substring(
			stackInfo.left,
			stackInfo.right + 1
		);
		const block = new Block(subPattern);
		return block;
	}
	private popFromStack(): StackInfo {
		return this.stack.pop();
	}
	done(): void {
		this.splitsDone = true;
	}
	addVertex(left: number): void {
		const stackInfo: StackInfo = this.createOneStack(left);
		const block: Block = this.createBlock(stackInfo);
		this.graph.addVertex(stackInfo.id, block);
	}
	addConnection(right: number): void {
		const childStackInfo: StackInfo = this.popFromStack();
		childStackInfo.right = right;
		const block: Block = this.createBlock(childStackInfo);
		this.graph.updateNodeData(childStackInfo.id, block);
		const parentStackInfo: StackInfo = this.lastItemFromStack();
		if (parentStackInfo) {
			this.graph.addEdge(parentStackInfo.id, childStackInfo.id);
		}
	}
	scan(): Graph {
		this.spliter.run();
		return this.graph;
	}
}

/*
1. key
[a-z0-9]*:
aaa:{aaa1:number,aaa2:number},bbb:number,ccc:{ccc1:string,ccc2:string}



*/

/*
capturar index { y }
name:string
[]

name:{first:string,last:string}
[6,55]

a:{a1:s,a1:s}, b:{b1:s,b2:s}
[3,12

stack FIFO
a:{b:{c:s}}
7 -> 13
3 -> 14

a:{b:{c:{d:{e:{f:s}}}}}
15-19
12-20
9-21
6-22
3-23

a:{x:s},b:{z:s},c:{w:s}
3-7   11-15    19-23


a:{x:s},b:{c:{m:s}}
3-7

14-17
11-18

a:{x:s},b:{c:{m:s},$$times:3},c:{b:s,f:s}
3-7

17-21
15-31
14-32

36-44


a:{x:s},b:{c:{m:s},$$times:3},c:{b:s,f:{m:s}}
IBlock {
    child:string[]
    generate()
}
Block {
    child: IBLock[] = [a, b, c]
}
    a Block {
        child: IBLock[] = [x]
    }
    b Block {
        times = 3
        child: IBLock[] = [c]
    }
        c Block {
            child: IBLock[] = [m]
        }
            m Block {
                child: IBLock[] = []
            }
    c Block {
        child: IBLock[] = [b, f]
    }
        b Block {
            child: IBLock[] = []
        }
        f Block {
            child: IBLock[] = [m]
        }
            f Block {
                child: IBLock[] = []
            }


a:{x:s},b:{c:{m:s},$times:3},c:{b:s,f:s}
3-7

14-18
11-27
31-39



a:{x:s},b:{c:{m:s}}
3-7

14-17
11-18


*/

/*
{name:string}
{name:string,age:number}
{name:string,age:number,data:{code:string,access:boolean}}
{name:string,age:number,data:{code:string,access:{data:string,id:number}}}}
{name:string,age:number,data:[{name:string,age:number}3]}
{data:[{name:string,age:number}3]}
[{name:string,age:number}3]


1.
{name:string,age:number,data:{code:string,access:{data:string,id:number}}}

2.
ObjClass
name:string
age:number
data:{code:string,access:{data:string,id:number}}

3.
ObjClass
name:string
age:number
data:
    ObjClass
    code:string
    access:{data:string,id:number}

4.
ObjClass
name:string
age:number
data:
    ObjClass
    code:string
    access:
        ObjClass
        data:string
        id:number

============
1
{name:string,age:number,data:[{name:string,age:number}3]}
{name:string,age:number,data:{name:string,age:number,$times:3}}

2
ObjClass
name:string
age:number
data:[{name:string,age:number}3]

3
ObjClass
name:string
age:number
data:
    ArrayClass(3)
    name:string
    age:number

*/

/*
{name:string,age:number}

{
    name: string
    age: number
}

{name:string,age:number,data:{code:string,access:boolean}}

{
    name:string
    age:number
    data:{
        code:string
        access:boolean
    }
}

{name:string,age:number,data:{code:string,access:boolean, address:{city:string,address:string}}}

{
    name: {
        firstnaem:string
        lastname:string
    }
    age:number
    data:{
        code:string
        access:boolean
        address:{
            city:string,
            address:string
        }
    }
}
----|___
    |___
----
----
    |____
    |____
    |____
        |____
        |____

*/

/*
{b:{c:{m:s},$$times:3,}}
{user:string,id:uuid,posts:{title:text,date:date,$times:3,comments:{author:name,date:date,$times:4}}
{
    user: roll,
    id: uu123123,
    posts: [
        {title: the super title, date: 0202-2020,
            comments: [
                {author: alex, date: 02020-2020},
                {author: page, date: 02020-2020},
                {author: rasmus, date: 02020-2020},
            ]
        },
        {title: the super title, date: 0202-2020,
            comments: [
                {author: alex, date: 02020-2020},
                {author: page, date: 02020-2020},
                {author: rasmus, date: 02020-2020},
            ]
        },
        {title: the super title, date: 0202-2020,
            comments: [
                {author: alex, date: 02020-2020},
                {author: page, date: 02020-2020},
                {author: rasmus, date: 02020-2020},
            ]
        },
    ]
}


*/
