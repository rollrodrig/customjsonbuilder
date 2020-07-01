import { expect, assert } from "chai";
import { Reader } from "./reader";
describe("Reader: ", () => {
	it(".run....", () => {
		const pattern = "{name:string,age:{year:number}}";
		const r = new Reader(pattern);
		r.run();
	});
});
