/**
 * ## Delay
 * ### Simulate delay
 * @example delay(3000)
 * @returns void
 */
function delay(delayMs: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(() => resolve(), delayMs);
	});
}

// eslint-disable-next-line import/prefer-default-export
export { delay };
