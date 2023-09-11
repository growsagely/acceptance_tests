Feature: Expression evaluation

  Scenario: Basic addition
    Given I have the expression "1 + 1"
    When I send the expression to the backend
    Then I should get the result 2

  Scenario: Basic subtraction
    Given I have the expression "1 - 1"
    When I send the expression to the backend
    Then I should get the result 0

  Scenario: Basic multiplication
    Given I have the expression "1 * 1"
    When I send the expression to the backend
    Then I should get the result 1

  Scenario: Basic division
    Given I have the expression "1 / 1"
    When I send the expression to the backend
    Then I should get the result 1

  Scenario: Division by zero
    Given I have the expression "1 / 0"
    When I send the expression to the backend
    Then I should get an error message

  Scenario: Incorrect expression
    Given I have the expression "1 +"
    When I send the expression to the backend
    Then I should get an error message

Scenario Outline: Evaluating various arithmetic expressions
    Given I have the expression "<expression>"
    When I send the expression to the backend
    Then I should get the result <result>

    Examples:
      | expression  | result |
      | 1 + 1      | 2      |
      | 2 * 3      | 6      |
      | 4 / 2      | 2      |
      | 2 - 3      | -1     |
