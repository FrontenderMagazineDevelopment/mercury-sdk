import 'isomorphic-fetch';
import ErrorServerResponse from '../ErrorServerResponse';

const code = 404;
const codeText = 'Not found';
const message = 'User not found';

describe('Error Service Response', () => {
  it('Error should be thrown', () => {
    expect(() => {
      throw new ErrorServerResponse(code, codeText, message);
    }).toThrow();
  });

  it('Error should properly transfer code', () => {
    try {
      throw new ErrorServerResponse(code, codeText, message);
    } catch (error) {
      expect(error.statusCode).toBe(code);
    }
  });

  it('Error should properly transfer code text', () => {
    try {
      throw new ErrorServerResponse(code, codeText, message);
    } catch (error) {
      expect(error.statusText).toBe(codeText);
    }
  });

  it('Error should properly transfer message', () => {
    try {
      throw new ErrorServerResponse(code, codeText, message);
    } catch (error) {
      expect(error.message).toBe(message);
    }
  });

  it('Error should set message as null if it omitter', () => {
    try {
      throw new ErrorServerResponse(code, codeText);
    } catch (error) {
      expect(error.message).toBe(null);
    }
  });

  it('Error should show proper stack trace', () => {
    try {
      throw new ErrorServerResponse(code, codeText, message);
    } catch (error) {
      expect(error.stack).not.toBe(undefined);
    }
  });

  it('Error should show proper stack trace if captureStackTrace unavailable', () => {
    try {
      Error.captureStackTrace = undefined;
      throw new ErrorServerResponse(code, codeText, message);
    } catch (error) {
      expect(error.stack).not.toBe(undefined);
    }
  });
});
