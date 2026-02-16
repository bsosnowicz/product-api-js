const express = require("express");
const products = require("./products");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Product API" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => console.log("Server running on port 3000"));
}
