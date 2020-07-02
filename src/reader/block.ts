import { interfaces } from "mocha";
import { Dict } from "../generator/dict";
import { List } from "../generator/list";
import { StaticValue, NameValue, StringValue } from "../generator/value";
import { throws } from "assert";
import { IGraphable } from "./graph";
export interface IBlock {
	// _pattern: string;
	// parent: string;
	// content: any;
	// generate(): any;
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
