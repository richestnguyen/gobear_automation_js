exports.config = {
    directConnect: false,
    seleniumAddress: 'http://localhost:4444/wd/hub',
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

    multiCapabilities: [
        // {
        //     browserName: 'chrome'
        // },
        {
            browserName: 'chrome',
            chromeOptions: {
                mobileEmulation: {
                    deviceName: 'Nexus 5'
                }
            }
        }
    ],

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        // overrides jasmine's print method to report dot syntax for custom reports
        print: () => {},
        defaultTimeoutInterval: 600000
    }
};
