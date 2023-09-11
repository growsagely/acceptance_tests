import { Given, When, Then } from "@cucumber/cucumber";
import axios from "axios";
import { expect } from "chai";

let latestExpression: string;
let evaluationResult: any;

Given("I have the expression {string}", function (expression: string) {
  latestExpression = expression;
});

When("I send the expression to the backend", async function () {
  try {
    const response = await axios.post("http://localhost:4000/evaluate", {
      expression: latestExpression,
    });
    evaluationResult = response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      evaluationResult = error.response.data;
    } else {
      throw error;
    }
  }
});

Then("I should get the result {int}", function (expectedResult: number) {
  expect(evaluationResult.result).to.equal(expectedResult);
});

Then("I should get an error message", function () {
  expect(evaluationResult.error).to.exist;
});
