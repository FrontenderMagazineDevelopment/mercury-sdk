import response from '../__mocks__/response.json';

jest.mock('../MercuryWebParser');
const MercuryWebParser = require('../MercuryWebParser').default;

MercuryWebParser.mockImplementation(() => ({
  get: () => response,
  getAll: () => [response],
}));

const url =
  'https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-2-page-load-performance-33b932d97cf2';

describe('Mercury Web Parser', () => {
  it('Should return parsed page on getting single page', async () => {
    const parser = new MercuryWebParser();
    const page = await parser.get(url);
    expect(page).toEqual(response);
  });

  it('Should return parsed pages array on getting all pages', async () => {
    const parser = new MercuryWebParser();
    const page = await parser.getAll(url);
    expect(page).toEqual([response]);
  });
});
