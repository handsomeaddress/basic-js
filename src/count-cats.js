const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let count = 0;
	matrix.flat(Infinity).forEach(el => {
		el == '^^' ? count++ : '';
	});
	return count;
};