export const randomString = (): string => {
	const s =
		Math.random().toString(36).substring(2, 15) +
		Math.random().toString(36).substring(2, 15);
	return s;
};
