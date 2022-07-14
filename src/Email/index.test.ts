// import { isValidEmail } from '.';

// describe('Utils/isValidEmail', () => {
// 	const emailWrong1 = 'test.com';
// 	const emailWrong2 = 'test@.';
// 	const emailWrong3 = 'test.com@test.';
// 	const emailCorrectly1 = 'test@gmail.com';
// 	const emailCorrectly2 = 'test@ab-inbev.com';
// 	const emailCorrectly3 = 'test-ext@ab-inbev.com';

// 	it(`Must return Falsy`, () => {
// 		expect(isValidEmail(emailWrong1)).toBeFalsy();
// 	});

// 	it(`Must return Falsy`, () => {
// 		expect(isValidEmail(emailWrong2)).toBeFalsy();
// 	});

// 	it(`Must return Falsy`, () => {
// 		expect(isValidEmail(emailWrong3)).toBeFalsy();
// 	});

// 	it(`Must return Truthy`, () => {
// 		expect(isValidEmail(emailCorrectly1)).toBeTruthy();
// 	});

// 	it(`Must return Truthy`, () => {
// 		expect(isValidEmail(emailCorrectly2)).toBeTruthy();
// 	});

// 	it(`Must return Truthy`, () => {
// 		expect(isValidEmail(emailCorrectly3)).toBeTruthy();
// 	});

// 	// it(`Must return Truthy`, () => {
// 	// 	expect(isValidEmail(undefined as unknown as string)).toEqual(false);
// 	// });
// });
