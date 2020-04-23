# urls
## homepage
[https://code.insistime.com/qiao.ext.electron](https://code.insistime.com/qiao.ext.electron)

## github
[https://github.com/insistime/qiao.ext.electron](https://github.com/insistime/qiao.ext.electron)

## npm
[https://www.npmjs.com/package/qiao.ext.electron](https://www.npmjs.com/package/qiao.ext.electron)

## donate
[http://uikoo9.com/donate](http://uikoo9.com/donate)

# started
## install
npm install qiao.ext.electron

## dependencies

## documentation

# api
## is
```javascript
'use strict';

var qiaoExtElectron = require('qiao.ext.electron');

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
```

## cookie
```javascript
'use strict';

var qiaoExtElectron = require('qiao.ext.electron');

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
```

## notification
```javascript
'use strict';

var qiaoExtElectron = require('qiao.ext.electron');

var test = async function(){
	qiaoExtElectron.notification('test');
};

test();
```

# version
## 0.0.6.20200423
1. npm un electron

## 0.0.5.20200325
1. add notification

## 0.0.4.20191206
1. add funding
2. update packages

## 0.0.3.20190908
1. add req method

## 0.0.2.20190812
1. is electron
2. is mac
3. is win
4. is linux

## 0.0.1.20190621
1. setCookie
2. getCookie
3. cookie
