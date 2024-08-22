import CustomJsonBuilder, {
  cleaner,
  validator,
  parsePattern,
  valueParser,
  generator,
} from './index'

describe('Validator', () => {
  it('Should return true for valid pattern', () => {
    const pattern = '{string:string}'
    const isValid = validator(pattern)
    expect(isValid).toBe(true)
  })
  it('Should return false for invalid pattern', () => {
    const pattern = '{string:string,}}'
    const isValid = validator(pattern)
    expect(isValid).toBe(false)
  })
})

describe('Cleaner', () => {
  it('Should remove all whitespace', () => {
    const pattern = '  {  string: string,  }  '
    const cleaned = cleaner(pattern)
    expect(cleaned).toBe('{string:string}')
  })
  it('Should remove all whitespace', () => {
    const pattern = `
    {  string:
      string,  }
    `
    const cleaned = cleaner(pattern)
    expect(cleaned).toBe('{string:string}')
  })
})

describe('parsePattern', () => {
  it('Should parse to a valid json', () => {
    const pattern = '{string:string}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({ string: 'string' })
  })
  it('Should parse to a valid json', () => {
    const pattern = '{string:string,number:{a:number,b:number}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { a: 'number', b: 'number' },
    })
  })
  it('Should parse to a valid json with times', () => {
    const pattern = '{string:string,number:{a:number,b:number,_times:3}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { a: 'number', b: 'number', _times: '3' },
    })
  })
  it('Should parse to a valid json with times', () => {
    const pattern = '{string:string,number:{__:number,_times:3}}'
    const parsed = parsePattern(pattern)
    expect(parsed).toEqual({
      string: 'string',
      number: { __: 'number', _times: '3' },
    })
  })
})

describe('valueParser', () => {
  it('Should return same value', () => {
    const value = valueParser('abc')
    expect(value).toBe('abc')
    const value2 = valueParser('12345')
    expect(value2).toBe('12345')
  })
  it('Should return a valid value', () => {
    const value = valueParser('string')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid number', () => {
    const value = valueParser('number')
    expect(typeof value).toBe('number')
  })

  it('Should return a valid boolean', () => {
    const value = valueParser('boolean')
    expect(typeof value).toBe('boolean')
  })

  it('Should return null', () => {
    const value = valueParser('null')
    expect(value).toBeNull()
  })

  it('Should return undefined', () => {
    const value = valueParser('undefined')
    expect(value).toBeUndefined()
  })

  it('Should return an empty string', () => {
    const value = valueParser('empty')
    expect(value).toBe('')
  })

  it('Should return true', () => {
    const value = valueParser('true')
    expect(value).toBe(true)
  })

  it('Should return false', () => {
    const value = valueParser('false')
    expect(value).toBe(false)
  })

  it('Should return a valid name', () => {
    const value = valueParser('name')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid firstname', () => {
    const value = valueParser('firstname')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid lastname', () => {
    const value = valueParser('lastname')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid age', () => {
    const value = valueParser('age')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(18)
    expect(value).toBeLessThanOrEqual(90)
  })

  it('Should return a valid age18', () => {
    const value = valueParser('age18')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(18)
    expect(value).toBeLessThanOrEqual(90)
  })

  it('Should return a valid agekid', () => {
    const value = valueParser('agekid')
    expect(typeof value).toBe('number')
    expect(value).toBeGreaterThanOrEqual(1)
    expect(value).toBeLessThanOrEqual(17)
  })

  it('Should return a valid username', () => {
    const value = valueParser('username')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid email', () => {
    const value = valueParser('email')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid password', () => {
    const value = valueParser('password')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid uuid', () => {
    const value = valueParser('uuid')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid title', () => {
    const value = valueParser('title')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid text', () => {
    const value = valueParser('text')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid word', () => {
    const value = valueParser('word')
    expect(typeof value).toBe('string')
  })

  it('Should return valid words', () => {
    const value = valueParser('words')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid paragraph', () => {
    const value = valueParser('paragraph')
    expect(typeof value).toBe('string')
  })

  it('Should return valid paragraphs', () => {
    const value = valueParser('paragraphs')
    expect(typeof value).toBe('string')
  })

  it('Should return a valid date', () => {
    const value = valueParser('date')
    expect(typeof value).toBe('string')
  })
})

