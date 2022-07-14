import { b64EncodeUnicode, b64DecodeUnicode } from '.';

describe('Utils/Base64', () => {
	const enconded = 'AÁoõ!@#UÚ';
	const decoded = 'QcOBb8O1IUAjVcOa';

	it(`Must Encode string from ${enconded} to ${decoded}`, () => {
		expect(b64EncodeUnicode(enconded)).toBe(decoded);
	});

	it(`Must Decode string from ${decoded} to ${enconded}`, () => {
		expect(b64DecodeUnicode(decoded)).toBe(enconded);
	});
});
