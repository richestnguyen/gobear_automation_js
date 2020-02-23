import {$, element, by, ElementFinder, $$} from 'protractor';
import {HomePage} from './home.page';
import {InsuranceTabPage} from './insurance-tab.page';
import {BasePage} from './base.page';

export class InsuranceTravelResultPage extends BasePage {

    public readonly filterLeftMenu = $('.filter-detail');
    public readonly sortLeftMenu = $('.sort-detail');
    public readonly detailsLeftMenu = $('.edit-detail');
    public readonly travelCardList = $$('#travel-quote-list .card-full');

    protected getPagePresenceMarker(): ElementFinder {
        return this.filterLeftMenu;
    }

    public async getNumberOfCardsInResult(): Promise<number> {
        return await this.travelCardList.count();
    }
}
