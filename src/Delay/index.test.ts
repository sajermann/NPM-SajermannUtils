import { delay } from '.';

describe('Utils/Delay', () => {
	test(`Must result result delay 0.5 seconds`, async () => {
		await delay(500);
	});
});
