export class Validator {
  private leftBraces = 0
  private rightBraces = 0
  private leftSquaresBraces = 0
  private rightSquaresBraces = 0
  private countBraces(char: string): void {
    if (char === '{') {
      this.leftBraces++
    }

    if (char === '}') {
      this.rightBraces++
    }
  }
  private countSquareBraces(char: string): void {
    if (char === '[') {
      this.leftSquaresBraces++
    }

    if (char === ']') {
      this.rightSquaresBraces++
    }
  }
  run(pattern: string): boolean {
    this.leftBraces = 0
    this.rightBraces = 0
    this.leftSquaresBraces = 0
    this.rightSquaresBraces = 0

    const l = pattern.length

    for (let x = 0; x < l; x++) {
      this.countBraces(pattern.charAt(x))
      this.countSquareBraces(pattern.charAt(x))
    }

    return (
      this.leftBraces === this.rightBraces &&
      this.leftSquaresBraces === this.rightSquaresBraces
    )
  }
}
