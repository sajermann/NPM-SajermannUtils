import { isValidDateDeep } from './FormatDate';

console.log(
	isValidDateDeep(
		null as unknown as { day: number; month: number; fullYear: number }
	)
);
