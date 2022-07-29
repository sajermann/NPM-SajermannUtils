/**
 * ## IsLeapYear
 * ### Verify if is bissextile year
 * @example
 * ```js
 * isLeapYear(2020) // returns: true
 * isLeapYear(2021) // returns: false
 * ```
 */
function isLeapYear(fullYear: number): boolean {
	if (typeof fullYear !== 'number') return false;
	return (fullYear % 4 === 0 && fullYear % 100 !== 0) || fullYear % 400 === 0;
}

/**
 * ## isValidDate
 * ### Verify if date is valid
 * Warning: For Javascript new Date(2022, 1, 31) is Thu Mar 03 2022 00:00:00 GMT-0300,
 * if you look for something more assertive try: isValidDateDeep()
 * @example
 * ```js
 * isValidDate(new Date(2022, 1, 1)) // returns: true
 * isValidDate(new Date(2022, 1, 32)) // returns: true
 * isValidDate(undefined as unknown as Date) // returns: false
 * ```
 */
function isValidDate(date: Date): boolean {
	try {
		if (date.toString() === 'Invalid Date') {
			return false;
		}
		return date instanceof Date && !Number.isNaN(date);
	} catch {
		return false;
	}
}

/**
 * ## IsValidDay
 * ### Verify if day of month is valid
 * @example
 * ```js
 * isValidDay(32) // returns: false
 * isValidDay(31) // returns: true
 * isValidDay(null as unknown as number) // returns: false
 * ```
 */
function isValidDay(day: number): boolean {
	if (typeof day !== 'number') return false;
	if (day < 1 || day > 31) return false;
	return true;
}

/**
 * ## IsValidMonth
 * ### Verify if month of year is valid
 * @example
 * ```js
 * isValidMonth(13) // returns: false
 * isValidMonth(5) // returns: true
 * isValidMonth(null as unknown as number) // returns: false
 * ```
 */
function isValidMonth(month: number): boolean {
	if (typeof month !== 'number') return false;
	if (month < 1 || month > 12) return false;
	return true;
}

/**
 * ## IsValidFullYear
 * ### Verify if year is valid
 * @min 100
 * @max 99999
 * @example
 * ```js
 * isValidFullYear(1) // returns: false
 * isValidFullYear(2022) // returns: true
 * isValidFullYear(null as unknown as number) // returns: false
 * ```
 */
function isValidFullYear(fullYear: number): boolean {
	if (typeof fullYear !== 'number') return false;
	if (fullYear < 100 || fullYear > 99999) return false;
	return true;
}

type PropsIsValidDateDeep = {
	day: number;
	month: number;
	fullYear: number;
};
/**
 * ## IsValidMonth
 * ### Verify if is valid date with deep
 * @example
 * ```js
 * isValidDateDeep({day: 31, month: 2, fullYear: 1991}) // returns: false
 * isValidDateDeep({day: 31, month: 5, fullYear: 1991}) // returns: true
 * isValidDateDeep(null as unknown as number) // returns: false
 * ```
 */
function isValidDateDeep({
	day,
	month,
	fullYear,
}: PropsIsValidDateDeep): boolean {
	try {
		if (
			!isValidDay(day) ||
			!isValidMonth(month) ||
			!isValidFullYear(fullYear)
		) {
			return false;
		}
		const allows = {
			months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		};

		if (day === 31) {
			const notAllowsMonths = [2, 4, 6, 9, 11];
			allows.months = allows.months.filter(
				monthsTemp => !notAllowsMonths.includes(monthsTemp)
			);
		}

		if ((day === 29 && !isLeapYear(fullYear)) || day === 30) {
			const notAllowsMonths = [2];
			allows.months = allows.months.filter(
				monthsTemp => !notAllowsMonths.includes(monthsTemp)
			);
		}

		if (allows.months.includes(month)) {
			return true;
		}
		return false;
	} catch {
		return false;
	}
}

/**
 * ## StringToDate
 * ### Convert string to new Date
 * @example
 * ```js
 * stringToDate("31/05/1991") // returns: Fri May 31 1991 00:00:00 GMT-0300
 * stringToDate(null as unknown as string) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
 * ```
 */
