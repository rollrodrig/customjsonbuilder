import { Cleaner } from './cleaner/cleaner'
import { Validator } from './validator/validator'
import { Generator } from './generator/generator'
import { Reader } from './reader/reader'

export default class CustomJsonBuilder {
  static build(pattern: string): any {
    const cleaner = new Cleaner()
    pattern = cleaner.run(pattern)
    const validator = new Validator()
    const validPattern = validator.run(pattern)

    if (validPattern) {
      const reader = new Reader(pattern)
      const generator = new Generator(reader.scan())
      const output = generator.generate()

      return output
    } else {
      return Error.missingBrances()
    }
  }
}
export class Error {
  static missingBrances() {
    return {
      error: 'There is one missing ] or [ or } or {',
    }
  }
}
