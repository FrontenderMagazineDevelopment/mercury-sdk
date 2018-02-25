import 'babel-polyfill';
import fetch from 'isomorphic-fetch';
import ErrorServerResponse from './ErrorServerResponse';

/**
 * SDK for mercury api
 *
 * @namespace MercuryWebParser
 * @class
 * @param {string} key - mercury api key
 * @see https://mercury.postlight.com/web-parser/
 */
export default class MercuryWebParser {
  /**
   * Constructor, save mercury api key
   * @param {string} key - mercury api key
   */
  constructor(key) {
    if (key === undefined) throw new Error(MercuryWebParser.message.key);
    this.service = 'https://mercury.postlight.com/parser';
    this.key = key;
  }

  /**
   * Messages of mercury SDK
   * @type {Object}
   */
  static message = {
    key: 'You need API key',
    fail: 'Failed fetching page',
  };

  /**
   * Get content of page
   * @param  {string} url - page url
   * @return {Promise.<Page>} - single page
   *
   * @example <caption>Get single page</caption>
   * (async () => {
   *   const parser = new MercuryWebParser('NeBIXVwRCXVIS3lJC74dsRAMBOaIK6H5EEkFudvs');
   *   const page = await parser.get('http://alistapart.com/article/design-like-a-teacher');
   * })();
   */
  async get(url) {
    const response = await fetch(`${this.service}?url=${url}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.key,
      },
    });
    if (!response.ok)
      throw new ErrorServerResponse(response.status, response.statusText, MercuryWebParser.message.fail);
    const data = await response.json();
    return data;
  }

  /**
   * Get content of page
   * @param  {string} url - page url
   * @return {Promise.<PagesList>} - array of pages
   *
   * @example <caption>Get all pages as array</caption>
   * (async () => {
   *   const parser = new MercuryWebParser('NeBIXVwRCXVIS3lJC74dsRAMBOaIK6H5EEkFudvs');
   *   const pages = await parser.getAll('http://alistapart.com/article/design-like-a-teacher');
   * })();
   */
  async getAll(url) {
    const pages = [];
    let page;
    while (pages.length === 0 || page.next_page_url !== null) {
      page = await this.get(url);
      pages.push(page);
    }
    return pages;
  }

  /**
   * Pages list array
   *
   * @namespace MercuryWebParser
   * @typedef {PagesList} Array of pages
   *
   * @property {Array.<Page>} - array of pages
   */

  /**
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
   */
}
