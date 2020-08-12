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

    });

    it('Submit Feedback Form', async function(){

    });

    it('Display Results Page', async function(){

    });
});
