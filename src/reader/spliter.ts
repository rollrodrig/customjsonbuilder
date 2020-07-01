export interface ICallable {
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
	private _client: ICallable;
	public set client(value: ICallable) {
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
	run(): void {
		const l = this._pattern.length;
		for (let x = 0; x < l; x++) {
			const char = this._pattern.charAt(x);
			if (char === "{") {
				this.stack.push(x);
			}
			if (char === "}") {
				const left = this.stack.pop();
				this.notify({
					left: left,
					right: x,
					// parent: this.lastItemInTheStack(),
				});
			}
		}
		if (this.isStackEmpty()) {
			this._client.done();
		}
	}
}
