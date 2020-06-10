import Cleaner from './cleaner/cleaner';
import Validator from './validator/validator';
import Generator from './generator/generator';

class Builder {
    cleaner: Cleaner;
    validator: Validator;
    generator: Generator;
    run(pattern: string): any {
        return {
            name: "roll",
            email: "roll@codemente.com"
        }
    }
}
export default Builder;
