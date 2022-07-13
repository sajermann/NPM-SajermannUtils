import {
	stringToDate,
	stringToDateHour,
	stringToDateIso,
	formatDateAndHour,
	formatDate,
	formatHour,
	addDays,
	finalOfDay,
	dateForReport,
	isValidDate,
} from '.';

describe('Validate isValidDate', () => {
	test('Must result true', () => {
		const result = isValidDate(new Date('1991-05-31'));
		expect(result).toEqual(true);
	});
	test('Must result false', () => {
		const result = isValidDate(new Date('Test'));
		expect(result).toEqual(false);
	});
	test('Must result false', () => {
		const result = isValidDate(undefined as unknown as Date);
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
		expect(result.toDateString()).toEqual(new Date().toDateString());
	});

	test('Must result correct New Date with parameter incorrect', () => {
		const result = stringToDate('31-05-1991');
		expect(result.toDateString()).toEqual(new Date().toDateString());
	});
});

describe('Validate stringToDateHour', () => {
	test('Must result correct New Date with parameter correct', () => {
		const result = stringToDateHour('31/05/1991 12:30:01');
		expect(result).toEqual(new Date(1991, 4, 31, 12, 30, 1));
	});

	test('Must result correct New Date with parameter null', () => {
		const result = stringToDateHour(null as unknown as string);
		expect(result.toDateString()).toEqual(new Date().toDateString());
	});

	test('Must result correct New Date with parameter incorrect', () => {
		const result = stringToDateHour('31-05-1991 12 00 00');
		expect(result.toDateString()).toEqual(new Date().toDateString());
	});
});

describe('Validate stringToDateIso', () => {
	test('Must result correct date with parameter correct', () => {
		const result = stringToDateIso('31/05/1991');
		expect(result).toEqual('1991-05-31');
	});

	test('Must result empty string with parameter null', () => {
		const result = stringToDateIso(null as unknown as string);
		expect(result).toEqual('');
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
});

describe('Validate finalOfDay', () => {
	test('Must result correct date and hour', () => {
		const fixture = '2021-01-01T15:00:00Z';
		const result = finalOfDay(new Date(fixture));
		const dateNew = addDays(new Date(fixture), 1);
		expect(result).toEqual(new Date(new Date(dateNew).getTime() - 1));
	});
});

describe('Validate DateForReport', () => {
	test('Must result correct date and hour', () => {
		const now = new Date();
		const day = now.getDate();
		const month =
			now.getMonth() + 1 < 10 ? `0${now.getMonth() + 1}` : now.getMonth() + 1;
		const year = now.getFullYear();
		const hour = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
		const minutes =
			now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
		const resulCorrectly = `${year}.${month}.${day}_${hour}.${minutes}`;
		const result = dateForReport();

		expect(result).toEqual(resulCorrectly);
	});
});
