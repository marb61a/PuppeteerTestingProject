const puppeteer = require('puppeteer');

describe('The second set of basic testing examples', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 150,
            devtools: false
        });
        const page = await browser.newPage();
        
        // Originally from the TestCafe framework but can be used for training purposes
        // on most automation platforms
        await page.goto('https://devexpress.github.io/testcafe/example/');

        // Sending values to an input field, there are 2 values taken
        // The first is the element, the second is the value to be sent
        await page.type('#developer-name', 'Martin');

        await browser.close();
    })
});
