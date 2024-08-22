import CustomJsonBuilder from './index'

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
