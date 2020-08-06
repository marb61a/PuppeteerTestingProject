module.exports = {
    click: async function(page, selector){
        try {
            await page.waitForSelector(selector);
            await page.click(sslector);
        } catch (error) {
            throw new Error(`Could not click on selector : ${selector}`);

        }
    },
    getText: async function(page, selector){
        try {
            
        } catch (error) {
            
        }
    }
}
