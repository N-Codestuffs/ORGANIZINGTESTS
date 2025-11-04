import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */

class challengingDomPage extends Page {
    /**
     * define selectors using getter methods
     */

    //Get the Selenium link at the bottom of the page with the "Link Text" selector strategy
    get seleniumLink (){
        return $('=Elemental Selenium');
    }

    //Get the Selenium link at the bottom of the page with the "Partial Link Text" selector strategy
    get seleniumLinkPart (){
        return $('*=Elemental Seleni');
    }

    //Get "<td>Apeirian0</td>" with the "xpath" selector strategy
    get aperian0 (){
        return $('/html[1]/body[1]/div[3]/div[1]/div[1]/a[1]');
    }
}

export default new challengingDomPage();