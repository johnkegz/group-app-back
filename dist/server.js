"use strict";
// const express = require('express')
// const socketIo   = require('socket.io');
// const path = require('path');
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const app = express_1.default();
app.set("port", process.env.PORT || 8080);
let http = require("http").Server(app);
// set up socket.io and bind it to our
// http server.
let io = require("socket.io")(http);
app.get("/", (req, res) => {
    res.sendFile(path.resolve("./client/index.html"));
});
// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
const groupMessages = [];
const sockets = [];
io.on("connection", function (socket) {
    sockets.push(socket);
    console.log("sockects -->", sockets[0].id);
    console.log("a user connected");
    socket.emit("message", groupMessages);
    socket.on("message", function (message) {
        groupMessages.push({ message: message });
        sockets.forEach(s => s.emit('message', groupMessages));
    });
});
const server = http.listen(8080, function () {
    console.log("listening on *:8080");
});
//# sourceMappingURL=server.js.map