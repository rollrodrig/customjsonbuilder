class Cleaner {
	run(pattern: string): string {
		pattern = pattern.replace(/\t*\s*/g, "");
		return pattern;
	}
}
export default Cleaner;
