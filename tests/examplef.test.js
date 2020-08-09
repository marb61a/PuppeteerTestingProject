const puppeteer = require('puppeteer');
const expect = require('chai').expect;

// Must use destructuring to get values from the helpers file
const { click } = require('../lib/helpers');
const { getText } = require('../lib/helpers');
const { getCount } = require('../lib/helpers');

describe('The seventh set of basic testing examples', () => {
    let browser;
    let page;

    // Will be ran before any tests
    before(async function(){
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 150,
            devtools: false,
            defaultViewport: null,
            args: ['--start-maximized']
        });

        page = await browser.newPage();

        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(15000);
    });

    beforeEach(async function(){
        // Runs before each test step

    });

    // Will be ran after tests
    after(async function() {
        await browser.close();
    });

    afterEach(async function(){
        // Runs after each test step

    });

    it('should launch the browser', async function() {
        await page.goto('http://example.com');
        await page.waitForXPath('//h1');

        const title = await page.title();
        const url = await page.url();
        const text = await getText(page, 'h1');
        const count = await getCount(page, 'p');

        expect(title).to.be.a('string', 'Example Domain');
        expect(url).to.include('example.com');
        expect(text).to.be.a('string', 'Example Domain');
        expect(count).to.equal(2);

        await page.goto('http://zero.webappsecurity.com/index.html');
        await click(page, '#signin_button');
        await page.waitFor(() => !document.querySelector('#signin_button'));    
        await page.waitForSelector('#signin_button', {
            hidden: true,
            timeout: 3000
        });
    });
});
