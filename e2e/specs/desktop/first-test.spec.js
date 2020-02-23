let e2eUtils = require( '../../utils/e2e.util');
let homePage = require( '../../pages/home-page');
let insuranceTabPage = require( '../../pages/insurance-tab.page');
let travelFormPage = require( '../../pages/travel-form.page');
let insuranceTravelResultPage = require( '../../pages/insurance-travel-result.page');

describe('Gobear Travel Search Test Desktop', () => {

    beforeEach(async () => {
        console.log('Go to ' + browser.baseUrl);
        await browser.waitForAngularEnabled(false);
        await homePage.goToHome();
        await e2eUtils.waitForElementPresent(homePage.insuranceTab);
    });

    it('should left menu functional on Desktop', async () => {
        console.log('Go to Travel section');
        await homePage.goToInsuranceTab();
        await e2eUtils.waitForElementPresent(insuranceTabPage.carSubTab);
        await insuranceTabPage.travelSubTab.click().then(async () =>
            await e2eUtils.waitForElementPresent(travelFormPage.travelFormTripTypeSelect));

        console.log('Input some values (ex: travel plan: annual trip)');
        const travelData = {
            type: 'annual trip',
            noPerson: '2 persons',
            location: 'Worldwide',
            date: new Date()
        };
        await e2eUtils.selectDropDownListItem(travelFormPage.travelFormTripTypeSelect, travelData.type);
        await e2eUtils.selectDropDownListItem(travelFormPage.travelFormTravelerSelect, travelData.noPerson);
        await e2eUtils.selectDropDownListItem(travelFormPage.travelFormCountrySelect, travelData.location);
        await e2eUtils.setDateFromDatePicker(travelFormPage.travelFormDatePicker, travelData.date);

        console.log('Go to the Travel results page ');
        await travelFormPage.showMeResultButton.click().then(async () => {
            await e2eUtils.waitForElementPresent(insuranceTravelResultPage.promotionPromosOnlyRadioButton);
            await e2eUtils.waitForLoadingDone();
        });

        console.log('Make sure at least 3 cards are being displayed ');
        await expect(await insuranceTravelResultPage.travelCardList.count()).toBeGreaterThan(3);

        console.log('Make sure the left side menu categories are functional: Filter, Sort and Details.');
        await insuranceTravelResultPage.ensurePromotionRadioButtonsFunctional();
        await insuranceTravelResultPage.ensureInsurerCheckBoxesFunctional();
        await insuranceTravelResultPage.seeMoreButton.click();

        await insuranceTravelResultPage.ensureAllSlidersAreFunctional();
        await insuranceTravelResultPage.ensureSortRadioButtonsFunctional();
        await insuranceTravelResultPage.ensurePolicyTypeRadioButtonsFunctional();
        await insuranceTravelResultPage.ensureWhoGoingRadioButtonsFunctional();
        await insuranceTravelResultPage.ensureDestinationDropdownFunctional('Schengen');
        await insuranceTravelResultPage.ensureTravelStartDateFunctional();
    });

    afterEach(async () => {
        await browser.executeScript('window.sessionStorage.clear();');
        await browser.executeScript('window.localStorage.clear();');
    });
});
