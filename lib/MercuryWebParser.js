'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();require('babel-polyfill');var _isomorphicFetch=require('isomorphic-fetch');var _isomorphicFetch2=_interopRequireDefault(_isomorphicFetch);var _ErrorServerResponse=require('./ErrorServerResponse');var _ErrorServerResponse2=_interopRequireDefault(_ErrorServerResponse);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _asyncToGenerator(fn){return function(){var gen=fn.apply(this,arguments);return new Promise(function(resolve,reject){function step(key,arg){try{var info=gen[key](arg);var value=info.value}catch(error){reject(error);return}if(info.done){resolve(value)}else{return Promise.resolve(value).then(function(value){step('next',value)},function(err){step('throw',err)})}}return step('next')})}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}/**
 * SDK for mercury api
 *
 * @namespace MercuryWebParser
 * @class
 * @param {string} key - mercury api key
 */var MercuryWebParser=function(){/**
   * Constructor, save mercury api key
   * @param {string} key mercury api key
   */function MercuryWebParser(key){_classCallCheck(this,MercuryWebParser);if(key===undefined)throw new Error(MercuryWebParser.message.key);this.service='https://mercury.postlight.com/parser';this.key=key}/**
   * Messages of mercury SDK
   * @type {Object}
   */_createClass(MercuryWebParser,[{key:'get',/**
   * Get content of page
   * @param  {string} - url page url
   * @return {Promise.<Page>} - single page
   *
   * @example <caption>Get single page</caption>
   * (async () => {
   *   const parser = new MercuryWebParser('NeBIXVwRCXVIS3lJC74dsRAMBOaIK6H5EEkFudvs');
   *   const page = await parser.get('http://alistapart.com/article/design-like-a-teacher');
   * })();
   */value:function(){var _ref=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee(url){var response,data;return regeneratorRuntime.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return(0,_isomorphicFetch2.default)(this.service+'?url='+url,{headers:{'Content-Type':'application/json','x-api-key':this.key}});case 2:response=_context.sent;if(response.ok){_context.next=5;break}throw new _ErrorServerResponse2.default(response.status,response.statusText,MercuryWebParser.message.fail);case 5:_context.next=7;return response.json();case 7:data=_context.sent;return _context.abrupt('return',data);case 9:case'end':return _context.stop();}}},_callee,this)}));function get(_x){return _ref.apply(this,arguments)}return get}()/**
   * Get content of page
   * @param  {string} - url page url
   * @return {Promise.<PagesList>} - array of pages
   *
   * @example <caption>Get all pages as array</caption>
   * (async () => {
   *   const parser = new MercuryWebParser('NeBIXVwRCXVIS3lJC74dsRAMBOaIK6H5EEkFudvs');
   *   const pages = await parser.getAll('http://alistapart.com/article/design-like-a-teacher');
   * })();
   */},{key:'getAll',value:function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function _callee2(url){var pages,page;return regeneratorRuntime.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:pages=[];page=void 0;case 2:if(!(pages.length===0||page.next_page_url!==null)){_context2.next=9;break}_context2.next=5;return this.get(url);case 5:page=_context2.sent;pages.push(page);_context2.next=2;break;case 9:return _context2.abrupt('return',pages);case 10:case'end':return _context2.stop();}}},_callee2,this)}));function getAll(_x2){return _ref2.apply(this,arguments)}return getAll}()/**
   * Pages list array
   *
   * @namespace MercuryWebParser
   * @typedef {PagesList} Array of pages
   *
   * @property {Array.<Page>} - array of pages
   *//**
   * Page object
   *
   * @namespace MercuryWebParser
   * @typedef {Page} Page representation
   *
   * @property {string} title - page title
   * @property {string} content - page content
   * @property {string} date_published - page publication timestamp
   * @property {string} lead_image_url - lead image url
   * @property {string} dek - ?
   * @property {string} url - url of the current page
   * @property {string} domain - page domain
   * @property {string} excerpt - ?
   * @property {number} word_count - count of the words on the page
   * @property {string} direction - ltr or rtl text direction
   * @property {number} total_pages - total pages count
   * @property {number} rendered_pages - ?
   * @property {string | null} next_page_url - next page url if available or null if there are none
   */}]);return MercuryWebParser}();MercuryWebParser.message={key:'You need API key',fail:'Failed fetching page'};exports.default=MercuryWebParser;
//# sourceMappingURL=MercuryWebParser.js.map