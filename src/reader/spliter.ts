export interface ISplitble {
	addVertex(left: number): void;
	addConnection(right: number): void;
	done(): void;
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
	private isStackEmpty(): boolean {
		return this.stack.length <= 0;
	}
	private addVertex(left: number): void {
		this.stack.push(left);
		this._client.addVertex(left);
	}
	private addConnection(right: number): void {
		this.stack.pop();
		this._client.addConnection(right);
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
