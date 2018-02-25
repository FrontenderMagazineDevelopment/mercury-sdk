'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}/**
 * Custom error message for abstract server response
 *
 * @namespace ErrorServerResponse
 * @class
 * @param {number} statusCode - http status code
 * @param {string} statusText - http status code text
 * @param {string | null} [message = null] - error details
 */var ErrorServerResponse=function(_Error){_inherits(ErrorServerResponse,_Error);/**
   * Constructor generates error instance
   * @memberof ErrorServerResponse
   * @constructor
   * @param {number} statusCode - http status code
   * @param {string} statusText - http status code text
   * @param {string | null} [message = null] - error details
   * @return {ErrorServerResponse} - current instance
   */function ErrorServerResponse(statusCode,statusText){var message=arguments.length>2&&arguments[2]!==undefined?arguments[2]:null;_classCallCheck(this,ErrorServerResponse);var _this=_possibleConstructorReturn(this,(ErrorServerResponse.__proto__||Object.getPrototypeOf(ErrorServerResponse)).call(this,message));_this.name='Server Response';_this.statusCode=statusCode;_this.statusText=statusText;_this.message=message;if(Error.captureStackTrace){Error.captureStackTrace(_this,ErrorServerResponse)}else{_this.stack=new Error().stack}return _this}return ErrorServerResponse}(Error);exports.default=ErrorServerResponse;
//# sourceMappingURL=ErrorServerResponse.js.map