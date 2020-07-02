import { OPTION_TIME } from "../utils/constant";
export interface TResponseDict {
	[key: string]: string;
}
export abstract class Response {
	protected pattern: string;
	constructor(pattern: string) {
		this.pattern = pattern;
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
		tmp[keyValue[0]] = keyValue[1];
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
		if (keyValue[0] !== this.TIMES) {
			tmp[keyValue[0]] = keyValue[1];
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
	private _response: TResponseDict | TResponseDict[];
	public get response(): TResponseDict | TResponseDict[] {
		return this._response;
	}
	constructor(pattern: string) {
		this._pattern = pattern;
	}
	private shouldBeList(): boolean {
		return this._pattern.search(`\\${OPTION_TIME}`) > -1;
	}
	generate(): TResponseDict | TResponseDict[] {
		let formater: Response;
		if (this.shouldBeList()) {
			formater = new ResponseList(this._pattern);
		} else {
			formater = new ResponseDict(this._pattern);
		}
		this._response = formater.generate();
		return this._response;
	}
}
