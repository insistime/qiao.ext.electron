'use strict';

var qiaoExtElectron = require('../lib/qiao.ext.electron.js');

var test = async function(){
	qiaoExtElectron.notification('test');
};

test();