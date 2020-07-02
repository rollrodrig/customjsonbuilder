import { interfaces } from "mocha";
import { Dict } from "../generator/dict";
import { List } from "../generator/list";
import { StaticValue, NameValue, StringValue } from "../generator/value";
import { throws } from "assert";
import { IGraphable } from "./graph";
export interface IBlock {
	generate(): any;
}
export class Block implements IBlock, IGraphable {
	private _pattern: string;
	private parent: string;
	private content: any = {};
	public set pattern(value: string) {
		this._pattern = value;
	}
	private _range: number[] = [null, null];
	public get range(): number[] {
		return this._range;
	}
	public set range(value: number[]) {
		this._range = value;
	}
	setLeftRange(value: number): void {
		this._range[0] = value;
	}
	setRightRange(value: number): void {
		this._range[1] = value;
	}
	clone(): Block {
		const block = new Block();
		block.pattern = this._pattern;
		block.range = [...this._range];
		return block;
	}
	generate() {
		return {};
	}
}

// export class FormatString {
// 	private s: string;
// 	private chars: string[];
// 	private response: { [key: string]: string } = {};
// 	constructor(s: string) {
// 		this.s = s;
// 	}
// 	private removeFirstLastBraces() {
// 		this.s = this.s.substring(1);
// 		this.s = this.s.substring(0, this.s.length - 1);
// 	}
// 	private splitInPairs() {
// 		return this.s.split(",");
// 	}
// 	private addResponse(key: string, value: string) {
// 		this.response[key] = value;
// 	}
// 	format(): any {
// 		this.removeFirstLastBraces();
// 		const pairs = this.splitInPairs();
// 		pairs.map((pair: string) => {
// 			const keyValue = pair.split(":");
// 			this.addResponse(keyValue[0], keyValue[1]);
// 		});
// 		return this.response;
// 	}
// 	getResponse() {
// 		return this.response;
// 	}
// }
