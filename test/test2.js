const { Builder, By, Key, until, Capabilities } = require('selenium-webdriver');
const { expect } = require('chai');
const chrome = require('selenium-webdriver/chrome');

const testCase = {
    'describe'  : 'Demo Testing - Mocha, Chai and Selenium Webdriver',
	'positive'  : {
		'search' : 'As an User, I should be able to successfully searching'
	}
};

let driver;

describe(`@demoTest2 | ${testCase.describe}`, () => {

    before( async () => {
        let chromeCapabilities = Capabilities.chrome();

        //Setting chrome options
        chromeCapabilities.set("goog:chromeOptions",{
            prefs: {
                'profile.managed_default_content_settings.popups' : 2,
                'profile.managed_default_content_settings.notifications' : 2
            }
        });

        driver = new Builder()
        .forBrowser('chrome')
        .withCapabilities(chromeCapabilities)
        // .setChromeOptions(new chrome.Options().headless()) //headless mode
        .setChromeOptions(new chrome.Options()) //normal mode
        .build();

        driver.getWindowHandle();
    }); 
   
    it(`@search3 | ${testCase.positive.search}`, async () => {
        await driver.get('https://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('facebook', Key.ENTER);
        await driver.wait(until.elementLocated(By.id('search')));
    });    

    after( () => driver.quit());

});