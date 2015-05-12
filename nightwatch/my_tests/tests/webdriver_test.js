var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;
	
var driver2 = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver2.get('http://www.google.com');
driver2.findElement(By.name('q')).sendKeys('webdriver');
driver2.findElement(By.name('btnG')).click();
//driver2.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver2.quit();


var driver = new webdriver.Builder()
    .forBrowser('internet explorer')
    .build();

driver.get('http://www.google.com');
driver.findElement(By.name('q')).sendKeys('webdriver');
driver.findElement(By.name('btnG')).click();
//driver.wait(until.titleIs('webdriver - Google Search'), 1000);
//driver.quit();
