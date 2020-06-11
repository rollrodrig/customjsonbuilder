class Generator {
    
}
export default Generator;
/*

{name:name,age:age}
{...} component
[] component
name:name,age:age leaf

name: name => name: NameElement => name: "rolly"
age: age => name: AgeElement => age: 25
posts:[{...}3] => post: ListComponent => posts:[{...}, {...}, {...}]
user:{name:name,age:age} => user: DicComponent => user: {name: NameElement, age: AgeElement}

DicElement -> key: , value: 
    [
        NameElement -> key: 'name', value: 'roll'
        AgeElement -> key: 'age', value: 23
        DicElement -> key: 'contact', value:
            [

            ]

    ]



*/