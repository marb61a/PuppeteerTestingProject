const puppeteer = require('puppeteer');
const expect = require('chai').expect;

describe('The fifth set of basic testing examples', () => {
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

        // All below element tests have a 30 second default timeout
        // this will override this, there will be a popup list of 
        // functions affected by this
        await page.setDefaultTimeout(10000);

        // Setting the navigation timeout will take priority over default timeout
        // There will also be a popup list of functions affected
        await page.setDefaultNavigationTimeout(15000);

        await page.goto('http://example.com');

        // Getting the title of the page
        const title = await page.title();

        // Getting the page url
        const url = await page.url();

        // Getting text from an element
        // Element is a callback function which will return the element text content
        const text = await page.$eval('h1', element => element.textContent);

        // Counting elements on a page
        // Single dollar signs on eval is for single elements
        // for multiple elements use 2 dollar signs
        const count = await page.$$eval('p', element => element.length);

        // Expect title to be a string with a value which should match
        expect(title).to.be.a('string', 'Example Domain');

        // Expect url to include a certain value
        expect(url).to.include('example.com');

        // Expect the text of an element to equal a certain value
        expect(text).to.be.a('string', 'Example Domain');

        // Expect the count of elements to equal a qunatity
        expect(count).to.equal(2);

        await browser.close();
    });
});
