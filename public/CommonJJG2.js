/**
 * @result Module'name is CommonJJG2
 * @author JIAO Jingguo
 * @date 2022.11.9
 *
*/
(function(root, factory) {
    if(typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module
        define([], function() {
            return factory.call(root);
        })
    } else {
        // Browser globals
        root.CommonJJG2 = factory.call(root);
    }
}(this, function() {
    'use strict';
    const topWindow = this; // 获取全局的window
    function message() {
        return 'This is CommonJJG.js File!';
    }
    function Eat(str) {
        topWindow.console.log(str + message());
    }
    return {
        cur_url: topWindow.location.href,
        Eat: Eat,
    }
}));