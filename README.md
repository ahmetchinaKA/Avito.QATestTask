## Installation
To run the tests, you will need to install the following dependencies:
- Node.js - JavaScript runtime required to execute the tests. 
- Playwright - a framework for browser automation testing.
Follow these steps to install the dependencies:
1. Install Node.js by following the instructions on the [official website](https://nodejs.org/ru/download).
2. Open the terminal and run the command `npm install -g playwright` to install Playwright globally.

## Running the Tests
After installing the dependencies, you can run the tests. In this project, the tests are located in the tests directory.
Follow these steps to run the tests:
1. Open the terminal and navigate to the root directory of the project.
2. Run the command `npm install` to install the project's local dependencies.
3. Run the tests by executing the command `npx playwright test`.
The tests will be run in the browser of your choice. You can configure the browser in the playwright.config.js file.

## Additional Information
Playwright Documentation: https://playwright.dev/docs/intro
Playwright Examples: https://github.com/microsoft/playwright-examples