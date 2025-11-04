import { expect } from '@wdio/globals'
import challengingDomPage from '../pageobjects/challengingDom.page.js'

describe('Challenging dom page', () => {

    it('Check that the Elemental Selenium link exists', async () => {

        //Open the page
        await challengingDomPage.open()

        //Check if the link exists
        await challengingDomPage.seleniumLink.isExisting();
        
    });

    it('Test the link using the "link text" method', async () => {
        
        //Test the "Link Text" method 
        await expect(challengingDomPage.seleniumLink.toBeDisplayed());

    });

    it('Test the link using the "partial link text" method', async () => {
        
        //Test the "Partial link Text" method 
        await expect(challengingDomPage.seleniumLink.toBeDisplayed());

    });

    it('Test "<td>Apeirian0</td>" using the "xPath" method', async () => {
        
        //Test the "xPath" method 
        await expect(challengingDomPage.seleniumLink.toBeDisplayed());

    });
});