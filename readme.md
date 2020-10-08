#=============== Mock Test - BDD Cucumber Nightwatch Test Automation Framework ===============#
 The application consists of two projects - UI (React SPA) and API (ASP.Net Core).
 UI Integration tests:  
 This project is a mock test using nightwatch with Cucumber test automation framework.
 
 This is a reusable automation framework that blends together Nightwatch, Selenium WebDriver, Cucumber JVM (incorporating Gherkin and the BDD 'Given, When Then' testing construct)
 
 This framework supports automation of : - *Web Browsers (Firefox, Chrome, Internet Explorer, Safari)
 *Web Browser Responsive Design with view ports configuration
 
 Before start
 Install dotnet SDK: https://dotnet.microsoft.com/download
 
 Install Yarn package manager: https://classic.yarnpkg.com/en/docs/install
 
 NB: Current app has been tested with:
 
 node: v10.16.0
 yarn: 1.22.4
 dotnet: 3.1.202
 npm: 6.9.0
 
 Get the latest Source Code
 Open Terminal or command line cd to the desired folder where the test automation source code needs to be checkout
 
 Run command git clone https://github.com/Jaspreet23/ordermentum-demoTest.git
 This will download the latest template source code
 
 Dependencies in Package.json
 "peerDependencies": { "cucumber": "4.0.0 - 4.2.1", "nightwatch": "0.9.0 - 0.9.21" }, "devDependencies": { "chromedriver": "^2.38.3", "cucumber-html-reporter": "^4.0.3", "eslint-config-standard": "^11.0.0", "eslint-plugin-import": "^2.12.0", "eslint-plugin-node": "^6.0.1", "eslint-plugin-promise": "^3.8.0", "eslint-plugin-standard": "^3.1.0", "geckodriver": "^1.11.0", "cucumber": "4.2.1", "nightwatch": "0.9.21", "npm-run-all": "^4.1.1", "phantomjs-prebuilt": "^2.1.15", "selenium-download": "^2.0.10", "selenium-server": "^3.12.0", "selenium-server-standalone-jar": "3.6.0" }, "dependencies": { "config": "^1.30.0", "eslint": "^4.19.1", "jslint": "^0.12.0", "nightwatch-cucumber": "^9.1.2"
 
 Run Tests
 Command Line
 
 cd to root ot automationFramework project directory
 
 To install yarn
 brew install yarn
 
 To install all dependencies
 npm install OR yarn
 
 To open all tests with Cypress
 yarn cypress open
  
 To run all tests with Cypress
 yarn cypress run
 
 Reference Links:
 https://spin.atomicobject.com/2019/04/24/react-integer-input/
 https://testautomationu.applitools.com/cypress-tutorial/chapter7.html
 https://docs.cypress.io/faq/questions/using-cypress-faq.html
