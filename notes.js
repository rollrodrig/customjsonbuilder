{a: string, b: number}
[
    Node(a, string),
    Node(b, number),
]

{ a: string, b: { c: string, d: number } }
[
    Node(a, string),
    Node(b, [Node(c, string), Node(d, number)]),
]

{ name: string, age: number }
[
    Node(name, string),
    Node(age, number),
]

{name:string,phone:{main:number,second:number}}
[
    Node(name, string),
    Node(phone, [
        Node(main, number),
        Node(second, number)
    ]),
]


{user:number,posts:{id:uuid,title:string,$times:3}}
[
    Node(user, number),
    Node(posts, [
        Node(id, uuid),
        Node(title, string),
        Node($times, 3),
    ])
]

{a:{b:{c:{d:string},e:{f:string}}}}
[
    Node(a, [
        Node(b, [
            Node(c, [
                Node(d, string)
            ]
                )
            ]
        ),
        Node(e, [
            Node(f, string)
        ])
    ])
]

{a:string,b:{c:string,d:string},e:{f:string,g:{h:string,i:string},j:{k:string,l:string},m:string}}
[
    Node(a, string),
    Node(b, {c:string,d:string}),
    Node(c, string),
    Node(d, string),
    Node(e, {f:string,g:{h:string,i:string}}),
    Node(f, string),
    Node(g, {h:string,i:string}),
    Node(h, string),
    Node(i, string),
    Node(j, {k:string,l:string}),
    Node(k, string),
    Node(l, string),
    Node(m, string),
]