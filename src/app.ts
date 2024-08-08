import express from 'express'
import dotenv from 'dotenv'
import CustomJsonBuilder from './builder'

dotenv.config()

const app = express()
const port = process.env.PORT || 3300

app.use(function (req: any, res: any, next: any) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE',
  )
  res.setHeader('Access-Control-Allow-Headers', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Content-Type', 'application/json')
  next()
})

app.all('/:pattern?', (req: any, res: any) => {
  const pattern = req.params.pattern

  if (pattern) {
    console.log(pattern)
    const response = CustomJsonBuilder.build(pattern)
    res.json(response)
  } else {
    res.end(
      'Try this example\n\nhttp://localhost:' +
        port +
        '/{user:number,posts:{id:uuid,title:string,$times:3}}',
    )
  }
})

app.listen(port, () => {
  console.log(`App running at on http://localhost:${port}`)
})
