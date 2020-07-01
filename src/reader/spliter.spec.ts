import { expect, assert } from "chai";
import { spy } from "sinon";
import { SpliterStrategy, ICallable } from "./spliter";
export class FakeClient implements ICallable {
	private _spliter: SpliterStrategy;
	public set spliter(value: SpliterStrategy) {
		this._spliter = value;
		this._spliter.client = this;
		this._spliter.pattern = this._pattern;
	}
	private _pattern: string;
	public set pattern(value: string) {
		this._pattern = value;
	}
	private _splits: any[] = [];
	public get splits(): any[] {
		return this._splits;
	}
	private _done = false;
	notify(data: any): void {
		this._splits.push(data);
	}
	done(): void {
		this._done = true;
	}
	isDone(): boolean {
		return this._done;
	}
	run() {
		this._spliter.run();
	}
}
describe("Spliter: ", () => {
	it("should return array with one item", () => {
		const r = new FakeClient();
		r.pattern = "{name:string,age:string}";
		r.spliter = new SpliterStrategy();
		r.run();
		// expect(r.splits).to.deep.eq([{ left: 0, right: 23 }]);
	});
	it("should create four sub items", () => {
		const s =
			"{name:string,age:{year:string,day:{utc:string}},data:{code:string,access:boolean}}";
		const r = new FakeClient();
		r.pattern = s;
		r.spliter = new SpliterStrategy();
		r.run();
		const expected: any = [
			{ left: 34, right: 45 },
			{ left: 17, right: 46 },
			{ left: 53, right: 80 },
			{ left: 0, right: 81 },
		];
		expect(r.splits).to.deep.eq(expected);
		assert.isTrue(r.isDone());
	});
});
