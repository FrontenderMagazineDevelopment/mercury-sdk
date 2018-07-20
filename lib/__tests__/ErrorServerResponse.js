"use strict";

require("isomorphic-fetch");

var _ErrorServerResponse = _interopRequireDefault(require("../ErrorServerResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = 404;
var codeText = 'Not found';
var message = 'User not found';
describe('Error Service Response', function () {
  it('Error should be thrown', function () {
    expect(function () {
      throw new _ErrorServerResponse.default(code, codeText, message);
    }).toThrow();
  });
  it('Error should properly transfer code', function () {
    try {
      throw new _ErrorServerResponse.default(code, codeText, message);
    } catch (error) {
      expect(error.statusCode).toBe(code);
    }
  });
  it('Error should properly transfer code text', function () {
    try {
      throw new _ErrorServerResponse.default(code, codeText, message);
    } catch (error) {
      expect(error.statusText).toBe(codeText);
    }
  });
  it('Error should properly transfer message', function () {
    try {
      throw new _ErrorServerResponse.default(code, codeText, message);
    } catch (error) {
      expect(error.message).toBe(message);
    }
  });
  it('Error should set message as null if it omitter', function () {
    try {
      throw new _ErrorServerResponse.default(code, codeText);
    } catch (error) {
      expect(error.message).toBe(null);
    }
  });
  it('Error should show proper stack trace', function () {
    try {
      throw new _ErrorServerResponse.default(code, codeText, message);
    } catch (error) {
      expect(error.stack).not.toBe(undefined);
    }
  });
  it('Error should show proper stack trace if captureStackTrace unavailable', function () {
    try {
      Error.captureStackTrace = undefined;
      throw new _ErrorServerResponse.default(code, codeText, message);
    } catch (error) {
      expect(error.stack).not.toBe(undefined);
    }
  });
});
//# sourceMappingURL=ErrorServerResponse.js.map