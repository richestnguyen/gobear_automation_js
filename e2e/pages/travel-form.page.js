const TravelFormPage = function() {
    this.travelFormTripTypeSelect = $('[name="travel-form-trip-type"]').element(by.xpath('..'));
    this.travelFormTravelerSelect = $('[name="travel-form-traveller"]').element(by.xpath('..'));
    this.travelFormCountrySelect = $('[name="travel-form-country"]').element(by.xpath('..'));
    this.travelFormDatePicker = $('.date-from');
    this.showMeResultButton = $('#Travel .btn-form-submit');
};
module.exports = new TravelFormPage();
