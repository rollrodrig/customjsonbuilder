import { faker } from '@faker-js/faker'

const TIMES = '_times'

export const cleaner = (pattern: string) => {
  pattern = pattern.replace(/\t*\s*/g, '')
  pattern = pattern.replace(/,}/g, '}')
  return pattern
}
export const validator = (pattern: string) => {
  const numberOfLeftBraces = (pattern.match(/{/g) || []).length
  const numberOfRightBraces = (pattern.match(/}/g) || []).length
  return numberOfLeftBraces === numberOfRightBraces
}
export const parsePattern = (pattern: string) => {
  pattern = pattern.replace(/(\w+):(\w+)/g, '"$1":"$2"')
  pattern = pattern.replace(/(\w+):{/g, '"$1":{')
  const obj = JSON.parse(pattern)
  return obj
}
export const valueParser = (value: string) => {
  switch (value) {
    case 'string':
      return faker.string.alpha(15)
    case 'number':
      return faker.number.int()
    case 'boolean':
      return faker.datatype.boolean()
    case 'null':
      return null
    case 'undefined':
      return undefined
    case 'empty':
      return ''
    case 'true':
      return true
    case 'false':
      return false
    case 'name':
      return faker.person.fullName()
    case 'firstname':
      return faker.person.firstName()
    case 'lastname':
      return faker.person.lastName()
    case 'age':
      return faker.number.int({ min: 18, max: 90 })
    case 'age18':
      return faker.number.int({ min: 18, max: 90 })
    case 'agekid':
      return faker.number.int({ min: 1, max: 17 })
    case 'username':
      return faker.internet.userName()
    case 'email':
      return faker.internet.email()
    case 'password':
      return faker.internet.password()
    case 'uuid':
      return faker.string.uuid()
    case 'title':
      return faker.lorem.sentence()
    case 'text':
      return faker.lorem.paragraph()
    case 'word':
      return faker.lorem.word()
    case 'words':
      return faker.lorem.words()
    case 'paragraph':
      return faker.lorem.paragraph()
    case 'paragraphs':
      return faker.lorem.paragraphs()
    case 'date':
      return faker.date.recent().toISOString()
    default:
      return value
  }
}
export const generator = (obj: { [key: string]: any }) => {
  // specify the number of times the object should be generated
  // pattern {a:string, _times:2}
  // return [{a:'abc'},{a:'bcd'}]
  const timesKey = Object.keys(obj).find((key) => key === TIMES)
  if (timesKey) {
    // return an array of objects
    const times = parseInt(obj._times as string)
    const tmpArrObjs: any[] = []
    delete obj[TIMES]
    for (let i = 0; i < times; i++) {
      tmpArrObjs.push(generator({ ...obj }))
    }
    return tmpArrObjs
  } else {
    // return the object with the values parsed
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        // go deep if the value is an object
        obj[key] = generator({ ...value })
      } else {
        // if the value is not an object, parse it
        obj[key] = valueParser(value)
      }
    })
    // when array of values is needed
    // pattern {_:string, _times:3}
    // return ['a','b','c']
    if (Object.keys(obj).includes('_')) {
      return obj._
    }
    return obj
  }
}

export const CustomJsonBuilder = (pattern: string) => {
  const isValid = validator(pattern)
  if (!isValid) {
    throw new Error('Invalid pattern')
  }
  const cleanedPattern = cleaner(pattern)
  const obj = parsePattern(cleanedPattern)
  const newObj = generator(obj)
  return newObj
}
export default CustomJsonBuilder
