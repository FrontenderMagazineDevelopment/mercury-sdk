# Mercury API SDK

JavaScript SDK for [Mercury Web Parser API](https://mercury.postlight.com/web-parser/).

# Bages

[![Travis](https://img.shields.io/travis/FrontenderMagazineDevelopment/mercury-sdk.svg?style=for-the-badge)](https://travis-ci.org/FrontenderMagazineDevelopment/mercury-sdk) [![Codecov branch](https://img.shields.io/codecov/c/github/FrontenderMagazineDevelopment/mercury-sdk/master.svg?style=for-the-badge)](https://codecov.io/gh/FrontenderMagazineDevelopment/mercury-sdk)

# Documentation
## Classes

<dl>
<dt><a href="#ErrorServerResponse">ErrorServerResponse</a></dt>
<dd></dd>
<dt><a href="#MercuryWebParser">MercuryWebParser</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#get">get(url)</a> ⇒ <code>Promise.&lt;Page&gt;</code></dt>
<dd><p>Get content of page</p>
</dd>
<dt><a href="#getAll">getAll(url)</a> ⇒ <code>Promise.&lt;PagesList&gt;</code></dt>
<dd><p>Get content of all pages</p>
</dd>
</dl>

<a name="ErrorServerResponse"></a>

## ErrorServerResponse
**Kind**: global class  

* [ErrorServerResponse](#ErrorServerResponse)
    * [new ErrorServerResponse(statusCode, statusText, [message])](#new_ErrorServerResponse_new)
    * [.module.exports](#ErrorServerResponse.module.exports)
        * [new module.exports(statusCode, statusText, [message])](#new_ErrorServerResponse.module.exports_new)

<a name="new_ErrorServerResponse_new"></a>

### new ErrorServerResponse(statusCode, statusText, [message])
Custom error message for abstract server response


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| statusCode | <code>number</code> |  | http status code |
| statusText | <code>string</code> |  | http status code text |
| [message] | <code>string</code> \| <code>null</code> | <code>null</code> | error details |

<a name="ErrorServerResponse.module.exports"></a>

### ErrorServerResponse.module.exports
**Kind**: static class of [<code>ErrorServerResponse</code>](#ErrorServerResponse)  
<a name="new_ErrorServerResponse.module.exports_new"></a>

#### new module.exports(statusCode, statusText, [message])
Constructor generates error instance

**Returns**: [<code>ErrorServerResponse</code>](#ErrorServerResponse) - - current instance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| statusCode | <code>number</code> |  | http status code |
| statusText | <code>string</code> |  | http status code text |
| [message] | <code>string</code> \| <code>null</code> | <code>null</code> | error details |

<a name="MercuryWebParser"></a>

## MercuryWebParser
**Kind**: global class  
**See**: https://mercury.postlight.com/web-parser/  
<a name="new_MercuryWebParser_new"></a>

### new MercuryWebParser()
SDK for mercury api

<a name="get"></a>

## get(url) ⇒ <code>Promise.&lt;Page&gt;</code>
Get content of page

**Kind**: global function  
**Returns**: <code>Promise.&lt;Page&gt;</code> - - single page  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | page url |

**Example** *(Get single page)*  
```js
import MercuryWebParser from '@frontender-magazine/mercury-sdk';
(async () => {
  const parser = new MercuryWebParser();
  const page = await parser.get('http://alistapart.com/article/design-like-a-teacher');
})();
```
<a name="getAll"></a>

## getAll(url) ⇒ <code>Promise.&lt;PagesList&gt;</code>
Get content of all pages

**Kind**: global function  
**Returns**: <code>Promise.&lt;PagesList&gt;</code> - - array of pages  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | page url |

**Example** *(Get all pages as array)*  
```js
import MercuryWebParser from '@frontender-magazine/mercury-sdk';
(async () => {
  const parser = new MercuryWebParser();
  const pages = await parser.getAll('http://alistapart.com/article/design-like-a-teacher');
})();
```
