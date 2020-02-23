import {$, element, by, ElementFinder, $$} from 'protractor';
import {HomePage} from './home.page';

export class InsuranceTabPage extends HomePage {

    public readonly carSubTab = $('#Insurance [data-gb-name="Car"]');
    public readonly travelSubTab = $('#Insurance [data-gb-name="Travel"]');
    public readonly carFromCarYearSelect = $('[name="car-form-car-year"]').element(by.xpath('..'));

    protected getPagePresenceMarker(): ElementFinder {
        return this.carSubTab;
    }
}
