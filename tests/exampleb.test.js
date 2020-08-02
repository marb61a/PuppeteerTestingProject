const puppeteer = require('puppeteer');

describe('The third set of basic testing examples', () => {
    it('should launch the browser', () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 150,
            devtools: false,
            // Will remove the viewport applied on start
            defaultViewport: null,
            // Is a chrome flag that starts the brower maximised
            args: ['--start-maximized']
        });
        const page = await browser.newPage();

        await page.goto('https://devexpress.github.io/testcafe/example/');

        await browser.close();
    });
});
