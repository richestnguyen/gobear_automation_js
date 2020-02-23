const HomePage = function () {
    this.insuranceTab = $('#app [data-gb-name="Insurance"]');
    this.creditCardsTab = $('#app [data-gb-name="CreditCards"]');
    this.loansTab = $('#app [data-gb-name="Loans"]');
    this.presentMarker = this.insuranceTab;

    this.goToHome = async function () {
        await browser.get(browser.baseUrl);
    };

    this.goToInsuranceTab = async function () {
        await this.insuranceTab.click();
    };
};

module.exports = new HomePage();
