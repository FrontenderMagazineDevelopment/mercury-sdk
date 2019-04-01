import Mercury from '@postlight/mercury-parser';
import ErrorServerResponse from './ErrorServerResponse';

/**
 * SDK for mercury api
 *
 * @namespace MercuryWebParser
 * @class
 * @see https://mercury.postlight.com/web-parser/
 */
export default class MercuryWebParser {
  /**
   * Messages of mercury SDK
   * @type {Object}
   */
  static message = {
    fail: 'Failed fetching page',
  };

  /**
   * Get content of page
   * @param  {string} url - page url
   * @return {Promise.<Page>} - single page
   *
   * @example <caption>Get single page</caption>
   * import MercuryWebParser from '@frontender-magazine/mercury-sdk';
   * (async () => {
   *   const parser = new MercuryWebParser();
   *   const page = await parser.get('http://alistapart.com/article/design-like-a-teacher');
   * })();
   */
  async get(url) {
    return Mercury.parse(url);
  }

  /**
   * Get content of all pages
   * @param  {string} url - page url
   * @return {Promise.<PagesList>} - array of pages
   *
   * @example <caption>Get all pages as array</caption>
   * import MercuryWebParser from '@frontender-magazine/mercury-sdk';
   * (async () => {
   *   const parser = new MercuryWebParser();
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
