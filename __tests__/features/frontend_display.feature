Feature: Calculator Evaluation

  As a user
  I want to evaluate mathematical expressions
  So that I can find the result of my calculations

  Scenario: Evaluating a valid expression
    Given I am on the calculator page
    When I input the expression "5 + 3"
    And I press the evaluate button
    Then I should see the result "Result: 8"

  Scenario: Evaluating an invalid expression
    Given I am on the calculator page
    When I input the expression "5 +"
    And I press the evaluate button
    Then I should see the error message "Result: Error"

  Scenario: Evaluating a more complex expression
    Given I am on the calculator page
    When I input the expression "5 + 3 * 2"
    And I press the evaluate button
    Then I should see the result "Result: 11"
