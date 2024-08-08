import CustomJsonBuilder from './builder'
import { Error } from './builder'
describe('CustomJsonBuilder', () => {
  it('should return the json ', () => {
    const input = `
			{
				name: firstname,
				age: number,
			}
		`
    const res = CustomJsonBuilder.build(input)
    expect(typeof res.name).toBe('string')
    expect(typeof res.age).toBe('number')
  })
  it('should return an error message ', () => {
    const input = `
  		{
  			name: firstname,
  			age: number
  	`
    const res = CustomJsonBuilder.build(input)
    expect(res).toEqual({
      error: 'There is one missing ] or [ or } or {',
    })
  })
  it('should return nested object', () => {
    const input = `
  		{
  			name:string,
  			age:{
  				year:number
  			},
  			id:{
  				main:number,
  				second:number
  			}
  		}
      `
    const res = CustomJsonBuilder.build(input)
    console.log(res)
    // expect(typeof res.name).toBe('string')
    // expect(typeof res.age).toBe('object')
    // expect(typeof res.age.year).toBe('number')
    // expect(typeof res.id).toBe('object')
    // expect(typeof res.id.main).toBe('number')
    // expect(typeof res.id.second).toBe('number')
  })
  // it('should return nested array', () => {
  //   const input = `
  // 		{
  // 			user:name,
  // 			posts:{
  // 				id:number,
  // 				title:string,
  // 				$times:3
  // 			}
  // 		}
  // 	`
  //   const res = CustomJsonBuilder.build(input)
  //   expect(typeof res.user).toBe('string')
  //   expect(typeof res.posts).toBe('object')
  //   expect(res.posts.length).toBe(3)
  // })
  // it('should return array', () => {
  //   const input = `
  // 		{
  // 			id:number,
  // 			name:firstname,
  // 			$times:3
  // 		}
  // 	`
  //   const res = CustomJsonBuilder.build(input)
  //   expect(res).toBeInstanceOf(Array)
  //   expect(res.length).toBe(3)
  //   expect(typeof res[0].id).toBe('number')
  //   expect(typeof res[0].name).toBe('string')
  // })
  // it('should super deep nested object', () => {
  //   const pattern = `
  // 		{
  // 			a1:{
  // 				a2:{
  // 					a3:{
  // 						a4:{
  // 							a5:{
  // 								a6:number
  // 							}
  // 						}
  // 					}
  // 				}
  // 			}
  // 		}
  // 	`
  //   const res = CustomJsonBuilder.build(pattern)
  //   expect(typeof res).toBe('object')
  //   expect(typeof res.a1).toBe('object')
  //   expect(typeof res.a1.a2).toBe('object')
  //   expect(typeof res.a1.a2.a3).toBe('object')
  //   expect(typeof res.a1.a2.a3.a4).toBe('object')
  //   expect(typeof res.a1.a2.a3.a4.a5).toBe('object')
  //   expect(typeof res.a1.a2.a3.a4.a5.a6).toBe('number')
  // })
  // it('shoudl generate nested array wit nested object', () => {
  //   const pattern = `
  // 		{
  // 			user: word,
  // 			posts:{
  // 				id:number,
  // 				comments:{
  // 					id: number,
  // 					content: word,
  // 					$times: 2,
  // 				},
  // 				$times: 3,
  // 			}
  // 		}
  // 	`
  //   const res = CustomJsonBuilder.build(pattern)
  //   console.log(res)
  //   expect(typeof res.posts).toBe('object')
  //   expect(typeof res.posts[0]).toBe('object')
  //   expect(typeof res.posts[0].comments).toBe('object')
  //   expect(typeof res.posts[0].comments[0]).toBe('object')
  // })
  // it('nice example 1', () => {
  //   const pattern = `
  // 		{
  // 			name:string,
  // 			age:{
  // 				year:number,
  // 				city:{
  // 					place:string,
  // 				}
  // 			}
  // 		}
  // 	`
  //   const res = CustomJsonBuilder.build(pattern)
  //   // expect(typeof res.name).toBe('string')
  //   // expect(typeof res.age.year).toBe('number')
  //   // expect(typeof res.age.city).toBe('object')
  //   // expect(typeof res.age.city.place).toBe('string')
  // })
})
// describe('Many test examples', () => {
//   it('shuld return date', () => {
//     const pattern = `
// 			{
// 				name:name,
// 				password:password,
// 				date:date,
// 			}
// 		`
//     const res = CustomJsonBuilder.build(pattern)
//     expect(typeof res.name).toBe('string')
//     expect(typeof res.password).toBe('string')
//     expect(typeof res.date).toBe('object')
//     expect(res.password).not.toEqual('password')
//     expect(res.date).not.toEqual('date')
//   })
// })
// describe('Error: ', () => {
//   it('.missingBrances: should print error braquest message', () => {
//     const expected = {
//       error: 'There is one missing ] or [ or } or {',
//     }
//     expect(Error.missingBrances()).toEqual(expected)
//   })
// })
