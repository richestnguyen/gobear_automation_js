import { $, ElementFinder } from 'protractor/built';
import { BasePage } from './base.page';

export class HomePage extends BasePage {

    public readonly insuranceTab = $('#app [data-gb-name="Insurance"]');
    public readonly creditCardsTab = $('#app [data-gb-name="CreditCards"]');
    public readonly loansTab = $('#app [data-gb-name="Loans"]');

    protected getPagePresenceMarker(): ElementFinder {
        return this.insuranceTab;
    }
}
