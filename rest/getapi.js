const http = require("http");
const express = require("express");
const { json } = require("express");
var app = express();

let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

app.listen(3005, (req, res) => {
  console.log("server is getting hit");
});

app.get("/getapi", (req, res) => {
  res.json(["Swarna", "Gowri", "Kini"]);
});

app.get("/getapiid/:id", (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id));
  res.json(item);
});

app.post("/postapi", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});
