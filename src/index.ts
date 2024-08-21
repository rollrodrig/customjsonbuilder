import { faker } from '@faker-js/faker'

const TIMES = '_times'

const cleaner = (pattern: string) => {
  pattern = pattern.replace(/\t*\s*/g, '')
  pattern = pattern.replace(/,}/g, '}')
  return pattern
}
const validator = (pattern: string) => {
  const numberOfLeftBraces = (pattern.match(/{/g) || []).length
  const numberOfRightBraces = (pattern.match(/}/g) || []).length
  return numberOfLeftBraces === numberOfRightBraces
}
const parsePattern = (pattern: string) => {
  pattern = pattern.replace(/(\w+):(\w+)/g, '"$1":"$2"')
  pattern = pattern.replace(/(\w+):{/g, '"$1":{')
  const obj = JSON.parse(pattern)
  return obj
}
const valueParser = (value: string) => {
  let newValue
  switch (value) {
    case 'string':
      newValue = faker.string.alpha(15)
      break
    case 'number':
      newValue = faker.number.int()
      break
  }
  return newValue
}
const generator = (obj: { [key: string]: any }) => {
  const timesKey = Object.keys(obj).find((key) => key === TIMES)
  if (timesKey) {
    const times = parseInt(obj._times as string)
    const tmpArrObjs: any[] = []
    delete obj[TIMES]
    for (let i = 0; i < times; i++) {
      tmpArrObjs.push(generator({ ...obj }))
    }
    return tmpArrObjs
  } else {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        obj[key] = generator({ ...value })
      } else {
        obj[key] = valueParser(value)
      }
    })
    return obj
  }
}

export const scan = (pattern: string) => {
  const isValid = validator(pattern)
  if (!isValid) {
    throw new Error('Invalid pattern')
  }
  const cleanedPattern = cleaner(pattern)
  const obj = parsePattern(cleanedPattern)
  const newObj = generator(obj)
  return newObj
}
