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
  git checkout -b exponent_feature
  ```
1. Add the scenario to `__test__/features/expression_evaluation.feature`
  ```
  Scenario: Basic Exponents
    Given I have the expression "5^2"
    When I send the expression to the backend
    Then I should get the result 25
  ```
1. Push branch for dev
  ``` bash
  git push --set-upstream origin exponent_feature
  ```

## Dev
1. Pull branch
  ``` bash
  git pull
  git checkout exponent_feature
  ```
1. Examine test failure
  ``` bash
  npm start
  # new cmd window
  cd __tests__
  npm test
  ```
1. Modify code to pass tests
  `server/src/expressionParser/tokenizer.ts`
  ``` diff
  export function tokenize(expression: string): Token[] {
  -  const regex = /([\+\-\*\/])|(\d+(\.\d+)?)/g;
  +  const regex = /([\+\-\*\^\/])|(\d+(\.\d+)?)/g;
    const tokens: Token[] = [];
    let match;

    while ((match = regex.exec(expression))) {
      if (match[1]) {
        tokens.push({
          type: "Operator",
          value: match[1],
        });
      } else if (match[2]) {
        tokens.push({
          type: "Number",
          value: match[2],
        });
      }
    }

    return tokens;
  }
  ```
