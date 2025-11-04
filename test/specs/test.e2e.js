import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import CheckboxPage from '../pageobjects/checkbox.page.js'

describe.skip('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged into a secure area!'))
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })

    it('log out of secure area', async () => {
        // Assume that you are already in a secure page. click on logout button in the secure page. make selector for the button in secure.page.js
        await SecurePage.btnLogout.click();
        // check login page flash alert for text saying 'You logged out of the secure area!'
        await expect(SecurePage.flashAlert).toHaveText(
            expect.stringContaining('You logged out of the secure area!'))
    })
})


describe.skip('Confirm checkboxes', () => {
    // Create a new page object for checkboxes.

    //1st test: navigate to checkboxes page and confirm checkbox 1 is unchecked.
    it('navigate to checkboxes page and confirm checkbox 1 is unchecked', async () => {
        await CheckboxPage.open()

        //maximize browser window
        await browser.maximizeWindow();

        // get status of checkbox 1
        await expect(CheckboxPage.checkBox1).not.toBeChecked(); // sees if the checkbox is not checked.
        await expect(CheckboxPage.checkBox1).toMatchElementSnapshot('checkbox1'); 
    });

    //2nd test: unclick that checkbox 2 is unchecked.
    it('Uncheck checkbox 2 and confirm it is unchecked.', async () => {
        // Uncheck checkbox 2
        await checkboxPage.check2()

        //Ensure checkbox 2 is unchecked
        await expect(CheckboxPage.checkBox2).not.toBeChecked(); // sees if the checkbox is not checked.
        await expect(CheckboxPage.checkBox2).toMatchElementSnapshot('checkbox2');

    });

});
