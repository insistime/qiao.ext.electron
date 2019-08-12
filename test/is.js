'use strict';

var qiaoExtElectron = require('../lib/qiao.ext.electron.js');

var test = async function(){
	try{
		// console.log('is electron ', qiaoExtElectron.isElectron());
		console.log('is mac ', qiaoExtElectron.isMac());
		console.log('is linux ', qiaoExtElectron.isLinux());
		console.log('is win ', qiaoExtElectron.isWin());
	}catch(e){
		console.log(e);
	}
};

test();