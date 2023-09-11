import express from "express";
import { evaluateExpression } from "./expressionParser/parser";

const app = express();
const PORT = 4000;

// Middleware to parse JSON requests and to handle CORS
app.use(express.json());
app.use(require("cors")());

app.post("/evaluate", (req, res) => {
  const expression = req.body.expression;

  if (!expression) {
    return res.status(400).send({
      error: "Expression not provided.",
    });
  }

  try {
    const result = evaluateExpression(expression);
    return res.send({ result });
  } catch (error) {
    return res.status(400).send({
      error: "Invalid expression.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
