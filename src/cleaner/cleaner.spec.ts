import { expect, assert } from "chai";
import Cleaner from "./cleaner";
describe("Cleaner: ", () => {
	it(".run: should return one line string without spaces, tabs, breaklines, etc", () => {
		const c = new Cleaner();
		let ouput = c.run(`
            {
                name: name,
                email: email,
            }
        `);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`
            {name: name,
                email: email,
            }
        `);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`{name: name,email: email,
        }
        `);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`{name: name,email: email,}`);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`
			{
				name: name,
			email: email,
			}
        `);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`
			{
				name:	name,
			email:	email,
			}
        `);
		expect(ouput).to.eq("{name:name,email:email,}");
		ouput = c.run(`\n{\nname: name,\temail:\temail,\n}`);
		expect(ouput).to.eq("{name:name,email:email,}");
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
});
