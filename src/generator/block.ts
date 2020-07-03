import { interfaces } from "mocha";
import { Dict } from "./dict";
import { List } from "./list";
import { StaticValue, NameValue, StringValue } from "./value";
import { throws } from "assert";
import { IGraphable } from "../reader/graph";
import { FormatString } from "./format-string";
export interface IBlock {
	// _pattern: string;
	// parent: string;
	// content: any;
	// generate(): any;
}
export class Block implements IBlock, IGraphable {
	private _lockedPattern: string;
	public get lockedPattern(): string {
		return this._lockedPattern;
	}
	private parent: string;
	private content: any = {};
	private fomater: FormatString;
	public leftLimit: number;
	public rightLimit: number;
	private _pattern: string;
	public set pattern(pattern: string) {
		this._pattern = pattern;
	}
	private _range: number[] = [null, null];
	public get range(): number[] {
		return this._range;
	}
	public set range(value: number[]) {
		this._range = value;
		this.leftLimit = value[0];
		this.rightLimit = value[1];
	}
	constructor(pattern?: string, left?: number, right?: number) {
		this._pattern = pattern || "";
		this.leftLimit = left;
		this.rightLimit = right;
		this._range = [left, right];
		this.fomater = new FormatString(this.pattern);
	}
	private saveOriginalLocalPattern(): void {
		this._lockedPattern = this._pattern;
	}
	cutItsLocalPattern(): string {
		this._pattern = this._pattern.substring(
			this._range[0],
			this._range[1] + 1
		);
		this.saveOriginalLocalPattern();
		return this._pattern;
	}
	replaceSubPatterns(subpattern: string, vertex: string): string {
		this._pattern = this._pattern.replace(subpattern, vertex);
		return this._pattern;
	}
	setLeftRange(value: number): void {
		this._range[0] = value;
		this.leftLimit = value;
	}
	setRightRange(value: number): void {
		this._range[1] = value;
		this.rightLimit = value;
	}
	clone(): Block {
		const block = new Block();
		block.pattern = this._pattern;
		block.range = [...this._range];
		return block;
	}
	generate() {
		this.fomater.pattern = this._pattern;
		const content = this.fomater.generate();
		return content;
	}
}
