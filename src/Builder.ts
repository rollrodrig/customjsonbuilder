import Cleaner from './cleaner/cleaner';
import Validator from './validator/validator';
import Generator from './generator/generator';

class Builder {
    cleaner: Cleaner;
    validator: Validator;
    generator: Generator;
    constructor() {
        this.cleaner = new Cleaner();
    }
    run(pattern: string): any {
        pattern = this.cleaner.run(pattern);
        return {
            name: "roll",
            email: "roll@codemente.com"
        }
    }
}
export default Builder;
