const puppeteer = require('puppeteer');

describe('Login Test', () => {
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

    it('Login Test - Invalid Credentials', () => {

    });

    it('Login Test - Valid Credentials', () => {

    });

});
