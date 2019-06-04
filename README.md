# JSONbuilder - generate json response with custom fields con the fly


## example
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
# Awesome examples
1. Basic example.
```
{name:string,email:email}
```



