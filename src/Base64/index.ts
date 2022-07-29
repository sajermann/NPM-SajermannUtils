/**
 * ### b64EncodeUnicode
 * Convert String to Base64
 * @example
 * ```js
 * b64EncodeUnicode("AÁoõ!@#UÚ")) // returns: QcOBb8O1IUAjVcOa
 * ```
 */
function b64EncodeUnicode(str: string) {
	return btoa(
		encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
			String.fromCharCode(parseInt(p1, 16))
		)
	);
}

/**
 * ### b64DecodeUnicode
 * Convert Base64 to String
 * @example
 * ```js
 * b64DecodeUnicode("QcOBb8O1IUAjVcOa")) // returns: AÁoõ!@#UÚ
 * ```
 */
function b64DecodeUnicode(str: string) {
	return decodeURIComponent(
		Array.prototype.map
			.call(atob(str), c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
			.join('')
	);
}

export { b64EncodeUnicode, b64DecodeUnicode };
