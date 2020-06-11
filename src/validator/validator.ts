
class Validator {
    private leftBraces: number = 0;
    private rightBraces: number = 0;
    private leftSquaresBraces: number = 0;
    private rightSquaresBraces: number = 0;
    private countBraces(char: string): void {
        if (char === "{") {
            this.leftBraces++;
        }
        if (char === "}") {
            this.rightBraces++;
        }
    }
    private countSquareBraces(char: string): void {
        if (char === "[") {
            this.leftSquaresBraces++;
        }
        if (char === "]") {
            this.rightSquaresBraces++;
        }
    }
    run(pattern: string): boolean {
        this.leftBraces = 0;
        this.rightBraces = 0;
        this.leftSquaresBraces = 0;
        this.rightSquaresBraces = 0;
        for (var x = 0; x < pattern.length; x++) {
            this.countBraces(pattern.charAt(x))
            this.countSquareBraces(pattern.charAt(x))
        }
        return this.leftBraces === this.rightBraces && this.leftSquaresBraces === this.rightSquaresBraces;
    }
}
export default Validator;
