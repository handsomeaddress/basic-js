const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
	let k = 0.693 / HALF_LIFE_PERIOD;
	if(sampleActivity != ''
	&& typeof sampleActivity == 'string'
	&& sampleActivity > 0
	&& sampleActivity < 15){
		return Math.ceil(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / k);
	}else{
		return false;
	}
};
