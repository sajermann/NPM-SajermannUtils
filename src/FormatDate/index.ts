/**
 * ## IsValidDate
 * ### Verify if date is valid
 * @formatPatternIncoming "new Date()"
 * @example "new Date(2022, 1, 1)"
 * @returns "true"
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
 * ## StringToDate
 * ### Convert string to new Date
 * @formatPatternIncoming "dd/MM/YYYY"
 * @example "31/05/1991"
 * @returns "new Date()"
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
 * @formatPatternIncoming "dd/MM/YYYY HH:mm:ss"
 * @example "31/05/1991 12:30:01"
 * @returns "new Date()"
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
 * ## StringToDate
 * ### Convert string to string ISO
 * @formatPatternIncoming "dd/MM/YYYY"
 * @example "31/05/1991"
 * @returns "1991-05-31"
 */
function stringToDateIso(data: string): string {
	try {
		const arrayValues = data.split('/');
		const year = parseInt(arrayValues[2], 10);
		const month = parseInt(arrayValues[1], 10) - 1;
		const day = parseInt(arrayValues[0], 10);
		const t = new Date(year, month, day);
		return t.toISOString().split('T')[0];
	} catch {
		return '';
	}
}

/**
 * ## FormatDateAndHour
 * ### Convert Date to string
 * @formatPatternIncoming "yyyy-MM-ddTHH:mm:ssZ"
 * @example "2021-01-01T00:00:00Z"
 * @returns "01/01/2021 00:00:00"
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
 * ### Convert Date to string
 * @formatPatternIncoming "yyyy-MM-ddTHH:mm:ssZ"
 * @example "2021-01-01T00:00:00Z"
 * @returns "01/01/2021"
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
 * ### Convert Date to string
 * @formatPatternIncoming "yyyy-MM-ddTHH:mm:ssZ"
 * @example "2021-01-01T15:00:00Z"
 * @returns "15:00:00"
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
 * @formatPatternIncoming "date: 2021-01-01T15:00:00Z, days: 5"
 * @example "2021-01-01T15:00:00Z"
 * @returns "2021-01-06T15:00:00Z"
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
 * @formatPatternIncoming "date: 2021-01-01T15:00:00Z"
 * @example "2021-01-01T15:00:00Z"
 * @returns "2021-01-01T23:59:59Z"
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
	stringToDateIso,
	formatDateAndHour,
	formatDate,
	formatHour,
	addDays,
	finalOfDay,
};
