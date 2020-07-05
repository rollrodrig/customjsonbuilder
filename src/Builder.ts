import Cleaner from "./cleaner/cleaner";
import Validator from "./validator/validator";
import { Generator } from "./generator/generator";
import { Reader } from "./reader/reader";
class Builder {
	cleaner: Cleaner;
	validator: Validator;
	reader: Reader;
	generator: Generator;
	constructor() {
		this.cleaner = new Cleaner();
		this.validator = new Validator();
	}
	run(pattern: string): any {
		pattern = this.cleaner.run(pattern);
		if (this.validator.run(pattern)) {
			this.reader = new Reader(pattern);
			this.generator = new Generator(this.reader.scan());
			return this.generator.generate();
		} else {
			return Error.missingBrances();
		}
	}
}
export default Builder;
export class Error {
	static missingBrances() {
		return {
			error: "There is one missing ] or [ or } or {",
		};
	}
}
