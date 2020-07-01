export interface ISplitble {
	addVertex(stack: number[]): void;
	addConnection(left: number, right: number, stack: number[]): void;
	notify(data: any): void;
	done(): void;
	isDone(): boolean;
}
export interface TSpliterData {
	left: number;
	right: number;
	parent?: number;
}
export class SpliterStrategy {
	private stack: number[] = [];
	private _pattern: string;
	public set pattern(value: string) {
		this._pattern = value;
	}
	private _client: ISplitble;
	public set client(value: ISplitble) {
		this._client = value;
	}
	private notify(data: TSpliterData): void {
		this._client.notify(data);
	}
	private lastItemInTheStack(): number {
		return this.stack[this.stack.length - 1] || null;
	}
	private isStackEmpty(): boolean {
		return this.stack.length <= 0;
	}
	private addVertex(left: number): void {
		this.stack.push(left);
		this._client.addVertex(this.stack);
	}
	private addConnection(right: number): void {
		const left = this.stack.pop();
		this._client.addConnection(left, right, this.stack);
	}
	run(): void {
		const l = this._pattern.length;
		for (let x = 0; x < l; x++) {
			const char = this._pattern.charAt(x);
			if (char === "{") {
				this.addVertex(x);
			}
			if (char === "}") {
				this.addConnection(x);
			}
		}
		if (this.isStackEmpty()) {
			this._client.done();
		}
	}
}
