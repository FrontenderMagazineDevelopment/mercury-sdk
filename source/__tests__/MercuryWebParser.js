import nock from 'nock';
import MercuryWebParser from '../MercuryWebParser';
import response from '../__mocks__/response.json';

const url =
  'https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2';
const key = 'NeBIXVwRCXVIS3lJC74dsRAMBOaIK6H5EEkFudvs';

describe('Mercury Web Parser', () => {
  it('Should throw error if you do not pass key', () => {
    expect(() => {
      new MercuryWebParser(); // eslint-disable-line
    }).toThrow();
  });

  it('Should return parsed page on getting single page', async () => {
    nock(/[.]+/)
      .get('/parser')
      .query({ url })
      .reply(200, response);
    const parser = new MercuryWebParser(key);
    const page = await parser.get(url);
    expect(page).toEqual(response);
  });

  it('Should throw ErrorServerResponse if server fail on getting single page', async () => {
    nock(/[.]+/)
      .get('/parser')
      .query({ url })
      .reply(500);
    try {
      const parser = new MercuryWebParser(key);
      await parser.get(url);
    } catch (error) {
      expect(error.name).toEqual('Server Response');
    }
  });

  it('Should return parsed pages array on getting all pages', async () => {
    nock(/[.]+/)
      .get('/parser')
      .query({ url })
      .reply(200, response);
    const parser = new MercuryWebParser(key);
    const page = await parser.getAll(url);
    expect(page).toEqual([response]);
  });

  it('Should throw ErrorServerResponse if server fail on getting all pages', async () => {
    nock(/[.]+/)
      .get('/parser')
      .query({ url })
      .reply(500);
    try {
      const parser = new MercuryWebParser(key);
      await parser.getAll(url);
    } catch (error) {
      expect(error.name).toEqual('Server Response');
    }
  });
});
