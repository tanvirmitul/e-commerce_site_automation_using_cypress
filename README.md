# e-commerce_site_automation_using_cypress
### This is a complete project where a demo e-commerce site [Magneto.com](https://magento.softwaretestingboard.com/) is automated by writing test suites using Cypress-Nodejs in Page Object Model testing framework.
**3 modules/page is automated:**
- **Signup** </br>
- **Login** </br>
- **Search** </br>
- **Order_Product** </br>

**For failed test cases it will take a screenshot aswell at the point of failure.** </br>

**The test runner code can be extracted from this:**
[TestRunner](https://github.com/tanvirmitul/e-commerce_site_automation_using_cypress/blob/main/cypress/e2e/test_runner/test_runner.cy.js)</br>

## Prerequisites
*Before you begin, ensure you have the following prerequisites installed on your local machine:
- Node.js and npm (or yarn)
- Git
## Installation
To set up the project, follow these steps:

Clone the repository to your local machine:
 ```
 git clone <repository_url> 
 ```
Navigate ro project repository
 ```
cd <project_directory>
 ```
Initialize npm
 ```
 npm init -y
 ```
Install cypress
 ```
 npm install cypress
 ```
Configure package.json file to open cypress dashboard
 ```
 scripts": {
    "cypress:open": "cypress open",
  }
 ```
## Running Tests
To run the tests in cypress dashboard, execute the following command:
 ```
 npx cypress open
 ```
To run the test from the command line
 ```
 npx cypress run
 ```
