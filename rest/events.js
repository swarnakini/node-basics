const express = require("express");
const EventEmitter = require("events"); //EventEmitter is a class here.
const app = express();
const event = new EventEmitter(); // create event as an object for the class EventEmitter
let count = 0;

event.on("countAPI", () => {
  count++;
  console.log("Event got called", count);
});

var connectHandler = function connected() {
  console.log("connection successful.");
};

event.on("connection", connectHandler);
//This is work fine for normal scenario
// app.get("/", (req, res) => {
//   res.send("API got called");
// });

// Now I want to get the COUNT which will tell that how many times the my API was hit
app.get("/api/delete", (req, res) => {
  res.send("Delete API got called");
  event.emit("countAPI"); // Listener Call back function will be executed
});

app.get("/api/Get", (req, res) => {
  res.send("Get app API");
  event.emit("countAPI");
});

app.get("/api/Update", (req, res) => {
  res.send("Update API got called");
  event.emit("connection");
});

app.listen(5001);
