export const isRequired = value => !value ? "Required" : undefined;

export const isTimeStrValid = timeStr => {
	const rgx = /[0-9]+/;
	if (timeStr.length > 2 || !timeStr.match(rgx)) return "2 digits only";
}

// export const isHrValid = timeStr => {
// 	if (parseInt(timeStr) < 1) return "Invalid time";
// }

// export const isMinSecValid = timeStr => {
// 	if (parseInt(timeStr) <) return "Invalid time";
// }

export const isNumberValid = num => {
	if (parseInt(num) < 1) return "Only positive numbers";

	const rgx = /[0-9]+/;
	if (!num.match(rgx)) return "Invalid number";
}

export const isDiameterValid = num => {
	if (parseFloat(num) < 1.0) return "Only positive numbers";

	const rgx = /[0-9]+\.[0-9]+/;
	if (!num.match(rgx)) return "Required format: 0.0";
}

export const isRangeValid = num => {
	if (parseInt(num) < 1 || parseInt(num) > 10) return "Range 1 - 10";
}

