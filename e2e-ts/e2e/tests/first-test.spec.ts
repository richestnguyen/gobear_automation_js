import {HomePage} from '../pages/desktop/home.page';
import {InsuranceTabPage} from '../pages/desktop/insurance-tab.page';
import {browser} from 'protractor';
import {TravelFormPage} from '../pages/desktop/travel-form.page';
import {InsuranceTravelResultPage} from '../pages/desktop/insurance-travel-result.page';
import {BasePage} from '../pages/desktop/base.page';

describe('First test', () => {

    beforeEach(async () => {
        await BasePage.navigateToHome();
    });

    it('should ?', async () => {
        const homePage = await BasePage.preparePage(HomePage);
        await homePage.insuranceTab.clickWhenClickable();
        const insuranceTabPage = await BasePage.preparePage(InsuranceTabPage);
        await insuranceTabPage.travelSubTab.clickWhenClickable();
        const travelFormPage = await BasePage.preparePage(TravelFormPage);
        await travelFormPage.showMeResultButton.clickWhenClickable();
        const insuranceTravelResultPage = await BasePage.preparePage(InsuranceTravelResultPage);
        await expect(await insuranceTravelResultPage.getNumberOfCardsInResult()).toBeGreaterThan(3);
        await browser.pause();
    });
});
