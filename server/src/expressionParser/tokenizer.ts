export type Token = {
  type: "Number" | "Operator";
  value: string;
};

export function tokenize(expression: string): Token[] {
  const regex = /([\+\-\*\/])|(\d+(\.\d+)?)/g;
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
