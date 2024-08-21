import { scan } from './index'

describe('Scanner', () => {
  it('Should return the json ', () => {
    let p = '{name:string,address:{street:string,_times:3}}'
    // p = '{name:string,address:{street:string,_times:3},email:string}'
    p = '{name:string,address:{street:string,_times:3},email:string}'
    // p = '{a:{b:{c:{x:{y:{z:string,_times:3}}}}}}'
    const obj = scan(p)
    console.log(JSON.stringify(obj, null, 2))
  })
})
