# Custom JSON builder (v2)

# Fake json responses with custom fields on the fly

## Example

A simple query like this

`[GET]` [https://customjsonbuilder.com/api/{name:string,email:email}](https://customjsonbuilder.com/api/{name:string,email:email})

will respond with json like:

```json
{
  "name": "Alexa",
  "email": "Champlin@gmail.com"
}
```

All the methods are supported in the same API: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`


# Pattern Guide

### Pattern

Example: `https://customjsonbuilder.com/api/<THE PATTERN GOES HERE>`

### key: value

It is like writing regular json

```
{THE_KEY_THAT_I_WANT : THE_DATA_TYPE}
```

### Simple example

I want an object with a key `name` and a random word as `value`

`{name: string}`

The server will respond with data like

```json
{
  "name": "vm2sgdbmf2e7mmbc8502w8q"
}
```

### Multiple values

Now I need a json response with `id`, `name` and `email`

`{id:number, name:string, email:email}`

The server will respond with data like

```json
{
  "id": 49994,
  "name": "Mission",
  "email": "Eula_Deckow@yahoo.com"
}
```

### Nested object

I want an object with a `userId`, a `name` and a nested object `contact` which contains `phone` and `email`.

The pattern should be:


`{userId: number, name: firstname, contact: {phone: number, email: email}}`


The server will respond with data like

```json
{
  "userId": 94781,
  "name": "Maria",
  "contact": {
    "phone": 88885,
    "email": "Eladio_Brown44@hotmail.com"
  }
}
```

### Doubly nested object

Lets try something more complex.
I want an object with `userId`, `name`, a nested object with `contact` that contains `phone` and `email` with nested content `personal_email` and `company_email`

`{userId: number, name: firstname, contact: {phone: number, email: {personal_email: email, company_email: email}}}`

(better visualization)
```
{
    userId: number,
    name: firstname,
    contact: {
        phone: number,
        email: {
            personal_email: email,
            company_email: email
        }
    }
}
```

The server will respond with data like

```json
{
  "userId": 7316,
  "name": "discrete",
  "contact": {
    "phone": 14357,
    "email": {
      "personal_email": "Rowena_Homenick@yahoo.com",
      "company_email": "Caesar52@hotmail.com"
    }
  }
}
```

### Array response

I want 3 `posts` with `id` and `title`

To get an array response just add key `_times:NUMBER`, were `number` is the number of elements that i want in the array.

`{posts: {id: number, title: string, _times: 3}}`

And the server will respond with data like

```json
{
  "posts": [
    {
      "id": 65450,
      "title": "vs4brxz5497yggxg80wvy"
    },
    {
      "id": 11251,
      "title": "v6tfhr591s3isajey067j3l"
    },
    {
      "id": 89704,
      "title": "vs3q84xh8nmdcp87w2c9ax8"
    }
  ]
}
```



### Examples

post title

```
{
    postTitle: title
}
```

will generate

```json
{
  "postTitle": "Rerum odio quam."
}
```

user email

```
{
    user_email: email
}
```

will generate

```json
{
  "user_email": "Heber1@hotmail.com"
}
```



## Data types

In the current version we support these data types:

- string
- number
- boolean
- null
- undefined
- empty (empty string "")
- true (always generate true)
- false (always generate false)
- name
- firstName
- lastName
- age (number between 1-99)
- age18 (number between 18-99)
- agekid (number between 1-18)
- username
- email
- password
- uuid
- title
- text
- word
- words
- paragraph
- paragraphs
- date



## NPM

Install via npm

```
npm install customjsonbuilder --save-dev
```


### React usage example using builder

```jsx
import customjsonbuilder from 'customjsonbuilder'

const pattern = `
    {
        posts: {
            title: string,
            _times: 3
        }
    }
`
const fakePosts = customjsonbuilder(pattern)
export function Posts() {
  const [posts] = useState(fakePosts.posts)
  return (
    <div>
      {posts.map((p) => (
        <div>{p.title}</div>
      ))}
    </div>
  )
}
```



### Node example

```javascript
// index.js
let customjsonbuilder = require('customjsonbuilder')
let fake = customjsonbuilder('{name:string}')
console.log(fake)
// run on terminal "node index.js"
```

### Express example

Create your own custom fake server and use customjsobuilder to generate fake data

```javascript
let express = require('express')
let app = express()
let customjsonbuilder = require('customjsonbuilder')
app.get('/posts', (req, res) => {
  let posts = `
        {
            posts: {
                id: number,
                title: string,
                _times: 3
            }
        }
    `
  let response = customjsonbuilder(posts)
  res.json(response)
})
app.listen('8200', '0.0.0.0')
console.log(`Running on http://0.0.0.0:8200`)
```



## Local Installation

Clone the project or download [the zip file](https://github.com/rollrodrig/jsonbuilder/archive/master.zip)

Go to the folder

```
cd customjsonbuilder
```

## Run fake api on Node

Install dependencies

```
npm install
```

Launch the server

```
npm start
// or with a custom port
PORT=4545 npm start
```

It will prompt

```
Running on http://0.0.0.0:6500
```

Open the browser and visit the link [http://0.0.0.0:6500](http://localhost:6500/)

Now query some fake data from your React, Angular, Vue or any external project.

`http://0.0.0.0:6500/{name:string,email:email}`


# Awesome examples

- Basic

```
{
    name: string
}
```

```json
{
  "name": "Ergonomic Concrete Pants"
}
```

- User information

```
{
    userId: number,
    username: username,
    name: firstname,
    email: email
}
```

```json
{
  "userId": 89330,
  "username": "Filomena_Bogisich",
  "name": "port",
  "email": "Valentin.Buckridge@hotmail.com"
}
```

- User last 3 posts

```
{
    data: {
        user_id: number,
        posts: {
            post_id: number,
            title: title,
            post_resume: paragraph,
            views_number: number,
            comments_number: number,
            _times: 3
        }
    }
}
```

```json
{
  "data": {
    "user_id": 26027,
    "posts": [
      {
        "post_id": 7375,
        "title": "Velit enim et quod distinctio.",
        "post_resume": "Quo dolores ...",
        "views_number": 13545,
        "comments_number": 20335
      },
      {
        "post_id": 25141,
        "title": "Consequatur ut illum nobis et.",
        "post_resume": "Temporibus ut ...",
        "views_number": 70492,
        "comments_number": 80291
      },
      {
        "post_id": 18477,
        "title": "Debitis odio sunt laudantium aut eum aut laudantium.",
        "post_resume": "Voluptatem culpa ut dol...",
        "views_number": 23572,
        "comments_number": 80794
      }
    ]
  }
}
```

- Shopping card example

```
{
    data: {
        shopId: number,
        finished: boolean,
        catId: number,
        clientId: number,
        items: {
            id: number,
            name: word,
            quantity: number,
            _times:3
        }
    }
}
```

Will generate

```json
{
  "data": {
    "shopId": 56079,
    "finished": false,
    "catId": 60197,
    "clientId": 39134,
    "items": [
      {
        "id": 94476,
        "name": "facere",
        "quantity": 85981
      },
      {
        "id": 14435,
        "name": "ut",
        "quantity": 45225
      },
      {
        "id": 52692,
        "name": "rerum",
        "quantity": 99475
      }
    ]
  }
}
```

- true, false example

```
{
    valid: true,
    erros: false
}
```

Will generate

```json
{
  "valid": true,
  "errors": false
}
```


# Features

We are thinking and working on adding more data types like `city, uuid, date, time` and the capability to add default values to the json response.

# Thanks

Especial thanks to [faker](https://github.com/marak/Faker.js/) that is used behind the scenes to generate the fake data. Also thanks to the other opensource projects.

# Collaborate

Feel free to collaborate with this project.

# Follow me
[X: @rollrodrig](https://x.com/rollrodrig)
[Github: rollrodrig](https://github.com/rollrodrig)
[Youtube: RollTheCoder](https://www.youtube.com/@RollTheCoder)
[Instagram: rollthecoder](https://www.instagram.com/rollthecoder/)
[Tiktok: @rollthecoder](https://www.tiktok.com/@rollthecoder)