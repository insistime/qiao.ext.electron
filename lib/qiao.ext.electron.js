'use strict';

var net = require('electron').net;
var Notification = require('electron').Notification;

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

/**
new Notification([options]) 实验功能
参数 Object (可选)
title String - 通知的标题, 将在通知窗口的顶部显示.
subtitle String (可选) 通知的副标题, 显示在标题下面。 macOS
body String 通知的正文文本, 将显示在标题或副标题下面.
silent Boolean (可选) 在显示通知时是否发出系统提示音。
 icon(String | NativeImage ) (可选) 用于在该通知上显示的图标。
hasReply Boolean (可选) 是否在通知中添加一个答复选项。 macOS
timeout Type String (optional) Linux Windows - The timeout duration of the notification. Can be 'default' or 'never'.
replyPlaceholder String (可选) 答复输入框中的占位符。 macOS
sound String (可选) 显示通知时播放的声音文件的名称。 macOS
urgency String (optional) Linux - The urgency level of the notification. Can be 'normal', 'critical', or 'low'.
actions NotificationAction[] (可选) macOS - 要添加到通知中的操作 请阅读 NotificationAction文档来了解可用的操作和限制。
closeButtonText String (可选) macOS - 自定义的警告框关闭按钮文字。如果该字符串为空，那么将使用本地化的默认文本。
 */
exports.notification = function(options){
    var defaultOptions = {
        title   : '提示',
        silent  : false
    };

    var opt = Object.assign({}, defaultOptions);
    if(typeof options == 'string') opt.body = options;
    if(typeof options == 'object') opt = Object.assign(opt, options);

    var notification = new Notification(opt);
    notification.show();
};