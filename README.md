# Project Name

[SauceDemo Automation]

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Credits](#credits)
- [Reporting](#reporting)
- [Contact](#contact)

## Installation

Installing Playwright via NPM:

1. Navigate to the project directory:

   ```bash
   cd /your/project/path
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

This will install Playwright locally and other dev dependencies for your project.

To install browsers for Playwright, run:

```bash
    npx playwright install
```

## Features

- Login Tests
- Sort Product Tests

## Usage

You can run all tests locally from your project root using:

```bash
npm test
```

You can also run individual test files from your project root using"

- npm test tests/loginTest.spec.js

- npm test tests/productPageSortTest.spec.js

## Credits

[Playwright Documentation](https://playwright.dev/docs/api/class-playwright)

## Continuous Integration

This project is set up for continuous integration (CI) using GitLab CI. The CI pipeline will automatically run when a commit is made to the repository. Check the configuration in `.gitlab-ci.yml`.

To manually run a CI/CD pipeline in GitLab:

- Go to your GitLab project's CI/CD.
- Select the Pipelines tab.
- Find the pipeline you want to run manually.
- Click the Run pipeline button.

## Reporting

Playwright reports are stored locally as HTML files in the `project/playwright-report` directory.

You can also access and download the reports from the CI pipeline artifacts section after the tests have been executed.

## Contact

For any questions or concerns please reach out to me at michael.oloruntobi@gmail.com
