import { OPTION_TIME } from "../utils/constant";
import { DataStorage } from "./generator";
import { ValueGeneratorFactory } from "./value";
import { IValueGenerator } from "./value";
export interface TResponseDict {
	[key: string]: string;
}
export abstract class Response {
	protected pattern: string;
	protected valueGenerator: ValueGenerator;
	constructor(pattern: string) {
		this.pattern = pattern;
		this.valueGenerator = new ValueGenerator();
	}
	protected removeFirstLastBraces() {
		this.pattern = this.pattern.substring(1);
		this.pattern = this.pattern.substring(0, this.pattern.length - 1);
	}
	protected splitInPairs() {
		return this.pattern.split(",");
	}
	protected abstract addResponse(tmp: TResponseDict, pair: string): void;
	abstract generate(): TResponseDict | TResponseDict[];
}
export class ResponseDict extends Response {
	private _response: TResponseDict = {};
	public get response(): TResponseDict {
		return this._response;
	}
	protected addResponse(tmp: TResponseDict, pair: string): void {
		const keyValue = pair.split(":");
		const key = keyValue[0];
		const value = keyValue[1];
		tmp[key] = this.valueGenerator.generate(value);
	}
	generate(): TResponseDict {
		this.removeFirstLastBraces();
		const pairs = this.splitInPairs();
		const tmp: TResponseDict = {};
		pairs.map((pair: string) => {
			this.addResponse(tmp, pair);
		});
		this._response = tmp;
		return this._response;
	}
}
export class ResponseList extends Response {
	private _response: TResponseDict[] = [];
	public get response(): TResponseDict[] {
		return this._response;
	}
	private TIMES = OPTION_TIME;
	protected addResponse(tmp: TResponseDict, pair: string): void {
		const keyValue = pair.split(":");
		const key = keyValue[0];
		const value = keyValue[1];
		if (key !== this.TIMES) {
			tmp[key] = this.valueGenerator.generate(value);
		}
	}
	private getTimes(): number {
		const regex = new RegExp(`\\${this.TIMES}:([0-9]+)`);
		const matchs = this.pattern.match(regex);
		let times = 1;
		if (matchs) {
			times = parseInt(matchs[1]);
			if (times <= 0) times = 1;
		}
		return times;
	}
	generate(): TResponseDict[] {
		this.removeFirstLastBraces();
		const times = this.getTimes();
		const pairs = this.splitInPairs();
		for (let i = 0; i < times; i++) {
			const tmp: TResponseDict = {};
			pairs.map((pair: string) => {
				this.addResponse(tmp, pair);
			});
			this._response.push(tmp);
		}
		return this._response;
	}
}
export class FormatString {
	private _pattern: string;
	public set pattern(value: string) {
		this._pattern = value;
	}
	private _response: TResponseDict | TResponseDict[];
	public get response(): TResponseDict | TResponseDict[] {
		return this._response;
	}
	constructor(pattern: string) {
		this._pattern = pattern;
	}
	private isItList(): boolean {
		return this._pattern.search(`\\${OPTION_TIME}`) > -1;
	}
	generate(): TResponseDict | TResponseDict[] {
		let formater: Response;
		if (this.isItList()) {
			formater = new ResponseList(this._pattern);
		} else {
			formater = new ResponseDict(this._pattern);
		}
		this._response = formater.generate();
		return this._response;
	}
}
export const VAR_CHILD_IDENTIFIER = "___VAR___";
export class ValueGenerator {
	private value: string;
	private storage: DataStorage;
	private valueFactory: IValueGenerator;
	constructor() {
		this.storage = DataStorage.getInstance();
		this.valueFactory = new ValueGeneratorFactory();
	}
	private isChild(): boolean {
		return this.value.search(VAR_CHILD_IDENTIFIER) > -1;
	}
	private getStorageKey(): string {
		return this.value.replace(VAR_CHILD_IDENTIFIER, "");
	}
	private getFromStorage(storageKey: string): any {
		return this.storage.get(storageKey);
	}
	private getFromFactory(): any {
		return this.valueFactory.get(this.value);
	}
	private getContent(): any {
		let content: any;
		if (this.isChild()) {
			const storageKey: string = this.getStorageKey();
			content = this.getFromStorage(storageKey);
		} else {
			content = this.getFromFactory();
		}
		return content;
	}
	generate(value: string) {
		this.value = value;
		return this.getContent();
	}
}
