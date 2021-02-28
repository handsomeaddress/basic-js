const CustomError = require("../extensions/custom-error");

let i      = 1,
	result = 0;
module.exports = class DepthCalculator {
	calculateDepth(arr){
		arr.every((el) => {
			if(Array.isArray(el)){
				i++;
				result = i;
				this.calculateDepth(arr.flat(1));
			}else{
				return true;
			}
		});
		i = 1;
		return result == 0 ? 1 : result;
	}
};