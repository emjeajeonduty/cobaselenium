const {Given, When, Then} = require('@cucumber/cucumber');
const webdriver = require('selenium-webdriver')
const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
 
let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build()

Given('I open login page', {timeout:10000}, async()=>{
    // cy.visit('http://zero.webappsecurity.com/login.html');
    await driver.get('https://saucedemo.com/');
})

When('I submit username',async()=>{
    // cy.get('#user_login').type('username');
    await driver.findElement(By.id('user-name')).sendKeys('standard_user'+'\t');
    // await driver.findElement(By.id('user_login')).should('have.value','username')
})

When('I submit password',async()=>{
    // cy.get('#user_password').type('password');
    // cy.contains('Sign in').click();
    await driver.findElement(By.id('password')).sendKeys('secret_sauce'+'\n');
    // await driver.findElement(By.id('user_password')).should('have.value','password')
})

// Then('I should see homepage', {timeout:10000}, async()=>{
//     const { expect } = await import('chai');
//     const assert = require('assert');
//     // cy.get('#account_summary_tab').should('be.visible')
//     // await driver.get('https://www.saucedemo.com/inventory.html');
//     // const expectedValue = await driver.findElement(By.xpath('//div[@class="app_logo"]')); 
//     // const actualValue = await driver.findElement(By.className('app_logo')); 
//     // assert.strictEqual(actualValue, expectedValue);
//     await driver.get('https://www.saucedemo.com/inventory.html').to('have_text')
// })

Then('I should see the product with name {string}', async function(expectedProductName) {
    // Locate the product name element on the inventory page
    const productElements = await driver.findElements(By.className('inventory_item_name'));
    const { expect } = await import('chai');

    let found = false;
    for (let element of productElements) {
      const text = await element.getText();
      if (text === expectedProductName) {
        found = true;
        break;
      }
    }
  
    expect(found).to.be.true; // Chai assertion
    await driver.quit();
  });

// Then('I should close test',async()=>{
//     await driver.quit();
// })