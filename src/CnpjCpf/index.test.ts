// import { isValidCnpj, addCnpjMask, removeCnpjMask } from '.';

// describe('Validate isValidCnpj', () => {
// 	const customerIdWrongMask = '07.526.557/0001-01';
// 	const customerIdWrongNoMask = '07526557000101';
// 	const customerIdCorrectMask = '07.526.557/0001-00';
// 	const customerIdCorrectNoMask = '07526557000100';
// 	test('Must result "false" - With Mask', () => {
// 		const result = isValidCnpj(customerIdWrongMask);
// 		expect(result).toBeFalsy();
// 	});
// 	test('Must result "false" - Without Mask', () => {
// 		const result = isValidCnpj(customerIdWrongNoMask);
// 		expect(result).toBeFalsy();
// 	});
// 	test('Must result "true" - With Mask', () => {
// 		const result = isValidCnpj(customerIdCorrectMask);
// 		expect(result).toBeTruthy();
// 	});
// 	test('Must result "true" - Without Mask', () => {
// 		const result = isValidCnpj(customerIdCorrectNoMask);
// 		expect(result).toBeTruthy();
// 	});

// 	test('Must result "false" - String Empty', () => {
// 		const result = isValidCnpj('');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - String Length !== 14', () => {
// 		const result = isValidCnpj('0756265700010');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 00000000000000', () => {
// 		const result = isValidCnpj('00000000000000');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 11111111111111', () => {
// 		const result = isValidCnpj('11111111111111');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 22222222222222', () => {
// 		const result = isValidCnpj('22222222222222');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 33333333333333', () => {
// 		const result = isValidCnpj('33333333333333');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 44444444444444', () => {
// 		const result = isValidCnpj('44444444444444');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 55555555555555', () => {
// 		const result = isValidCnpj('55555555555555');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 66666666666666', () => {
// 		const result = isValidCnpj('66666666666666');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 77777777777777', () => {
// 		const result = isValidCnpj('77777777777777');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 88888888888888', () => {
// 		const result = isValidCnpj('88888888888888');
// 		expect(result).toBeFalsy();
// 	});

// 	test('Must result "false" - 99999999999999', () => {
// 		const result = isValidCnpj('99999999999999');
// 		expect(result).toBeFalsy();
// 	});
// });

// describe('Validate addCnpjMask', () => {
// 	const cnpjCorrectWithoutMask = '07526557000100';
// 	const cnpjCorrectWithMask = '07.526.557/0001-00';

// 	const cnpjInCorrectWithoutMask = '0752655700010';
// 	const cnpjInCorrectWithoutMask2 = '075265570001000';
// 	const cnpjInCorrectWithoutMask3 = '075265570001/0';
// 	const cnpjInCorrectWithoutMask4 = '07.526.557/000';

// 	test(`Must result ${cnpjCorrectWithMask}`, () => {
// 		const result = addCnpjMask(cnpjCorrectWithoutMask);
// 		expect(result).toEqual(cnpjCorrectWithMask);
// 	});

// 	test(`Must result ${cnpjInCorrectWithoutMask}`, () => {
// 		const result = addCnpjMask(cnpjInCorrectWithoutMask);
// 		expect(result).toEqual(cnpjInCorrectWithoutMask);
// 	});

// 	test(`Must result ${cnpjInCorrectWithoutMask2}`, () => {
// 		const result = addCnpjMask(cnpjInCorrectWithoutMask2);
// 		expect(result).toEqual(cnpjInCorrectWithoutMask2);
// 	});

// 	test(`Must result ${cnpjInCorrectWithoutMask3}`, () => {
// 		const result = addCnpjMask(cnpjInCorrectWithoutMask3);
// 		expect(result).toEqual(cnpjInCorrectWithoutMask3);
// 	});

// 	test(`Must result ${cnpjInCorrectWithoutMask4}`, () => {
// 		const result = addCnpjMask(cnpjInCorrectWithoutMask4);
// 		expect(result).toEqual(cnpjInCorrectWithoutMask4);
// 	});
// });

// describe('Validate removeCnpjMask', () => {
// 	const cnpjWithMask = '07.526.557/0001-00';
// 	const cnpjWithoutMask = '07526557000100';

// 	test(`Must result ${cnpjWithoutMask}`, () => {
// 		const result = removeCnpjMask(cnpjWithMask);
// 		expect(result).toEqual(cnpjWithoutMask);
// 	});
// });
