import { scan } from './scanner'

describe('Scanner', () => {
  it('should return the json ', () => {
    let p = '{name:string,address:{street:string,_times:3}}'
    p = '{name:string,address:{street:string,_times:3},email:string}'
    p = '{a:{b:{c:{x:{y:{z:string,_times:3}}}}}}'
    const obj = scan(p)
    console.log(JSON.stringify(obj, null, 2))

    // if (key === '_times') {
    //   const times = parseInt(value as string)
    //   const tmpArray: any[] = []
    //   for (let i = 0; i < times; i++) {
    //     const partialObj = loopObject(obj)
    //     tmpArray.push(partialObj)
    //   }
    //   obj[key] = tmpArray
    // } else {
    //   if (typeof value === 'object') {
    //     loopObject(value)
    //   } else {
    //     console.log(key, value)
    //     obj[key] = generateNewValue(value as any)
    //   }
    // }
    // const tObj: { [key: string]: any } = { a: 'string', b: 'number' }
    // const newObj: { [key: string]: any } = {}
    // Object.entries(tObj).forEach(([key, value]) => {
    //   console.log(key, value)
    //   tObj[key] = generateNewValue(value)
    // })
    // console.log(tObj)
    // console.log(newObj)
    // const x = { a: 's', b: { m: 's' }, c: 's' }
    // const m = JSON.stringify(x)
    // console.log(m)
    // const d = JSON.parse('{"a":"s","b":{"m":"s", "$times":"3"},"c":"s"}')
    // console.log(d)
    // pattern = '{a:{b:{c:{x{y:{z:s}}}}}}'
    // pattern = '{a:s,b:{m:s},c:s,x:{y:s}}'
    // const scanner = new Scanner(pattern)
    // scanner.scan()
    // console.log(scanner.list)
  })
})

/*
{a:str,b:{m:str,n:str},c:str}
{a:str,b:abc,c:str}

*/
