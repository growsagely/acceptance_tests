import express from "express";

const app = express();
app.get("/greet/:name", (req, res) => {
  res.send(
    `To greet, or not to greet, ${req.params.name}? That is the question.`
  );
});

export default app;
