import { expect, assert } from "chai";
import { StaticValue } from "./value";
import { IElement } from "./element";
import {
	StaticGenerator,
	StringGenerator,
	NumberGenerator,
	BooleanGenerator,
} from "./value";
describe("ValueGenerator", () => {
	it("should generate corresponding value type", () => {
		const generator = new StringGenerator();
		generator.setNext(new NumberGenerator());
		generator.setNext(new BooleanGenerator());
		generator.setNext(new StaticGenerator());
		expect(generator.get("jhon")).eq("jhon");
		expect(generator.get("PROC112")).eq("PROC112");
		assert.isString(generator.get("string"));
		assert.isBoolean(generator.get("boolean"));
		assert.isNumber(generator.get("number"));
		expect(generator.get("EE001-R1")).eq("EE001-R1");
	});
});
describe("Element", () => {
	it("StaticElement: should return passed value", () => {
		let i: IElement;
		i = new StaticValue("samsung");
		assert.equal(i.generate(), "samsung");

		i = new StaticValue(2223);
		assert.equal(i.generate(), 2223);

		i = new StaticValue(true);
		assert.equal(i.generate(), true);

		i = new StaticValue("EE001-R1");
		assert.equal(i.generate(), "EE001-R1");

		i = new StaticValue(565);
		assert.equal(i.generate(), 565);

		i = new StaticValue(null);
		assert.equal(i.generate(), null);

		i = new StaticValue("null");
		assert.equal(i.generate(), "null");

		i = new StaticValue("");
		assert.equal(i.generate(), "");
	});
});
