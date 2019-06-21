'use strict';

var qiaoExtElectron = require('../lib/qiao.ext.electron.js');

var test = async function(){
	try{
		const cookies = session.defaultSession.cookies;

		let s;
	
		// set
		await qiaoExtElectron.cookie(cookies, 'haha', 'nihao');

		// get
		s = await qiao.cookie(cookies, 'haha');
		console.log(1, s);
	
		// del
		await qiao.cookie(cookies, 'haha', null);
		s = await qiao.cookie(cookies, 'haha');
		console.log(2, s);
	}catch(e){
		console.log(e);
	}
};

test();