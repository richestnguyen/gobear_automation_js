var E2eUtil = function () {

    this.clickWhenClickable = async function (ele) {
        await this.waitForElementPresent(ele, 2000);
        await ele.click();
    };

    this.scrollIntoView = async function (elm) {
        await browser.executeScript("arguments[0].scrollIntoView();", elm.getWebElement());
    };

    this.waitForElementPresent = async function (marker, timeout = 10000) {
        await browser.sleep(1000);
        await browser.driver.wait(protractor.ExpectedConditions.presenceOf(marker), timeout);
    };

    this.getElementValue = async function (ele) {
        return browser.executeScript('return arguments[0].value', ele);
    };

    this.waitForLoadingDone = async function () {
        await $$('[data-gb-name="loading-status"]').each(
            async elementFinder =>
                await browser.wait(protractor.ExpectedConditions.invisibilityOf(elementFinder)));
    };

    this.selectDropDownListItem = async function (dropdown, item) {
        await this.waitForLoadingDone();
        await dropdown.click();
        const dropdownList = await dropdown.$$('.dropdown-menu ul li').filter(function (elem) {
            return elem.getText().then(function (text) {
                return text === item;
            });
        }).first();
        await this.waitForElementPresent(dropdownList);
        await dropdownList.click();
    };

    this.selectDropDownListItemInMobile = async function (dropdown, item) {
        await this.waitForElementPresent(dropdown);
        await dropdown.click();
        await element(by.cssContainingText('option', item)).click();
    };

    this.setDateFromDatePicker = async function (datePickerElement, date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        await datePickerElement.click();
        const datePicker = $('.datepicker.datepicker-dropdown.dropdown-menu');
        await this.waitForElementPresent(datePicker);
        const day = datePicker.$('.datepicker-days');
        while (monthNames[date.getMonth()] + ' ' + date.getFullYear()
        !== await day.$('.datepicker-switch').getText()) {
            await this.clickWhenClickable(day.$('.next'));
        }

        const dayElement = await day.$$('table tbody tr td').filter(async (ele) => {
            return await ele.getText().then(function (text) {
                return text === date.getDate().toString();
            }) && !(await ele.getAttribute('class')).includes('old');
        }).first();
        await this.waitForElementPresent(dayElement);
        await dayElement.click();
    };

    this.setDateFromDatePickerMobile = async function (datePickerElement, date) {
        let dd = date.getDate();
        if (dd < 10) {
            dd = '0' + dd
        }
        let mm = date.getMonth();
        if (mm < 10) {
            mm = '0' + (mm + 1)
        }
        const yyyy = date.getFullYear();

        const changedDate = yyyy.toString() + '-' + mm.toString() + '-' + dd.toString();
        await browser.executeScript('return arguments[0].value = "' + changedDate +'"', datePickerElement.$('input'));
    };

    this.radioButtonStatusShouldBe = async function (radioBtn, status) {
        await this.waitForElementPresent(radioBtn);
        await expect(await radioBtn.$('input').isSelected()).toBe(status);
    };

    this.checkRadioButtonFunctional = async function (radioBtn) {
        await this.waitForElementPresent(radioBtn);
        await this.scrollIntoView(radioBtn);
        await radioBtn.click();
        await this.waitForLoadingDone();
        await this.radioButtonStatusShouldBe(radioBtn, true);
    };

    this.checkDropdownFunctional = async function (dropdown, newItem) {
        const orgValue = await this.getElementValue(dropdown.$('select'));
        await this.waitForElementPresent(dropdown);
        await this.scrollIntoView(dropdown);
        await this.selectDropDownListItem(dropdown, newItem);
        await expect(await this.getElementValue(dropdown.$('select'))).not.toEqual(orgValue);
    };

    this.checkDropdownFunctionalInMobile = async function (dropdown, newItem) {
        const orgValue = await this.getElementValue(dropdown.$('select'));
        await this.waitForElementPresent(dropdown);
        await this.scrollIntoView(dropdown);
        await this.selectDropDownListItemInMobile(dropdown, newItem);
        await expect(await this.getElementValue(dropdown.$('select'))).not.toEqual(orgValue);
    };

    this.checkBoxShouldBe = async function (checkBox, checked) {
        await expect(await checkBox.$('input').isSelected()).toBe(checked);
    };

    this.getCheckBoxStatus = async function (checkBox) {
        return await checkBox.$('input').isSelected();
    };

    this.checkCheckBoxFunctional = async function (checkBox) {
        await this.waitForElementPresent(checkBox);
        let currentCheckBoxStatus = await this.getCheckBoxStatus(checkBox);
        await checkBox.click();
        await this.waitForLoadingDone();
        await this.checkBoxShouldBe(checkBox, !currentCheckBoxStatus);
        //Revert its status
        await checkBox.click();
        await this.waitForLoadingDone();
    };
};
module.exports = new E2eUtil();
