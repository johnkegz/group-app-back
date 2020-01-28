// const express = require('express')
// const socketIo   = require('socket.io');
// const path = require('path');

// const app = express();

// app.get('/', (req: any, res: any) => {
//     // res.send("hello world")
//     res.sendFile(path.resolve("./client/index.html"));
// })

// const server = app.listen(3000, () => {
//     console.log("App run at 3000")
// })

// const webSocket = socketIo(server); //initiate socket

// webSocket.on("channel1", (data: any)=>{
//     console.log("channel 1", data)
// })

// webSocket.emit("channel 2", "new channel");

// webSocket.on("channel2", (obj: any)=>{
//     console.log("channel 2", obj)
// })


import express from "express";
import * as socketio from "socket.io";
import * as path from "path";

const app = express();
app.set("port", process.env.PORT || 3000);

let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./client/index.html"));
});

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: any) {
  console.log("a user connected");
  socket.on("message", function(message: any) {
    console.log(message);
    socket.emit("message", message);
  });
  
});

const server = http.listen(3000, function() {
  console.log("listening on *:3000");
});