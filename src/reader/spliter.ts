export class SpliterClient {
    spliter: SpliterStrategy;
    s: string;
    constructor(s: string) {
        this.s = s;
    }
    setSpliter(spliter: SpliterStrategy) {
        this.spliter = spliter;
        this.spliter.setClient(this);
        this.spliter.setString(this.s);
    }
    print(left: number, right: number ) {
        console.log(`left: ${left} -- right: ${right}`)
    }
    run() {
        this.spliter.run()
    }
}
export class SpliterStrategy {
    s: string;
    stack: number[] = [];
    client: SpliterClient;
    setString(s: string) {
        this.s = s;
    }
    setClient(client: SpliterClient) {
        this.client = client;
    }
    print(left: number, right: number ) {
        this.client.print(left, right)
    }
    run() {
        let l = this.s.length;
        for (let x = 0; x < l; x++) {
            let char = this.s.charAt(x)
            if (char === "{") {
                this.stack.push(x);
            }
            if(char === "}") {
                let left = this.stack.pop()
                this.print(left, x)
            }
        }
    }
}