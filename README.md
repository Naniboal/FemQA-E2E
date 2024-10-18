# FemQA E2E Testing Project

This project uses [Playwright](https://playwright.dev/) to perform end-to-end (E2E) testing on the FemQA website. The tests check the website's content and functionality across different pages.

## Requirements

- **Node.js** (v14.x or above)
- **npm** (comes with Node.js) or **Yarn**

Check if Node.js and npm are installed:

```bash
node -v
npm -v
```
Installation
Clone the repository:

```bash
git clone https://github.com/yourusername/femqa-e2e-tests.git
```

Navigate to the project folder:

```bash
cd femqa-e2e-tests
```

Install the dependencies:

```bash
npm install
```

Running All Tests
To run all tests:

```bash
npx playwright test
```
This will run the tests in headless mode (without showing the browser).

Running a Single Test
To run a specific test file, specify its path:

```bash
npx playwright test tests/ContentLoading.spec.js
```
Running Tests in Headed Mode
To see the browser actions while running tests, use:

```bash
npx playwright test --headed
```

That's it! Now you can run the tests for the FemQA platform with Playwright.






