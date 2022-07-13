/* eslint-disable import/prefer-default-export */
/**
 * ## formatForReal
 * ### Format number from number to currency's Brazil
 * @example 10.99
 * @returns "R$ 10,99"
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
