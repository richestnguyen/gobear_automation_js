Challenges #1 
-
```
As a new automation tester in the team, you have been asked to start working on automating the regression tests in our website. 
The 1st product to automate is Travel Insurance. 
Please propose: 
- A test plan; 
- The tool(s) you would use to test it; 
- The architecture of the test scripts in that tool. 

 
Website be tested: https://www.gobear.com/ph?x_session_type=UAT 
 
Tip: - For this assignment, stay at a high level. You do not need to write the code but to propose a plan and architecture of the tests scripts; 
- Do prepare a list of question you would ask to the business if needed. 
 

```

Answer:
-
The automation test team implements the test scripts after the test case

The plan includes: 

| Item  | Description |
| --- | --- | 
| Function of Application |  Travel Insurance Searches | 
| Automation framework | Protractor | 
| Automation language | Javascript or TypeScript | 
| Automation Test - Data  | Will be given by on the test cases | 
| Project Design pattern  | Page Object Model  | 
| Reporting tools  | screenshot-reporter  | 
| Browsers /Version  |  Latest stable Chrome | 
| Other tools  | Jenskins, Openshift: Build and deploy application to be tested to and run the tests nightly | 


The tool: 
```
Selenium based tool, helps automation team build cross-environment automated regression test suites.
I would suggests to use Protractor (an end-to-end test framework)

Protractor runs tests against your application running in a real browser, interacting with it as a user would.
```

The architecture can be describe as be low:
```
├───data : Where the test data are stored
├───pages : In POM (Page Object Model), this is where all pages are defined
├───specs : Where all test scripts are located, seperated by platform (mobile or desktop) 
│   ├───desktop
│   └───mobile
└───utils : Some utilities that help through the test execution.
```
