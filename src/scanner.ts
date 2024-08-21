import { faker } from '@faker-js/faker'
import { v4 as uuidv4 } from 'uuid'

const generateNewValue = (value: string) => {
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

const parsePattern = (pattern: string) => {
  pattern = pattern.replace(/(\w+):(\w+)/g, '"$1":"$2"')
  pattern = pattern.replace(/(\w+):{/g, '"$1":{')
  const obj = JSON.parse(pattern)
  console.log(obj)
  return obj
}

const loopObject = (obj: { [key: string]: any }) => {
  const timesKey = Object.keys(obj).find((key) => key === '_times')
  if (timesKey) {
    const times = parseInt(obj._times as string)
    const tmpArrObjs: any[] = []
    delete obj['_times']
    for (let i = 0; i < times; i++) {
      tmpArrObjs.push(loopObject({ ...obj }))
    }
    return tmpArrObjs
  } else {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        obj[key] = loopObject({ ...value })
      } else {
        obj[key] = generateNewValue(value)
      }
    })
    return obj
  }
}

export const scan = (pattern: string) => {
  const obj = parsePattern(pattern)
  const newObj = loopObject(obj)
  return newObj
}
