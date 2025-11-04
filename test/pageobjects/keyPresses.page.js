import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class keyPressesPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Get the header of the page
    get header (){
        return $('h3');
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('key_presses');
    }
}

export default new keyPressesPage();
