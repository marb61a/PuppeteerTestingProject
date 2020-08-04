const puppeteer = require('puppeteer');

describe('The first puppeteer test', () => {
    it('should launch the browser', async function(){
        // Unlike in selenium there is no need to launch any server
        const browser = await puppeteer.launch({
            // Setting headless to false ensures that the physical browser opens
            // Setting to true will run tests in headless mode
            // Headless testing will be a lot quicker than non-headless
            headless: false,
            // slowMo allows for slowing down a test
            slowMo: 150,
            // Opens up the browser with devtools open when set to true
            devtools: false
        });
        const page = await browser.newPage();
        
        await page.goto('http://example.com');

        // Pauses test execution (milliseconds)
        // await page.waitFor(3000);

        // After visiting the website check that an element exists \ can be seen
        await page.waitForSelector('h1');

        // Reloads the page
        // await page.reload();
        // await page.waitFor(3000);
        // await page.waitForSelector('h1');

        await page.goto('https://dev.to');
        await page.waitForSelector('#top-bar');
        
        // Goes back from second page to first and then goes forward to second page
        await page.goBack();
        await page.waitForSelector('h1');
        await page.goForward();
        await page.waitForSelector('#top-bar');

        await browser.close();
    })
})
