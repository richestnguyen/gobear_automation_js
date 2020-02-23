const TravelDetailLeftMenuPage = function() {
    this.filterDetailPanel = $('.filter-detail');
    this.clearAllButton = $('.filter-detail .clear-all');
    this.promotionShowAllRadioButton = $('.filter-detail [data-filter-by="promotion"] [data-filter-name="Show All"]');
    this.promotionPromosOnlyRadioButton = $('.filter-detail [data-filter-by="promotion"] [data-filter-name="Promos Only"]');
};
module.exports = new TravelDetailLeftMenuPage();
