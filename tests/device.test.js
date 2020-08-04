const puppeteer = require('puppeteer');

describe('Device Emulation', () => {
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

    after(async function() {
        await browser.close();
    });
});
