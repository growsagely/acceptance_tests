# Acceptance Test Workshop

# :warning: For demonstration purposes, this code prioritizes simplicity over best practices and is not suitable for production.

## Setup
Install prerequisites:
``` bash
npm install -g allure-commandline
```

Install dependencies:
``` bash
find . -maxdepth 2 -name 'package.json' ! -path './node_modules/*' -print0 | xargs -0 -n1 dirname | sort -u | xargs -I {} npm install --prefix {}
```

Start the app:
``` bash
npm run start
```

Run tests using another cmd window (or a tmux pane if you're awesome):
``` bash
cd __tests__
npm test
```

Run reports:
```bash
npm run report
```

## Exercise 1
Outcome: Update the application to evaluate exponents:

### PM
Create a new feature to the parser to enable exponents.

1. Create a branch for the feature
  ``` bash
  git checkout -b exponent_featue
  ```
2. Add the scenario to `__test__/features/expression_evaluation.feature`
  ```
  Scenario: Basic Exponents
    Given I have the expression "5^2"
    When I send the expression to the backend
    Then I should get the result 25
  ```
