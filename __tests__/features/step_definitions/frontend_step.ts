import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "chai";

const baseURL = process.env.BASE_URL || "http://localhost:3000";

Given("I am on the calculator page", async function () {
  await browser.url(baseURL);
});

When("I input the expression {string}", async function (expression: string) {
  const inputElement = await $(".calculator-input");
  await inputElement.setValue(expression);
});

When("I press the evaluate button", async function () {
  const evaluateButton = await $(".calculator-button-evaluate");
  await evaluateButton.click();
});

Then(
  "I should see the result {string}",
  async function (expectedResult: string) {
    const resultElement = await $(".calculator-result");
    const resultText = await resultElement.getText();
    expect(resultText).to.equal(expectedResult);
  }
);

Then(
  "I should see the error message {string}",
  async function (expectedError: string) {
    const errorElement = await $(".calculator-result"); // Assuming an error display with the ID 'error-message'
    const errorText = await errorElement.getText();
    expect(errorText).to.equal(expectedError);
  }
);
