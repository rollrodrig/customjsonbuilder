import CustomJsonBuilder from './builder'
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
}`
const response = CustomJsonBuilder.build(input)
console.log(response)
