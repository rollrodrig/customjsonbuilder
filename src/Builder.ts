import { Cleaner } from "./cleaner/cleaner";
import { Validator } from "./validator/validator";
import { Generator } from "./generator/generator";
import { Reader } from "./reader/reader";
export default class CustomJsonBuilder {
	static build(pattern: string): any {
		const cleaner = new Cleaner();
		const validator = new Validator();
		pattern = cleaner.run(pattern);
		if (validator.run(pattern)) {
			const reader = new Reader(pattern);
			const generator = new Generator(reader.scan());
			return generator.generate();
		} else {
			return Error.missingBrances();
		}
	}
}
export class Error {
	static missingBrances() {
		return {
			error: "There is one missing ] or [ or } or {",
		};
	}
}
