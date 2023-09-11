Feature: Expression evaluation

  Scenario: Basic addition
    Given I have the expression "1 + 1"
    When I send the expression to the backend
    Then I should get the result 2

  Scenario: Incorrect expression
    Given I have the expression "1 +"
    When I send the expression to the backend
    Then I should get an error message
