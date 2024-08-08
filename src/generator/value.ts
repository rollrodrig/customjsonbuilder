import { faker } from '@faker-js/faker'
import * as moment from 'moment'
import { IElement } from './element'
import { randomString, randomNumber } from '../utils/utils'
export interface IValueGenerator {
  get(value: string): any
  setNext(next: IValueGenerator): void
}
export abstract class BaseGenerator implements IValueGenerator {
  next: IValueGenerator | any
  type = 'static'
  value: string | any
  protected abstract generate(): any
  get(value: string) {
    this.value = value

    if (this.value === this.type) {
      return this.generate()
    } else {
      return this.next.get(this.value)
    }
  }
  setNext(next: IValueGenerator): void {
    if (this.next) {
      this.next.setNext(next)
    } else {
      this.next = next
    }
  }
}
// primitives
export class StringGenerator extends BaseGenerator {
  type = 'string'
  protected generate() {
    return randomString()
  }
}
export class NumberGenerator extends BaseGenerator {
  type = 'number'
  protected generate() {
    return faker.number.int()
  }
}
export class BooleanGenerator extends BaseGenerator {
  type = 'boolean'
  protected generate() {
    return Math.random() > 0.5 ? true : false
  }
}
// static
export class StaticGenerator extends BaseGenerator {
  protected generate() {
    return this.value
  }
  get(value: string) {
    this.value = value

    return this.generate()
  }
}
export class NullGenerator extends BaseGenerator {
  type = 'null'
  protected generate(): any {
    return null
  }
}
export class UndefinedGenerator extends BaseGenerator {
  type = 'undefined'
  protected generate(): any {
    return undefined
  }
}
export class TrueGenerator extends BaseGenerator {
  type = 'true'
  protected generate(): any {
    return true
  }
}
export class FalseGenerator extends BaseGenerator {
  type = 'false'
  protected generate(): any {
    return false
  }
}
export class EmptyGenerator extends BaseGenerator {
  type = 'empty'
  protected generate(): any {
    return ''
  }
}
// person
export class NameGenerator extends BaseGenerator {
  type = 'name'
  protected generate() {
    return faker.person.fullName()
  }
}
export class FirstNameGenerator extends BaseGenerator {
  type = 'firstname'
  protected generate() {
    return faker.person.firstName()
  }
}
export class LastNameGenerator extends BaseGenerator {
  type = 'lastname'
  protected generate() {
    return faker.person.lastName()
  }
}
export class AgeGenerator extends BaseGenerator {
  type = 'age'
  protected generate() {
    return randomNumber(1, 99)
  }
}
export class Age18Generator extends BaseGenerator {
  type = 'age18'
  protected generate() {
    return randomNumber(18, 99)
  }
}
export class AgeKidGenerator extends BaseGenerator {
  type = 'agekid'
  protected generate() {
    return randomNumber(1, 18)
  }
}
// internet
export class EmailGenerator extends BaseGenerator {
  type = 'email'
  protected generate() {
    return faker.internet.email()
  }
}
export class UserNameGenerator extends BaseGenerator {
  type = 'username'
  protected generate() {
    return faker.internet.userName()
  }
}
export class PasswordGenerator extends BaseGenerator {
  type = 'password'
  protected generate() {
    return faker.internet.password()
  }
}
// random
export class UuidGenerator extends BaseGenerator {
  type = 'uuid'
  protected generate() {
    return faker.string.uuid()
  }
}
// image
export class ImageGenerator extends BaseGenerator {
  type = 'image'
  protected generate() {
    return faker.image
  }
}
// text
export class TitleGenerator extends BaseGenerator {
  type = 'title'
  protected generate() {
    return faker.lorem.sentence()
  }
}
export class TextGenerator extends BaseGenerator {
  type = 'text'
  protected generate() {
    return faker.lorem.text()
  }
}
export class WordGenerator extends BaseGenerator {
  type = 'word'
  protected generate() {
    return faker.lorem.word()
  }
}
export class WordsGenerator extends BaseGenerator {
  type = 'words'
  protected generate() {
    return faker.lorem.words()
  }
}
export class ParagraphGenerator extends BaseGenerator {
  type = 'paragraph'
  protected generate() {
    return faker.lorem.paragraph()
  }
}
export class ParagraphsGenerator extends BaseGenerator {
  type = 'paragraphs'
  protected generate() {
    return faker.lorem.paragraphs()
  }
}
// Date
export class DateGenerator extends BaseGenerator {
  type = 'date'
  protected generate() {
    return faker.date.recent()
  }
}
export class ValueGeneratorFactory implements IValueGenerator {
  generator: IValueGenerator
  constructor() {
    // primitives
    this.generator = new StringGenerator()
    this.generator.setNext(new NumberGenerator())
    this.generator.setNext(new BooleanGenerator())
    // static
    this.generator.setNext(new NullGenerator())
    this.generator.setNext(new UndefinedGenerator())
    this.generator.setNext(new TrueGenerator())
    this.generator.setNext(new FalseGenerator())
    this.generator.setNext(new EmptyGenerator())
    // person
    this.generator.setNext(new NameGenerator())
    this.generator.setNext(new FirstNameGenerator())
    this.generator.setNext(new LastNameGenerator())
    this.generator.setNext(new AgeGenerator())
    this.generator.setNext(new Age18Generator())
    this.generator.setNext(new AgeKidGenerator())
    // internet
    this.generator.setNext(new EmailGenerator())
    this.generator.setNext(new UserNameGenerator())
    this.generator.setNext(new PasswordGenerator())
    // random
    this.generator.setNext(new UuidGenerator())
    // image
    this.generator.setNext(new ImageGenerator())
    // text
    this.generator.setNext(new TitleGenerator())
    this.generator.setNext(new TextGenerator())
    this.generator.setNext(new WordGenerator())
    this.generator.setNext(new WordsGenerator())
    this.generator.setNext(new ParagraphGenerator())
    this.generator.setNext(new ParagraphsGenerator())
    // date
    this.generator.setNext(new DateGenerator())
    // static fixed
    this.generator.setNext(new StaticGenerator())
  }
  setNext(): void {}
  get(value: string) {
    return this.generator.get(value)
  }
}
// TODO, remove this
export class StaticValue<T> implements IElement {
  value: T
  constructor(value: T) {
    this.value = value
  }
  generate(): T {
    return this.value
  }
}
export class StringValue implements IElement {
  generate(): string {
    return 'RgerGERrrJR'
  }
}
export class NameValue implements IElement {
  generate(): string {
    return faker.person.firstName()
  }
}
export class EmailValue implements IElement {
  generate(): string {
    return faker.internet.email()
  }
}
