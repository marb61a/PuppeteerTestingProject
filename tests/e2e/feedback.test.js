const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('Feedback Test', () => {
    let browser;
    let page;

    before(async function(){
        browser = await puppeteer.launch({
            headless: true,
            slowMo: 0,
            devtools: false,
            defaultViewport: null,
            args: ['--start-maximized']
        });

        page = await browser.newPage();

        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(15000);
    });

    after(async function() {
        await browser.close();
    });

    it('Display Feedback Form', async function(){
        await page.goto('http://zero.webappsecurity.com/index.html');
        await page.waitForSelector('#feedback');
        await page.click('#feedback');

    });

    it('Submit Feedback Form', async function(){
        await page.waitForSelector('form');
        await page.type('#name', 'Name');
        await page.type('#email', 'test@example.com');
        await page.type('#subject', 'Subject');
        await page.type('#comment', 'Just a test message for the textarea');

        await page.click('input[type="submit"]');
    });

    it('Display Results Page', async function(){
        await page.waitForSelector('#feedback-title');
        const url = await page.url();
        expect(url).to.include('/sendFeedback.html');

    });
});
