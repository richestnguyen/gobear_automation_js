import {$, element, by, ElementFinder, $$} from 'protractor';
import {HomePage} from './home.page';
import {InsuranceTabPage} from './insurance-tab.page';

export class TravelFormPage extends InsuranceTabPage {

    public readonly travelFormTripTypeSelect = $('[name="travel-form-trip-type"]').element(by.xpath('..'));
    public readonly showMeResultButton = $('#Travel .btn-form-submit');

    protected getPagePresenceMarker(): ElementFinder {
        return this.travelFormTripTypeSelect;
    }
}
