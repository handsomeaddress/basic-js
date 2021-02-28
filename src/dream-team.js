const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(Array.isArray(members)){
		return members.map((el) => {
			if(typeof el == 'string'){
				return el.trim().toUpperCase().substr(0,1);
			}else{
				return '';
			}
		}).sort().join('');
	}else{
		return false;
	}
};
