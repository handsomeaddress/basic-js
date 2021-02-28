const CustomError = require("../extensions/custom-error");

const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		this.chain.push(String(value));
		return this;
	},
	removeLink(position) {
		if(typeof position === 'number' && position > 0 && position <= this.chain.length - 1){
			this.chain.splice(position - 1, 1);
			return this;
		}else{
			this.chain = [];
			throw new Error;
		}
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		let result = this.chain;
		this.chain = [];
		return '( ' + result.join(' )~~( ') + ' )';
	}
};

module.exports = chainMaker;
