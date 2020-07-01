import { expect, assert } from "chai";
import { spy } from "sinon";
import { SpliterStrategy, ISplitble } from "./spliter";
export class FakeClient implements ISplitble {
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
	vertexs: any[] = [];
	connections: any[] = [];
	addVertex(stack: number[]): void {
		this.vertexs.push({ stack: stack });
	}
	addConnection(left: number, right: number, stack: number[]): void {
		this.connections.push({ left, right, stack: stack });
	}
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
		const fakeClient = new FakeClient();
		fakeClient.pattern = "{name:string,age:string}";
		fakeClient.spliter = new SpliterStrategy();
		fakeClient.run();
		expect(fakeClient.vertexs).to.deep.eq([{ stack: [] }]);
		expect(fakeClient.connections).to.deep.eq([
			{ left: 0, right: 23, stack: [] },
		]);
		assert.isTrue(fakeClient.isDone());
	});
	it("should create four sub items", () => {
		const s =
			"{name:string,age:{year:string,day:{utc:string}},data:{code:string,access:boolean}}";
		const fakeClient = new FakeClient();
		fakeClient.pattern = s;
		fakeClient.spliter = new SpliterStrategy();
		fakeClient.run();
		const expectedA: any = [
			{ stack: [] },
			{ stack: [] },
			{ stack: [] },
			{ stack: [] },
		];
		const expectedB: any = [
			{ left: 34, right: 45, stack: [] },
			{ left: 17, right: 46, stack: [] },
			{ left: 53, right: 80, stack: [] },
			{ left: 0, right: 81, stack: [] },
		];
		expect(fakeClient.vertexs).to.deep.eq(expectedA);
		expect(fakeClient.connections).to.deep.eq(expectedB);
		assert.isTrue(fakeClient.isDone());
	});
});
