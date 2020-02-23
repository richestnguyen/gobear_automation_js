let InsuranceTabPage = function() {
    this.carSubTab = $('#Insurance [data-gb-name="Car"]');
    this.travelSubTab = $('#Insurance [data-gb-name="Travel"]');
    this.carFromCarYearSelect = $('[name="car-form-car-year"]').element(by.xpath('..'));
};
module.exports = new InsuranceTabPage();
