/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */

/**
 * ### IsValidCnpj
 * Verify if Cnpj is valid
 * @example
 * ```js
 * isValidCnpj("12345678901234")) // returns: false
 * ```
 */
function isValidCnpj(cnpj: string): boolean {
	try{
		const cnpjForVerify = cnpj.replace(/[^\d]+/g,'');

		if(cnpjForVerify === '') {
			return false;
		}

		if (cnpjForVerify.length !== 14){
			return false;
		}

		if (
			cnpjForVerify === "00000000000000" ||
			cnpjForVerify === "11111111111111" ||
			cnpjForVerify === "22222222222222" ||
			cnpjForVerify === "33333333333333" ||
			cnpjForVerify === "44444444444444" ||
			cnpjForVerify === "55555555555555" ||
			cnpjForVerify === "66666666666666" ||
			cnpjForVerify === "77777777777777" ||
			cnpjForVerify === "88888888888888" ||
			cnpjForVerify === "99999999999999"
			) {return false;}

			// Valida DVs
		let lengthCustomerId = cnpjForVerify.length - 2
		let numberWithoutDv = cnpjForVerify.substring(0,lengthCustomerId);
		const dv = cnpjForVerify.substring(lengthCustomerId);
		let sum = 0;
		let pos = lengthCustomerId - 7;
		for (let i = lengthCustomerId; i >= 1; i--) {
			sum += parseInt(numberWithoutDv.charAt(lengthCustomerId - i),10) * pos--;
			if (pos < 2) {
				pos = 9;
			}
		}
		let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
		if (result !== parseInt(dv.charAt(0),10)) {
			return false;
		}

		lengthCustomerId += 1;
		numberWithoutDv = cnpjForVerify.substring(0,lengthCustomerId);
		sum = 0;
		pos = lengthCustomerId - 7;
		for (let i = lengthCustomerId; i >= 1; i--) {
			sum += parseInt(numberWithoutDv.charAt(lengthCustomerId - i),10) * pos--;
			if (pos < 2) {
				pos = 9;
			}
		}
		result = sum % 11 < 2 ? 0 : 11 - sum % 11;
		if (result !== parseInt(dv.charAt(1),10)) {
			return false;
		}

		return true;
	}catch{
		return false;
	}
}

/**
 * ### AddCnpjMask
 * Add Mask in Cnpj
 * @example
 * ```js
 * addCnpjMask("07526557000100")) // returns: "07.526.557/0001-00"
 * ```
 */
 function addCnpjMask(value: string): string {
	try{
	if (value.length !== 14) {
		return value;
	}
	return value.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
		'$1.$2.$3/$4-$5'
	);
	}catch{
		return ''
	}
}


/**
 * ### RemoveCnpjMask
 * Remove Mask from Cnpj
 * @example
 * ```js
 * removeCnpjMask("07.526.557/0001-00")) // returns: "07526557000100"
 * ```
 */
function removeCnpjMask(value: string): string {
	try{
		return value.replace(/[^\d]+/g, '');
	}catch{
		return '';
	}
}


export { isValidCnpj, addCnpjMask, removeCnpjMask }
