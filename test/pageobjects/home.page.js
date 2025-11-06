import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class homePage extends Page {

    //open the page
    open() {
        return super.open(' ');
    }

    // get the home page list using the $$ command
    get homeList() {
        // ul>li selects all of the list elements on the page
        return $$('ul>li');
    }

}

export default new homePage();