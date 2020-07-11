import { expect, assert } from "chai";
import { StaticValue } from "./value";
import { IElement } from "./element";
import {
	// primitives
	StringGenerator,
	NumberGenerator,
	BooleanGenerator,
	// static
	NullGenerator,
	UndefinedGenerator,
	StaticGenerator,
	TrueGenerator,
	FalseGenerator,
	EmptyGenerator,
	// person
	NameGenerator,
	FirstNameGenerator,
	LastNameGenerator,
	AgeGenerator,
	Age18Generator,
	AgeKidGenerator,
	// internet
	EmailGenerator,
	UserNameGenerator,
	// random
	UuidGenerator,
	// image
	ImageGenerator,
	// text
	TitleGenerator,
	TextGenerator,
	WordGenerator,
	WordsGenerator,
	ParagraphGenerator,
	ParagraphsGenerator,
	//
	ValueGeneratorFactory,
} from "./value";
describe("ValueGenerator", () => {
	it("should generate corresponding value type", () => {
		// primitives
		const generator = new StringGenerator();
		generator.setNext(new NumberGenerator());
		generator.setNext(new BooleanGenerator());
		// static
		generator.setNext(new NullGenerator());
		generator.setNext(new UndefinedGenerator());
		generator.setNext(new TrueGenerator());
		generator.setNext(new FalseGenerator());
		generator.setNext(new EmptyGenerator());
		// person
		generator.setNext(new NameGenerator());
		generator.setNext(new FirstNameGenerator());
		generator.setNext(new LastNameGenerator());
		generator.setNext(new AgeGenerator());
		generator.setNext(new Age18Generator());
		generator.setNext(new AgeKidGenerator());
		// internet
		generator.setNext(new UserNameGenerator());
		generator.setNext(new EmailGenerator());
		// random
		generator.setNext(new UuidGenerator());
		// image
		generator.setNext(new ImageGenerator());
		// text
		generator.setNext(new TitleGenerator());
		generator.setNext(new TextGenerator());
		generator.setNext(new WordGenerator());
		generator.setNext(new WordsGenerator());
		generator.setNext(new ParagraphGenerator());
		generator.setNext(new ParagraphsGenerator());
		// static fixed
		generator.setNext(new StaticGenerator());
		// test
		// static
		expect(generator.get("jhon")).eq("jhon");
		expect(generator.get("PROC112")).eq("PROC112");
		assert.isNull(generator.get("null"));
		assert.isUndefined(generator.get("undefined"));
		// primitives
		assert.isString(generator.get("string"));
		assert.isBoolean(generator.get("boolean"));
		assert.isNumber(generator.get("number"));
		// person
		assert.isString(generator.get("name"));
		assert.isString(generator.get("firstname"));
		assert.isString(generator.get("lastname"));
		assert.isNumber(generator.get("age"));
		assert.isNumber(generator.get("age18"));
		assert.isTrue(generator.get("age18") >= 18);
		assert.isNumber(generator.get("agekid"));
		assert.isTrue(generator.get("agekid") <= 18);
		// internet
		assert.isTrue(generator.get("email").search("@") > 1);
		assert.isString(generator.get("username"));
		// random
		assert.isString(generator.get("uuid"));
		// image
		assert.isString(generator.get("image"));
		// text
		assert.isString(generator.get("title"));
		assert.isString(generator.get("text"));
		assert.isString(generator.get("word"));
		assert.isString(generator.get("words"));
		assert.isString(generator.get("paragraph"));
		assert.isString(generator.get("paragraphs"));
		// fixed static
		expect(generator.get("EE001-R1")).eq("EE001-R1");
	});
	it("should generate from factory", () => {
		const generator = new ValueGeneratorFactory();
		expect(generator.get("jhon")).eq("jhon");
		expect(generator.get("PROC112")).eq("PROC112");
		assert.isString(generator.get("string"));
		assert.isBoolean(generator.get("boolean"));
		assert.isNumber(generator.get("number"));
		assert.isNull(generator.get("null"));
		assert.isUndefined(generator.get("undefined"));
		assert.isString(generator.get("firstname"));
		assert.isString(generator.get("lastname"));
		assert.isString(generator.get("name"));
		assert.isTrue(generator.get("email").search("@") > 1);
		assert.isString(generator.get("uuid"));
		assert.isString(generator.get("image"));
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
