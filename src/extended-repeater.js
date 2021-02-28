const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let i         = 0,
		result    = [];
	if(options.addition !== undefined){
		do{
			result.push(String(options.addition));
			i++;
		}while(i < options.additionRepeatTimes);
	}
	options.additionSeparator  ? true : options.additionSeparator = '|';
	options.addition = result.join(options.additionSeparator);
	i = 0; result = [];
	do{
		result.push(String(str) + options.addition);
		i++;
	}while(i < options.repeatTimes);
	options.separator ? true : options.separator = '+';
	return result.join(options.separator);
};