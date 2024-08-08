import { StaticValue } from './value'
import { IElement } from './element'
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
  PasswordGenerator,
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
  // Date
  DateGenerator,
  //
  ValueGeneratorFactory,
} from './value'
describe('ValueGenerator', () => {
  it('should generate corresponding value type', () => {
    // primitives
    const generator = new StringGenerator()
    generator.setNext(new NumberGenerator())
    generator.setNext(new BooleanGenerator())
    // static
    generator.setNext(new NullGenerator())
    generator.setNext(new UndefinedGenerator())
    generator.setNext(new TrueGenerator())
    generator.setNext(new FalseGenerator())
    generator.setNext(new EmptyGenerator())
    // person
    generator.setNext(new NameGenerator())
    generator.setNext(new FirstNameGenerator())
    generator.setNext(new LastNameGenerator())
    generator.setNext(new AgeGenerator())
    generator.setNext(new Age18Generator())
    generator.setNext(new AgeKidGenerator())
    // internet
    generator.setNext(new UserNameGenerator())
    generator.setNext(new EmailGenerator())
    generator.setNext(new PasswordGenerator())
    // random
    generator.setNext(new UuidGenerator())
    // image
    generator.setNext(new ImageGenerator())
    // text
    generator.setNext(new TitleGenerator())
    generator.setNext(new TextGenerator())
    generator.setNext(new WordGenerator())
    generator.setNext(new WordsGenerator())
    generator.setNext(new ParagraphGenerator())
    generator.setNext(new ParagraphsGenerator())
    // static fixed
    generator.setNext(new StaticGenerator())
    // test
    // static
    expect(generator.get('jhon')).toBe('jhon')
    expect(generator.get('PROC112')).toBe('PROC112')
    expect(generator.get('null')).toBe(null)
    expect(generator.get('undefined')).toBe(undefined)
    // primitives
    expect(typeof generator.get('string')).toBe('string')
    expect(typeof generator.get('boolean')).toBe('boolean')
    expect(typeof generator.get('number')).toBe('number')
    // person
    expect(typeof generator.get('name')).toBe('string')
    expect(typeof generator.get('firstname')).toBe('string')
    expect(typeof generator.get('lastname')).toBe('string')
    expect(typeof generator.get('age')).toBe('number')
    expect(typeof generator.get('age18')).toBe('number')
    expect(generator.get('age18')).toBeGreaterThanOrEqual(18)
    expect(typeof generator.get('agekid')).toBe('number')
    expect(generator.get('agekid')).toBeLessThanOrEqual(18)
    // internet
    expect(generator.get('email').search('@')).toBeGreaterThan(1)
    expect(typeof generator.get('username')).toBe('string')
    expect(typeof generator.get('password')).toBe('string')
    // random
    expect(typeof generator.get('uuid')).toBe('string')
    // image
    // expect(typeof generator.get('image')).toBe('string')
    // text
    expect(typeof generator.get('title')).toBe('string')
    expect(typeof generator.get('text')).toBe('string')
    expect(typeof generator.get('word')).toBe('string')
    expect(typeof generator.get('words')).toBe('string')
    expect(typeof generator.get('paragraph')).toBe('string')
    expect(typeof generator.get('paragraphs')).toBe('string')
    // fixed static
    expect(generator.get('EE001-R1')).toBe('EE001-R1')
  })
  it('should generate Date', () => {
    const generator = new DateGenerator()
    // expect(generator.get('date')).toBeInstanceOf(String)
  })
  it('should generate from factory', () => {
    const generator = new ValueGeneratorFactory()
    expect(generator.get('jhon')).toBe('jhon')
    expect(generator.get('PROC112')).toBe('PROC112')
    expect(typeof generator.get('string')).toBe('string')
    expect(typeof generator.get('boolean')).toBe('boolean')
    expect(typeof generator.get('number')).toBe('number')
    expect(generator.get('null')).toBeNull()
    expect(generator.get('undefined')).toBeUndefined()
    expect(typeof generator.get('firstname')).toBe('string')
    expect(typeof generator.get('lastname')).toBe('string')
    expect(typeof generator.get('name')).toBe('string')
    expect(generator.get('email').search('@')).toBeGreaterThan(1)
    expect(typeof generator.get('uuid')).toBe('string')
    // expect(typeof generator.get('image')).toBe('string')
    expect(generator.get('EE001-R1')).toBe('EE001-R1')
  })
})

describe('Element', () => {
  it('StaticElement: should return passed value', () => {
    let i: IElement
    i = new StaticValue('samsung')
    expect(i.generate()).toBe('samsung')

    i = new StaticValue(2223)
    expect(i.generate()).toBe(2223)

    i = new StaticValue(true)
    expect(i.generate()).toBe(true)

    i = new StaticValue('EE001-R1')
    expect(i.generate()).toBe('EE001-R1')

    i = new StaticValue(565)
    expect(i.generate()).toBe(565)

    i = new StaticValue(null)
    expect(i.generate()).toBeNull()

    i = new StaticValue('null')
    expect(i.generate()).toBe('null')

    i = new StaticValue('')
    expect(i.generate()).toBe('')
  })
})
