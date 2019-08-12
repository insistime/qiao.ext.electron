'use strict';

/**
 * is electron
 */
exports.isElectron = function() {
    return location.href && location.href.startsWith('file');
};

/**
 * is mac
 */
exports.isMac = function(){
    return process.platform === 'darwin';
};

/**
 * is linux
 */
exports.isLinux = function(){
    return process.platform === 'linux';
};

/**
 * is win
 */
exports.isWin = function(){
    return process.platform === 'win32';
};

/**
 * cookie
 *  name
 *  value
 */
exports.cookie = async function(cookies, name, value){
    // remove
	if(value === null){
        await exports.setCookie(cookies, { name: name, value: value });
		return;
	}
	
	// get
	if(typeof value == 'undefined'){
		return await exports.getCookie(cookies, { url: 'https://insistime.com', name: name});
	}
	
    // set
    await exports.setCookie(cookies, { name: name, value: value });
};

/**
 * set cookie
 *  options.url
 *  options.name
 *  options.value
 *  options.domain
 *  options.path
 *  options.secure
 *  options.httpOnly
 *  options.expirationDate
 */
exports.setCookie = async function(cookies, options){
    if(!cookies) return;

    options = options || {};
    options.url = options.url || 'https://insistime.com';

    try{
        await cookies.set(options);
    }catch(e){
        console.log(e);
    }
};

/**
 * get cookie
 *  options.url
 *  options.name
 *  options.domain
 *  options.path
 *  options.secure
 *  options.session
 */
exports.getCookie = async function(cookies, options){
    if(!cookies) return;

    options = options || {};

    try{
        return await cookies.get(options);
    }catch(e){
        console.log(e);
        return;
    }
};