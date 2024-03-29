import {
	stringToDate,
	stringToDateHour,
	formatDateAndHour,
	formatDate,
	formatHour,
	addDays,
	finalOfDay,
	isValidDate,
	isLeapYear,
	isValidDay,
	isValidFullYear,
	isValidMonth,
	isValidDateDeep,
} from '.';

describe('Validate isValidDay', () => {
	test('Must result true', () => {
		const result = isValidDay(31);
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isValidDay(32);
		expect(result).toEqual(false);
	});

	test('Must result false (throw)', () => {
		const result = isValidDay(undefined as unknown as number);
		expect(result).toEqual(false);
	});
});

describe('Validate isValidMonth', () => {
	test('Must result true', () => {
		const result = isValidMonth(5);
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isValidMonth(13);
		expect(result).toEqual(false);
	});

	test('Must result false (throw)', () => {
		const result = isValidMonth(undefined as unknown as number);
		expect(result).toEqual(false);
	});
});

describe('Validate isValidFullYear', () => {
	test('Must result true', () => {
		const result = isValidFullYear(2022);
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isValidFullYear(1);
		expect(result).toEqual(false);
	});

	test('Must result false (throw)', () => {
		const result = isValidFullYear(undefined as unknown as number);
		expect(result).toEqual(false);
	});
});

describe('Validate isValidDateDeep', () => {
	test('Must result true', () => {
		const result = isValidDateDeep({ day: 31, month: 5, fullYear: 1991 });
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isValidDateDeep({ day: 30, month: 2, fullYear: 1991 });
		expect(result).toEqual(false);
	});

	test('Must result false (throw)', () => {
		const result = isValidDateDeep(
			{} as unknown as { day: number; month: number; fullYear: number }
		);
		expect(result).toEqual(false);
	});

	test('Must result true because leap year', () => {
		const result = isValidDateDeep({ day: 29, month: 2, fullYear: 2020 });
		expect(result).toEqual(true);
	});

	test('Must result false because not leap year', () => {
		const result = isValidDateDeep({ day: 29, month: 2, fullYear: 2022 });
		expect(result).toEqual(false);
	});
});

describe('Validate isValidDate', () => {
	test('Must result true', () => {
		const result = isValidDate(new Date('1991-05-31'));
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isValidDate(new Date('Test'));
		expect(result).toEqual(false);
	});

	test('Must result false (throw)', () => {
		const result = isValidDate(undefined as unknown as Date);
		expect(result).toEqual(false);
	});
});

describe('Validate isLeapYear', () => {
	test('Must result true', () => {
		const result = isLeapYear(2020);
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isLeapYear(2021);
		expect(result).toEqual(false);
	});

	test('Must result false', () => {
		const result = isLeapYear(2022);
		expect(result).toEqual(false);
	});

	test('Must result false', () => {
		const result = isLeapYear(2023);
		expect(result).toEqual(false);
	});

	test('Must result true', () => {
		const result = isLeapYear(2024);
		expect(result).toEqual(true);
	});

	test('Must result false', () => {
		const result = isLeapYear('2024' as unknown as number);
		expect(result).toEqual(false);
	});
});

describe('Validate stringToDate', () => {
	test('Must result correct New Date with parameter correct', () => {
		const result = stringToDate('31/05/1991');
		expect(result).toEqual(new Date(1991, 4, 31));
	});

	test('Must result correct New Date with parameter null', () => {
		const result = stringToDate(null as unknown as string);
		expect(result.toDateString()).toEqual(new Date(1970).toDateString());
	});

	test('Must result correct New Date with parameter incorrect', () => {
		const result = stringToDate('31-05-1991');
		expect(result.toDateString()).toEqual(new Date(1970).toDateString());
	});
});

describe('Validate stringToDateHour', () => {
	test('Must result correct New Date with parameter correct', () => {
		const result = stringToDateHour('31/05/1991 12:30:01');
		expect(result).toEqual(new Date(1991, 4, 31, 12, 30, 1));
	});

	test('Must result correct New Date with parameter null', () => {
		const result = stringToDateHour(null as unknown as string);
		expect(result.toDateString()).toEqual(new Date(1970).toDateString());
	});

	test('Must result correct New Date with parameter incorrect', () => {
		const result = stringToDateHour('31-05-1991 12 00 00');
		expect(result.toDateString()).toEqual(new Date(1970).toDateString());
	});
});

describe('Validate formatDateAndHour', () => {
	test('Must result correct Date and Hour Format with parameter correct', () => {
		const fixture = '2021-05-31T12:30:00Z';
		const result = formatDateAndHour(new Date(fixture));
		expect(result).toEqual(
			new Intl.DateTimeFormat('pt-BR', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				hour12: false,
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			}).format(new Date(fixture))
		);
	});

	test('Must result empty string with parameter incorrect', () => {
		const fixture = '0001-01-01T00:00:00';
		const result = formatDateAndHour(new Date(fixture));
		expect(result).toEqual('');
	});

	test('Must result empty string with parameter incorrect', () => {
		const result = formatDateAndHour(new Date(''));
		expect(result).toEqual('');
	});
});

describe('Validate formatDate', () => {
	test('Must result correct Date in Format (DD/MM/YYYY) with parameter correct', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = formatDate(new Date(fixture));
		expect(result).toEqual(
			new Intl.DateTimeFormat('pt-BR', {
				year: 'numeric',
				month: 'numeric',
				day: 'numeric',
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			}).format(new Date(fixture))
		);
	});

	test('Must result empty string with parameter incorrect', () => {
		const result = formatDate(new Date(''));
		expect(result).toEqual('');
	});
});

describe('Validate formatHour', () => {
	test('Must result correct hour with parameter correct', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = formatHour(new Date(fixture));
		expect(result).toEqual(
			new Intl.DateTimeFormat('pt-BR', {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
				timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
			}).format(new Date(fixture))
		);
	});

	test('Must result empty string with parameter incorrect', () => {
		const result = formatHour(new Date(''));
		expect(result).toEqual('');
	});
});

describe('Validate addDays', () => {
	test('Must result correct new date parameter positive', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = addDays(new Date(fixture), 5);

		const dateNew = new Date(fixture);
		dateNew.setDate(dateNew.getDate() + 5);
		expect(result).toEqual(dateNew);
	});

	test('Must result correct new date with parameter negative', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = addDays(new Date(fixture), -1);

		const dateNew = new Date(fixture);
		dateNew.setDate(dateNew.getDate() + -1);
		expect(result).toEqual(dateNew);
	});

	test('Must result new Date(1970) with parameter undefined', () => {
		const result = addDays(undefined as unknown as Date, 1);
		expect(result).toEqual(new Date(1970));
	});
});

describe('Validate finalOfDay', () => {
	test('Must result correct date and hour', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = finalOfDay(new Date(fixture));
		const dateNew = addDays(new Date(fixture), 1);
		expect(result).toEqual(new Date(new Date(dateNew).getTime() - 1));
	});

	test('Must result new Date(1970) with parameter undefined', () => {
		const result = finalOfDay(new Error() as unknown as Date);
		expect(result).toEqual(new Date(1970));
	});
});
