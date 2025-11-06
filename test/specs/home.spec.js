import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'

describe('Home page', () => {

    it('Should open the page', async () => {
        await homePage.open()
    });

    // count the items in the home page list, should be 44 in total
    it('Check the size of the home page list', async () => {
        await expect(homePage.homeList).toBeElementsArrayOfSize(44)
    });

    // create a test that "correctly fails" to count the number of items in the list
    it('Check the size of the home page list incorrectly', async () => {
        await expect(homePage.homeList).not.toBeElementsArrayOfSize(5)
    });
});