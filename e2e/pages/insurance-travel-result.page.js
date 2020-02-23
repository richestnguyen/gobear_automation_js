const e2eUtils = require( '../utils/e2e.util');
const moment = require('moment');

const InsuranceTravelResultPage = function() {

    this.filterLeftMenu = $('.filter-detail');
    this.sortLeftMenu = $('.sort-detail');
    this.detailsLeftMenu = $('.edit-detail');
    this.travelCardList = $$('#travel-quote-list .card-full');

    this.clearAllButton = $('.filter-detail .clear-all');

    //PROMOTIONS
    this.promotionShowAllRadioButton =
        $('.filter-detail [data-filter-by="promotion"] [data-filter-name="Show All"]');
    this.promotionPromosOnlyRadioButton =
        $('.filter-detail [data-filter-by="promotion"] [data-filter-name="Promos Only"]');


    this.seeMoreButton = $('.filter-detail #collapseSeemoreBtn');

    //SORT
    this.sortByPromotionRadioButton = $('.sort-detail [value="promotion-Desc"]').element(by.xpath('..'));
    this.sortByPriceLowToHighRadioButton = $('.sort-detail [value="premium-Asc"]').element(by.xpath('..'));
    this.sortByPriceHighToLowRadioButton = $('.sort-detail [value="premium-Desc"]').element(by.xpath('..'));
    this.sortByScoreRadioButton = $('.sort-detail [value="score-Desc"]').element(by.xpath('..'));
    this.sortByInsurerAtoZNameRadioButton = $('.sort-detail [value="insurerName-Asc"]').element(by.xpath('..'));
    this.sortByInsurerZtoANameRadioButton = $('.sort-detail [value="insurerName-Desc"]').element(by.xpath('..'));
    this.sortByRatingHighToLowRadioButton = $('.sort-detail [value="rating-Desc"]').element(by.xpath('..'));

    //DETAIL
    //POLICY TYPE
    this.singleTripRadioButton = $('[data-gb-name="triptype"] [value="single"]').element(by.xpath('..'));
    this.annualTripRadioButton = $('[data-gb-name="triptype"] [value="annual"]').element(by.xpath('..'));

    //WHO'S GOING?
    this.justMeRadioButton = $('[name="traveller-type"] [value="1"]').element(by.xpath('..'));
    this.myFamilyRadioButton = $('[name="traveller-type"] [value="family"]').element(by.xpath('..'));
    this.twoPersonsRadioButton = $('[name="traveller-type"] [value="2"]').element(by.xpath('..'));
    this.threePersonsRadioButton = $('[name="traveller-type"] [value="3"]').element(by.xpath('..'));
    this.fourPersonsRadioButton = $('[name="traveller-type"] [value="4"]').element(by.xpath('..'));
    this.fivePersonsRadioButton = $('[name="traveller-type"] [value="5"]').element(by.xpath('..'));

    //DESTINATION
    this.destinationDropDown = $('[name="travel-form-country"]').element(by.xpath('..'));

    //TRAVEL START DATE
    this.travelStartDatePicker = $('[name="dates-startdate"]');
    this.mobileTravelStartDate = $('.date-from');

    //MOBILE
    this.mobileSlidebarControlButton = $('.sidebar-control-btn');
    this.mobileCollapseFilterButton = $('#collapseFilterBtn');
    this.mobileSortButton = $('#headingTwo');
    this.mobileDetailButton = $('#detailsHeading');

    this.ensurePromotionRadioButtonsFunctional = async function () {
        await e2eUtils.checkRadioButtonFunctional(this.promotionPromosOnlyRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.promotionShowAllRadioButton);
    };

    this.ensurePromotionRadioButtonsFunctionalOnMobile = async function () {
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.promotionPromosOnlyRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.promotionShowAllRadioButton);
    };

    this.ensureInsurerCheckBoxesFunctional = async function () {
        const all = $$('.filter-detail [data-filter-by="insurerId"] .checkbox');
        await all.each(async elementFinder => {
            await e2eUtils.checkCheckBoxFunctional(elementFinder);
        });
    };

    this.ensureAllSlidersAreFunctional = async function () {
        const allSlider = $$('[data-type="Number"]');
        for (let i = 0; i < await allSlider.count(); i++) {
            let minElementToCheck = allSlider.get(i).$('.min-slider-handle');
            let maxElementToCheck = allSlider.get(i).$('.max-slider-handle');
            const defaultMinValue = await minElementToCheck.getAttribute('aria-valuenow');
            const defaultMaxValue = await maxElementToCheck.getAttribute('aria-valuenow');
            await browser.actions().dragAndDrop(minElementToCheck, {x: 20}).perform();
            await browser.actions().dragAndDrop(maxElementToCheck, {x: -20}).perform();

            console.log('Drag and drop function is not worked as expected due to chrome drive bug. ' +
                'see: https://bugs.chromium.org/p/chromedriver/issues/detail?id=841');

            if(await minElementToCheck.getAttribute('aria-valuenow') === defaultMinValue) {
                console.log('Not working on element #' + i + ' with min slider handle!');
            }
            if(await maxElementToCheck.getAttribute('aria-valuenow') === defaultMaxValue) {
                console.log('Not working on element #' + i + ' with max slider handle!');
            }

        }
    };

    this.ensureSortRadioButtonsFunctional = async function () {
        await e2eUtils.checkRadioButtonFunctional(this.sortByPromotionRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByPriceLowToHighRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByPriceHighToLowRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByScoreRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByInsurerAtoZNameRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByInsurerZtoANameRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.sortByRatingHighToLowRadioButton);
    };

    this.ensureSortRadioButtonsFunctionalOnMobile = async function () {
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByPromotionRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByPriceLowToHighRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByPriceHighToLowRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByScoreRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByInsurerAtoZNameRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByInsurerZtoANameRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.sortByRatingHighToLowRadioButton);
    };

    this.ensurePolicyTypeRadioButtonsFunctional = async function () {
        await e2eUtils.checkRadioButtonFunctional(this.singleTripRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.annualTripRadioButton);
    };

    this.ensurePolicyTypeRadioButtonsFunctionalOnMobile = async function () {
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.singleTripRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.annualTripRadioButton);
    };

    this.ensureTravelStartDateFunctional = async function () {
        const originalDate = await e2eUtils.getElementValue(this.travelStartDatePicker);
        var dd = originalDate.substr(0,2);
        var mm = originalDate.substr(3,2);
        var yyyy = originalDate.substr(6,4);
        const changedDate = (parseInt(mm) + 1).toString() + '/' + dd + '/' + yyyy;

        await e2eUtils.setDateFromDatePicker(this.travelStartDatePicker,
            new Date(changedDate));
        await expect(e2eUtils.getElementValue(this.travelStartDatePicker)).not.toEqual(originalDate);
    };

    this.ensureTravelStartDateMobileFunctional = async function () {
        //[TODO] Shouldn't do this since it's not a user action
        // Need find another way to check
        const originalDate = await e2eUtils.getElementValue(this.mobileTravelStartDate.$('input'));
        await e2eUtils.setDateFromDatePickerMobile(this.mobileTravelStartDate, new Date('12/31/2099'));
        await expect(await e2eUtils.getElementValue(this.mobileTravelStartDate.$('input'))).not.toEqual(originalDate)
    };

    this.ensureWhoGoingRadioButtonsFunctional = async function () {
        await e2eUtils.checkRadioButtonFunctional(this.justMeRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.myFamilyRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.twoPersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.threePersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.fourPersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctional(this.fivePersonsRadioButton);
    };

    this.ensureWhoGoingRadioButtonsFunctionalOnMobile = async function () {
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.justMeRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.myFamilyRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.twoPersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.threePersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.fourPersonsRadioButton);
        await e2eUtils.checkRadioButtonFunctionalOnMobile(this.fivePersonsRadioButton);
    };

    this.ensureDestinationDropdownFunctional = async function (newitem) {
        await e2eUtils.checkDropdownFunctional(this.destinationDropDown, newitem);
    };

    this.ensureLeftMenuAreFunctional = async function () {
        await this.ensurePromotionRadioButtonsFunctional();
        await this.ensureInsurerCheckBoxesFunctional();
        await this.ensureAllSlidersAreFunctional();
        await this.ensureSortRadioButtonsFunctional();
        await this.ensurePolicyTypeRadioButtonsFunctional();
        await this.ensureWhoGoingRadioButtonsFunctional();
        await this.ensureTravelStartDateFunctional();
    };
};
module.exports = new InsuranceTravelResultPage();