describe('CustomJsonBuilder', () => {
  describe('Should return expected data type', () => {
    it('Should return expected json', () => {
      let p = `
    {
      string: string,
      title: title,
      text: text,
      word: word,
      words: words,
      paragraph: paragraph,
      paragraphs: paragraphs,

      empty: empty,

      uuid: uuid,

      date: date,

      name: firstname,
      fullname: name,
      firstname: firstname,
      lastname: lastname,

      username: username,
      email: email,
      password: password,

      isnull: null,
      isundefined: undefined,

      boolean: boolean,
      istrue: true,
      isfalse: false,

      number: number,
      age: age,
      age18: age18,
      agekid: agekid,
    }
    `
      const obj = CustomJsonBuilder(p)
    })
    it('Should return booleans ', () => {
      let p = `
    {
      isboolean:boolean,
      istrue:true,
      isfalse:false,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.isboolean).toBe('boolean')
      expect(obj.istrue).toBe(true)
      expect(obj.isfalse).toBe(false)
    })
    it('Should return ages ', () => {
      let p = `
    {
      age:age,
      age18:age18,
      agekid:agekid,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.age).toBe('number')
      expect(obj.age).toBeGreaterThan(18)
      expect(obj.age).toBeLessThan(91)
      expect(typeof obj.age18).toBe('number')
      expect(obj.age18).toBeGreaterThan(18)
      expect(obj.age18).toBeLessThan(91)
      expect(typeof obj.agekid).toBe('number')
      expect(obj.agekid).toBeLessThan(18)
    })
    it('Should return numbers ', () => {
      let p = `
    {
      number:number,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.number).toBe('number')
      expect(obj.number).toBeGreaterThan(1)
    })
    it('Should return nulls and undefineds ', () => {
      let p = `
    {
      isnull: null,
      isundefined: undefined,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.isnull).toBe(null)
      expect(obj.isundefined).toBe(undefined)
    })
    it('Should return strings ', () => {
      let p = `
    {
      string: string,
      title: title,
      text: text,
      word: word,
      words: words,
      paragraph: paragraph,
      paragraphs: paragraphs,
      empty: empty
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.string).toBe('string')
      expect(typeof obj.title).toBe('string')
      expect(typeof obj.text).toBe('string')
      expect(typeof obj.word).toBe('string')
      expect(typeof obj.words).toBe('string')
      expect(typeof obj.paragraph).toBe('string')
      expect(typeof obj.paragraphs).toBe('string')
      expect(obj.empty).toBe('')
    })
    it('Should return uuid ', () => {
      let p = `
    {
      uuid: uuid,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.uuid).toBe('string')
      expect(obj.uuid.length).toBe(36)
    })
    it('Should return date ', () => {
      let p = `
    {
      date: date,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.date).toBe('string')
    })
    it('Should return names ', () => {
      let p = `
    {
      name: firstname,
      fullname: name,
      firstname: firstname,
      lastname: lastname,
    }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.name).toBe('string')
      expect(typeof obj.fullname).toBe('string')
      expect(typeof obj.firstname).toBe('string')
      expect(typeof obj.lastname).toBe('string')
    })
  })
  describe('Nested objects', () => {
    it('Should return address nested object', () => {
      let p = `
      {
        username: username,
        address: {
          street: firstname,
          number: number,
        },
      }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.username).toBe('string')
      expect(typeof obj.address.street).toBe('string')
      expect(typeof obj.address.number).toBe('number')
    })
    it('Should nested nested object', () => {
      let p = `
      {
        a: string,
        b: {
          c: {m:string,n:number},
        },
      }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(typeof obj.a).toBe('string')
      expect(typeof obj.b.c.m).toBe('string')
      expect(typeof obj.b.c.n).toBe('number')
    })
  })
  describe('Arrays', () => {
    it('Should return array of objects', () => {
      let p = `
      {
        posts: {title:string,id:number,_times:3},
      }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.posts.length).toBe(3)
      expect(typeof obj.posts[0].title).toBe('string')
      expect(typeof obj.posts[0].id).toBe('number')
      expect(typeof obj.posts[1].title).toBe('string')
      expect(typeof obj.posts[1].id).toBe('number')
      expect(typeof obj.posts[2].title).toBe('string')
      expect(typeof obj.posts[2].id).toBe('number')
    })
    it('Should return double nested array', () => {
      let p = `
      {
        a: {b:string,c:{m:number,_times:2},_times:2},
      }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.a).toBeInstanceOf(Array)
      expect(obj.a.length).toBe(2)
      expect(typeof obj.a[0].b).toBe('string')
      expect(obj.a[0].c).toBeInstanceOf(Array)
      expect(obj.a[0].c.length).toBe(2)
      expect(typeof obj.a[0].c[0].m).toBe('number')
      expect(typeof obj.a[0].c[1].m).toBe('number')

      expect(typeof obj.a[1].b).toBe('string')
      expect(obj.a[1].c).toBeInstanceOf(Array)
      expect(obj.a[1].c.length).toBe(2)
      expect(typeof obj.a[1].c[0].m).toBe('number')
      expect(typeof obj.a[1].c[1].m).toBe('number')
    })
  })
  describe('Array of values', () => {
    it('Should return array of values', () => {
      let p = `
      {
        names: {_:string, _times:3},
      }
    `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.names.length).toBe(3)
      expect(typeof obj.names[0]).toBe('string')
      expect(typeof obj.names[1]).toBe('string')
      expect(typeof obj.names[2]).toBe('string')
    })
  })
  describe('Array of values', () => {
    it('Should return array of values', () => {
      let p = `
    {
      names: {_:number, _times:3},
    }
  `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.names.length).toBe(3)
      expect(typeof obj.names[0]).toBe('number')
      expect(typeof obj.names[1]).toBe('number')
      expect(typeof obj.names[2]).toBe('number')
    })
  })
  describe('Array of values', () => {
    it('Should return array of values', () => {
      let p = `
    {
      names: {_:name, _times:3},
    }
  `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.names.length).toBe(3)
      expect(typeof obj.names[0]).toBe('string')
      expect(typeof obj.names[1]).toBe('string')
      expect(typeof obj.names[2]).toBe('string')
    })
    it('Should return combination of arrays of objects and array of values', () => {
      let p = `
    {
      users: {name:name, _times:3},
      ages: {_:age, _times:3},
    }
  `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.users.length).toBe(3)
      expect(obj.ages.length).toBe(3)
      expect(typeof obj.users[0].name).toBe('string')
      expect(typeof obj.ages[0]).toBe('number')
      expect(typeof obj.users[1].name).toBe('string')
      expect(typeof obj.ages[1]).toBe('number')
      expect(typeof obj.users[2].name).toBe('string')
      expect(typeof obj.ages[2]).toBe('number')
    })
  })
  describe('Array of values', () => {
    it('Should return array of objects ', () => {
      let p = `
        {
          names: string,
          _times:3
        }
      `
      const obj: any = CustomJsonBuilder(p)
      expect(obj.length).toBe(3)
      expect(typeof obj[0].names).toBe('string')
      expect(typeof obj[1].names).toBe('string')
      expect(typeof obj[2].names).toBe('string')
    })
    it('Should return array values', () => {
      let p = `
        {
          _: string,
          _times:3
        }
      `
      const obj: any = CustomJsonBuilder(p)
      expect(obj).toBeInstanceOf(Array)
      expect(obj.length).toBe(3)
      expect(typeof obj[0]).toBe('string')
      expect(typeof obj[1]).toBe('string')
      expect(typeof obj[2]).toBe('string')
    })
  })
})
