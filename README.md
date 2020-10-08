# Mock Test - BDD Cucumber Nightwatch Test Automation Framework

 The application consists of two projects - UI (React SPA) and API (ASP.Net Core).
 
 ## UI Integration tests:  
 This project contains integration tests with Cypress automation framework.
 Cypress is built on Node.js and comes packaged as an npm module. As its basis is Node.js, it uses JavaScript for writing tests. 
 This framework supports automation of : - *Web Browsers (Firefox, Chrome, Internet Explorer, Safari)
 *Web Browser Responsive Design with view ports configuration
 
 ###### Before start
 Install dotnet SDK: https://dotnet.microsoft.com/download
 Install Yarn package manager: https://classic.yarnpkg.com/en/docs/install
 Install Cypress
 > npm install cypress --save-dev
 
 NB: Current app has been tested with:
 node: v10.16.0
 yarn: 1.22.4
 dotnet: 3.1.202
 npm: 6.9.0
 
 Get the latest Source Code
 Open Terminal or command line cd to the desired folder where the test automation source code needs to be checkout
 
 Run command git clone https://github.com/Jaspreet23/KPMG-QACodeChallenge
 This will download the latest template source code
 
 How to run Cypress tests from command line
 > cd to root ot automationFramework project directory
 > yarn cypress open
 
 To run all tests with Cypress
 > yarn cypress run
 
 ## API Unit tests:  
 Open api project in Visual Studio
 Run the tests from Tests
 
 
  ###### **Reference Links:
 
 https://spin.atomicobject.com/2019/04/24/react-integer-input/
 https://testautomationu.applitools.com/cypress-tutorial/chapter7.html
 https://docs.cypress.io/faq/questions/using-cypress-faq.html
