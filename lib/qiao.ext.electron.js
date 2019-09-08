'use strict';

var net = require('electron').net;

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
 * req
 *  options
 */
exports.req = function(options){
    var request = net.request({
        url         : options.url,
        method      : options.method || 'POST',
        protocol    : options.protocol || 'https',
        headers     : options.headers || {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    });
    
    return new Promise(function(resolve, reject) {
        request.on('response', function(response){
            response.setEncoding('utf-8');
            response.on('data', function(chunk){
                resolve(chunk.toString());
            });
        });

        if(options.data){
            var content = require('querystring').stringify(options.data);
            request.write(content);
        }
        
        request.end();
    });
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