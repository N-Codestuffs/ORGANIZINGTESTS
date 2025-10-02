import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class CheckboxPage extends Page {
    /**
     * define selectors using getter methods
     */

    get checkBox1 () {
        return $("/html//form[@id='checkboxes']/input[1]");
    }

    get checkBox2 () {
        return $("/html//form[@id='checkboxes']/input[2]");
    }

    // Grabs checkBox2 and clicks it, checking or unchecking the box.
    async check2 () {
        this.checkBox2.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     * comes from page.js
     */
    open () {
        return super.open('checkboxes');
    }
}

export default new CheckboxPage();