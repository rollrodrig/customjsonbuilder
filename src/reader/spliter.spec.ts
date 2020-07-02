import { expect, assert } from "chai";
import { spy } from "sinon";
import { SpliterStrategy, ISplitble } from "./spliter";
class FakeClient implements ISplitble {
	addVertex(left: number): void {}
	addConnection(right: number): void {}
	done(): void {}
}
describe("Spliter: ", () => {
	it("Should call addVertex and addConnnection once ", () => {
		const spy1 = spy(SpliterStrategy.prototype, <any>"addVertex");
		const spy2 = spy(SpliterStrategy.prototype, <any>"addConnection");
		const spliter = new SpliterStrategy();
		spliter.client = new FakeClient();
		spliter.pattern = "{name:string,age:string}";
		spliter.run();
		assert.ok(spy1.calledOnce);
		assert.ok(spy2.calledOnce);
		spy1.restore();
		spy2.restore();
	});
	it("should create four sub items", () => {
		const spy1 = spy(SpliterStrategy.prototype, <any>"addVertex");
		const spy2 = spy(SpliterStrategy.prototype, <any>"addConnection");
		const pattern =
			"{name:string,age:{year:string,day:{utc:string}},data:{code:string,access:boolean}}";
		const spliter = new SpliterStrategy();
		spliter.client = new FakeClient();
		spliter.pattern = pattern;
		spliter.run();
		assert.ok(spy1.calledBefore(spy2));
		expect(spy1.callCount).eq(4);
		expect(spy2.callCount).eq(4);
		spy1.restore();
		spy2.restore();
	});
});
