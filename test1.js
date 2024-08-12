const assert = require('assert');
const { Builder } = require('selenium-webdriver');

describe('Website Kopi Kenangan', function () {
    let driver;

    before(async function() {
        driver = await new Builderlder().forBrowser('chrome').build();
    });

    it('Landing page Kopi Kenangan', async function() {
        await driver.get('https://kopikenangan.com');
        let URL = await driver.getCurrentUrl();
        let title = await driver.getTitle();
        assert.equal(URL, 'https://kopikenangan.com/');
        assert.equal(title, 'Kopi Kenangan');
    });

    after(() => driver && driver.quit());
})