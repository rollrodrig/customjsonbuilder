import { expect, assert } from "chai";
import Cleaner from "./cleaner";
describe("Cleaner: ", () => {
	it(".run: should return one line string without spaces, tabs, breaklines, etc", () => {
		const c = new Cleaner();
		let ouput = c.run(`
			{
				name: firstname,
				age: number,
			}
        `);
		expect(ouput).to.eq("{name:firstname,age:number}");
		ouput = c.run(`
            {name: name,
                email: email,
            }
        `);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`{name: name,email: email,
        }
        `);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`{name: name,email: email}`);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`
			{
				name: name,
			email: email,
			}
        `);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`
			{
				name:	name,
			email:	email,
			}
        `);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`\n{\nname: name,\temail:\temail,\n}`);
		expect(ouput).to.eq("{name:name,email:email}");
		ouput = c.run(`
			{
				[
                    name:
                    name],
			        email: email
			}
        `);
		expect(ouput).to.eq("{[name:name],email:email}");
	});
	it("should remove extra comma at the end of the pattern", () => {
		const c = new Cleaner();
		const ouput = c.run(`
			{
				name: name,
				age:{
					a: string,
					b: string,
				},
                email: email,
            }
		`);
		expect(ouput).to.eq("{name:name,age:{a:string,b:string},email:email}");
	});
});
