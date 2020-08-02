const puppeteer = require('puppeteer');

describe('The third set of basic testing examples', () => {
    it('should launch the browser', async function() {
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

        await page.goto('http://example.com');

        // Getting the title of the page
        const title = await page.title();

        // Getting the page url
        const url = await page.url();

        // console.log('Title: ', title);
        // console.log('URL : ', url);

        // Getting text from an element
        // Element is a callback function which will return the element text content
        const text = await page.$eval('h1', element => element.textContent);
        // console.log('H1 text is : ', text);

        // Counting elements on a page
        // Single dollar signs on eval is for single elements
        // for multiple elements use 2 dollar signs
        const count = await page.$$eval('p', element => element.length);
        console.log('The number of p tags is : ', count);

        await browser.close();
    });
});
