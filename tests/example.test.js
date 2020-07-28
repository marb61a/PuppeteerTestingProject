const puppeteer = require('puppeteer');

describe('The first puppeteer test', () => {
    it('should launch the browser', async function(){
        // Unlike in selenium there is no need to launch any server
        const browser = await puppeteer.launch({
            // Setting headless to false ensures that the physical browser opens
            // Setting to true will run tests in headless mode
            headless: false
        });
        const page = await browser.newPage();

        await page.goto('http://example.com');
        // After visiting the qwebsire check that an element exists \ can be seen
        await page.waitForSelector('h1');

        await browser.close();
    })
})
