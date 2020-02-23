# GoBear Software Engineer in Test assessment
### Installation

Requires [Node.js](https://nodejs.org/) run.

Install the dependencies and devDependencies.
```sh
$ cd gobear_automation_js
$ npm install
```
Try running ```protractor --version``` to make sure protractor is installed.

Now start up a webdriver server with: ```webdriver-manager start```

To execute test, run the following command: 

For desktop browser: ```npm run test``` or ```protractor.conf.js```

For mobile simulation browser: ```npm run test-mobile``` or ```protractor-mobile-emu.conf.js```

To run specific test: ```protractor protractor.conf.js --spec=.\e2e\specs\desktop\first-test.spec.js --grep="<suitename> <testname>"```

Example: ```protractor protractor.conf.js --spec=.\e2e\specs\desktop\first-test.spec.js --grep="Gobear Travel Search Test Desktop should left menu functional on Desktop"```
