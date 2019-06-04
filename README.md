# JSONbuilder - generate json response with custom fields con the fly (beta)


## Example
A simple query like this

``` http://localhost:3000/?q={name:string,email:email}```

will response with json like
```
{
    "name":"Alexa",
    "email":"Champlin@gmail.com"
}
```

## Installation
1. clone the project or download [the zip file](https://github.com/rollrodrig/jsonbuilder/archive/master.zip)
2. go in to the folder 
```
cd jsonbuilder-master
```
## Run server on Node
1 Install dependencies
```
npm install
```
2. Launch the server
```
npm start
```
3. It will prompt
```
Running on http://0.0.0.0:3000
```
4. Open the browser and visit the link [http://0.0.0.0:3000](http://localhost:6500/q/?q={name:string})

## Run on Docker
1. Make sure that docker is intalled, you can follow this [docker getting started tutorial](https://www.docker.com/get-started)
2. Create docker container with docker compose
```
docker-compose build
```
3. Run the container
```
docker-compose up
```
4. Open the browser and visit [http://localhost:6500](http://localhost:6500/q/?q={name:string})

# Guide
### Pattern
The pattern should be after `?q=` varialble, example: http://localhost:3000/q/q?=**THE PATTERN GOES HERE**

### Key:Value
It is like writing regular json
```
{THE_KEY_THAT_I_WANT : THE_DATA_TYPE}
```
### example
I want an object with a key `name` and a random word as `value`
```
{name:string}
```
The server will respond with
```
{
    "name":"Granite"
}
```
### Multiple values
Now i need a json response with id, name, email
```
{id:number,name:string,email:email}
``` 
The server will respond with
```
{
    "id":49994,
    "name":"Mission",
    "email":"Eula_Deckow@yahoo.com"
}
```
### Neste object
I want an object with `userId`, `name` nested object with `contact` that contains `phone` and `email`.
The pattern should be something like this
```
{userId:number,name:firstname,contact:{phone:number,email:email}}
```
The server will respond with
```
{
    "userId":94781,
    "name":"Maria",
    "contact":{
        "phone":88885,
        "email":"Eladio_Brown44@hotmail.com"
    }
}
```
### Nested nested object
Lets try something more complex.
I want an object with `userId`, `name` nested object with `contact` that contains `phone` and `email` with nested content `persona_email` and `company_email`
```
{userId:number,name:firstname,contact:{phone:number,email:{persona_email:email,company_email:email}}}
```
The server will respond with
```
{
    "userId":7316,
    "name":"discrete",
    "contact":{
        "phone":14357,
        "email":{
            "persona_email":"Rowena_Homenick@yahoo.com",
            "company_email":"Caesar52@hotmail.com"
        }
    }
}
```
### Array response
I want a 3 `posts` with `id` and `title`
The array follow this pattern. 

Notice that we use `KEY:[{...};3]`.
the `;3` means the number `posts` that the sever should generate
```
{posts:[{id:number,title:string};3]}
```
And the server will respond
```
{
    "posts": [
        {
            "id": 65450,
            "title": "Concrete"
        },
        {
            "id": 11251,
            "title": "interactive"
        },
        {
            "id": 89704,
            "title": "User-centric"
        }
    ]
}
```
## Data types
Until this version we support these data types
* string
* number
* boolean
* null
* undefined
* empty
* username
* firstName
* lastName
* email
* word
* words
* sentence
* paragraph
* title
* text
* paragraphs
### example
object with post title
```
{postTitle:title}
```
will generate
```
{
    "postTitle": "Rerum odio quam."
}
```
user name email
```
{user_email:email}
```
will generate
```
{
    "user_email": "Heber1@hotmail.com"
}
```
# Awesome examples
* Basic
```
{name:string}
```
```
{
    "name": "Ergonomic Concrete Pants"
}
```
* user information
```
{userId:number,username:username,name:firstname,email:email}
```
```
{
    "userId": 89330,
    "username": "Filomena_Bogisich",
    "name": "port",
    "email": "Valentin.Buckridge@hotmail.com"
}
```
* user last 3 posts
```
{data:{user_id:number,posts:[{post_id:number,title:title,post_resume:paragraph,views_number:number,comments_number:number};3]}}
```
```
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
* Shopping card example
```
{data:{shopId:number,finished:boolean,catId:number,clientId:number,items:[{id:number,name:word,quantity:number};3]}}
```
Will generate
```
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

# Beta
This project is on beta so maybe there should some bug... but please if you found some bug feel free the leave a comment.

# API live
Now it only works on localhost but we are working to launch the app and create a public API.

# Features
We are thinking and working in more and more data types like `city, uuid, date, time` and the capability to add default values to the json response.

# Thanks
Especial thanks to (faker)[https://github.com/marak/Faker.js/] that is used behind the scenes to generate the fake data. Also thank to the other opensources projects.

# Collaborate
Feel free to collaborate with this project.

# Follow me
on twitter (@rollrodrig)[https://twitter.com/rollrodrig]


