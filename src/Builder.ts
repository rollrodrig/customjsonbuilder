import Cleaner from "./cleaner/cleaner";
import Validator from "./validator/validator";
import { Generator } from "./generator/generator";
import Error from "./error/error";
import { Reader } from "./reader/reader";

class Builder {
	cleaner: Cleaner;
	validator: Validator;
	reader: Reader;
	generator: Generator;
	constructor() {
		this.cleaner = new Cleaner();
		this.validator = new Validator();
		// this.reader = new Reader();
	}
	run(pattern: string): any {
		pattern = this.cleaner.run(pattern);
		if (this.validator.run(pattern)) {
			return {
				name: "roll",
				email: "roll@codemente.com",
			};
		} else {
			return Error.missingBrances();
		}
	}
}
export default Builder;
