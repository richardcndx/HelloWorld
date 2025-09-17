const {Builder, By, until} = require ("selenium-webdriver");
const { Options } = require('selenium-webdriver/chrome');

const options = new Options();
options.addArguments('--disable-gpu')
let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

describe('testsuite for test this structure', async () => {

    it('first test case', async () => {
        await driver.get("https://lambdatest.github.io/sample-todo-app/")
        await driver.wait(until.elementsLocated(By.css('ul.list-unstyled li')), 10000);
        await driver.findElement(By.id("sampletodotext")).sendKeys("Learn Selenium", Key.RETURN)
    })
})