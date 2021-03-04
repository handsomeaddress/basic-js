const CustomError = require("../extensions/custom-error");
const command = [
	'--discard-next',
	'--discard-prev',
	'--double-next',
	'--double-prev'
];

module.exports = function transform(arr){
	if (!Array.isArray(arr)) {
        throw new Error('Error');
    }
	let nArr = [],
		next = 0;
	arr.forEach((el,index) => {
		if(next > 0){
			next = 0;
			return true;
		}
		switch(el){
			case command[0]:
				next++;
				break;
			case command[1]:
				if (arr[index - 2] !== command[0]){
					index--;
					nArr.pop();
				}
				break;
			case command[2]:
				index++;
				index < arr.length - 1 ? nArr.push(arr[index]) : false;
				break;
			case command[3]:
				if(index-1 > 0){
					if(arr[index-2] != command[0]){
						nArr.push(arr[index-1]);
					}else{
						return true;
					}
				}else{
					return true;
				}
				break;
			default:
				nArr.push(el);
				true;
			break;
		}
	});
	return nArr;
};