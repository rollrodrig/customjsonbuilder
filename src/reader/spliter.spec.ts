import { expect, assert } from "chai";
import { SpliterStrategy, ICallable } from "./spliter";
export class FakeClient implements ICallable {
	spliter: SpliterStrategy;
	s: string;
	splits: any[] = [];
	setSpliter(spliter: SpliterStrategy) {
		this.spliter = spliter;
		this.spliter.setClient(this);
		this.spliter.setString(this.s);
	}
	notify(data: any): void {
		this.splits.push(data);
	}
	run() {
		this.spliter.run();
	}
}
describe("Spliter: ", () => {
	it("should return array with one item", () => {
		const r = new FakeClient();
		r.s = "{name:string,age:string}";
		r.setSpliter(new SpliterStrategy());
		r.run();
		expect(r.splits).to.deep.eq([{ left: 0, right: 23 }]);
	});

	it("should create four sub items", () => {
		const s =
			"{name:string,age:{year:string,day:{utc:string}},data:{code:string,access:boolean}}";
		const r = new FakeClient();
		r.s = s;
		r.setSpliter(new SpliterStrategy());
		r.run();
		const expected: any = [
			{ left: 34, right: 45 },
			{ left: 17, right: 46 },
			{ left: 53, right: 80 },
			{ left: 0, right: 81 },
		];
		expect(r.splits).to.deep.eq(expected);
	});
});
