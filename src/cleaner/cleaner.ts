class Cleaner {
	run(pattern: string): string {
		pattern = pattern.replace(/\t*\s*/g, "");
		pattern = pattern.replace(/,}/g, "}");
		return pattern;
	}
}
export default Cleaner;
