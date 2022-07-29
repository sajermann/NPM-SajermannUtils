/* eslint-disable import/prefer-default-export */

/**
 * ### FormatForReal
 * Add mask in value for brazilian currency
 * @example
 * ```js
 * formatForReal(10.99) // returns: "R$ 10,99"
 * ```
 */
function formatForReal(
	value: number,
	maximumSignificantDigits?: number
): string {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
		maximumSignificantDigits,
	}).format(value);
}

export { formatForReal };
