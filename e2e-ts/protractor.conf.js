var jasmineReporters = require('jasmine-reporters');
var htmlReporter = require('protractor-html-reporter-2');
var fs = require('fs-extra');
var globals = require('protractor/built/index');
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    firefoxPath: null,
    allScriptsTimeout: 120000,
    getPageTimeout: 180000,
    maxSessions: 1,
    baseUrl: 'https://www.gobear.com/ph?x_session_type=UAT',

    specs: ['./e2e/tests/specs/*.js'],
    suites: {
        smoke: ['e2e/tests/smoke/**/*.ts'],
        full: ['./e2e/tests/**/*.spec.ts']
    },

    multiCapabilities: [
        {
            browserName: 'chrome'
        },
        // {
        //     browserName: 'chrome',
        //     chromeOptions: {
        //         mobileEmulation: {
        //             deviceName: 'iPhone X'
        //         }
        //     }
        // }
    ],
    onPrepare: async function() {
        require('ts-node/dist/index').register({
            project: 'tsconfig.json'
        });

        await jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            docName: 'report.html',
            docTitle: 'Test Report'

        }).getJasmine2Reporter());
        // await browser.manage().window().maximize();
    },

    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 180000,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true
    },
    SELENIUM_PROMISE_MANAGER: false
};
