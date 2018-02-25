/**
 * Custom error message for abstract server response
 *
 * @namespace ErrorServerResponse
 * @class
 * @param {number} statusCode - http status code
 * @param {string} statusText - http status code text
 * @param {string | null} [message = null] - error details
 */
export default class ErrorServerResponse extends Error {
  /**
   * Constructor generates error instance
   * @memberof ErrorServerResponse
   * @constructor
   * @param {number} statusCode - http status code
   * @param {string} statusText - http status code text
   * @param {string | null} [message = null] - error details
   * @return {ErrorServerResponse} - current instance
   */
  constructor(statusCode, statusText, message = null) {
    super(message);
    this.name = 'Server Response';
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.message = message;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorServerResponse);
    } else {
      this.stack = new Error().stack;
    }
  }
}
