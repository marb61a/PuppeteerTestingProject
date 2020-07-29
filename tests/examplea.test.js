const puppeteer = require('puppeteer');

describe('The second set of basic testing examples', () => {
    it('should launch the browser', async function(){
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
        
        // Originally from the TestCafe framework but can be used for training purposes
        // on most automation platforms
        await page.goto('https://devexpress.github.io/testcafe/example/');

        // Sending values to an input field, there are 2 values taken
        // The first is the element, the second is the value to be sent
        // A third element can be added to slow down value entry to ensure accuracy
        // Avoid using delays if possible in production code
        await page.type('#developer-name', 'Martin', {
            delay: 0
        });

        // Clicking on an element in the page, in this case a checkbox
        // A second argument allowing for multiple clicks is allowed
        await page.click('#tried-test-cafe', {
            clickCount: 1
        });

        // Clicking on a dropdown menu
        // There are 2 main arguments taken, the first is the element name
        // the second is the value to be selected from the dropdown
        await page.select('#preferred-interface', 'JavaScript API');

        await page.waitFor(2000);

        await browser.close();
    })
});
