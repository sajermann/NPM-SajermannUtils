/* eslint-disable import/prefer-default-export */
/**
 * ## IsValidEmail
 * ### Verify if email is valid
 * @formatPatternIncoming "string"
 * @example "sajermannbruno@gmail"
 * @returns false
 */
function isValidEmail(str: string): boolean {
	try {
		const validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
		if (str.match(validRegex) === null) {
			return false;
		}
		return true;
	} catch {
		return false;
	}
}

export { isValidEmail };
