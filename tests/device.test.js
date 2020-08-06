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

        // Creates a new context to allow for incognito\anoymous browser mode
        // will not be available in headless mode
        const context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();

        await page.setDefaultTimeout(10000);
        await page.setDefaultNavigationTimeout(15000);
    });

    after(async function() {
        await browser.close();
    });

    it('Desktop device test', async function() {
        await page.setViewport({
            width: 1650,
            height: 1050
        });
        await page.goto('http://example.com');
        await page.waitFor(5000);
    });

    it('Tablet device test', async function() {
        const tablet = puppeteer.devices['iPad landscape'];
        await page.emulate(tablet);
        await page.goto('http://example.com');
        await page.waitFor(5000);
    });

    it('Mobile device test', async function() {
        const mobile = puppeteer.devices['iPhone X'];
        await page.emulate(mobile);
        await page.goto('http://example.com');
        await page.waitFor(5000);
    });

});