function stringToDate(data: string): Date {
	try {
		const arrayValues = data.split('/');
		const year = parseInt(arrayValues[2], 10);
		const month = parseInt(arrayValues[1], 10) - 1;
		const day = parseInt(arrayValues[0], 10);
		const result = new Date(year, month, day);
		if (!isValidDate(result)) {
			return new Date(1970);
		}
		return result;
	} catch {
		return new Date(1970);
	}
}

/**
 * ## StringToDateHour
 * ### Convert string to new Date with Hour
 * @example
 * ```js
 * stringToDateHour("31/05/1991 12:30:01") // returns: Fri May 31 1991 12:30:01 GMT-0300
 * stringToDateHour(null as unknown as string) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
 * ```
 */
function stringToDateHour(data: string): Date {
	try {
		const arrayValues = data.split(' ');
		const arrayDate = arrayValues[0].split('/');
		const arrayHour = arrayValues[1].split(':');
		const year = parseInt(arrayDate[2], 10);
		const month = parseInt(arrayDate[1], 10) - 1;
		const day = parseInt(arrayDate[0], 10);
		const hour = parseInt(arrayHour[0], 10);
		const minutes = parseInt(arrayHour[1], 10) || 0;
		const seconds = parseInt(arrayHour[2], 10) || 0;
		const result = new Date(year, month, day, hour, minutes, seconds);
		if (!isValidDate(result)) {
			return new Date(1970);
		}
		return result;
	} catch {
		return new Date(1970);
	}
}

/**
 * ## FormatDateAndHour
 * ### Format Date to string friendly
 * @example
 * ```js
 * formatDateAndHour("2021-01-01T00:00:00Z") // returns: "01/01/2021 00:00:00"
 * formatDateAndHour(null as unknown as Date) // returns: ""
 * ```
 */
function formatDateAndHour(date: Date): string {
	try {
		if (date.toISOString().indexOf('0001-01-01') === 0) {
			return '';
		}
		const result = new Intl.DateTimeFormat('pt-BR', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: false,
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}).format(new Date(date));
		return result;
	} catch {
		return '';
	}
}

/**
 * ## FormatDate
 * ### Format Date to string friendly
 * @example
 * ```js
 * formatDate("2021-01-01T00:00:00Z") // returns: "01/01/2021"
 * formatDate(null as unknown as Date) // returns: ""
 * ```
 */
function formatDate(date: Date): string {
	try {
		return new Intl.DateTimeFormat('pt-BR', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}).format(new Date(date));
	} catch {
		return '';
	}
}

/**
 * ## FormatHour
 * ### Format Hour to string friendly
 * @example
 * ```js
 * formatHour("2021-01-01T15:00:00Z") // returns: "15:00:00"
 * formatHour(null as unknown as Date) // returns: ""
 * ```
 */
function formatHour(date: Date): string {
	try {
		return new Intl.DateTimeFormat('pt-BR', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
		}).format(new Date(date));
	} catch {
		return '';
	}
}

/**
 * ## AddDays
 * ### Add days to Date
 * @example
 * ```js
 * addDays(new Date("2021-01-01T15:00:00Z"), 5) // returns: Wed Jan 06 2021 12:00:00 GMT-0300
 * addDays(null as unknown as Date, 5) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
 * ```
 */
function addDays(date: Date, days: number): Date {
	try {
		const dateNew = new Date(date);
		dateNew.setDate(date.getDate() + days);
		return dateNew;
	} catch {
		return new Date(1970);
	}
}

/**
 * ## FinalOfDay
 * ### Returns Day With Hour 23:59:59
 * @example
 * ```js
 * finalOfDay(new Date("2021-01-01T15:00:00Z")) // returns: Fri Jan 01 2021 20:59:59 GMT-0300
 * finalOfDay(null as unknown as Date, 5) // returns: Wed Dec 31 1969 21:00:01 GMT-0300
 * ```
 */
function finalOfDay(date: Date): Date {
	if (!isValidDate(date)) {
		return new Date(1970);
	}
	const dateNew = addDays(new Date(date), 1);
	return new Date(new Date(dateNew).getTime() - 1);
}

export {
	isValidDate,
	stringToDate,
	stringToDateHour,
	formatDateAndHour,
	formatDate,
	formatHour,
	addDays,
	finalOfDay,
	isLeapYear,
	isValidDay,
	isValidMonth,
	isValidFullYear,
	isValidDateDeep,
};
