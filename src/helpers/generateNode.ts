export const generateNode = (value: string) => ({
	id: Date.now(),
	value,
	children: []
});
