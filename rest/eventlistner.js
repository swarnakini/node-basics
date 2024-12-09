const express = require("express");
const EventEmitter = require("events"); //EventEmitter is a class here.
const { connect } = require("http2");
const app = express();
const event = new EventEmitter();

//listner #1
var list1 = function listener1() {
  console.log("Listener 1 is logged");
};

//listner #2
var list2 = function listener2() {
  console.log("Listener 2 is logged");
};

event.on("connection", list1);
event.addListener("connection", list2);
//event.on("connection", list2);
event.emit("connection");
console.log("no of emits:", event.listenerCount("connection"));
