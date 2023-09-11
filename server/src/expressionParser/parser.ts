import { Token, tokenize } from "./tokenizer";

function parse(tokens: Token[]): number {
  console.log("Parsing tokens: ", tokens);
  if (tokens.length === 1) {
    return parseFloat(tokens[0].value);
  }

  const operatorIndex = tokens.findIndex((token) => token.type === "Operator");

  if (operatorIndex === -1) {
    throw new Error("Invalid expression.");
  }

  const operator = tokens[operatorIndex];
  const leftTokens = tokens.slice(0, operatorIndex);
  const rightTokens = tokens.slice(operatorIndex + 1);

  const leftValue = parse(leftTokens);
  const rightValue = parse(rightTokens);

  switch (operator.value) {
    case "+":
      return leftValue + rightValue;
    case "-":
      return leftValue - rightValue;
    case "*":
      return leftValue * rightValue;
    case "/":
      if (rightValue === 0) throw new Error("Division by zero.");
      return leftValue / rightValue;
    default:
      throw new Error("Unknown operator: " + operator.value);
  }
}

export function evaluateExpression(expression: string): number {
  const tokens = tokenize(expression);
  return parse(tokens);
}
