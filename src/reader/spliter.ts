export interface ICallable {
	notify(data: any): void;
}
export interface TSpliterData {
	left: number;
	right: number;
}
export class SpliterStrategy {
	s: string;
	stack: number[] = [];
	client: ICallable;
	setString(s: string): void {
		this.s = s;
	}
	setClient(client: ICallable): void {
		this.client = client;
	}
	notify(data: TSpliterData): void {
		this.client.notify(data);
	}
	run(): void {
		const l = this.s.length;
		for (let x = 0; x < l; x++) {
			const char = this.s.charAt(x);
			if (char === "{") {
				this.stack.push(x);
			}
			if (char === "}") {
				const left = this.stack.pop();
				this.notify({ left: left, right: x });
			}
		}
	}
}
