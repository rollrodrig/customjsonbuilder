export const bracesCounter = (pattern: string) => {
	const l = pattern.length;
	const left = [];
	const right = [];
	for (let x = 0; x < l; x++) {
		const char = pattern.charAt(x);
		if (char === "{") {
			left.push(x);
		}
		if (char === "}") {
			right.push(x);
		}
	}
	console.log(left);
	console.log(right);
};
