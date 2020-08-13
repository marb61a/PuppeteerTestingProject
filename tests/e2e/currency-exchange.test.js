const puppeteer = require('puppeteer');

describe('Currency Exchange Test', () => {
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

        await page.goto('http://zero.webappsecurity.com/login.html');
        await page.waitForSelector('#login_form');
        await page.type('#user_login', 'username');
        await page.type('#user_password', 'password');
        await page.click('#user_remember_me');
        await page.click('input[type="submit"]');
    });

    after(async function() {
        await browser.close();
    });

    it('Display Currency Exchange Form', async function(){

    });

    it('Exchange Currency', async function(){

    });
});
