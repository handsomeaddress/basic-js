const CustomError = require("../extensions/custom-error");

const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipheringMachine{
	constructor(options) {
		this.options = options;
	}
	encrypt(message, key){
		return this.machine(message, key, 1);
	}; 
	decrypt(message, key){
		return this.machine(message, key, 0);
	}
	machine(message, key, flag){
		if (!message || !key){throw new Error;}
		let res = [], // зашифрованный массив
			i = -1; // счётчик для сбора итогового массива

		// массивы исходных данных
		message = message.toUpperCase().split('');
		key     = key.toUpperCase().split('');
		// исходный массив без элементов подходящих для работы
		let rMessage = message.map((el) =>{
			if(ABC.indexOf(el) == -1){
				return el;
			}
		})
		// элементы для работы
		message = message.map((el) =>{
			if(ABC.indexOf(el) > -1){
				return ABC.indexOf(el);
			}
		}).filter(e => e != undefined);
		// массив со значениями сдвига по ключу
		key = key.map((el) =>{
			return ABC.indexOf(el);
		})
		//шифровка дешифровка
		if(flag == 1){
			res = message.map((el, index) => {
				let shift           = key[index - (key.length * Math.trunc(index / key.length))],
					encryptedSumbol = el + shift;
				return ABC[encryptedSumbol > 25 ? encryptedSumbol - 26 : encryptedSumbol];
			})
		}else{
			res = message.map((el, index) => {
				let shift           = key[index - (key.length * Math.trunc(index / key.length))],
					encryptedSumbol = el - shift;
				return ABC[encryptedSumbol < 0 ? encryptedSumbol + 26 : encryptedSumbol];
			})
		}
		res = rMessage.map(el => {
			if(el == undefined){
				i++;
				return res[i];
			}else{
				return el;
			}
		});
		return this.options == false ? res.reverse().join('') : res.join('');
	}
}

module.exports = VigenereCipheringMachine;