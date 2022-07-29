/**
 * ### Delay
 * Simulate delay
 * @example
 * ```js
 * await delay(3000) // returns: simulate delay of 3 seconds
 * ```
 */
function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

// eslint-disable-next-line import/prefer-default-export
export { delay };
