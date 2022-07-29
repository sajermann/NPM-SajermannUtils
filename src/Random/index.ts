/* eslint-disable no-bitwise */

/**
 * ### GenerateNumbers
 * Return string numbers
 * @example
 * ```js
 * generateNumbers(3) // returns: 269 (Random)
 * generateNumbers(10) // returns: 1230569830 (Random)
 * ```
 */
function generateNumbers(quantityCharacters: number): string {
	if (quantityCharacters < 1) {
		return '';
	}
	const number: number[] = [];

	while (number.length < quantityCharacters) {
		number.push(Math.floor(Math.random() * 10));
	}
	return number.join('');
}

/**
 * ### GenerateGuid
 * Return string Guid
 * @example
 * ```js
 * generateGuid() // returns: "58ae706d-25c6-4bfd-b8d9-68c7d2356eca"
 * ```
 */
function generateGuid(): string {
	let d = new Date().getTime();
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
		const r = (d + Math.random() * 16) % 16 | 0;
		d = Math.floor(d / 16);
		return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
	});
}

export { generateNumbers, generateGuid };
