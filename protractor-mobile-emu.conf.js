exports.config = {
    directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    allScriptsTimeout: 120000,
    getPageTimeout: 180000,
    maxSessions: 1,
    specs: ['./e2e/specs/*.spec.js'],
    suites: {
        smoke: ['e2e/tests/smoke/**/*.ts'],
        full: ['./e2e/tests/**/*.spec.ts']
    },
    baseUrl: 'https://www.gobear.com/ph?x_session_type=UAT',
    framework: 'jasmine',

    onPrepare: () => {
        const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
    },

    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            mobileEmulation: {
                deviceName: 'iPhone X'
            }
        }
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 600000
    }
};
